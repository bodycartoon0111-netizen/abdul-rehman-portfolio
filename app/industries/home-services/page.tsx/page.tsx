import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
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
      "A homeowner with a leaking tap or a dead air conditioner does not compare ten websites. They call the first trustworthy-looking business near them — and that business is rarely the one with the best work.",
  },
  {
    title: "A business with no footprint online",
    description:
      "No service pages, no area pages, an incomplete business profile and a website that has not changed in years: search engines have almost nothing to rank, so the business is effectively invisible.",
  },
];

const deliverables = [
  "Service pages for every trade you offer — plumbing, electrical work, air conditioning, painting, cleaning, pest control and more — written around the searches homeowners make.",
  "Area pages for the neighbourhoods and societies you serve, so your business appears for searches made near the job.",
  "Google Business Profile optimisation: accurate services, hours, photos and service area, with guidance on asking customers for honest reviews.",
  "Local citation and directory consistency, so your name, address and phone match everywhere a customer might find them.",
  "Call-friendly mobile pages, because a homeowner with a burst pipe is on a phone and needs your number in one tap.",
  "Emergency and seasonal content: the jobs people search for in summer heat, winter cold and the monsoon, answered in plain language.",
  "Technical review of the site — speed, structure and mobile usability — so search engines and customers can reach the right page quickly.",
  "A monthly report in plain language: which services and areas brought calls, and what was done to bring more.",
];

const strategyPoints = [
  "Win the searches made within your service area first, before trying to rank anywhere else.",
  "Make the next step obvious on every page: call, message or book, with no digging.",
  "Let genuine customer reviews do the persuading that advertising cannot.",
  "Cover the urgent jobs people search for in the moment, not only the planned work they research for weeks.",
  "Turn one good job in an area into visibility for the next job in the same area.",
];

const processSteps = [
  {
    title: "Audit the local presence",
    description:
      "The website, business profile and local listings are reviewed, so the work starts from what nearby homeowners see when they search.",
  },
  {
    title: "Build services and areas",
    description:
      "Pages for each service and each area you cover are created or rebuilt, with the details a homeowner needs before they call.",
  },
  {
    title: "Strengthen the profile",
    description:
      "The business profile, reviews and local listings are built up, so the business shows clearly in map results and local searches.",
  },
  {
    title: "Report the calls",
    description:
      "Enquiries by service and area are reported in plain language each month, and the pages that bring work get more attention.",
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: NAME },
        ]}
      />

      {/* Hero */}
      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Industry</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Home Services SEO in Pakistan
          </span>{" "}
          — Win the Local Jobs Near You
        </h1>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          A homeowner needs help now, searches near home, and calls the first business that looks reliable. This work puts yours in that place.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Home services SEO is the work of making a trades or repair business the obvious choice in local search. It covers the pages homeowners land on — one for each service, one for each area — and the business profile that appears in map results. When those pages are clear about what you do, where you work and how to reach you, the business starts appearing for the searches that carry real urgency: a plumber near me, an AC technician in Gulberg, a painter in DHA. The enquiries arrive from people who need the work done, not from people still browsing.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Most home services work is won or lost in a few minutes. The tap is leaking, the fridge has stopped, the power is out — and the homeowner searches, scans the first few results and calls. A business with a slow website, no service pages and an empty business profile is not even in that comparison. The work on this page is about changing that: building a local presence that matches the quality of the work itself, as part of the wider{" "}
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
          Local pages start with the words homeowners use — and{" "}
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
          The work starts with the services themselves. Each trade gets its own page that explains what is included, what it typically costs to call out — in general terms the business is comfortable stating — and what the homeowner should expect on the visit. Area pages then say where that work is done, so a search made in one neighbourhood finds a business that genuinely covers it. The phone number and booking options sit where they can be reached in one tap, because a homeowner in a hurry will not search a site for them.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The local profile is built at the same time. The Google Business Profile is filled out completely — services, hours, service area and photographs of real work — and customers are encouraged to leave honest reviews after a job is finished. Business details are kept consistent across directories, so a customer who finds a different number somewhere else is never sent to a dead line. Over time, the business becomes the name that homeowners in its area keep seeing, and the enquiries stop depending on luck.
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
          The strategy is to be found where the job is. A homeowner searches for a trade and a place together, so the website is organised that way: services crossed with the areas they are offered in, each page able to stand on its own in search. The business profile carries the same structure in map results, backed by reviews from real customers in those same areas. And because so much of this work is urgent, every page is built for a phone and a single action — calling — rather than for reading at leisure.
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
          This is for plumbers, electricians, AC technicians, painters, cleaners, pest control teams, solar installers and other home service businesses in Pakistan that work in a defined area and want the phone to ring steadily. It suits small teams and growing firms alike, as long as the work is real and the service area is clear. If your customers already recommend you once they have used you, but too few find you in the first place, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Home services SEO for Lahore and Pakistan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Homeowners in Lahore search by trade and by area — DHA, Gulberg, Johar Town, Model Town, Cantt, Bahria Town and the neighbourhoods around them — and they search in both English and Urdu, usually on a phone. The same pattern holds in Karachi, Islamabad and Rawalpindi, where a family wants someone reliable nearby, not a national directory. Seasons shape the work too: cooling in the summer heat, heating and damp in winter, repairs after the monsoon. The work is planned around that: pages for the services and areas you actually cover, a profile that shows in map results, and a site a homeowner can use with one hand while holding a torch in the other.
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
          title="Ready to talk about home services SEO?"
          description="Tell me about your trades and service area and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
