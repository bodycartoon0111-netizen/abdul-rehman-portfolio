"use client";

import { useRef, type CSSProperties } from "react";
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

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    if (!magnetic || !ref.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const targetX =
      (event.clientX - (rect.left + rect.width / 2)) * MAGNETIC_STRENGTH;
    const targetY =
      (event.clientY - (rect.top + rect.height / 2)) * MAGNETIC_STRENGTH;
    ref.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  // CSS transition for the magnetic pull. It also keeps the 0.3s colour
  // transition the Tailwind classes provide, which a transform-only
  // transition rule would otherwise drop.
  const magneticStyle: CSSProperties | undefined = magnetic
    ? {
        transition:
          "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s, border-color 0.3s, color 0.3s",
      }
    : undefined;

  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={(el: HTMLAnchorElement | null) => {
          ref.current = el;
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        aria-label={ariaLabel}
        style={magneticStyle}
        className={sharedClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={(el: HTMLButtonElement | null) => {
        ref.current = el;
      }}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      style={magneticStyle}
      className={sharedClassName}
    >
      {children}
    </button>
  );
}
