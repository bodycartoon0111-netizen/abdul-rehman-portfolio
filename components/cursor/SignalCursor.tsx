"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor]';

/**
 * Unique premium arrow cursor (desktop only).
 * - Classic arrow silhouette with a gold spine accent: familiar yet distinctive.
 * - Soft aura glow trailing behind with spring lag.
 * - Micro-trail: two fading dots following at staggered spring speeds.
 * - Hover: arrow tilts, fills gold, glow intensifies.
 * - Press: satisfying squash.
 * - Disabled on touch devices and under prefers-reduced-motion.
 */
export function SignalCursor() {
  const [enabled] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Aura + trail lag behind at different rates for layered depth.
  const auraX = useSpring(x, { stiffness: 200, damping: 28, mass: 0.8 });
  const auraY = useSpring(y, { stiffness: 200, damping: 28, mass: 0.8 });
  const trail1X = useSpring(x, { stiffness: 350, damping: 32, mass: 0.5 });
  const trail1Y = useSpring(y, { stiffness: 350, damping: 32, mass: 0.5 });
  const trail2X = useSpring(x, { stiffness: 220, damping: 30, mass: 0.6 });
  const trail2Y = useSpring(y, { stiffness: 220, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("signal-cursor-active");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("signal-cursor-active");
    };
  }, [enabled, x, y]);

  if (!enabled || reduceMotion) return null;

  return (
    <>
      {/* Ambient aura */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[98]"
        style={{ x: auraX, y: auraY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: hovering ? 64 : 44,
            height: hovering ? 64 : 44,
            opacity: hovering ? 0.85 : 0.5,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: hovering
              ? "radial-gradient(circle, rgba(212, 175, 106, 0.5) 0%, rgba(212, 175, 106, 0.15) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(30, 58, 46, 0.28) 0%, rgba(169, 232, 199, 0.18) 50%, transparent 70%)",
            filter: "blur(5px)",
          }}
        />
      </motion.div>

      {/* Micro-trail dots */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{ x: trail2X, y: trail2Y }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 5,
            height: 5,
            backgroundColor: hovering ? "#d4af6a" : "#a9e8c7",
            opacity: 0.55,
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{ x: trail1X, y: trail1Y }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 3.5,
            height: 3.5,
            backgroundColor: hovering ? "#a87e2a" : "#2f5c46",
            opacity: 0.7,
          }}
        />
      </motion.div>

      {/* Arrow with gold spine accent */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x, y }}
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          animate={{
            scale: pressed ? 0.82 : hovering ? 1.18 : 1,
            rotate: hovering ? -8 : 0,
          }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{
            filter: hovering
              ? "drop-shadow(0 0 10px rgba(212, 175, 106, 0.55))"
              : "drop-shadow(0 2px 6px rgba(16, 25, 21, 0.35))",
            transformOrigin: "3px 3px",
          }}
        >
          <defs>
            <linearGradient id="arrow-body" x1="5" y1="3" x2="17" y2="21" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={hovering ? "#d4af6a" : "#2f5c46"} />
              <stop offset="100%" stopColor={hovering ? "#a87e2a" : "#1b4332"} />
            </linearGradient>
          </defs>
          {/* Main arrow body */}
          <path
            d="M6 4 L6 20.5 L11 15.8 L13.6 21.8 L16.6 20.4 L14 14.6 L19.5 14.6 Z"
            fill="url(#arrow-body)"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Gold spine accent: the signature detail */}
          <path
            d="M7.8 6.2 L7.8 17.4"
            stroke={hovering ? "#fff8e6" : "#d4af6a"}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity={hovering ? 0.9 : 0.75}
          />
          {/* Tip highlight dot */}
          <circle cx="6" cy="4.6" r="1.4" fill={hovering ? "#fff8e6" : "#ffffff"} opacity="0.9" />
        </motion.svg>
      </motion.div>
    </>
  );
}
