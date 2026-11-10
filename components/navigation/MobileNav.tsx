"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BRAND_WHATSAPP_LINK } from "@/lib/seo";
import {
  trackEvent,
  trackOutboundClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
  onClose: () => void;
}

/**
 * Full-screen mobile menu. Opening animations are CSS keyframes
 * (.mobilenav-panel / .mobilenav-item / .mobilenav-cta in globals.css)
 * instead of framer-motion, with the same timings as before.
 * Closing unmounts immediately (no exit fade).
 */
export function MobileNav({ links, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="mobilenav-panel fixed inset-0 z-[60] flex flex-col bg-paper/95 backdrop-blur-2xl md:hidden"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-base font-extrabold tracking-tight">
          Menu
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-surface text-xl"
        >
          ×
        </button>
      </div>
      <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
            return (
              <li
                key={link.href}
                className="mobilenav-item"
                style={{ animationDelay: `${0.08 + index * 0.07}s` }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-lg py-3 text-4xl font-extrabold tracking-tight transition-colors",
                    active ? "text-pine" : "text-ink hover:text-pine",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="mobilenav-cta mt-10"
          style={{ animationDelay: `${0.08 + links.length * 0.07}s` }}
        >
          <Button href="/contact" size="lg" className="w-full" onClick={onClose}>
            Start a Project
          </Button>
          <a
            href={BRAND_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("cta_click", { location: "mobile_menu" });
              trackOutboundClick(BRAND_WHATSAPP_LINK);
              trackWhatsAppClick(BRAND_WHATSAPP_LINK);
            }}
            className="mt-4 block text-center text-sm font-semibold text-muted"
          >
            Prefer chat? Message on WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}
