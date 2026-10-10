"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface GrowthSignalCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. Keep small: 2–5. */
  maxTilt?: number;
}

/**
 * "Growth signal" interaction wrapper: a subtle pointer-reactive radial
 * light plus a gentle perspective tilt (max ~2–5°) and shadow shift.
 * Deliberately understated; fully disabled under reduced motion.
 */
export function GrowthSignalCard({
  children,
  className,
  maxTilt = 3.5,
}: GrowthSignalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 260,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 260,
    damping: 26,
  });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width;
    const ny = (event.clientY - rect.top) / rect.height;
    px.set(nx);
    py.set(ny);
    ref.current.style.setProperty("--glow-x", `${nx * 100}%`);
    ref.current.style.setProperty("--glow-y", `${ny * 100}%`);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={cn(
        "relative transition-shadow duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
        "hover:shadow-[var(--shadow-lift)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-[var(--duration-base)] hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgb(191_232_211/0.35),transparent_70%)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
