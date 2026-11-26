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
      "Work arrives by word of mouth and by chance, with quiet weeks in between. A plumber or electrician with no steady stream of local enquiries cannot plan, hire or grow — and that is the gap local SEO for plumbers and SEO for contractors are meant to close.",
  },
  {
    title: "Customers choose whoever appears first",
    description:
      "A homeowner with a leaking tap or a dead air conditioner does not compare ten websites. They call the first trustworthy-looking business near them — and that business is rarely the one with the best work, which is why local SEO for contractors starts with being found first, not with being the cheapest.",
  },
  {
    title: "A business with no footprint online",
    description:
      "No service pages, no area pages, an incomplete business profile and a website that has not changed in years: search engines have almost nothing to rank, so the business is effectively invisible — and local SEO for home repair cannot start until those pages exist.",
  },
];

const deliverables = [
  "Service pages for every trade you offer — plumbing, electrical work, air conditioning, painting, cleaning, pest control and more — written around the searches homeowners make; that is home services SEO services, page by page.",
  "Area pages for the neighbourhoods and societies you serve, so your business appears for searches made near the job — local SEO for home services Lahore, built area by area.",
  "Google Business Profile for home services: accurate services, hours, photos and service area, with guidance on asking customers for honest reviews.",
  "Local citation and directory consistency as part of local SEO services for home services, so your name, address and phone match everywhere a customer might find them.",
  "Call-friendly mobile pages, because a homeowner with a burst pipe is on a phone and needs your number in one tap — the simplest part of home services digital marketing, and the part customers trust most.",
  "Emergency and seasonal content: the jobs people search for in summer heat, winter cold and the monsoon, answered in plain language — the content local SEO for repair services is built on.",
  "Technical review of the site — speed, structure and mobile usability — so search engines and customers can reach the right page quickly; the technical half of the local SEO audit for home services.",
  "A monthly report in plain language: which services and areas brought calls, and what was done to bring more — the reporting you should expect from the best local SEO agency for home services, and the reporting I give you.",
];

const strategyPoints = [
  "Win the searches made within your service area first, before trying to rank anywhere else — local SEO for electricians Lahore and local SEO for cleaning services Lahore work the same way, one area at a time.",
  "Make the next step obvious on every page: call, message or book, with no digging — on the website and on the map, which is what Google Maps SEO for tradesmen comes down to.",
  "Let genuine customer reviews do the persuading that advertising cannot — whether the page is about plumbing or about local SEO for landscapers.",
  "Cover the urgent jobs people search for in the moment, not only the planned work they research for weeks — local SEO for HVAC companies depends on it, because customers search for the exact job they need.",
  "Turn one good job in an area into visibility for the next job in the same area — the way local SEO for roofers grows, one street at a time.",
];

const processSteps = [
  {
    title: "Audit the local presence",
    description:
      "The website, business profile and local listings are reviewed, so the work starts from what nearby homeowners see when they search. That first review is the local SEO audit for home services Lahore.",
  },
  {
    title: "Build services and areas",
    description:
      "Pages for each service and each area you cover are created or rebuilt, with the details a homeowner needs before they call. That is local SEO services for contractors Lahore, fixed at the level customers actually see.",
  },
  {
    title: "Strengthen the profile",
    description:
      "The business profile, reviews and local listings are built up, so the business shows clearly in map results and local searches — the work I do as a home services SEO consultant Pakistan businesses can reach directly.",
  },
  {
    title: "Report the calls",
    description:
      "Enquiries by service and area are reported in plain language each month, and the pages that bring work get more attention — the reporting you should expect from a home services SEO agency, and the reporting I give you.",
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
          — Win the Local Jobs Near You
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Be the first reliable business they call.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          A homeowner needs help now, searches near home, and calls the first business that looks reliable. This work puts yours in that place.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Local SEO for home services — home services SEO — is the work of making a trades or repair business the obvious choice in <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">local search</Link>. It covers the pages homeowners land on — one for each service, one for each area — and the business profile that appears in map results, and that is how home service businesses get leads from Google. When those pages are clear about what you do, where you work and how to reach you, the business starts appearing for the searches that carry real urgency: a plumber near me, an AC technician in Gulberg, a painter in DHA. The enquiries arrive from people who need the work done, not from people still browsing — that is how contractors get leads from Google, and what SEO for home service businesses is for.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Most home services work is won or lost in a few minutes. The tap is leaking, the fridge has stopped, the power is out — and the homeowner searches, scans the first few results and calls. A business with a slow website, no service pages and an empty business profile is not even in that comparison. The work on this page — built around how to rank a home services business on Google and home services lead generation SEO — is about changing that: building a local presence that matches the quality of the work itself, as part of the wider{" "}
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
          Local pages start with the words homeowners use — the words behind near me home services SEO Lahore — and{" "}
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
          The work starts with the services themselves. Each trade gets its own page that explains what is included, what it typically costs to call out — in general terms the business is comfortable stating — and what the homeowner should expect on the visit. Area pages then say where that work is done, so a search made in one neighbourhood finds a business that genuinely covers it. The phone number and booking options sit where they can be reached in one tap, because a homeowner in a hurry will not search a site for them — the first thing I check as a home services SEO consultant.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The local profile is built at the same time. The Google Business Profile for home services Lahore is filled out completely — services, hours, service area and photographs of real work — and customers are encouraged to leave honest reviews after a job is finished. Business details are kept consistent across directories, so a customer who finds a different number somewhere else is never sent to a dead line. Over time, the business becomes the name that homeowners in its area keep seeing, and the enquiries stop depending on luck — the standard people check when they compare the best home services SEO company options.
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
          The strategy is to be found where the job is. A homeowner searches for a trade and a place together, so the website is organised that way: services crossed with the areas they are offered in, each page able to stand on its own in search. The business profile carries the same structure in map results, backed by reviews from real customers in those same areas. And because so much of this work is urgent, every page is built for a phone and a single action — calling — rather than for reading at leisure. That is home services SEO Lahore in the plain sense, and home services SEO Pakistan built around the business's own areas. It is also the work people mean when they look for the best home services SEO company Lahore has.
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
          This is for plumbers, electricians, AC technicians, painters, cleaners, pest control teams, solar installers and other home service businesses in Pakistan that work in a defined area and want the phone to ring steadily — local SEO for home services Pakistan, built around real trades and real areas. It suits small teams and growing firms alike, as long as the work is real and the service area is clear, which is where local SEO for plumbers Pakistan starts: real trades, real areas. If your customers already recommend you once they have used you, but too few find you in the first place, this is the work that changes that. It is the work people look for when they search for the best local SEO agency for home services Pakistan has.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Home services SEO for Lahore and Pakistan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Homeowners in Lahore search by trade and by area — DHA, Gulberg, Johar Town, Model Town, Cantt, Bahria Town and the neighbourhoods around them — and they search in both English and Urdu, usually on a phone — and local SEO for plumbers in Lahore starts from those same trade-and-area searches. The same pattern holds in Karachi, Islamabad and Rawalpindi, where a family wants someone reliable nearby, not a national directory — and local SEO for repair services Pakistan follows the same pattern, city by city. Seasons shape the work too: cooling in the summer heat, heating and damp in winter, repairs after the monsoon — and home services digital marketing Lahore plans around those seasons, not around generic posts. The work is planned around that: Local SEO for Home Services in Lahore means pages for the services and areas you actually cover, a profile that shows in map results — where Google Maps ranking for home services Lahore is won — and a site a homeowner can use with one hand while holding a torch in the other. That is Google Maps SEO for tradesmen Lahore, in the plain sense.
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
          title="Hire local SEO expert for home services — ready to talk?"
          description="Tell me about your trades and service area and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
