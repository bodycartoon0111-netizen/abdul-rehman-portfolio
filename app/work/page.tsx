import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";
import WorkArchive from "@/components/work/WorkArchive";

export const metadata: Metadata = {
  title: {
    absolute: "SEO Case Studies Pakistan | Selected Work — Abdul Rehman",
  },
  description:
    "Work and SEO case studies from Pakistan: packaging e-commerce, property portals, web apps and business websites — each shipped and documented honestly.",
  alternates: { canonical: "/work" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "SEO Case Studies Pakistan | Selected Work — Abdul Rehman",
    description:
      "Work and SEO case studies from Pakistan: packaging e-commerce, property portals, web apps and business websites — each shipped and documented honestly.",
    url: absoluteUrl("/work"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abdul Rehman - Freelance SEO Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Case Studies Pakistan | Selected Work — Abdul Rehman",
    description: "Work and SEO case studies from Pakistan: packaging e-commerce, property portals, web apps and business websites — each shipped and documented honestly.",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Abdul Rehman - Freelance SEO Consultant",
      },
    ],
  },
};

export default function WorkPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work by Abdul Rehman",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        "@id": absoluteUrl(`/work/${p.slug}`),
        name: p.name,
        url: absoluteUrl(`/work/${p.slug}`),
        description: p.tagline,
        author: { "@type": "Person", name: "Abdul Rehman", url: siteUrl() },
      },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <JsonLd data={itemListLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work" }]} />

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          Selected Work &amp; <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO Case Studies from Pakistan</span>
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Every project shipped. Every one documented honestly.</p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A selection of projects across Pakistan and beyond — each one shipped, each one
          documented honestly. Open a case study to see the challenge, the strategy, and the
          decisions behind the build. This page is my SEO portfolio — my freelance SEO portfolio and freelance digital marketing portfolio in one place — with SEO case studies, digital marketing case studies and freelance SEO case studies, including a web design case study. I keep the same work as my digital marketing portfolio and web development portfolio, so one page covers the lot. These are real projects from my{" "}
          <Link
            href="/services"
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            digital marketing services
          </Link>
          : packaging e-commerce, a property portal, web apps and business websites — SEO case study examples, digital marketing case study examples, website case studies and web development case studies, including a website redesign case study and an ecommerce SEO case study. Each one is an SEO work example, a website portfolio example and an SEO portfolio example in my own words, showing what I actually did. Want the
          same thinking on your project?{" "}
          <Link
            href="/contact"
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            Start a conversation
          </Link>
          .
        </p>
      </header>

      <h2 className="mt-12 text-3xl font-bold tracking-tight text-neutral-900">
        SEO Case Studies in Pakistan
      </h2>

      <div className="mt-6">
        <WorkArchive projects={projects} />
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          What Every Case Study Shows
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Every case study shows the same four things — the challenge, the strategy, the
          decisions, and what happened next. No cherry-picked screenshots, no invented numbers. What is an SEO case study? For me it is a plain account of one piece of work: the problem I was given, what I tried, and the outcome status afterwards. That is how SEO case studies help small business owners judge the work — they can see the thinking, not just a claim. Each one also works as an SEO results case study in that narrow sense: it records the outcome status, never measured results. And each one is an SEO case study for small business readers, alongside SEO case studies for small business and SEO case studies for startups. People comparing the best SEO case studies will find the same shape here as in any SEO consultant case studies collection: a small business problem, the work, and the outcome. This is my SEO project portfolio as much as a list of jobs — an SEO case study small business owners can read end to end, and a local SEO case study where the work was local.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Industries in This Portfolio
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Packaging e-commerce (US), property portals (Pakistan), web apps, agency websites,
          and local directories (Lahore). That mix is why this page also reads as SEO case studies Pakistan, website case studies Pakistan and digital marketing case studies Pakistan: an SEO case study Lahore businesses can relate to, a local SEO case study Lahore project, and Pakistan SEO case study examples drawn from the same work. If you came here for an ecommerce SEO case study Pakistan, start with the packaging store, then read the local work beside it. The website redesign case study Pakistan and web design case study Pakistan entries sit in the same list: the agency websites and business websites I have worked on. For readers in Lahore, this is my SEO portfolio Lahore page and my digital marketing portfolio Pakistan and web development portfolio Pakistan in one: a freelance SEO portfolio Pakistan readers can browse, with SEO case studies Lahore and SEO case studies for small business Lahore included, plus an SEO case study small business Pakistan owners can read without jargon. I treat each entry as an SEO results case study Pakistan readers can check the same way — outcome status only, never measured results — and I keep the whole set as the SEO portfolio of Abdul Rehman. If you reached this page by searching for case studies SEO consultant Lahore, you will find the work itself here, and if you are comparing the best SEO case studies Pakistan has on show, start with the challenge and the decisions in each one, not with the headline.
        </p>
      </section>

      <p className="mt-12 text-lg leading-relaxed text-neutral-700">
        The work is one person&apos;s — read{" "}
        <Link
          href="/about"
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
        >
          About Abdul Rehman
        </Link>
        .
      </p>

      <div className="mt-20">
        <CtaBand
          title="Want results like these for your business?"
          description="Every project starts with a conversation about your goals. Tell me what you're building — I'll tell you honestly how I'd approach it."
        />
      </div>
    </main>
  );
}
