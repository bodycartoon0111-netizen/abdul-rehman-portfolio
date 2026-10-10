"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-64px" });
  // Reduced-motion users get the final value immediately — no animation needed.
  const [display, setDisplay] = useState<number>(() =>
    prefersReducedMotion() ? value : 0,
  );

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

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
