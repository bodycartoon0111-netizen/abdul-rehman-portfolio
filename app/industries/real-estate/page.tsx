import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Real Estate SEO in Lahore | Property Search Visibility";
const DESCRIPTION =
  "Real estate SEO for Lahore property businesses: local, listing and area-page optimisation that helps buyers and tenants find the properties they want.";
const SLUG = "real-estate";
const NAME = "Real Estate SEO";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/industries/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: absoluteUrl(`/industries/${SLUG}`),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const problems = [
  {
    title: "Listings that go stale while still ranking",
    description:
      "Properties sell or let, but their pages stay live with old prices and old photos. Searchers arrive, find the home gone, and leave — and search engines notice how often that happens.",
  },
  {
    title: "Every agency page says the same thing",
    description:
      "Generic descriptions, copied from the same sources, give searchers no reason to choose one agency over another. A page that could show real knowledge of an area reads like every other page on the web.",
  },
  {
    title: "Invisible where buyers actually look",
    description:
      "A thin business profile, inconsistent listings and no area presence mean the map results and local searches go to competitors. The enquiries arrive with someone else's name on them.",
  },
];

const deliverables = [
  "Area and society pages for the places you serve — DHA, Gulberg, Bahria Town, Johar Town, Model Town and beyond — written with genuine local detail.",
  "Listing page optimisation, so each property page states what a buyer or tenant needs: type, size, location, price and the features that matter.",
  "Technical review of listing URLs, so sold and let properties are handled cleanly instead of becoming dead ends for visitors and search engines.",
  "Structured data review for listings and the business, helping search engines understand what each page offers.",
  "Google Business Profile optimisation and local citation work, keeping your name, address and phone consistent everywhere they appear.",
  "Guides for buyers and tenants — how to search, what to check, what the process involves — written in plain language.",
  "Speed and mobile usability review, because property searches happen on phones, often while the searcher is standing outside the property.",
  "A monthly report in plain language: which areas and listings gained visibility, and which enquiries that visibility supported.",
];

const strategyPoints = [
  "Win the areas you actually serve, before chasing the whole country.",
  "Let every area page prove local knowledge — streets, amenities, transport — rather than repeating the same paragraph under a different name.",
  "Keep listings honest and current, so visitors trust the next listing they open.",
  "Build the business profile and local listings so the map results point to you, not to a competitor.",
  "Answer the questions buyers ask before they call, so the calls you get are from people who are ready.",
];

const processSteps = [
  {
    title: "Audit the listings",
    description:
      "Current pages, listings and local presence are reviewed, so the work starts from what buyers see today, not from a guess.",
  },
  {
    title: "Build the area pages",
    description:
      "Pages for each area and society are created or rebuilt with real detail, giving searchers a reason to stay and search engines a reason to rank them.",
  },
  {
    title: "Strengthen local presence",
    description:
      "The business profile, listings and local signals are corrected and built up, so the agency shows where local buyers are looking.",
  },
  {
    title: "Report and repeat",
    description:
      "Visibility by area and listing is reported in plain language, and the pages and areas that are winning get more of the same work.",
  },
];

export default function RealEstateSeoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: NAME, path: `/industries/${SLUG}` },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd(NAME, DESCRIPTION, SLUG, "/industries")}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: NAME },
        ]}
      />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Industry</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Real Estate SEO in Lahore
          </span>{" "}
          — Be Found Before the Competition
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Found first. Called first.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Buyers and tenants start with a search — and the agencies they find first are the ones they call.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/blog/real-estate-seo-lahore" className="font-semibold text-neutral-900 underline">Real estate SEO</Link> is the work of making a property business visible for the searches that lead to viewings. People rarely search for an agency by name; they search for a home — a house for sale in DHA, a flat for rent in Gulberg, a commercial plot in Bahria Town. The agency whose pages match those searches, with real detail about the area and the property, is the agency that gets the call. This service shapes a website around that behaviour: area pages, listing pages and local signals, working together so the right properties appear for the right searches.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Property search is local to a degree few other industries match. A buyer knows the society they want, the budget they can stretch to and the size they need, and they compare listings side by side on a phone. If your pages are thin, your listings are out of date, or your business does not appear in the local results, the searcher simply moves on to the next agency — often one whose website is no better, only easier to find. The work on this page is about closing that gap, as part of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-neutral-900 px-8 py-3.5 text-center font-semibold text-white transition hover:bg-neutral-700"
          >
            Discuss this industry
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-neutral-300 px-8 py-3.5 text-center font-semibold text-neutral-900 transition hover:border-neutral-900"
          >
            See related work
          </Link>
        </div>
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          Area pages start with knowing what buyers actually type — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how that demand is mapped.
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
          The work starts with the areas themselves. Each society and neighbourhood you serve gets a page that reads like it was written by someone who knows it: the streets and blocks, the schools and parks nearby, the kind of homes there, and who tends to look there. Under each area, the listings are organised by type and budget, with pages that state the facts plainly and photographs that show the property honestly. Internal links connect the area to its listings and each listing back to its area, so a visitor can move from a search to a viewing request without getting lost.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">Local visibility</Link> is built at the same time. The Google Business Profile is completed and kept accurate, business details are made consistent across directories, and the website itself states clearly where the agency works and what it handles. Sold and let properties are dealt with properly — redirected to live alternatives rather than left as dead ends — so the trust a visitor builds on one page is not broken on the next. The result is a website that search engines can match to local property searches, and that buyers can use without frustration.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included, and every change is reported in plain language, so you can see what was done to the site and why.
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
          The strategy is to be the most helpful answer to a local property search. A buyer searching for a home in a particular society does not want a generic agency homepage; they want to know what is available there, what it costs, and how to arrange a viewing. So the work is organised by place and by need: area pages that teach, listing pages that show, and a clear next step on every page. Over time, the areas where you genuinely work become the areas where you are found — and the enquiries that arrive are already narrowed to the properties and budgets you handle.
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
          This is for estate agencies and property businesses in Lahore and across Pakistan that hold real listings and want the enquiries to come to them directly. It suits agencies with a defined patch — a few societies they know well — and developers marketing a project who need buyers to find the project itself rather than a portal listing. If your listings are genuine and your area knowledge is real, but your website is not the one searchers find, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Real estate SEO for Lahore and Pakistan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Lahore's property market is organised around its societies — DHA, Gulberg, Bahria Town, Johar Town, Model Town, Cantt, Faisal Town and Wapda Town — and buyers search by those names, by block, and by property type. The same pattern holds in Karachi, Islamabad and Rawalpindi, where searchers name their preferred area first and the property second. Overseas buyers add another layer, searching from abroad for homes in the areas their families come from. The work is planned around that geography: Digital Marketing for Real Estate Pakistan means pages for the areas you serve, listings a buyer can trust, and local signals that tell search engines where your business belongs.
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
          title="Ready to talk about real estate SEO?"
          description="Tell me about your areas and listings and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
