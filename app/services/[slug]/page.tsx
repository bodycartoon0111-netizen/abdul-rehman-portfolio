import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { getServiceDetail } from "@/data/service-details";
import { projects } from "@/data/projects";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: { absolute: detail.metaTitle },
    description: detail.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      type: "website",
      url: absoluteUrl(`/services/${slug}`),
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) notFound();

  const relatedProjects = projects.filter(
    (p) => p.relatedServices.includes(slug) || p.services.includes(slug)
  );
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd data={buildServiceJsonLd(service.name, detail.metaDescription, slug)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${slug}` },
        ])}
      />
      <JsonLd
        data={buildFaqPageJsonLd(
          service.faqs.map((f) => ({ question: f.q, answer: f.a }))
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Service</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          {service.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-neutral-700">{service.tagline}</p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{service.problem}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-neutral-900 px-8 py-3.5 text-center font-semibold text-white transition hover:bg-neutral-700"
          >
            Discuss this service
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-neutral-300 px-8 py-3.5 text-center font-semibold text-neutral-900 transition hover:border-neutral-900"
          >
            See related work
          </Link>
        </div>
      </header>

      {/* Problem */}
      <section aria-labelledby="problem-heading" className="mt-16 max-w-4xl">
        <h2 id="problem-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          The problem it solves
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {detail.problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section aria-labelledby="solution-heading" className="mt-16 max-w-4xl">
        <h2 id="solution-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          The solution
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{service.solution}</p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What&apos;s included
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3 rounded-2xl bg-neutral-50 p-5 text-neutral-700">
              <span aria-hidden="true" className="mt-0.5 font-bold text-neutral-900">✓</span>
              <span className="leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Strategy */}
      <section aria-labelledby="strategy-heading" className="mt-16 max-w-4xl">
        <h2 id="strategy-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Strategy
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{detail.strategy}</p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-neutral-700">
          {detail.strategyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="mt-16">
        <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Process
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {detail.process.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Technology */}
      <section aria-labelledby="tech-heading" className="mt-16 max-w-4xl">
        <h2 id="tech-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Technology
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {service.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Ideal client */}
      <section aria-labelledby="ideal-heading" className="mt-16 max-w-4xl rounded-3xl bg-neutral-50 p-8 sm:p-10">
        <h2 id="ideal-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Who this is for
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{service.idealFor}</p>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mt-16 max-w-3xl">
        <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-neutral-200">
          {service.faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-neutral-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span aria-hidden="true" className="text-neutral-500 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related work */}
      {relatedProjects.length > 0 && (
        <section aria-labelledby="related-work-heading" className="mt-16">
          <h2 id="related-work-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
            Related work
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p) => (
              <article
                key={p.slug}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
                  {p.industry}
                </p>
                <h3 className="mt-2 text-lg font-bold text-neutral-900">
                  <Link href={`/work/${p.slug}`} className="transition group-hover:underline">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.tagline}</p>
                <Link
                  href={`/work/${p.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900"
                >
                  Read case study <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Other services */}
      <section aria-labelledby="other-services-heading" className="mt-16">
        <h2 id="other-services-heading" className="text-2xl font-bold tracking-tight text-neutral-900">
          Other services
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/services"
            className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            View all 10 services
          </Link>
        </div>
      </section>

      <div className="mt-20">
        <CtaBand
          title={`Ready to talk about ${service.name}?`}
          description="Tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
