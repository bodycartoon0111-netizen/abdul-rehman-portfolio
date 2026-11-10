"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// 3D network is heavy (three.js) — lazy-load after initial paint so the
// hero text/CTAs appear instantly. Shows a soft placeholder meanwhile.
const GrowthNetwork = dynamic(() => import("@/components/hero/GrowthNetwork"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-[340px] animate-pulse rounded-3xl bg-gradient-to-br from-mint/30 via-surface to-paper md:h-[420px]"
    />
  ),
});

export function HeroVisual({ className }: { className?: string }) {
  // Start the Three.js network only after the page has fully loaded,
  // and then only when the browser is idle. The network is decorative,
  // so it must not compete with the hero text (LCP) for bandwidth and
  // main-thread time on mobile. The placeholder above is exactly the
  // loaded canvas height (h-[340px] md:h-[420px], as passed by the
  // homepage), so the swap causes no layout shift.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // Load first, idle second: the heavy Three.js chunk must stay out
    // of the LCP window entirely — the hero text paints first, and
    // the network appears afterwards in the same reserved space.
    let cancelled = false;
    const start = (): void => {
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      };
      if (w.requestIdleCallback) {
        w.requestIdleCallback(() => { if (!cancelled) setReady(true); }, { timeout: 3000 });
        return;
      }
      window.setTimeout(() => { if (!cancelled) setReady(true); }, 1500);
    };
    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }
    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
    };
  }, []);

  if (!ready) {
    return (
      <div
        aria-hidden="true"
        className="h-[340px] animate-pulse rounded-3xl bg-gradient-to-br from-mint/30 via-surface to-paper md:h-[420px]"
      />
    );
  }
  return <GrowthNetwork className={className} />;
}
