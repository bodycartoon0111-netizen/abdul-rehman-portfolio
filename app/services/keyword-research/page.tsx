import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  BRAND_NAME,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";


const TITLE = "Keyword Research Services Pakistan | Find Buyers’ Searches";
const DESCRIPTION =
  "Keyword Research Services Pakistan: search-intent mapping, competitor gaps and a keyword plan that targets the searches your customers type.";
const SLUG = "keyword-research";
const NAME = "Keyword Research";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    siteName: BRAND_NAME,
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: absoluteUrl(`/services/${SLUG}`),
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
    title: TITLE,
    description: DESCRIPTION,
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
  "Favour searches where a good page can genuinely compete, over searches owned by national brands — that is the thinking behind SEO keyword research services Pakistan and keyword research for ecommerce Pakistan, where a focused page can still win.",
  "Cover the local phrasing customers in Lahore and Pakistan actually use, including the words they type on mobile. As a keyword research consultant Pakistan businesses work with directly, I also map the phrases behind keyword research consultant Lahore and best keyword research services Lahore, where they genuinely fit a page.",
  "Keep the map small enough to act on: a focused list that gets built beats a thousand-row spreadsheet that never leaves the drawer. Keyword research tools and services Pakistan businesses already use, from Search Console to competitor data, feed the same short list.",
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
      "Phrases are gathered from Search Console, competitor pages, customer questions and local search patterns, until the real language of the market is on the table. This is where long tail keyword research services Pakistan and keyword research services for startups Pakistan come in: the specific phrases startups and small businesses can actually win.",
  },
  {
    title: "Intent and difficulty",
    description:
      "Each phrase is judged by what the searcher wants, how many search, and how strong the pages already ranking are, so priorities are based on evidence. That judgement is what separates keyword research services for small business Pakistan from a generic list — every phrase is weighed by intent first.",
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
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Service</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Keyword Research Services Pakistan
          </span>{" "}
          — Find the Searches That Bring Buyers
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">The searches your customers type, mapped to the pages that win them.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          The searches your customers actually type, mapped to the pages that should win them.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          My keyword research services sit at the start of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer: before a page is written or a title is changed, this SEO keyword research service decides which searches that page should aim for, and which it should leave alone. As a keyword research consultant, I replace hunches with evidence — what people type, how many type it, what they mean by it, and how hard the current results will be to beat. It is professional keyword research services work, done properly: keyword research for SEO that gives every page a job, and every job can be measured.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Most businesses in Pakistan pick keywords by instinct. A service page is optimised for the phrase the owner would type, not the phrase customers type; a blog post targets a term with huge volume and no buyers behind it; and several pages end up chasing the same search, so none of them ranks. The result is effort spent in the wrong places: content that earns visits from people who were never going to enquire, and service pages that stay invisible for the searches that would have brought work in. Keyword research exists to stop that waste before it happens, by finding the searches worth winning and leaving the rest alone. I offer keyword research services for small business owners and for startups, and keyword research services for local business owners who serve one city or neighbourhood. The same care goes into keyword research services for ecommerce shops, keyword research services for blogs, keyword research services for SaaS companies and keyword research services for agencies. Whether you need a keyword research service for small business or local keyword research services for a single city, the approach is the same: affordable keyword research services built around the searches your customers actually make, including ecommerce keyword research services for online shops. If you are comparing the best keyword research services, ask what each one actually delivers: a map, briefs and a plan — not just a spreadsheet.
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
            <div key={p.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-pine hover:bg-pine">
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 group-hover:text-white/85">{p.description}</p>
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
          The work starts with your services, not with a keyword tool — and it starts with a simple question: what is keyword research, and how to do keyword research for SEO in a way that brings enquiries, not just visits? What is keyword research in SEO, after all, but finding the exact phrases your buyers type and mapping them to the right pages? Each service is broken into the questions and phrases a customer would actually use at each stage: the broad searches from people still learning, the comparison searches from people weighing options, and the specific searches from people ready to contact someone. Those phrases are then checked for volume, for difficulty, and — most importantly — for intent, because a search that brings ten enquiries is worth more than a search that brings a thousand readers. Local phrasing matters here too: customers in Lahore and across Pakistan often type service names together with a city, a neighbourhood, or a simple price or near-me phrase, and those combinations are where smaller businesses can genuinely win.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The result is a keyword map, not a spreadsheet to admire and ignore — keyword mapping services that give every important page one primary search, the searches it should support, and the searches it should stay away from. Service pages take the buying phrases; supporting articles take the questions that lead to them, and internal links connect the two. The map also shows what competitors already own, so you can see which gaps are realistic to close and which would take more than the return justifies. That is keyword research and competitor analysis services in practice, and it pairs naturally with keyword research and SEO audit services: long tail keyword research services find the specific, lower-competition phrases, while keyword research tools and services — Search Console, competitor data and the tools I use every day — keep every choice grounded in evidence. Nothing is hidden behind jargon: each keyword comes with a plain note on why it was chosen and what page should target it.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The research covers your services, your competitors and <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">your local market</Link>, so the map reflects the searches that matter to your business rather than the searches a tool happens to suggest first. That local coverage is what makes this keyword research services Lahore work different from a generic list, and it is why the same map also answers keyword research services in Lahore Pakistan searches — the phrases Lahore customers actually type.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d} className="group flex gap-3 rounded-2xl bg-neutral-50 p-5 text-neutral-700 transition-colors hover:bg-pine group-hover:text-white">
              <span aria-hidden="true" className="mt-0.5 font-bold text-neutral-900 group-hover:text-white">✓</span>
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
          The guiding rule is that search volume is the least interesting number in keyword research. Volume tells you how many people type a phrase; it says nothing about whether they will buy, or whether you can rank for it. So the strategy ranks intent first, then difficulty, then volume — in that order. A modest search from someone ready to enquire beats a popular search from someone killing time. That is how my SEO keyword research services work, and it is why businesses looking for the best keyword research services Pakistan has to offer, or for affordable keyword research services Pakistan, get a plan built on buying intent rather than on big numbers. The same thinking shapes the local work: a Lahore business does not need to rank across the whole country for a generic term when the customers it can actually serve are searching with the city in the phrase. The map is kept deliberately focused, because a short list that gets built is worth more than a long list that sits in a drawer.
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
            <li key={step.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-pine hover:bg-pine">
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white/85">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-neutral-900 group-hover:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 group-hover:text-white/85">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Ideal client */}
      <section aria-labelledby="ideal-heading" className="group mt-16 max-w-4xl rounded-3xl bg-neutral-50 p-8 sm:p-10 transition-colors hover:bg-pine">
        <h2 id="ideal-heading" className="text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-white">
          Who this is for
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700 group-hover:text-white/85">
          This service is for businesses whose websites already exist but whose content has never been planned around real searches — and for new sites that want to start with a map rather than with guesswork. It suits Lahore businesses competing for local customers, Pakistan-wide businesses that need to choose between city searches and national ones, and any owner who has published content that brought visitors but no enquiries. If you have ever wondered whether the words on your pages match the words your customers type, this is the work that answers the question properly. Some clients come to me as a freelance keyword researcher; others as a freelance keyword researcher Pakistan businesses hire for one focused project; and some simply want a Pakistan keyword research expert to check the map before they build on it. Either way, you work with me directly, not through an account manager.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Keyword research for Pakistan, not just for Google in general
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Search behaviour in Pakistan has its own shape, and the research is built around it. Many customers search in English, many mix in Roman Urdu phrasing, and many add the city or neighbourhood to a service name before they type anything else. Mobile searching dominates, which changes how phrases are typed — shorter, more direct, and more likely to include a location or a price. The research covers those patterns rather than assuming searches look the same everywhere, and it marks the buying phrases for Lahore separately from the ones that work across Karachi, Islamabad and the rest of the country. That includes keyword research services Karachi and keyword research services Islamabad, as well as keyword research services DHA Lahore for businesses serving that neighbourhood — the same care, applied to each area's own searches. That local care is what turns a generic keyword list into a plan a Pakistan business can actually use.
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
          description="Tell me about your goals — whether you want to hire keyword research expert help for one project, or hire keyword research expert Pakistan support for ongoing work — and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
