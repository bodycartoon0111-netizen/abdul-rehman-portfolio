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

const TITLE = "Keyword Research Services Pakistan | Find Buyers’ Searches";
const DESCRIPTION =
  "Keyword research services for Pakistan businesses: search-intent mapping, competitor gaps and keyword plan that targets the searches your customers type.";
const SLUG = "keyword-research";
const NAME = "Keyword Research";

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
    title: "Chasing searches nobody makes",
    description:
      "Pages are optimised for phrases that sound right in a meeting but that no customer ever types into Google. The work is real and the rankings may even arrive, yet the visitors never do, because the search itself barely exists.",
  },
  {
    title: "Targeting searches that never buy",
    description:
      "Big search volumes look tempting, but most of them come from people researching, comparing or browsing — not from people ready to enquire. A page that wins those searches fills analytics with visitors and the inbox with nothing.",
  },
  {
    title: "Every page fighting the same term",
    description:
      "When several pages target the same keyword, search engines cannot tell which one to rank, so they rank none of them well. The site competes with itself while competitors with one clear page per search take the positions.",
  },
];

const deliverables = [
  "Search-intent analysis for your core services, separating buyers from browsers and researchers.",
  "A keyword map that assigns one primary search to each important page, so pages stop competing with each other.",
  "Competitor keyword gaps: the searches rivals rank for that your site does not cover yet.",
  "Local keyword sets for Lahore and for Pakistan-wide searches, with the buying phrases marked.",
  "Long-tail and question keywords that support your service pages and answer real customer questions.",
  "Search volume, difficulty and intent notes for every keyword, so priorities are based on evidence.",
  "Content briefs for the pages and articles the map calls for, with the search each one should answer.",
  "A prioritised keyword plan, ordered by revenue potential rather than by search volume alone.",
];

const strategyPoints = [
  "Start from the services that earn the business money, not from the biggest search volumes.",
  "Judge every keyword by intent first: who is searching, and what do they want to happen next?",
  "Favour searches where a good page can genuinely compete, over searches owned by national brands.",
  "Cover the local phrasing customers in Lahore and Pakistan actually use, including the words they type on mobile.",
  "Keep the map small enough to act on: a focused list that gets built beats a thousand-row spreadsheet that never leaves the drawer.",
];

const processSteps = [
  {
    title: "Goals and services",
    description:
      "We list the services that earn the business money and the customers who buy them, so the research aims at revenue rather than at traffic for its own sake.",
  },
  {
    title: "Search discovery",
    description:
      "Phrases are gathered from Search Console, competitor pages, customer questions and local search patterns, until the real language of the market is on the table.",
  },
  {
    title: "Intent and difficulty",
    description:
      "Each phrase is judged by what the searcher wants, how many search, and how strong the pages already ranking are, so priorities are based on evidence.",
  },
  {
    title: "Map and briefs",
    description:
      "The chosen keywords are mapped to pages, with a brief for each page or article the map calls for, and the searches each one should answer.",
  },
];

export default function KeywordResearchPage() {
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
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Service</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Keyword Research Services in Pakistan
          </span>{" "}
          — Find the Searches That Bring Buyers
        </h1>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          The searches your customers actually type, mapped to the pages that should win them.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Keyword research sits at the start of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer: before a page is written or a title is changed, the research decides which searches that page should aim for, and which it should leave alone. It replaces hunches with evidence — what people type, how many type it, what they mean by it, and how hard the current results will be to beat. When the research is done well, every page on a site has a job, and every job can be measured.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Most businesses in Pakistan pick keywords by instinct. A service page is optimised for the phrase the owner would type, not the phrase customers type; a blog post targets a term with huge volume and no buyers behind it; and several pages end up chasing the same search, so none of them ranks. The result is effort spent in the wrong places: content that earns visits from people who were never going to enquire, and service pages that stay invisible for the searches that would have brought work in. Keyword research exists to stop that waste before it happens, by finding the searches worth winning and leaving the rest alone.
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
          If your site has never been checked properly, an{" "}
          <Link href="/services/seo-audit" className="font-semibold text-neutral-900 underline">
            SEO audit
          </Link>{" "}
          is often the right first step before the keyword map is built.
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
          The work starts with your services, not with a keyword tool. Each service is broken into the questions and phrases a customer would actually use at each stage: the broad searches from people still learning, the comparison searches from people weighing options, and the specific searches from people ready to contact someone. Those phrases are then checked for volume, for difficulty, and — most importantly — for intent, because a search that brings ten enquiries is worth more than a search that brings a thousand readers. Local phrasing matters here too: customers in Lahore and across Pakistan often type service names together with a city, a neighbourhood, or a simple price or near-me phrase, and those combinations are where smaller businesses can genuinely win.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The result is a keyword map, not a spreadsheet to admire and ignore. Every important page is given one primary search, the searches it should support, and the searches it should stay away from. Service pages take the buying phrases; supporting articles take the questions that lead to them, and internal links connect the two. The map also shows what competitors already own, so you can see which gaps are realistic to close and which would take more than the return justifies. Nothing is hidden behind jargon: each keyword comes with a plain note on why it was chosen and what page should target it.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The research covers your services, your competitors and your local market, so the map reflects the searches that matter to your business rather than the searches a tool happens to suggest first.
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
          The guiding rule is that search volume is the least interesting number in keyword research. Volume tells you how many people type a phrase; it says nothing about whether they will buy, or whether you can rank for it. So the strategy ranks intent first, then difficulty, then volume — in that order. A modest search from someone ready to enquire beats a popular search from someone killing time. The same thinking shapes the local work: a Lahore business does not need to rank across the whole country for a generic term when the customers it can actually serve are searching with the city in the phrase. The map is kept deliberately focused, because a short list that gets built is worth more than a long list that sits in a drawer.
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
          This service is for businesses whose websites already exist but whose content has never been planned around real searches — and for new sites that want to start with a map rather than with guesswork. It suits Lahore businesses competing for local customers, Pakistan-wide businesses that need to choose between city searches and national ones, and any owner who has published content that brought visitors but no enquiries. If you have ever wondered whether the words on your pages match the words your customers type, this is the work that answers the question properly.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Keyword research for Pakistan, not just for Google in general
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Search behaviour in Pakistan has its own shape, and the research is built around it. Many customers search in English, many mix in Roman Urdu phrasing, and many add the city or neighbourhood to a service name before they type anything else. Mobile searching dominates, which changes how phrases are typed — shorter, more direct, and more likely to include a location or a price. The research covers those patterns rather than assuming searches look the same everywhere, and it marks the buying phrases for Lahore separately from the ones that work across Karachi, Islamabad and the rest of the country. That local care is what turns a generic keyword list into a plan a Pakistan business can actually use.
        </p>
      </section>

      {/* Other services */}
      <section aria-labelledby="other-services-heading" className="mt-16">
        <h2 id="other-services-heading" className="text-2xl font-bold tracking-tight text-neutral-900">
          Other services
        </h2>
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
            href="/services/technical-seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Technical SEO
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
          title="Ready to talk about Keyword Research?"
          description="Tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
