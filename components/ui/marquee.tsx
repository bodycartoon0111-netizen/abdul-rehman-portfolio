"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Duration of one full loop in seconds. */
  duration?: number;
  ariaLabel?: string;
}

/**
 * CSS-driven infinite marquee. Content is duplicated for a seamless loop,
 * pauses on hover, and collapses to a static wrap under reduced motion.
 */
export function Marquee({
  children,
  className,
  duration = 32,
  ariaLabel,
}: MarqueeProps) {
  return (
    <div
      className={cn("marquee overflow-hidden", className)}
      role="marquee"
      aria-label={ariaLabel}
    >
      <div
        className="marquee-track items-center gap-8 pr-8"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        aria-hidden={false}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
