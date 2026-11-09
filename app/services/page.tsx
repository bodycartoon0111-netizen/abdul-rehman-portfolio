import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { absoluteUrl, buildBreadcrumbJsonLd, buildPersonJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services Pakistan | SEO, Meta & Google Ads",
  },
  description:
    "Digital marketing services in Pakistan: SEO, Google & Meta Ads, web development and AI automation. Ten services, one Lahore consultant. Book a free audit.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing Services Pakistan | SEO, Meta & Google Ads",
    description:
      "Digital marketing services in Pakistan: SEO, Google & Meta Ads, web development and AI automation. Ten services, one Lahore consultant. Book a free audit.",
    url: "/services",
    type: "website",
  },
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
      "Internal tools that remove repetitive work — lead routing, reporting, and follow-ups handled while you focus on delivery.",
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
        provider: buildPersonJsonLd(),
                },
    })),
  };

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/"},
    { name: "Services", path: "/services"},
  ]);

  return (
    <>
      <JsonLd data={itemListLd} />
      <JsonLd data={breadcrumbLd} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
<span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">Digital Marketing Services in Pakistan</span> — SEO, Ads, Websites &amp; AI
            Automation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Services engineered for growth, not vanity metrics. Ten digital
            marketing services in Pakistan — SEO, Google Ads, Meta Ads, web
            development and AI automation — delivered by one consultant in
            Lahore. I am{" "}
            <Link
              href="/about"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Abdul Rehman
            </Link>
            , an{" "}
            <Link
              href="/"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              SEO consultant in Lahore
            </Link>
            , and every service below is strategy, execution and measurement
            from the same person — no hand-offs, no account managers. Explore
            the{" "}
            <Link
              href="/services/seo"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              SEO services in Lahore
            </Link>{" "}
            first, or{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              book a free consultation
            </Link>
            .
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Digital marketing services in Pakistan cover SEO, paid ads, social
            media, web development and automation — the work that gets a
            business found on Google, chosen by customers, and measured
            honestly. As a consultant, I deliver all ten services below
            myself, so strategy and execution never get lost between people.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            An agency hands your account down a chain of juniors. With a consultant, the person you hire is the person doing the work — one named person, direct access, no hand-offs.
          </p>
        </header>

        <section aria-labelledby="services-grid-heading" className="mt-12">
          <h2
            id="services-grid-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Digital Marketing Services in Pakistan
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li
                key={service.slug}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-xl font-semibold">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            See what this looks like in practice —{" "}
            <Link
              href="/work"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              selected work
            </Link>
            .
          </p>
          <p className="mt-2 text-muted-foreground">
            <Link
              href="/blog"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Read the blog
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="combinations-heading" className="mt-16 sm:mt-24">
          <h2
            id="combinations-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            How engagements combine
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Most clients need more than one of these digital marketing
            services — here is how they combine into one engagement.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {combinations.map((combination) => (
              <li
                key={combination.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-xl font-semibold">{combination.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {combination.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="service-area-heading" className="mt-16 sm:mt-24">
          <h2
            id="service-area-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Digital Marketing Services Across Pakistan
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            In Lahore: DHA, Gulberg, Johar Town, Model Town, Bahria Town,
            Wapda Town, Cantt and Faisal Town — in-person meetings available.
            Across Pakistan: Karachi, Islamabad, Rawalpindi, Faisalabad,
            Multan — remote delivery.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Consultation available in English and Roman Urdu.
          </p>
        </section>

        <section aria-labelledby="services-faq-heading" className="mt-16 sm:mt-24">
          <h2
            id="services-faq-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Digital Marketing Services FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-lg font-semibold">{faq.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 sm:mt-24">
          <p className="text-lg text-muted-foreground">
            Not sure where to start? Get a free SEO audit — I&apos;ll check where
            you rank today and list the first 3 fixes.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Get My Free Audit
          </Link>
        </section>

<CtaBand
    title="Not sure which service fits?"
    description="Tell me where your business stands and what you want it to do next — I'll point you to the right mix of services."
    />
      </div>
    </>
  );
}
