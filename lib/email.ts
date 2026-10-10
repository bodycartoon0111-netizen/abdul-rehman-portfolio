/**
 * Contact email delivery.
 *
 * Uses the Resend SDK only when RESEND_API_KEY is configured. The SDK is
 * imported dynamically so the build never breaks when `resend` is not
 * installed or the key is absent. Never throws raw errors to the caller.
 */
import type { Resend as ResendClient } from "resend";

export interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  serviceLabel: string;
  budget: string;
  message: string;
}

export type EmailSendResult = { ok: true } | { ok: false; reason: string };

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || "abdulrehmanasghar916@gmail.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactNotification(data: ContactEmailData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, reason: "resend_not_configured" };
  }

  let ResendCtor: typeof ResendClient;
  try {
    ({ Resend: ResendCtor } = await import("resend"));
  } catch {
    return { ok: false, reason: "resend_sdk_missing" };
  }

  const rows: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Website", data.website],
    ["Service", data.serviceLabel],
    ["Budget", data.budget],
  ];

  const detailsHtml = rows
    .filter(([, v]) => v && v.length > 0)
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#555;">${k}</td><td style="padding:6px 0;"><strong>${escapeHtml(v as string)}</strong></td></tr>`)
    .join("");

  const textBody = [
    `New contact form submission — abdulrehman portfolio`,
    ``,
    ...rows.filter(([, v]) => v && v.length > 0).map(([k, v]) => `${k}: ${v}`),
    ``,
    `Message:`,
    data.message,
  ].join("\n");

  try {
    const resend = new ResendCtor(apiKey);
    await resend.emails.send({
      from: `Portfolio Contact <${CONTACT_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],
      replyTo: data.email,
      subject: `New enquiry: ${data.serviceLabel} — ${data.name}`,
      text: textBody,
      html: [
        `<h2 style="font-family:sans-serif;">New contact form submission</h2>`,
        `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">${detailsHtml}</table>`,
        `<h3 style="font-family:sans-serif;margin-top:20px;">Message</h3>`,
        `<p style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>`,
      ].join(""),
    });
    return { ok: true };
  } catch {
    // Never leak provider internals to the client.
    return { ok: false, reason: "email_send_failed" };
  }
}
