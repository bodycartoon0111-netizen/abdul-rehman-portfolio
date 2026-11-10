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
  // Defer the Three.js chunk until the browser is idle (2.5s at most).
  // The network is decorative, so it must not compete with the hero
  // text (LCP) for bandwidth and main-thread time on mobile.
  // The placeholder above is exactly the loaded canvas height
  // (h-[340px] md:h-[420px], as passed by the homepage), so the swap
  // causes no layout shift.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(t);
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
