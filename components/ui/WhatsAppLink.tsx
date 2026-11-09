"use client";

import type { ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * WhatsApp link that fires a GA4 `whatsapp_click` conversion event.
 * Firing is guarded by `trackEvent`, which no-ops when gtag is not loaded.
 * A client component, so server components can use it for their
 * WhatsApp links (server components cannot attach click handlers).
 */
export function WhatsAppLink({ href, className, children }: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(href)}
      className={className}
    >
      {children}
    </a>
  );
}
