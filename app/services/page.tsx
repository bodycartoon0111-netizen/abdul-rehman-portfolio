import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { absoluteUrl, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Services — SEO, Paid Ads, Web Dev & AI Automation | Abdul Rehman",
  },
  description:
    "Explore 10 growth services: SEO, Google Ads, Meta Ads, web & app development, custom software, WordPress, Shopify, and AI automation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — SEO, Paid Ads, Web Dev & AI Automation | Abdul Rehman",
    description:
      "Explore 10 growth services: SEO, Google Ads, Meta Ads, web & app development, custom software, WordPress, Shopify, and AI automation.",
    url: "/services",
    type: "website",
  },
  keywords: [
    "SEO services",
    "Google Ads management",
    "Meta Ads services",
    "web development services",
    "AI automation services",
    "performance marketing services",
  ],
};

const combinations = [
  {
    title: "SEO + Content-ready development",
    description:
      "A technically sound website built to rank from day one — clean architecture, fast pages, and schema baked in.",
  },
  {
    title: "Paid ads + Conversion-focused landing pages",
    description:
      "Google and Meta campaigns pointed at pages designed to convert, so ad spend turns into enquiries instead of bounces.",
  },
  {
    title: "Custom software + AI automation",
    description:
      "Internal tools that remove repetitive work — lead routing, reporting, and follow-ups handled while your team focuses on customers.",
  },
  {
    title: "Shopify / WordPress + Performance marketing",
    description:
      "A store or site your team can manage, paired with ongoing campaigns that keep qualified traffic flowing.",
  },
];

export default function ServicesPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services by Abdul Rehman",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": absoluteUrl(`/services/${s.slug}`),
        name: s.name,
        url: absoluteUrl(`/services/${s.slug}`),
        description: s.tagline,
        provider: {
          "@type": "Person",
          name: "Abdul Rehman",
          url: siteUrl(),
        },
        areaServed: "Worldwide",
      },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd data={itemListLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">
          What I do
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Services engineered for growth, not vanity metrics
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Ten services across search, paid media, development, and automation. Each one is
          delivered as a complete engagement — strategy, execution, and measurement — so you
          always know what the work is doing for your business.
        </p>
      </header>

      {/* Explorer grid */}
      <section aria-labelledby="services-grid-heading" className="mt-14">
        <h2 id="services-grid-heading" className="sr-only">All services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-[0_20px_50px_-15px_rgba(30,58,46,0.25)]"
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
              <h3 className="relative text-xl font-bold text-ink transition-colors duration-300 group-hover:text-pine">
                <Link href={`/services/${service.slug}`} className="transition group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                  {service.name}
                </Link>
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.tagline}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-pine"
                aria-label={`Learn more about ${service.name}`}
              >
                Explore service{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-gold"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* How engagements combine */}
      <section aria-labelledby="combine-heading" className="mt-20">
        <h2 id="combine-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          How engagements combine
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Most clients need more than one discipline. These are the combinations that come up
          most often — each planned as one coherent engagement, not separate silos.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {combinations.map((c) => (
            <div key={c.title} className="rounded-2xl bg-neutral-50 p-7">
              <h3 className="text-lg font-bold text-neutral-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="services-faq-heading" className="mt-20 max-w-3xl">
        <h2 id="services-faq-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Services FAQ
        </h2>
        <div className="mt-8 divide-y divide-neutral-200">
          {faqs.map((faq) => (
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

      <div className="mt-20">
        <CtaBand />
      </div>
    </main>
  );
}
