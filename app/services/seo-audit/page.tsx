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

const TITLE = "SEO Audit in Lahore, Pakistan | Find & Fix Ranking Issues";
const DESCRIPTION =
  "An SEO audit for Lahore and Pakistan businesses: technical checks, content and link review, and a prioritised fix list so you know what to change first.";
const SLUG = "seo-audit";
const NAME = "SEO Audit";

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
    title: "Invisible on the searches that matter",
    description:
      "Competitors take the enquiries while your pages sit on page two or three for the terms your customers actually type. The audit traces each gap back to its cause, instead of guessing at fixes.",
  },
  {
    title: "Technical faults quietly capping traffic",
    description:
      "Slow pages, crawl errors and missing structure quietly limit how much of your site search engines will even consider ranking. These faults rarely announce themselves, so they can run for years unnoticed.",
  },
  {
    title: "Content with no search job to do",
    description:
      "Pages published without a clear search purpose spread effort thin. They attract the wrong visitors, answer the wrong questions, and leave the pages that could win enquiries with nothing behind them.",
  },
];

const deliverables = [
  "Full technical crawl of the live site, with errors grouped by impact rather than by tool jargon.",
  "Indexation and sitemap review, so the pages you want found are findable and the rest stay out of the way.",
  "Speed and Core Web Vitals assessment across the pages that matter most, with the slowest culprits named.",
  "On-page review of titles, headings, internal links and schema on key service and location pages.",
  "Content gap review against the searches your customers type in Lahore and across Pakistan.",
  "Backlink profile check, covering the links that help, the links that do nothing, and the links that could be harming trust.",
  "Local visibility review, covering your Google Business Profile and the local searches around it.",
  "A prioritised fix list, ordered by expected impact, with plain-language notes on what each change means.",
];

const strategyPoints = [
  "Start with the pages closest to revenue, and work outward from there.",
  "Separate faults that block crawling from faults that only weaken a page.",
  "Compare against competitors who already rank, and note exactly where they are stronger.",
  "Check what searchers in Lahore and Pakistan actually type, instead of relying on tool guesses.",
  "End with a short list of fixes, so the report can be acted on without a second meeting.",
];

const processSteps = [
  {
    title: "Brief and access",
    description:
      "We agree on the goal of the audit and the pages that matter most. You share access to Search Console and analytics, and I confirm the scope before any checking begins.",
  },
  {
    title: "Crawl and measure",
    description:
      "The site is crawled the way a search engine would crawl it, and speed, indexation, structure and content are measured page by page, with the raw findings kept as evidence.",
  },
  {
    title: "Review and prioritise",
    description:
      "Findings are sorted by impact, not by volume. A fault that blocks ten pages outranks ten faults that each affect one line of text, and the report says why.",
  },
  {
    title: "Report and walkthrough",
    description:
      "You receive the written audit and a plain-language walkthrough of what matters, what can wait, and what the next step should be for your site.",
  },
];

export default function SeoAuditPage() {
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
            SEO Audit in Lahore
          </span>{" "}
          — Find What Is Holding Your Site Back
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">See your site's health before you spend on fixes.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          A clear, honest picture of your website’s search health — before you spend anything on fixes.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          An SEO audit is the diagnostic first step of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer. Instead of changing things and hoping, the audit measures what search engines can actually reach, understand and trust on your site, and then turns those measurements into a fix list in order of impact. It is the part of SEO that stops guesswork: every recommendation is tied to something found on your pages, in your analytics, or in the way competitors are outranking you.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Many Lahore businesses know their website should be bringing in more enquiries, but they do not know why it is not. The design may look finished, the content may read well, and the site may even rank for its own business name — yet the searches that bring new customers go to competitors. That gap is rarely caused by one dramatic fault. It is usually a collection of smaller problems: pages search engines never see, pages that load too slowly on mobile, titles that say nothing useful, and content that never matched what customers were searching for. An audit finds that collection and names each item, so the work that follows is aimed at the right targets from the start.
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
          If the audit turns up technical faults, the next step is usually{" "}
          <Link href="/services/technical-seo" className="font-semibold text-neutral-900 underline">
            technical SEO
          </Link>{" "}
          work to fix them in priority order.
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
          The audit works through your site the way a search engine does. It starts with access: can the important pages be found, crawled and indexed, or are they blocked, orphaned or buried under pages that do not matter? From there it moves to speed and structure, checking how quickly key pages load on real mobile connections and whether headings, titles and internal links tell search engines what each page is for. Finally it looks outward, at the content and links around your site, to see whether search engines have reason to trust your pages more than the competitors already ranking above them.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          What makes the result useful is the order it is given in. A long list of faults with no ranking is almost as unhelpful as no audit at all, so every finding is scored by how much it is likely to matter and how much work it will take to fix. Quick wins come first: the changes that unlock traffic without a rebuild. Larger pieces of work are described honestly, with the trade-off stated plainly, so you can decide what to approve and what to leave. The report is written in plain language throughout, because an audit only helps if the person paying for it can understand it.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Every audit covers the same ground, so nothing important is left to chance. The checks below are all included, and the report shows what was found under each heading, with the evidence behind it.
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
          The strategy behind the audit is simple: measure first, fix second, and never fix what has not been measured. That order matters, because the loudest problem is not always the most important one. A site can have hundreds of warnings in a crawling tool and still rank well, if none of them touch the pages that bring enquiries. Equally, a site can look clean in a tool and still be invisible, if the pages that should rank are the ones search engines cannot reach. The audit therefore starts from the business questions — which pages should be bringing in enquiries, and which searches should be finding them — and only then works down into the technical detail. Every check is there to answer one of those questions, not to fill a report.
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
          This audit is for businesses that already have a website and want to know, honestly, what is wrong with it before spending more on marketing. It suits owners in Lahore whose sites were built some time ago and have never been checked properly, as well as businesses elsewhere in Pakistan whose traffic has stalled and who need a second pair of eyes. It is also useful before a redesign or a new content push, when the worst outcome would be rebuilding on top of faults nobody noticed. If you would rather have a clear list of what to fix than another promise of fast rankings, this is the right starting point.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          SEO audits in Lahore and across Pakistan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The audit is carried out for businesses in Lahore first and foremost, with the local searches, neighbourhoods and buying habits of the city in mind — from DHA and Gulberg to Johar Town, Model Town and Bahria Town, the aim is always the same: to be found by customers nearby who are ready to buy. The same checks apply for businesses in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan, and for Pakistan-based businesses serving customers abroad. Because the work is done remotely using Search Console, analytics and crawling tools, the audit does not depend on where your office sits; it depends on what your site shows search engines, wherever your customers are.
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
            href="/services/technical-seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Technical SEO
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
          title="Ready to talk about SEO Audit?"
          description="Tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
