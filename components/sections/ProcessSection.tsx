"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    name: "Discover",
    body: "We map your market, your competitors, and the search demand you can actually win — before anything is built or spent.",
  },
  {
    name: "Strategy",
    body: "One growth plan: which channels, which pages, which campaigns — and the exact numbers that will define success.",
  },
  {
    name: "Build",
    body: "Design, development, and tracking instrumented from day one. No 'we'll add analytics later' — later never comes.",
  },
  {
    name: "Launch",
    body: "Ship, submit, switch on: sitemaps, Search Console, ad accounts, automations — everything verified live.",
  },
  {
    name: "Optimize",
    body: "Read the data, double down on winners, cut losers. This is where growth compounds instead of plateauing.",
  },
];

/**
 * 5-step process with an animated SVG progress line driven by scroll.
 * Horizontal on desktop, vertical on mobile.
 */
export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progress = STEPS.length > 1 ? active / (STEPS.length - 1) : 0;

  useEffect(() => {
    const els = stepRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A process you can follow along with"
          lede="No black box. You'll always know what stage we're in and what happens next."
          align="center"
        />

        <div className="relative mt-14 md:mt-20">
          {/* Desktop: horizontal SVG progress line */}
          <svg
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 hidden h-2 w-full md:block"
          >
            <line x1="0" y1="4" x2="1000" y2="4" stroke="var(--color-line)" strokeWidth="8" strokeLinecap="round" />
            <line
              x1="0" y1="4" x2="1000" y2="4"
              stroke="var(--color-pine)" strokeWidth="8" strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1 - progress}
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>

          {/* Mobile: vertical SVG progress line (through the node centers) */}
          <svg
            viewBox="0 0 8 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute bottom-0 left-7 top-0 w-2 md:hidden"
          >
            <line x1="4" y1="0" x2="4" y2="1000" stroke="var(--color-line)" strokeWidth="8" strokeLinecap="round" />
            <line
              x1="4" y1="0" x2="4" y2="1000"
              stroke="var(--color-pine)" strokeWidth="8" strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1 - progress}
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>

          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {STEPS.map((step, i) => {
              const isActive = i <= active;
              return (
                <li key={step.name}>
                  <Reveal delay={i * 0.06}>
                    <div
                      ref={(el) => {
                        stepRefs.current[i] = el;
                      }}
                      className="flex gap-5 md:flex-col md:gap-0"
                    >
                      <span
                        aria-hidden="true"
                        className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black transition-all duration-500 md:mb-8 md:-mt-6 ${
                          isActive
                            ? "border-pine bg-pine text-white shadow-lg"
                            : "border-line bg-paper text-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className={`text-lg font-extrabold ${isActive ? "text-ink" : "text-muted"}`}>
                          {step.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
