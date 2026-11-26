import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd, buildOfferCatalogJsonLd, buildPersonJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services for Small Business | Abdul Rehman",
  },
  description:
    "Digital marketing services for small business — Digital marketing services Pakistan: SEO, Google Ads, Meta Ads, web development and AI automation.",
  alternates: { canonical: "/services" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "Digital Marketing Services for Small Business | Abdul Rehman",
    description:
      "Digital marketing services for small business — Digital marketing services Pakistan: SEO, Google Ads, Meta Ads, web development and AI automation.",
    url: absoluteUrl("/services"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abdul Rehman - Freelance SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services for Small Business | Abdul Rehman",
    description: "Digital marketing services for small business — Digital marketing services Pakistan: SEO, Google Ads, Meta Ads, web development and AI automation.",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Abdul Rehman - Freelance SEO Specialist",
      },
    ],
  },
};

const combinations: { title: string; titleParts: { text: string; href?: string }[]; description: string }[] = [
  {
    title: "SEO + Content-ready development", titleParts: [{ text: "SEO", href: "/services/seo" }, { text: " + " }, { text: "Content-ready development", href: "/services/web-development" }],
    description:
      "A technically sound website built to rank from day one — clean architecture, fast pages, and schema baked in.",
  },
  {
    title: "Paid ads + Conversion-focused landing pages", titleParts: [{ text: "Paid ads", href: "/services/google-ads" }, { text: " + " }, { text: "Conversion-focused landing pages", href: "/services/performance-marketing" }],
    description:
      "Google and Meta campaigns pointed at pages designed to convert, so ad spend turns into enquiries instead of bounces.",
  },
  {
    title: "Custom software + AI automation", titleParts: [{ text: "Custom software", href: "/services/custom-software" }, { text: " + " }, { text: "AI automation", href: "/services/ai-automation" }],
    description:
      "Internal tools that remove repetitive work — lead routing, reporting, and follow-ups handled while you focus on delivery.",
  },
  {
    title: "Shopify / WordPress + Performance marketing", titleParts: [{ text: "Shopify", href: "/services/shopify" }, { text: " / " }, { text: "WordPress", href: "/services/wordpress" }, { text: " + " }, { text: "Performance marketing", href: "/services/performance-marketing" }],
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
            <JsonLd data={buildOfferCatalogJsonLd(services)} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <header className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Services</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">
Digital Marketing Services for Small Business — <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO, Ads, Websites &amp; AI
            Automation</span>
          </h1>
          <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Growth, not vanity metrics.</p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Services engineered for growth, not vanity metrics. Eleven digital
            marketing services for small business — SEO, Google Ads, Meta Ads, web
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
            Digital marketing services Pakistan cover SEO, paid ads, social
            media, web development and automation — the work that gets a
            business found on Google, chosen by customers, and measured
            honestly. As a consultant, I deliver all Eleven services below
            myself, so strategy and execution never get lost between people.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            An agency hands your account down a chain of juniors. With a consultant, the person you hire is the digital marketing consultant for small business who does the work — one named person, direct access, no hand-offs.</p>           <p className="mt-4 max-w-2xl text-lg text-muted-foreground">             I work with owners who want a clear result from the work. That is why I offer digital marketing services for more leads, digital marketing services for more sales, digital marketing services for website traffic, digital marketing services for more customers and digital marketing services for more website enquiries — the same one-person service, measured by the enquiries and orders that come in, not by clicks alone.           </p>           <p className="mt-4 max-w-2xl text-lg text-muted-foreground">             For businesses that want to be seen more, I offer digital marketing services for brand awareness, digital marketing services for online visibility, digital marketing services for content marketing and digital marketing services for social media growth — plain content and social work that puts your name in front of the right people — and digital marketing services for Google ranking, so the people who search find you first.           </p>           <p className="mt-4 max-w-2xl text-lg text-muted-foreground">             I offer digital marketing services for lead generation and digital marketing services for online growth. That work fits digital marketing services for online businesses, digital marketing services for established businesses, digital marketing services for B2C businesses and digital marketing services for D2C brands. The plan changes with the business, but the work stays the same: one person, doing the work, reporting it plainly.           </p>           <p className="mt-4 max-w-2xl text-lg text-muted-foreground">             If you are weighing digital marketing services vs hiring in-house, or you want to hire a freelance digital marketer who does the work himself, start with the audit and a plain answer to what does a digital marketing service include — the work, the reporting and the first step — with digital marketing services with monthly reporting, so you can see what happened each month.
          </p>
        </header>

        <section aria-labelledby="services-grid-heading" className="mt-12">
          <h2
            id="services-grid-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Digital Marketing Services in Pakistan
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">These are digital marketing services for startups as well as established firms — affordable digital marketing services for small business owners who need every rupee to work, including affordable digital marketing services for small business Pakistan clients who want senior help without agency fees. Whether you need digital marketing services for ecommerce brands, digital marketing services for B2B companies, digital marketing services for local business or digital marketing services for service businesses, each service below is delivered by me personally — freelance digital marketing services with no hand-offs.</p><ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-pine hover:bg-pine"
                >
                  <h3 className="text-xl font-semibold">
                    <span className="text-primary underline underline-offset-4 group-hover:text-white">
                      {service.name}
                    </span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground group-hover:text-white/85">
                    {service.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">The list covers SEO services Pakistan businesses use most — plus Google Ads, Meta Ads and web development services Pakistan — and the full service digital marketing services: strategy, execution and reporting from one consultant. If you want online marketing services for small business, digital marketing services for small businesses, digital marketing services for local businesses, digital marketing services for new business or small business digital marketing services that grow with you, start with the service that matches your biggest bottleneck. I write about digital marketing services for ecommerce, digital marketing services for SaaS startups, digital marketing services for growing businesses and digital marketing services for online stores — plus digital marketing services for professionals and digital marketing services for service companies that sell expertise, not products. If you want internet marketing services for small business, online marketing services or an online marketing consultant who answers his own email, start with the audit. Businesses comparing the best digital marketing agency for small business, the best digital marketing services for small business or a digital marketing agency for small business usually start by reading how I work. 
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
            services — here is how they combine into one engagement. The most requested mix is SEO Meta Google Ads services Pakistan — search and social working together — alongside SEO and digital marketing services Pakistan for businesses that want one consultant across every channel.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {combinations.map((combination) => (
              <li
                key={combination.title}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-pine hover:bg-pine"
              >
                <h3 className="text-xl font-semibold group-hover:text-white">{combination.titleParts.map((part, index) => (part.href ? (<Link key={index} href={part.href} className="text-primary underline underline-offset-4 group-hover:text-white">{part.text}</Link>) : (<span key={index}>{part.text}</span>)))}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground group-hover:text-white/85">
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
            Multan — remote delivery. These digital marketing services Lahore businesses use for local growth are the same digital marketing services in Lahore Pakistan companies rely on for national reach — delivered by a digital marketing company Lahore owners work with directly, and by the digital marketing consultant Pakistan businesses call when they want senior help, not a big team.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Consultation available in English and Roman Urdu. If you are comparing the best digital marketing agency in Lahore, or an affordable digital marketing agency Pakistan businesses can actually afford, start with a free audit and compare findings, not sales pitches. I offer full service digital marketing Pakistan for ecommerce and startups — digital marketing services for ecommerce Pakistan and digital marketing services for startups Pakistan — plus online marketing services Pakistan for businesses that sell across the country. For small firms, that means digital marketing services for small business Lahore owners can use without hiring a team, and if you are looking for the best digital marketing services Pakistan has to offer at consultant rates, the audit is where to start.
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
            you rank today and list the first 3 fixes. If you would rather hire digital marketing consultant help for the whole job, hire digital marketing consultant Pakistan support here — one consultant, no hand-offs — and the audit is still the best first step. You can also hire a digital marketing consultant for a single project, with the same audit-first approach.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-pine px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
          >
            Get My Free Audit
          </Link>
        </section>

<div className="mt-16 sm:mt-24"><CtaBand
    title="Not sure which service fits?"
    description="Tell me where your business stands and what you want it to do next — I'll point you to the right mix of services."
/></div>
      </div>
    </>
  );
}
