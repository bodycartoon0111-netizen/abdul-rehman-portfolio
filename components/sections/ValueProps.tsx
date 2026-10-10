"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const PRINCIPLES = [
  {
    title: "Marketing + Technology",
    short: "One brain, both crafts",
    body: "Most marketers can't ship code. Most developers can't read a market. I do both — so a growth strategy never dies in the handoff between two people who don't speak the same language.",
  },
  {
    title: "Data Before Guesswork",
    short: "Evidence over opinions",
    body: "Every decision starts from Search Console, analytics, and ad data — not 'best practices' slides or gut feel. If the numbers disagree with the plan, the plan changes.",
  },
  {
    title: "Conversion Before Vanity Metrics",
    short: "Revenue over reach",
    body: "Traffic is cheap; customers aren't. I optimize for the metric that pays — enquiries, sales, signups — and treat impressions and clicks as what they are: means, not ends.",
  },
  {
    title: "Systems Before Shortcuts",
    short: "Assets over hacks",
    body: "No growth hacks, no rented tactics, no tricks that die with the next algorithm update. I build assets and automations that compound — rankings, content, pipelines.",
  },
];

/** Four working principles — stable cards, color change on hover, no layout shift. */
export default function ValueProps() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="Principles, not promises"
          lede="Four rules behind every project — the reason the work holds up after launch."
          align="center"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => {
            const isDark = hovered === null ? i === 0 : hovered === i;
            return (
            <Reveal key={p.title} delay={i * 0.07}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex h-full min-h-[320px] cursor-default flex-col rounded-2xl border p-7 text-left transition-colors duration-300 ${
                  isDark
                    ? "border-pine bg-pine text-white shadow-xl"
                    : "border-line bg-surface text-ink"
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-[0.24em] ${
                    isDark ? "text-mint" : "text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`mt-4 text-xl font-extrabold leading-snug ${
                    isDark ? "text-white" : "text-ink"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-2 text-sm font-semibold ${
                    isDark ? "text-mint" : "text-pine"
                  }`}
                >
                  {p.short}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isDark ? "text-white" : "text-ink"
                  }`}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
