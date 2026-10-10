"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BRAND_WHATSAPP_LINK } from "@/lib/seo";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary with a premium light treatment and a
 * user-initiated retry.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Route error:", error);
    }
  }, [error]);

  return (
    <main className="container-x section-pad">
      <div className="mx-auto max-w-xl rounded-xl border border-line bg-surface p-10 text-center shadow-[var(--shadow-card)] sm:p-14">
        <p className="eyebrow justify-center">Something went wrong</p>
        <h1 className="h1 mt-4">This page hit a snag</h1>
        <p className="mt-4 leading-relaxed text-muted">
          An unexpected error interrupted this page. Try loading it again —
          or reach out directly and we&apos;ll sort it out together.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} magnetic>
            Try again
          </Button>
          <Button href="/" variant="ghost">
            Back to home
          </Button>
        </div>
        <a
          href={BRAND_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-semibold text-pine hover:underline"
        >
          Report this on WhatsApp
        </a>
      </div>
    </main>
  );
}
