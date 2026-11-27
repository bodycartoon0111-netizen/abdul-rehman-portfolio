import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Local SEO for Home Services in Lahore";
const DESCRIPTION =
  "Local SEO for home services in Lahore: Google Maps ranking and local search for Pakistan trades and repair businesses — enquiries from nearby homeowners.";
const SLUG = "home-services";
const NAME = "Home Services SEO";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/industries/${SLUG}` },
  openGraph: {
    siteName: BRAND_NAME,
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: absoluteUrl(`/industries/${SLUG}`),
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
    title: TITLE,
    description: DESCRIPTION,
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

const problems = [
  {
    title: "The phone rings only when something breaks",
    description:
      "Work arrives by word of mouth and by chance, with quiet weeks in between. A plumber or electrician with no steady stream of local enquiries cannot plan, hire or grow — and that is the gap local SEO for plumbers and SEO for contractors are meant to close. The same gap faces other trades too: SEO for pest control companies, local SEO for moving companies and SEO for painting companies all start from the same place — being found first when a homeowner nearby needs help.",
  },
  {
    title: "Customers choose whoever appears first",
    description:
      "A homeowner with a leaking tap or a dead air conditioner does not compare ten websites. They call the first trustworthy-looking business near them — and that business is rarely the one with the best work, which is why local SEO for contractors starts with being found first, not with being the cheapest. That first call is just as often for a locksmith, a garage door or a broken appliance — local SEO for locksmiths, garage door repair SEO and appliance repair SEO decide who gets it.",
  },
  {
    title: "A business with no footprint online",
    description:
      "No service pages, no area pages, an incomplete business profile and a website that has not changed in years: search engines have almost nothing to rank, so the business is effectively invisible — and local SEO for home repair cannot start until those pages exist. The same is true for SEO for remodeling contractors and tree service SEO, where a clear service page is what turns a search into a call.",
  },
];

const deliverables = [
  "Service and trade pages that describe the work, the areas served and how to book, in plain language — trade SEO and home services SEO, written for homeowners first, whether that trade needs carpet cleaning SEO services, junk removal SEO or handyman SEO services.",
  "Practitioner and trade pages that state qualifications, experience, service areas and timings clearly, so homeowners can make an informed choice — the human detail local SEO for home services depends on.",
  "Google Business Profile and local citation work for home services businesses: keeping the name, address, phone and hours consistent everywhere, so nearby homeowners can find and call you. That consistency matters just as much for window cleaning SEO and pressure washing SEO, where most jobs come from a few streets away.",
  "Local content planning for the areas you serve, with guides that answer the questions homeowners actually ask before they book — the same planning behind fencing company SEO and local SEO for flooring companies, built area by area.",
  "Technical review of the site — speed, mobile usability and structure — so homeowners on a phone can find and call you without friction; the quiet, technical half of home services SEO.",
  "Review and reputation guidance: making it easy for satisfied customers to leave honest feedback, and responding to it properly. That trust matters for SEO for solar installation companies and emergency plumber SEO alike, where the customer is choosing someone to let into their home.",
  "A monthly report in plain language, part of local SEO services for home services: which trades and areas gained visibility, and what homeowners searched to find you.",
];

const strategyPoints = [
  "Put the local job first: the trade, the area and how to book, stated clearly on every key page — the first thing I look at as a home services SEO consultant, whether the business needs pool cleaning SEO services or local SEO for home inspection companies.",
  "Write for homeowners, not for search engines — clear answers in plain language, with no exaggerated claims — whether the page is about a trade or about home repair SEO.",
  "Win the local searches around the business before chasing broader terms — local SEO for electricians and SEO for electricians work the same way, one area at a time.",
  "Keep trade content accurate and current, and remove anything that is out of date.",
  "Make calling the business the easiest action on every page, day or night.",
];

const processSteps = [
  {
    title: "Audit the business online",
    description:
      "The website, business profile and local listings are reviewed, so the work starts from what homeowners see when they search today. The same review covers home services SEO services Pakistan, where the profile and the listings matter just as much.",
  },
  {
    title: "Fix trust and local signals",
    description:
      "Trade details, service areas and local listings are corrected and completed, giving homeowners and search engines a business they can trust. That is local SEO services for home services Lahore, fixed at the level homeowners actually see.",
  },
  {
    title: "Build the service pages",
    description:
      "Pages for each trade and area are written around the searches homeowners actually make, with clear answers and next steps — the writing I do as a home services SEO consultant Pakistan trades can reach directly, including SEO for interior designers, where the homeowner is choosing on taste and trust as much as on price.",
  },
  {
    title: "Measure and maintain",
    description:
      "Visibility and enquiries are reported in plain language each month, and the pages that homeowners use most are kept accurate — the reporting you should expect from the best home services SEO agency, and the reporting I give you.",
  },
];

export default function HomeServicesSeoPage() {
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
            Local SEO for Home Services in Lahore
          </span>{" "}
          — Help Homeowners Find You
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Clear answers. A trustworthy first impression.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          When something breaks at home, nobody waits — they search, and they call the business that answers them clearly and looks trustworthy.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Local SEO for home services — local SEO for home repair — is the work of making a trade or repair business easy to find and easy to trust. I offer home services SEO services Pakistan trades and repair businesses can rely on to be found first when homeowners search for help. It covers the pages homeowners rely on: the trades you cover, the areas you serve, the timings, the location and how to book. When those pages are complete, accurate and written in plain language, the business starts appearing for the searches homeowners actually make — a trade and a place, a problem and a question — instead of only for its own name. That visibility is what SEO for home services is for, and it is how homeowners find home services on Google and how home services businesses get customers from Google — enquiries from people who have already decided what they need.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Home services searches are different from most others because the need is urgent. A homeowner with a leak or a dead air conditioner is choosing whom to trust with their home, and search engines treat that choice with extra care: they look for evidence that the information is accurate, current and written by people who know the trade. A thin website with copied text and no trade details fails that test, however good the work itself may be. The work on this page — my home services SEO strategy for the business, built around SEO for home services and how to rank a home services business on Google Maps — is about bringing the website up to the standard of the work, as part of the wider{" "}
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
          Homeowner searches start with their words, not yours — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how those words are found.
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
          The work begins with the business itself: who does the work, what trades you cover, when you are available and where you are based. Trade pages state qualifications and experience plainly. Service pages explain what each job involves, who it is for and how booking works, in language a homeowner can follow without trade jargon. Timings, prices where the business chooses to publish them, and directions are kept current, because a homeowner who cannot reach you will call someone else — the kind of detail a home services SEO agency would check first, and the kind I check too.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">Local visibility</Link> and trustworthy content are built around that foundation. The Google Business Profile for home services Lahore is completed with accurate hours and services, listings across the web are made consistent, and guides are written to answer the questions homeowners ask before they book — what a first visit involves, how to prepare, what to bring. The same work covers home services SEO services and home repair SEO services. Nothing is exaggerated and nothing is promised that the work cannot deliver: the site earns trust by being accurate, complete and easy to use, which is exactly what both homeowners and search engines are looking for. That is home services SEO services Lahore in practice.
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
          The strategy is to answer the homeowner before they have to ask. Someone searching for help at home wants to know three things: can this business help me, can I trust the people who come to my home, and how do I reach them. The website is therefore organised around those questions, with service pages that explain, trade pages that reassure, and contact details that are never more than a tap away. Local search is the priority, because most homeowners choose a business near home — and the businesses that win those local searches are the ones with the clearest, most complete presence. That is home services digital marketing Lahore in the plain sense, and home services website SEO Pakistan built around the business's own area.
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
          This is for plumbers, electricians, cleaners, painters, pest control teams, HVAC technicians, movers and other home services businesses in Pakistan whose customers find them by searching — SEO for home services in Pakistan, built around real trades and real premises. It suits businesses with real tradespeople and real premises, where the website should reflect the standard of work customers receive — that is SEO for home services Pakistan, in plain terms. If your business is trusted by the customers who find it, but too few customers find it in the first place, this is the work that changes that. It is the work people look for when they search for the best home services SEO agency Pakistan has.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Home Services SEO for Pakistan businesses
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Homeowners in Pakistan search in English and in Urdu, on phones, often for a trade near a specific area — Gulberg, DHA, Johar Town, Model Town, Bahria Town or their own neighbourhood in Karachi or Islamabad — and local SEO for home services in Lahore starts from those same area searches. They weigh the distance, the timings, the tradesperson's background and what other customers have said — the details local SEO for home services in Lahore has to get right. A business in Lahore serves a different set of local searches from one in Karachi, and both need pages and local signals built around their own area — local SEO for home services Pakistan, planned city by city. That is where Google Maps ranking for home services Lahore is won or lost: in the searches made a few streets away from the business. The same searches bring customers to repair businesses too, and local SEO for home repair Lahore starts from the same area pages and the same accurate profile. The work is planned around that: home services SEO services Lahore, with local pages for the areas you serve, accurate information a homeowner can act on, and a presence that looks as careful as the work itself.
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
            href="/services/off-page-seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Off-Page SEO
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
          title="Hire home services SEO expert help — ready to talk?"
          description="Looking to hire home services SEO expert Lahore support for your business? Tell me about your business and customers and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
