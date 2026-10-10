"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Pull the button subtly toward the cursor on hover. */
  magnetic?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-pine text-white hover:bg-pine-deep shadow-[var(--shadow-soft)] border border-transparent",
  ghost:
    "bg-transparent text-ink border border-line hover:border-pine/40 hover:bg-white/60",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const MAGNETIC_STRENGTH = 0.28;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    if (!magnetic || reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * MAGNETIC_STRENGTH);
    y.set((event.clientY - (rect.top + rect.height / 2)) * MAGNETIC_STRENGTH);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-bold tracking-tight",
    "transition-[background-color,border-color,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-out-soft)]",
    "active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const motionProps = magnetic
    ? {
        style: { x: sx, y: sy },
        onMouseMove: handleMove,
        onMouseLeave: handleLeave,
      }
    : {};

  const innerClassName = cn(
    "inline-flex items-center justify-center gap-2",
    classes,
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label={ariaLabel}>
        <motion.span
          {...motionProps}
          ref={ref as React.Ref<HTMLSpanElement>}
          className={innerClassName}
          data-cursor="cta"
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  return (
    <motion.button
      type="button"
      {...motionProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      className={innerClassName}
      data-cursor="cta"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
