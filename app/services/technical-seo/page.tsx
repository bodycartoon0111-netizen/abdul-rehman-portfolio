import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Technical SEO Services Pakistan | Faster, Crawlable Sites";
const DESCRIPTION =
  "Technical SEO services for Pakistan websites: crawl, indexation, speed, Core Web Vitals and schema fixes so search engines can understand and rank pages.";
const SLUG = "technical-seo";
const NAME = "Technical SEO";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: absoluteUrl(`/services/${SLUG}`),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const problems = [
  {
    title: "Pages search engines cannot reach",
    description:
      "Important service pages sit behind broken links, blocked resources or JavaScript that crawlers cannot follow. If a page cannot be reached, it cannot rank, however good its content is.",
  },
  {
    title: "Slow pages on real mobile connections",
    description:
      "Heavy images, unneeded scripts and slow servers make pages drag on the phones most customers in Pakistan actually use. Slow pages lose visitors and rankings at the same time.",
  },
  {
    title: "Structure that tells search engines nothing",
    description:
      "Missing headings, vague titles and no schema leave search engines guessing what a page is about. Guesswork rarely ends in a first-page ranking.",
  },
];

const deliverables = [
  "Full technical crawl and indexation review, with crawl blocks, orphan pages and redirect chains listed.",
  "Internal linking repair, so every important page is reachable within a few clicks of the homepage.",
  "Speed optimisation for key pages, including image, script and server-side improvements that show in the measurements.",
  "Core Web Vitals assessment and fixes for loading, interactivity and visual stability.",
  "Mobile usability checks, covering the layouts and tap targets customers actually use.",
  "Structured data and schema setup for services, locations and articles, so search engines can read what each page is.",
  "Sitemap and robots configuration, so search engines spend their crawl budget on the pages that matter.",
  "A post-fix verification report, showing the before-and-after measurements for every change made.",
];

const strategyPoints = [
  "Fix what blocks crawling before anything else, because hidden pages cannot rank.",
  "Spend crawl budget on the pages that bring enquiries, not on filters, tags and duplicates.",
  "Measure speed on real mobile conditions, not only on a fast office connection.",
  "Use schema to state plainly what each page is, instead of leaving search engines to guess.",
  "Verify every fix after it is made, and keep the evidence, so the improvement is proven rather than assumed.",
];

const processSteps = [
  {
    title: "Crawl and baseline",
    description:
      "The site is crawled and the current measurements are recorded — speed, indexation and structure — so every later improvement can be compared against them.",
  },
  {
    title: "Prioritise the faults",
    description:
      "Faults are ordered by impact: crawl blocks and broken links first, then speed, then structure, with the reasoning written down.",
  },
  {
    title: "Fix on the site",
    description:
      "The agreed fixes are made directly on the site, whether that means code, configuration or content structure, with each change logged.",
  },
  {
    title: "Verify and report",
    description:
      "The site is crawled and measured again, and you receive a report showing what changed, what improved, and what — if anything — still needs attention.",
  },
];

export default function TechnicalSeoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <JsonLd data={buildServiceJsonLd(NAME, DESCRIPTION, SLUG)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: NAME, path: `/services/${SLUG}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: NAME },
        ]}
      />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Service</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Technical SEO Services in Pakistan
          </span>{" "}
          — Fast, Crawlable, Built to Rank
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Crawlable, fast, structured — so your content ranks.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          The foundations search engines need — crawlable, fast and structured — so your content can actually rank.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Technical SEO is the engineering side of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer: it makes sure search engines can reach every page that matters, <Link href="/blog/fast-website-seo-nextjs" className="font-semibold text-neutral-900 underline">load it quickly</Link>, and understand what it is about. Content and links can only do their job once those foundations are sound — a brilliant article on a page Google cannot crawl might as well not exist. This service fixes the foundations first, then proves the fix with measurements, so rankings are built on something solid rather than on hope.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Many websites in Pakistan are built to look good and never checked for the things search engines care about. Pages load slowly on the mobile connections most customers use, important pages sit behind broken links or JavaScript that crawlers cannot follow, and search engines are left to guess what each page is about because the structure gives them nothing to work with. The owner sees a finished website; Google sees a maze. Technical SEO is the work of clearing that maze, page by page, until the site is easy to crawl, quick to load and simple to understand.
        </p>
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
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          Most technical work starts with an{" "}
          <Link href="/services/seo-audit" className="font-semibold text-neutral-900 underline">
            SEO audit
          </Link>{" "}
          , which finds and ranks the faults before any fixing begins.
        </p>
      </header>

      {/* Problem */}
      <section aria-labelledby="problem-heading" className="mt-16 max-w-4xl">
        <h2 id="problem-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          The problem it solves
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {problems.map((p) => (
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
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work is methodical rather than dramatic. It begins with a crawl of the live site, the same way a search engine would crawl it, and a check of what is actually indexed. From there the fixes are ordered by impact: crawl blocks and broken internal links first, because they hide whole pages; then speed, because it affects every visitor on every page; then structure — headings, titles, internal links and schema — because it tells search engines what each page means. Every change is made on the site itself, not just recommended in a document, and every change is checked after it is made.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Speed deserves a word of its own, because it is where many Pakistan websites lose the most. Mobile connections vary, handsets vary, and a page that loads in two seconds on a fast office connection can take far longer on the connection a customer actually has. The work therefore measures speed on the pages that matter, finds the heaviest culprits — usually images, third-party scripts and unneeded code — and trims them until the measurements improve. The same care applies to Core Web Vitals: loading, interactivity and visual stability are checked together, because a page that jumps around while it loads is a page visitors leave.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The fixes are made on the site itself, and the work below is all included. Each item is verified after it is done, so the report shows measurements rather than promises.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
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
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The strategy is to treat the site as a search engine sees it, not as its owner sees it. That means starting with access and ending with proof. A page that cannot be crawled is fixed before a page that merely needs a better title, because the first problem hides the page entirely while the second only weakens it. The same order applies to speed: the heaviest pages are trimmed first, because they slow down the most visitors. And nothing is called finished until it has been measured again — a fix that has not been verified is only a guess. This discipline is what separates technical SEO from a list of recommendations: the work is done, checked, and shown to have worked.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-neutral-700">
          {strategyPoints.map((point) => (
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
          {processSteps.map((step, i) => (
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

      {/* Ideal client */}
      <section aria-labelledby="ideal-heading" className="mt-16 max-w-4xl rounded-3xl bg-neutral-50 p-8 sm:p-10">
        <h2 id="ideal-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Who this is for
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          This service is for businesses whose websites have never had a technical check, and for owners who suspect the problem is the site rather than the content — pages that will not rank, a site that feels slow, or a redesign that looks finished but brings no extra traffic. It suits Lahore businesses on older WordPress or custom builds, Pakistan-wide sites with large page counts, and any owner planning new content who wants the foundations fixed before more pages are added. If the words on your site are good but the rankings are not, the cause is usually technical, and this is the work that finds it.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Technical SEO for Pakistan websites
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Pakistan websites face conditions that make technical care matter more, not less. Many customers browse on mobile, on varied connections, and on handsets that are not the latest models — so a page that is merely fast on a desktop test can still be slow for the people it needs to reach. Search in Lahore and across Pakistan also leans heavily on local results, which means location pages and local structure need to be right, not just present. This service is built around those realities: speed is measured in the conditions customers actually experience, crawl and indexation are checked for the pages that serve local buyers, and the fixes are prioritised for the traffic a Pakistan business can genuinely win.
        </p>
      </section>

      {/* Other services */}
      <section aria-labelledby="other-services-heading" className="mt-16">
        <h2 id="other-services-heading" className="text-2xl font-bold tracking-tight text-neutral-900">
          Other services
        </h2>
        <p className="mb-2 text-sm leading-relaxed text-neutral-700">
          Related reading:{" "}
          <Link href="/blog/technical-seo-checklist-2026" className="font-semibold text-neutral-900 underline">
            Technical SEO Checklist for 2026
          </Link>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services/seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            SEO
          </Link>
          <Link
            href="/services/seo-audit"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            SEO Audit
          </Link>
          <Link
            href="/services/keyword-research"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Keyword Research
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            View all services
          </Link>
        </div>
      </section>

      <div className="mt-20">
        <CtaBand
          title="Ready to talk about Technical SEO?"
          description="Tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
