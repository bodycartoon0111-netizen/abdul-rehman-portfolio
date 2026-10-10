"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/navigation/MobileNav";
import { BRAND_NAME } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-4 rounded-pill border bg-white/80 backdrop-blur-xl",
            "transition-[padding,box-shadow,border-color,background-color] duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
            scrolled
              ? "border-line py-2.5 pl-5 pr-2.5 shadow-[var(--shadow-soft)]"
              : "border-white/60 py-3.5 pl-6 pr-3.5 shadow-none",
          )}
        >
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.location.reload();
              }
            }}
            className="flex items-center gap-2.5"
            aria-label={`${BRAND_NAME} — home`}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-pill bg-pine text-sm font-extrabold tracking-tight text-white"
            >
              AR
            </span>
            <span className="text-base font-extrabold tracking-tight">
              {BRAND_NAME}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors",
                      active
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-pill bg-mint/70"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button
              href="/contact"
              size="md"
              magnetic
              onClick={() => trackEvent("cta_click", { location: "header" })}
            >
              Start a Project
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-white/70 text-ink md:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-3.5 rounded bg-current" />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileNav
            links={[...NAV_LINKS]}
            onClose={() => {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
