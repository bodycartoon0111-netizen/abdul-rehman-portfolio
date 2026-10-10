"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

/** Card accent per project (light-theme friendly). */
const ACCENTS: Record<string, { from: string; to: string; chip: string }> = {
  "ecofold-packaging": { from: "#d8f3dc", to: "#95d5b2", chip: "#1b4332" },
  zproperty: { from: "#caf0f8", to: "#90e0ef", chip: "#0b3d2e" },
  "calculadora-matematica": { from: "#e9d8fd", to: "#c4b5fd", chip: "#3b2d6b" },
  avexent: { from: "#d0f4de", to: "#74c69d", chip: "#14532d" },
  "digital-clause": { from: "#fef3c7", to: "#fcd34d", chip: "#5c3d0a" },
  thekedar: { from: "#ffe5d9", to: "#ffb997", chip: "#5c2e0a" },
};

function ProjectCard({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  if (!project) return null;
  const accent = ACCENTS[project.slug] ?? { from: "#e5e7eb", to: "#cbd5e1", chip: "#1b4332" };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 7, ry: px * 9 });
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      aria-label={`${project.name} — ${project.tagline}`}
      className="group block [perspective:1200px]"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setTilt({ rx: 0, ry: 0 });
        }}
        className="overflow-hidden rounded-2xl border border-line bg-paper transition-shadow duration-300 group-hover:shadow-2xl"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: hovered ? "transform 0.08s linear" : "transform 0.4s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Visual: original brand logo, large and centered */}
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-white px-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{ background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)` }}
          />
          <span
            className="absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            style={{ backgroundColor: accent.chip }}
          >
            {project.industry}
          </span>
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={320}
            height={160}
            className="relative max-h-28 w-auto max-w-[70%] object-contain drop-shadow-lg transition-transform duration-700 ease-out group-hover:scale-110 md:max-h-32"
          />
        </div>
        {/* Meta */}
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <h3 className="text-xl font-extrabold text-ink">{project.name}</h3>
            <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-ink">{project.tagline}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
              {project.services.join(" · ")}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-pine transition-all group-hover:border-pine group-hover:bg-pine group-hover:text-white"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Selected work grid: 6 project cards with tilt, zoom, custom cursor hook. */
export default function SelectedWork() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Work that's live, not mockups"
          lede="Every project below is a real website, operating right now. Click through for the story behind each build."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProjectCard slug={p.slug} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-block rounded-full border border-line px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-pine hover:text-pine"
          >
            View all work
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
