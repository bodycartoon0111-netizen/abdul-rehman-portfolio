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
      "Generic descriptions, copied from the same sources, give searchers no reason to choose one agency over another. The site becomes a list of properties with no sense of the business behind them.",
  },
  {
    title: "Invisible where buyers actually look",
    description:
      "A thin business profile, inconsistent listings and no area presence mean the map results and local searches go to competitors, even when your listings are better.",
  },
];

const deliverables = [
  "Area and society pages for the places you serve — DHA, Gulberg, Bahria Town, Johar Town, Model Town and beyond — written from genuine local knowledge.",
  "Listing page optimisation, so each property page states what a buyer or tenant needs: type, size, location, price and how to arrange a viewing.",
  "Technical review of listing URLs, so sold and let properties are handled cleanly instead of becoming dead pages.",
  "Structured data review for listings and the business, helping search engines understand what each page offers.",
  "Google Business Profile optimisation and local citation work, keeping your name, address and phone consistent everywhere they appear.",
  "Guides for buyers and tenants — how to search, what to check, what the process involves — written in the words people actually use.",
  "Speed and mobile usability review, because property searches happen on phones, often while the searcher is standing outside the property.",
  "A monthly report in plain language: which areas and listings gained visibility, and which enquiries followed.",
];

const strategyPoints = [
  "Win the areas you actually serve, before chasing the whole country.",
  "Let every area page prove local knowledge — streets, amenities, transport — rather than repeating the same description everywhere.",
  "Keep listings honest and current, so visitors trust the next listing they open.",
  "Build the business profile and local listings so the map results point to you, not to a competitor.",
];

const processSteps = [
  {
    title: "Audit the presence",
    description:
      "Listings, area pages, business profile and current rankings are reviewed, so the work starts from what buyers actually see.",
  },
  {
    title: "Fix the listings",
    description:
      "Stale and dead pages are cleaned up, and the ones that matter are brought up to the standard a buyer expects.",
  },
  {
    title: "Build the area presence",
    description:
      "Society and area pages are created with real local knowledge, so the agency becomes the obvious result for its own patch.",
  },
  {
    title: "Measure enquiries",
    description:
      "Rankings, calls and enquiries are tracked together, so the work stays focused on what brings clients in.",
  },
];

export default function RealEstateSeoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: NAME, path: `/industries/${SLUG}` },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd(NAME, DESCRIPTION, SLUG, "/industries")}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: NAME }]} />
      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Industry</p>
        <h1 className="mt-4 text-4xl leading-[1.06] tracking-tight font-black md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Real Estate SEO in Lahore
          </span>{" "}
          — Be Found Before the Competition
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight md:text-3xl">Shoppers who are close to buying are already searching. Make sure they find your listings first.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Property search is decided by area, and by trust. Buyers and tenants search for the society, the block and the property type — then they choose the listing, and the business, that feels most reliable. This page explains how an estate business in Lahore is made findable for those searches.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A property website is not a catalogue in the same way a shop is. Each listing is temporary, each buyer is local, and the decision involves sums of money that make people careful. The work on this page is about closing that gap, as part of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="rounded-lg bg-neutral-900 px-8 py-3.5 text-center font-semibold text-white transition hover:bg-neutral-700">
            Discuss this industry
          </Link>
          <Link href="/work" className="rounded-lg border border-neutral-300 px-8 py-3.5 text-center font-semibold text-neutral-900 transition hover:border-neutral-900">
            See related work
          </Link>
        </div>
        <p className="mt-6 text-base leading-relaxed text-neutral-700">
          The starting point is knowing what your customers actually search for — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how that picture is built.
        </p>
      </header>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">The problem it solves</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-pine hover:bg-pine">
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 group-hover:text-white/85">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">The solution</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work starts with the areas you actually serve. Society and area pages are written from genuine local knowledge — the streets, the blocks, the schools, the commute, the price ranges — because that is what a buyer reads to judge whether you know the area. Listing pages are then brought up to the same standard: honest details, current photos, clear next steps for arranging a viewing. And the business itself is made consistent across the web — one name, one address, one phone number — so search engines and buyers both know who they are dealing with.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The technical work runs underneath. Listing URLs are given a clear pattern, sold and let properties are handled so they don't turn into dead pages, and the site is checked on a real phone, because that is where most property searches happen. No shortcuts — just a website that a buyer can trust and search engines can understand.
        </p>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">What&apos;s included</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included, and every change is reported in plain language, so you can see what was done to the site and why.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li
              key={d}
              className="group flex gap-3 rounded-2xl bg-neutral-50 p-5 text-neutral-700 transition-colors hover:bg-pine"
            >
              <span aria-hidden="true" className="mt-0.5 font-bold text-neutral-900 group-hover:text-white">
                ✓
              </span>
              <span className="leading-relaxed group-hover:text-white">{d}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Strategy</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The strategy is to be the most helpful answer to a local property search. For every area you serve, your site should be the one that knows the area best — the streets, the blocks, the amenities, the prices. That is what wins the search and the call. And because property decisions take time, the site is built to stay useful through the weeks between the first search and the viewing, so the enquirer returns to you rather than starting again elsewhere.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-neutral-700">
          {strategyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Process</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-pine hover:bg-pine"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white/85">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-neutral-900 group-hover:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 group-hover:text-white/85">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="group mt-16 max-w-4xl rounded-3xl bg-neutral-50 p-8 transition-colors hover:bg-pine sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-white">Who this is for</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700 group-hover:text-white/85">
          This is for estate agencies, property developers and independent dealers in Lahore who want their own enquiries rather than paying a listing site or an agent referral for every lead. It suits businesses with real inventory and real knowledge of their area — from a single-agency shop focused on one society, to developers with several projects, to firms handling rentals and commercial property as well as sales. If your listings are good but the enquiries go to someone else first, this is the work that changes that.
        </p>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Service area</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Lahore&apos;s property market is organised around its societies — DHA, Gulberg, Bahria Town, Johar Town, Model Town, Cantt, Faisal Town and Wapda Town — and buyers search by those names, by block, and by property type. The same pattern holds in Karachi, Islamabad and Rawalpindi, where searchers name their preferred area first and the property second. Overseas buyers add another layer, searching from abroad for homes in the areas their families come from. The work is planned around that geography: Digital Marketing for Real Estate Pakistan means pages for the areas you serve, listings a buyer can trust, and local signals that tell search engines where your business belongs.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Other services</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services/seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            SEO
          </Link>
          <Link
            href="/services/local-seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Local SEO
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
        <CtaBand title="Ready to talk about property SEO?" description="Tell me about the areas you serve and the listings you want found, and I'll reply with an honest assessment of what this service can — and can't — do for you." />
      </div>
    </main>
  );
}
