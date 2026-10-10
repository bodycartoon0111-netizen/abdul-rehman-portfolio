"use client";

import dynamic from "next/dynamic";

// 3D network is heavy (three.js) — lazy-load after initial paint so the
// hero text/CTAs appear instantly. Shows a soft placeholder meanwhile.
const GrowthNetwork = dynamic(() => import("@/components/hero/GrowthNetwork"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-[400px] animate-pulse rounded-3xl bg-gradient-to-br from-mint/30 via-surface to-paper md:h-[500px]"
    />
  ),
});

export function HeroVisual({ className }: { className?: string }) {
  return <GrowthNetwork className={className} />;
}
