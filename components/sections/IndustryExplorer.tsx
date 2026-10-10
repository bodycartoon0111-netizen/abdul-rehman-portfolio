"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/data/industries";
import { servicesBySlug } from "@/data/services";
import { projectsBySlug } from "@/data/projects";

/** Interactive industry selector → problem, recommended services, solution, related project. */
export default function IndustryExplorer() {
  const [activeSlug, setActiveSlug] = useState(industries[0]?.slug ?? "");
  const active = industries.find((i) => i.slug === activeSlug) ?? industries[0];

  if (!active) return null;
  const relatedProject = active.relatedProject ? projectsBySlug[active.relatedProject] : undefined;

  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Growth looks different in every industry"
          lede="Pick yours — see the typical problems, the services that fix them, and related work."
          align="center"
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Industries">
            {industries.map((ind) => {
              const isActive = ind.slug === active.slug;
              return (
                <button
                  key={ind.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSlug(ind.slug)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                    isActive
                      ? "border-pine bg-pine text-white shadow-md"
                      : "border-line bg-paper text-ink hover:border-pine/50"
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
          <article
            key={active.slug}
            role="tabpanel"
            aria-live="polite"
            className="rounded-3xl border border-line bg-paper p-8 md:p-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">
              {active.name}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-ink md:text-3xl">
              The problem I usually find
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink md:text-base">
              {active.problem}
            </p>

            <h4 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-muted">
              Recommended services
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {active.recommendedServices.map((slug) => {
                const svc = servicesBySlug[slug];
                if (!svc) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="rounded-full bg-mint/40 px-4 py-2 text-sm font-bold text-pine transition-colors hover:bg-mint"
                  >
                    {svc.name}
                  </Link>
                );
              })}
            </div>

            <h4 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-muted">
              The approach
            </h4>
            <p className="mt-4 text-[15px] leading-relaxed text-ink md:text-base">
              {active.solution}
            </p>

            {relatedProject ? (
              <Link
                href={`/work/${relatedProject.slug}`}
                data-cursor="view"
                className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-pine"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    Related project
                  </p>
                  <p className="mt-1.5 text-lg font-extrabold text-ink">
                    {relatedProject.name}
                  </p>
                  <p className="text-sm text-muted">{relatedProject.tagline}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine text-white"
                >
                  →
                </span>
              </Link>
            ) : (
              <p className="mt-8 rounded-2xl border border-dashed border-line bg-surface p-5 text-sm text-muted">
                No dedicated case study in {active.name} yet —{" "}
                <Link href="/contact" className="font-bold text-pine underline">
                  yours could be the first
                </Link>
                .
              </p>
            )}
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
