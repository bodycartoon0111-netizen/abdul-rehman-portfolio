import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";
import WorkArchive from "@/components/work/WorkArchive";

export const metadata: Metadata = {
  title: {
    absolute: "Selected Work & Case Studies | Abdul Rehman",
  },
  description:
    "Selected projects by Abdul Rehman: packaging, real estate, web apps, and business websites — each with the strategy behind the build.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work & Case Studies | Abdul Rehman",
    description:
      "Selected projects by Abdul Rehman: packaging, real estate, web apps, and business websites — each with the strategy behind the build.",
    url: "/work",
    type: "website",
  },
  keywords: [
    "web development portfolio",
    "SEO case studies",
    "website projects",
    "Abdul Rehman work",
  ],
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
    <main className="mx-auto max-w-6xl px-6 py-12">
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
          Selected work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A selection of projects across industries — each one shipped, each one documented
          honestly. Open a case study to see the challenge, the strategy, and the decisions
          behind the build.
        </p>
      </header>

      <div className="mt-12">
        <WorkArchive projects={projects} />
      </div>

      <div className="mt-20">
        <CtaBand
          title="Want results like these for your business?"
          description="Every project starts with a conversation about your goals. Tell me what you're building — I'll tell you honestly how I'd approach it."
        />
      </div>
    </main>
  );
}
