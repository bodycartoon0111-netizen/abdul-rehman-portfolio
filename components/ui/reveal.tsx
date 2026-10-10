"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical offset in px for the entrance. */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  as?: "div" | "section" | "span";
}

/**
 * Scroll-triggered reveal: fades + rises once when entering the viewport.
 * Renders statically (no animation) under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag =
    as === "section" ? motion.section : as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
