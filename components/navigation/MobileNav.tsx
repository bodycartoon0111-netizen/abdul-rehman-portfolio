"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BRAND_WHATSAPP_LINK } from "@/lib/seo";
import { trackEvent, trackOutboundClick } from "@/lib/analytics";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
  onClose: () => void;
}

/**
 * Fullscreen mobile menu overlay: staggered link entrance, Escape to close,
 * body scroll lock, and focus moved into the panel on open.
 */
export function MobileNav({ links, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex flex-col bg-paper/95 backdrop-blur-2xl md:hidden"
    >
      <div className="flex items-center justify-between px-5 pt-7">
        <span className="text-base font-extrabold tracking-tight">
          Menu
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-surface text-xl leading-none"
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
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.08 + index * 0.07,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 + links.length * 0.07, duration: 0.45 }}
          className="mt-10"
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
            }}
            className="mt-4 block text-center text-sm font-semibold text-muted"
          >
            Prefer chat? Message on WhatsApp
          </a>
        </motion.div>
      </nav>
    </motion.div>
  );
}
