"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

/** Interactive services explorer: left nav, right dynamic detail panel. */
export default function ServicesExplorer() {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  if (!active) return null;

  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Ten services. One growth system."
          lede="Marketing and technology under one roof — pick what you need, combine what compounds."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Mobile: native dropdown (reliable on all devices) */}
          <div className="lg:hidden">
            <label htmlFor="service-select" className="sr-only">
              Choose a service
            </label>
            <select
              id="service-select"
              value={active.slug}
              onChange={(e) => setActiveSlug(e.target.value)}
              className="w-full appearance-none rounded-xl border border-pine bg-pine px-5 py-4 pr-12 text-sm font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-pine/30"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1.25rem center",
              }}
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug} className="bg-white text-ink">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: service nav tabs */}
          <Reveal className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div role="tablist" aria-label="Services" className="flex flex-col gap-2">
              {services.map((s) => {
                const isActive = s.slug === active.slug;
                return (
                  <button
                    key={s.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${s.slug}`}
                    id={`service-tab-${s.slug}`}
                    onClick={() => setActiveSlug(s.slug)}
                    className={`flex shrink-0 items-center justify-between gap-3 rounded-xl border px-5 py-3.5 text-left text-sm font-bold transition-all ${
                      isActive
                        ? "border-pine bg-pine text-white shadow-lg"
                        : "border-line bg-paper text-ink hover:border-pine/50"
                    }`}
                  >
                    {s.name}
                    <span aria-hidden="true" className={isActive ? "text-mint" : "text-muted"}>
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Right: dynamic panel */}
          <Reveal delay={0.08}>
            <article
              key={active.slug}
              id={`service-panel-${active.slug}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${active.slug}`}
              aria-live="polite"
              className="rounded-3xl border border-line bg-paper p-8 md:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">
                {active.name}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink md:text-4xl">
                {active.tagline}
              </h3>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                    The problem
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">
                    {active.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                    How I solve it
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">
                    {active.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                  What you get
                </h4>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {active.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <span aria-hidden="true" className="mt-0.5 font-bold text-pine">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {active.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-ink/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink/90">
                <span className="font-bold text-ink">Ideal for: </span>
                {active.idealFor}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?service=${active.slug}`}
                  className="rounded-full bg-pine px-7 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
                >
                  Discuss this service
                </Link>
                <Link
                  href={`/services/${active.slug}`}
                  className="rounded-full border border-line px-7 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Full details
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
