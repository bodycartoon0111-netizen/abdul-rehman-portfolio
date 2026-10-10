"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const STAGES = [
  {
    name: "Technology",
    body: "It started with curiosity about how things work — computers, systems, the internet itself. The habit of taking things apart to understand them never left.",
  },
  {
    name: "Web Development",
    body: "Curiosity became craft: from first HTML pages to full applications in React and Next.js. Learning to build meant learning that anything on the web is changeable.",
  },
  {
    name: "SEO",
    body: "Building sites raised the real question: who finds them? Learning how search engines read, rank, and reward genuinely useful content turned development into discovery.",
  },
  {
    name: "Performance Marketing",
    body: "Discovery needed scale. Google and Meta ads — managed against revenue, not vanity metrics — taught the discipline of spending money only where it returns.",
  },
  {
    name: "Automation",
    body: "Scale exposed the bottleneck: repetitive work. AI and workflow automation now remove the busywork from marketing and sales — follow-up that never sleeps.",
  },
  {
    name: "Growth Systems",
    body: "Where it all compounds. Marketing, technology, and automation designed as one system — so each part makes the others stronger.",
  },
];

/**
 * Interactive journey timeline: SVG path with scroll-driven progress activation.
 */
export default function Timeline() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const progress = STAGES.length > 1 ? active / (STAGES.length - 1) : 0;

  useEffect(() => {
    const els = itemRefs.current.filter((el): el is HTMLLIElement => el !== null);
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLLIElement);
            if (idx >= 0) setActive((prev) => Math.max(prev, idx));
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* SVG track: straight vertical line, progress overlay.
          (Previously an S-curve — dots sit at fixed center positions, so a
          curving track misaligned them. Straight track = dots always on the line.) */}
      <svg
        viewBox="0 0 60 1200"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute bottom-0 left-[27px] top-0 h-full w-[60px] md:left-1/2 md:-translate-x-1/2"
      >
        <path
          d="M30,0 L30,1200"
          fill="none"
          stroke="#e3e8e1"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M30,0 L30,1200"
          fill="none"
          stroke="#1b4332"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>

      <ol className="relative space-y-14">
        {STAGES.map((stage, i) => {
          const isActive = i <= active;
          const left = i % 2 === 0;
          return (
            <li
              key={stage.name}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`relative flex pl-20 md:w-1/2 md:pl-0 ${
                left ? "md:pr-16" : "md:ml-auto md:pl-16"
              }`}
            >
              <Reveal delay={0.05} className="w-full">
                <div
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-7 hover:-translate-y-1 ${
                    isActive
                      ? "border-pine bg-surface shadow-lg hover:shadow-[0_20px_50px_-15px_rgba(30,58,46,0.3)]"
                      : "border-line bg-paper opacity-70 hover:border-pine/40 hover:opacity-100"
                  }`}
                >
                  {/* Animated gradient accent bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-pine via-gold to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  {/* Soft color wash on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-gold-pale/0 transition-all duration-500 group-hover:from-mint/20 group-hover:via-transparent group-hover:to-gold-pale/40"
                  />
                  <span
                    className={`relative text-xs font-black tracking-[0.24em] transition-colors duration-300 ${
                      isActive ? "text-pine group-hover:text-gold" : "text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-2 text-xl font-extrabold text-ink transition-colors duration-300 group-hover:text-pine">{stage.name}</h3>
                  <p className="relative mt-2.5 text-[15px] leading-relaxed text-ink">{stage.body}</p>
                </div>
              </Reveal>
              {/* Dots only on odd items (1, 3, 5) — even items (2, 4, 6) have no dot */}
              {i % 2 === 0 && (
              <span
                aria-hidden="true"
                className={`absolute left-[44px] top-7 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 transition-all duration-500 md:left-auto ${
                  left ? "md:-right-[13px]" : "md:-left-[13px]"
                } ${isActive ? "border-pine bg-pine shadow-[0_0_0_6px_rgba(27,67,50,0.18)]" : "border-line bg-paper"}`}
              >
                <span className={`h-2 w-2 rounded-full ${isActive ? "bg-white" : "bg-line"}`} />
              </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
