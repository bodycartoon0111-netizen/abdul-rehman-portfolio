"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatProps {
  /** Target numeric value. */
  value: number;
  /** Text shown before the number (e.g. "+"). */
  prefix?: string;
  /** Text shown after the number (e.g. "%", "x"). */
  suffix?: string;
  label: string;
  /** Decimal places to display. */
  decimals?: number;
  className?: string;
}

/**
 * Animated counter stat. Counts up when scrolled into view;
 * renders a static value when reduced motion is preferred.
 * Uses IntersectionObserver + requestAnimationFrame (1.6s, ease-out)
 * instead of framer-motion's animate/useInView.
 *
 * NOTE: only pass values that are real and verified — never invent stats.
 */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  className,
}: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Reduced-motion users get the final value immediately — no animation needed.
  const [display, setDisplay] = useState<number>(() =>
    prefersReducedMotion() ? value : 0,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1600);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.15, rootMargin: "0px 0px -64px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className={cn("text-center sm:text-left", className)}>
      <p className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl tabular-nums">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
    </div>
  );
}
