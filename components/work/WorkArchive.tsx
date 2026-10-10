"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

interface WorkArchiveProps {
  projects: Project[];
}

/** Client-side industry filter for the portfolio archive. */
export default function WorkArchive({ projects }: WorkArchiveProps) {
  const industries = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.industry)))],
    [projects]
  );
  const [active, setActive] = useState("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.industry === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by industry">
        {industries.map((ind) => (
          <button
            key={ind}
            type="button"
            onClick={() => setActive(ind)}
            aria-pressed={active === ind}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === ind
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}
            data-cursor="view"
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-48 items-center justify-center bg-white px-10">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={280}
                height={140}
                className="max-h-28 w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
                {project.industry}
              </p>
              <h2 className="mt-2 text-xl font-bold text-neutral-900">
                <Link href={`/work/${project.slug}`} className="transition group-hover:underline">
                  {project.name}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                {project.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="cursor-default rounded-full bg-mint/40 px-2.5 py-1 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine hover:text-white hover:shadow-[0_6px_16px_-6px_rgba(30,58,46,0.5)]">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900"
                aria-label={`Read the ${project.name} case study`}
              >
                Read case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-neutral-600">No projects in this industry yet.</p>
      )}
    </div>
  );
}
