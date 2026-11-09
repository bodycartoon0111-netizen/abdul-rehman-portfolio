"use client";

/**
 * Tiny analytics helper.
 * Sends events to gtag when present; falls back to a dev-only console
 * message so nothing ever throws in production. Respects Do Not Track.
 */

export type AnalyticsEventName =
  | "cta_click"
  | "form_submit"
  | "service_select"
  | "case_study_view"
  | "outbound_click"
  | "generate_lead"
  | "whatsapp_click";

export type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function isTrackingAllowed(): boolean {
  if (typeof window === "undefined") return false;
  const dnt =
    window.navigator.doNotTrack ??
    (window.navigator as Navigator & { msDoNotTrack?: string }).msDoNotTrack;
  return dnt !== "1" && dnt !== "yes";
}

export function trackEvent(
  name: AnalyticsEventName,
  params: AnalyticsParams = {},
): void {
  if (!isTrackingAllowed()) return;

  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }
    // Fallback: only log in development so production stays silent.
    if (process.env.NODE_ENV === "development") {
      console.debug(`[analytics] ${name}`, params);
    }
  } catch {
    // Analytics must never break the page.
  }
}

/** Convenience: bind an outbound link click to an `outbound_click` event. */
export function trackOutboundClick(url: string): void {
  trackEvent("outbound_click", { destination: url });
}

/** Convenience: fire a `generate_lead` conversion event. */
export function trackGenerateLead(method: string): void {
  trackEvent("generate_lead", { method });
}

/** Convenience: bind a WhatsApp link click to a `whatsapp_click` event. */
export function trackWhatsAppClick(url: string): void {
  trackEvent("whatsapp_click", { destination: url });
}
