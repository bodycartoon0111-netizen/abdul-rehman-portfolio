"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertical offset in px for the entrance. */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  as?: "div" | "section" | "span";
}

/**
 * Scroll-triggered reveal: fades + rises once when entering the viewport.
 * Uses IntersectionObserver + a CSS transition (see .reveal in globals.css)
 * instead of framer-motion, so no animation library is in the critical bundle.
 * Renders statically (no animation) under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as === "section" ? "section" : as === "span" ? "span" : "div";

  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      style={{ "--reveal-y": `${y}px`, transitionDelay: `${delay}s` } as CSSProperties}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
