import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Education SEO Services Pakistan | Schools & Courses";
const DESCRIPTION =
  "Education SEO for Pakistan schools, academies and course providers: programme, admissions and local optimisation that helps learners find your courses.";
const SLUG = "education";
const NAME = "Education SEO";

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
    title: "Parents and students cannot compare you",
    description:
      "A school or academy page that hides its courses, timings, fees structure and admissions process gives a family nothing to compare. They move on to the institution whose website answers their questions.",
  },
  {
    title: "Courses buried where nobody searches",
    description:
      "A strong course can sit on a website that search engines barely crawl: one page for everything, no programme pages, no local pages and no content that matches what learners actually type.",
  },
  {
    title: "Admissions season passes you by",
    description:
      "Families search intensely in the weeks before admissions open. A site with no admissions pages and no timely content misses that window entirely, and the next window is a year away.",
  },
];

const deliverables = [
  "Programme and course pages that explain what is taught, who it is for, how long it takes and how to apply, in plain language.",
  "Admissions pages for each intake, kept current with dates, entry requirements and the steps a family should follow.",
  "Local pages for each campus or branch, so families searching near a specific area find the location that serves them.",
  "Google Business Profile optimisation and local citation work for every campus, keeping names, addresses, phones and hours consistent.",
  "Guides for students and parents: choosing a course, preparing for entry tests, understanding what a programme leads to.",
  "Teacher and faculty pages that introduce the people behind the teaching, so families can see who their children will learn from.",
  "Technical review of the site — speed, mobile usability and structure — because most families research courses on a phone.",
  "A monthly report in plain language: which courses and campuses gained visibility, and what learners searched to find you.",
];

const strategyPoints = [
  "Start with the courses that fill first, and make those pages the best on the site.",
  "Answer the questions parents ask before they ask them — admissions, timings, transport and what happens after the course.",
  "Build one strong page per course and per campus, instead of one page trying to say everything.",
  "Plan content around the admissions calendar, so the right pages are ready before the search season begins.",
  "Let real teaching do the talking: what students learn, and what they can do with it afterwards.",
];

const processSteps = [
  {
    title: "Audit the offering",
    description:
      "The courses, campuses and current pages are reviewed, so the work starts from what families see when they search today.",
  },
  {
    title: "Build the course pages",
    description:
      "Pages for each programme and campus are created or rebuilt with the details a family needs before they apply.",
  },
  {
    title: "Strengthen local presence",
    description:
      "Business profiles, listings and local signals are corrected and built up, so each campus appears in the searches made near it.",
  },
  {
    title: "Report by intake",
    description:
      "Visibility by course and campus is reported in plain language, timed around admissions, and the pages that bring applications get more attention.",
  },
];

export default function EducationSeoPage() {
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
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Industry</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
            Education SEO in Pakistan
          </span>{" "}
          — Help Students Find You
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Answer first — and win the application.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          A family choosing a school or a course searches, compares and decides online — and they apply to the institutions whose websites answer them first.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Education SEO is the work of making a school, academy or course provider easy to find and easy to choose. It covers the pages families rely on: the programmes you teach, the campuses you run, the admissions process and the people who teach. When those pages are complete, current and written in plain language, the institution starts appearing for the searches that lead to applications — a course and a city, a school near an area, an entry test and a date — instead of only for its own name. That visibility brings enquiries from families who have already narrowed their choice.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Choosing education is a decision a family makes carefully, often over weeks, and the website is where most of that thinking happens. Parents compare courses, timings, locations and fees; students look at what they will learn and what it leads to. A website that hides those answers — or answers them with a single thin page — loses to the institution that explains itself clearly. The work on this page is about making that explanation findable, as part of the wider{" "}
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
          Course pages start with the words learners use — and{" "}
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
          The work begins with the offering itself. Each course gets its own page: what is taught, who it is for, how long it runs, what a student needs to join and how to apply. Each campus gets its own page too, with its location, timings and the courses taught there. Admissions pages are kept current for each intake, so a family searching during admissions season finds the dates and requirements they need instead of last year's information. Internal links connect the course to its campus and the campus to its admissions page, so a visitor can move from a search to an application without getting lost.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Trust and local visibility are built around those pages. The business profile for every campus is completed and kept accurate, listings across the web are made consistent, and guides are written for the questions families ask — how to choose between courses, how to prepare for an entry test, what a programme prepares a student for. Nothing is overstated: the site earns applications by being clear, complete and honest about what is on offer, which is exactly what both families and search engines are looking for.
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
          The strategy is to be the clearest answer at each stage of a family's decision. First they search for a type of course; then they compare providers; then they check a campus near them; finally they look for admissions dates. The website is organised in that order, with a page for each step and a clear next action on every one. Content is planned around the admissions calendar, so the pages families need are ready before the searches arrive — and the institution that explains itself best is the one that receives the application.
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
          This is for schools, academies, tuition centres, professional training institutes and online course providers in Pakistan that take admissions and want those applications to come through search. It suits institutions with real courses and real campuses, where the website should reflect the quality of the teaching. If your courses fill by reputation but your website is not the one families find when they search, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Education SEO for Lahore and Pakistan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Families in Lahore search for schools, academies and courses by area — DHA, Gulberg, Johar Town, Model Town, Cantt, Bahria Town and the neighbourhoods around them — and by the subject or programme they want, in both English and Urdu. The same pattern holds in Karachi, Islamabad and Rawalpindi, where a parent wants a good institution near home and a student wants a course that leads somewhere. Online courses add another audience: learners anywhere in Pakistan searching for skills they can learn from home. The work is planned around that: pages for the courses and campuses you actually run, and local signals that tell search engines where each one belongs.
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
          title="Ready to talk about education SEO?"
          description="Tell me about your courses and campuses and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
