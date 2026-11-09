import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { absoluteUrl, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
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
    title: "SEO Case Studies Pakistan | Selected Work — Abdul Rehman",
    description:
      "Work and SEO case studies from Pakistan: packaging e-commerce, property portals, web apps and business websites — each shipped and documented honestly.",
    url: "/work",
    type: "website",
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
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Selected Work &amp; <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO Case Studies from Pakistan</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A selection of projects across Pakistan and beyond — each one shipped, each one
          documented honestly. Open a case study to see the challenge, the strategy, and the
          decisions behind the build. These are real projects from my{" "}
          <Link
            href="/services"
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            digital marketing services
          </Link>
          : packaging e-commerce, a property portal, web apps and business websites. Want the
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
          decisions, and what happened next. No cherry-picked screenshots, no invented numbers.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Industries in This Portfolio
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Packaging e-commerce (US), property portals (Pakistan), web apps, agency websites,
          and local directories (Lahore).
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
