import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Home Services SEO Pakistan | Local Trades & Repairs";
const DESCRIPTION =
  "Home services SEO for Pakistan trades and repair businesses: local search and Google Business Profile work that brings enquiries from nearby homeowners.";
const SLUG = "home-services";
const NAME = "Home Services SEO";

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
    title: "The phone rings only when something breaks",
    description:
      "Work arrives by word of mouth and by chance, with quiet weeks in between. A plumber or electrician with no steady stream of local enquiries cannot plan, hire or grow.",
  },
  {
    title: "Customers choose whoever appears first",
    description:
      "A homeowner with a leaking tap or a dead air conditioner does not compare ten websites. They call the first trustworthy business that appears in search or on the map — and if that is not you, the job is gone.",
  },
  {
    title: "A business with no footprint online",
    description:
      "No service pages, no area pages, an incomplete business profile and a website that has not changed in two years. The work is good, but search engines have nothing to show for it.",
  },
];

const deliverables = [
  "Service pages for every trade you offer — plumbing, electrical work, air conditioning, painting, cleaning and repairs — written in the words homeowners use.",
  "Area pages for the neighbourhoods and societies you serve, so your business appears for searches made nearby.",
  "Google Business Profile optimisation: accurate services, hours, photos and service area, with guidance on asking happy customers for reviews.",
  "Local citation and directory consistency, so your name, address and phone match everywhere a customer might find them.",
  "Call-friendly mobile pages, because a homeowner with a burst pipe is on a phone and needs your number now.",
  "Emergency and seasonal content: the jobs people search for in summer heat, winter cold and the monsoon.",
  "Technical review of the site — speed, structure and mobile usability — so search engines and customers can both use it.",
  "A monthly report in plain language: which services and areas brought calls, and what was done to bring more.",
];

const strategyPoints = [
  "Win the searches made within your service area first, before trying to rank anywhere else.",
  "Make the next step obvious on every page: call, message or book, with no digging.",
  "Let genuine customer reviews do the persuading that advertising cannot.",
  "Cover the urgent jobs people search for in the moment, not only the planned work they research for weeks.",
];

const processSteps = [
  {
    title: "Audit the business",
    description:
      "The website, business profile and current visibility are reviewed together, so the work starts from what homeowners actually see.",
  },
  {
    title: "Fix the profile",
    description:
      "The Google Business Profile and service pages are corrected first, because these are what bring calls in the first weeks.",
  },
  {
    title: "Build the area pages",
    description:
      "Pages for each service and area are created with real detail, so the business becomes the obvious result for its own patch.",
  },
  {
    title: "Grow the reputation",
    description:
      "Reviews, photos and a record of completed jobs are built up month by month, and enquiries are tracked against the work done.",
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
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: NAME }]} />
      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Industry</p>
        <h1 className="mt-4 text-4xl leading-[1.06] font-black md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">Home Services SEO</span> — Be the First Call When Something Breaks
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight md:text-3xl">For plumbers, electricians, painters, cleaners and every trade that works by appointment.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Home services are chosen in a hurry, close to home, and usually on a phone. This page explains how a trade business in Pakistan turns that urgency into steady work.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A homeowner does not plan to need a plumber. The tap leaks at midnight, the air conditioner stops in June, the paint peels after the monsoon — and the person who fixes it is the person who appears first, sounds trustworthy and can come today. That decision happens in minutes, and it happens on Google or on the map. The work on this page is about making your business the one that appears, as part of the wider{" "}
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
          The work starts with the business itself. The Google Business Profile is completed — services, hours, photos, exact service area — and the website is given a page for every service offered, written around the words homeowners type when they need it. Area pages then tie those services to the places you actually cover, so a search for a plumber in Gulberg and a search for an electrician in Bahria Town each land on a page that proves you work there.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The technical work is quiet but decisive: pages that load fast on a phone, a number that can be tapped to call, and a site that search engines can read without confusion. Reviews are collected — not bought, but asked for after good work — because an honest row of five-star reviews is the fastest way to win a caller who has three tabs open and one minute to decide. Everything is measured in calls, not just rankings.
        </p>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">What&apos;s included</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included, and every change is reported in plain language, so you can see what was done to the site and why.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
            <li key={d} className="group flex gap-3 rounded-2xl bg-neutral-50 p-5 text-neutral-700 transition-colors hover:bg-pine">
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
          The strategy is to be the business that shows up when a homeowner has a problem and lives nearby. For a trade, the search is not a research project: it is a person with a leak, a fault or a deadline, choosing between three results. So the work concentrates on being found quickly in the right places, looking reliable in a glance, and making contact effortless. A business that answers, arrives on time and does the work well then converts one call into repeat work and word of mouth — and the reviews from those jobs feed the next search.
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
            <li key={step.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-pine hover:bg-pine">
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
          This is for independent trade businesses and small home-services firms in Pakistan who want more of the right work in their own area, without paying for every lead. It suits single-trade specialists, multi-trade companies, and firms that serve homes as well as offices and shops. If your work comes by luck and reputation, and you want the phone to ring because people can find you — not only because someone remembered your name — this is the work that changes that.
        </p>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Service area</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Homeowners in Lahore search by trade and by area — DHA, Gulberg, Johar Town, Model Town, Cantt, Bahria Town and the neighbourhoods around them — and they search in both English and Urdu, usually on a phone. The same pattern holds in Karachi, Islamabad and Rawalpindi, where a family wants someone reliable nearby, not a national directory. Seasons shape the work too: cooling in the summer heat, heating and damp in winter, repairs after the monsoon. The work is planned around that: Local SEO for Home Services in Lahore means pages for the services and areas you actually cover, a profile that shows in map results, and a site a homeowner can use with one hand while holding a torch in the other.
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
        <CtaBand title="Ready to talk about home services SEO?" description="Tell me about the trades you cover and the areas you serve and I'll reply with an honest assessment of what this service can — and can't — do for you." />
      </div>
    </main>
  );
}
