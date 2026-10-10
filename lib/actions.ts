"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactFormInput, type ContactResult } from "./validation";
import { sendContactNotification } from "./email";
import { services } from "@/data/services";

/**
 * Server action for the contact form.
 *
 * Pipeline: zod validation → honeypot check (silent success) → in-memory
 * rate limit → email via lib/email.ts → optional DB write when DATABASE_URL
 * is set (never fails the user on DB errors).
 */

// --- Rate limiting (in-memory; swap for Redis/Upstash in production) ---
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

async function getClientKey(): Promise<string> {
  try {
    const h = await headers();
    return (
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      h.get("x-real-ip")?.trim() ||
      "unknown"
    );
  } catch {
    return "unknown";
  }
}

async function persistSubmission(input: ContactFormInput): Promise<void> {
  try {
    // Optional persistence layer. db is null when DATABASE_URL is unset —
    // absence or failure is ignored so the user experience never depends
    // on the database.
    const { db } = await import("@/lib/db");
    if (!db) return;
    await db.contactSubmission.create({
      data: {
        name: input.name,
        email: input.email,
        company: input.company || null,
        website: input.website || null,
        service: input.service,
        budget: input.budget,
        message: input.message,
      },
    });
  } catch {
    // Swallowed intentionally: email is the source of truth for enquiries.
  }
}

export async function submitContact(input: ContactFormInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const errors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      (errors[key] ??= []).push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  const data = parsed.data;

  // Honeypot: pretend everything worked so bots learn nothing.
  if (data.company_website && data.company_website.trim().length > 0) {
    return {
      success: true,
      message: "Thanks — your message has been received. I'll reply within one business day.",
    };
  }

  const clientKey = await getClientKey();
  if (isRateLimited(clientKey)) {
    return {
      success: false,
      message: "Too many messages sent in a short time. Please wait a few minutes and try again.",
    };
  }

  const service = services.find((s) => s.slug === data.service);
  const emailResult = await sendContactNotification({
    name: data.name,
    email: data.email,
    company: data.company,
    website: data.website,
    service: data.service,
    serviceLabel: service?.name ?? data.service,
    budget: data.budget,
    message: data.message,
  });

  if (!emailResult.ok && emailResult.reason === "resend_not_configured") {
    // Email provider not wired up yet: log server-side, still acknowledge.
    console.warn("[contact] RESEND_API_KEY not set — enquiry from", data.email, "not emailed.");
  }

  await persistSubmission(data);

  return {
    success: true,
    message:
      "Thanks — your message has been received. I'll reply within one business day.",
  };
}
