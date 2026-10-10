import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectDetail } from "@/data/project-details";
import { services } from "@/data/services";
import { absoluteUrl, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) return {};
  return {
    title: { absolute: detail.metaTitle },
    description: detail.metaDescription,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      type: "article",
      url: absoluteUrl(`/work/${slug}`),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const detail = getProjectDetail(slug);
  if (!project || !detail) notFound();

  const serviceLinks = project.services
    .map((ss) => services.find((s) => s.name === ss))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.services.some((s) => project.services.includes(s))
    )
    .slice(0, 3);

  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`/work/${project.slug}`),
    name: project.name,
    description: detail.metaDescription,
    url: absoluteUrl(`/work/${project.slug}`),
    author: { "@type": "Person", name: "Abdul Rehman", url: siteUrl() },
    about: project.industry,
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd data={creativeWorkLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.name, path: `/work/${project.slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: project.name },
        ]}
      />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">
          Case study — {project.industry}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{project.tagline}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-8 py-3.5 font-semibold text-white transition hover:bg-neutral-700"
        >
          Visit live website <span aria-hidden="true">↗</span>
        </a>
      </header>

      {/* Snapshot */}
      <section aria-labelledby="snapshot-heading" className="mt-14">
        <h2 id="snapshot-heading" className="text-2xl font-bold tracking-tight text-neutral-900">
          Project snapshot
        </h2>
        <dl className="mt-6 grid gap-6 rounded-2xl bg-neutral-50 p-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Industry</dt>
            <dd className="mt-2 font-semibold text-neutral-900">{project.industry}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Services</dt>
            <dd className="mt-2 font-semibold text-neutral-900">
              {serviceLinks.length > 0
                ? serviceLinks.map((s, i) => (
                    <span key={s.slug}>
                      {i > 0 && ", "}
                      <Link href={`/services/${s.slug}`} className="underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900">
                        {s.name}
                      </Link>
                    </span>
                  ))
                : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Technology</dt>
            <dd className="mt-2 font-semibold text-neutral-900">{project.technologies.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Live link</dt>
            <dd className="mt-2 font-semibold text-neutral-900">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="break-all underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900">
                {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* Challenge */}
      <section aria-labelledby="challenge-heading" className="mt-14 max-w-4xl">
        <h2 id="challenge-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          The challenge
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{project.challenge}</p>
      </section>

      {/* Strategy */}
      <section aria-labelledby="strategy-heading" className="mt-14 max-w-4xl">
        <h2 id="strategy-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Strategy
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{project.solution}</p>
      </section>

      {/* Implementation */}
      <section aria-labelledby="implementation-heading" className="mt-14 max-w-4xl">
        <h2 id="implementation-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Implementation
        </h2>
        <ol className="mt-6 space-y-4">
          {detail.implementation.map((step, i) => (
            <li key={step.slice(0, 40)} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="leading-relaxed text-neutral-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Technology */}
      <section aria-labelledby="technology-heading" className="mt-14 max-w-4xl">
        <h2 id="technology-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Technology
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((t) => (
            <span key={t} className="cursor-default rounded-full border border-line bg-mint/40 px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-pine hover:bg-pine hover:text-white hover:shadow-[0_6px_16px_-6px_rgba(30,58,46,0.5)]">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Design decisions */}
      <section aria-labelledby="design-heading" className="mt-14 max-w-4xl">
        <h2 id="design-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Design decisions
        </h2>
        <ul className="mt-6 space-y-4">
          {detail.designDecisions.map((d) => (
            <li key={d.slice(0, 40)} className="flex gap-3 text-neutral-700">
              <span aria-hidden="true" className="mt-1 font-bold text-neutral-900">→</span>
              <span className="leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Outcome — truthful, no invented numbers */}
      <section aria-labelledby="outcome-heading" className="mt-14 max-w-4xl rounded-3xl bg-neutral-50 p-8 sm:p-10">
        <h2 id="outcome-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Outcome
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{project.outcome}</p>
      </section>

      {/* Live website button */}
      <div className="mt-14 text-center">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-10 py-4 text-lg font-semibold text-white transition hover:bg-neutral-700"
        >
          Visit {project.name} live <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-16">
          <h2 id="related-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
            Related projects
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p) => (
              <article key={p.slug} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">{p.industry}</p>
                <h3 className="mt-2 text-lg font-bold text-neutral-900">
                  <Link href={`/work/${p.slug}`} className="transition group-hover:underline">{p.name}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.tagline}</p>
                <Link href={`/work/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900">
                  Read case study <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="mt-20">
        <CtaBand
          title="Building something in this space?"
          description="If your project looks anything like this one, I'd like to hear about it. Tell me your goals and I'll reply with an honest plan."
        />
      </div>
    </main>
  );
}
