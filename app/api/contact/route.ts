import { NextResponse } from "next/server";
import { submitContact } from "@/lib/actions";
import { contactSchema } from "@/lib/validation";

/**
 * POST /api/contact — thin JSON alternative to the server action.
 * Accepts a JSON body, runs the same validation + honeypot + email logic.
 */

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400, headers: rateLimitHeaders() }
    );
  }

  // Shape-check before handing to the action (the action re-validates).
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422, headers: rateLimitHeaders() }
    );
  }

  const result = await submitContact(parsed.data);
  return NextResponse.json(result, {
    status: result.success ? 200 : 429,
    headers: rateLimitHeaders(),
  });
}

function rateLimitHeaders(): Record<string, string> {
  // In-memory stub limits: 5 submissions / 10 minutes per client.
  return {
    "X-RateLimit-Limit": "5",
    "X-RateLimit-Window": "600",
    "Retry-After": "600",
  };
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Use POST with a JSON body to submit the contact form." },
    { status: 405 }
  );
}
