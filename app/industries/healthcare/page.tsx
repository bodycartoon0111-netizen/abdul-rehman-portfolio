import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Healthcare SEO Services Pakistan | Clinics & Practices";
const DESCRIPTION =
  "Healthcare SEO for Pakistan clinics and practices: trustworthy, local and patient-focused optimisation that helps people find the care they need nearby.";
const SLUG = "healthcare";
const NAME = "Healthcare SEO";

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
    title: "Patients who cannot judge whom to trust",
    description:
      "A clinic page that hides the doctors, their qualifications, the timings and the location gives a worried patient nothing to hold on to. They go back to the results and choose a practice that answers those questions.",
  },
  {
    title: "Health content that says nothing useful",
    description:
      "Thin pages copied from general health sites do not help a patient decide, and search engines treat health content with extra care. Generic text earns neither trust nor rankings.",
  },
  {
    title: "Invisible in the searches that matter",
    description:
      "Most patients search for a specialty and a place — a dentist in Gulberg, a physiotherapist near DHA. A practice without strong local signals does not appear in those searches at all.",
  },
];

const deliverables = [
  "Service and specialty pages that describe what the practice treats and how appointments work, in plain language patients can understand.",
  "Practitioner and clinic pages that state qualifications, experience and timings clearly, so patients can make an informed choice.",
  "Google Business Profile optimisation and local citation work, keeping your name, address, phone and hours consistent everywhere.",
  "Health content planning: guides that answer the questions patients actually ask, written carefully and kept accurate.",
  "Technical review of the site — speed, mobile usability and structure — so patients on a phone can find and contact you without friction.",
  "Structured data review for the practice and its services, helping search engines present your information clearly.",
  "Review and reputation guidance: making it easy for satisfied patients to leave honest feedback, and responding to it properly.",
  "A monthly report in plain language: which services and locations gained visibility, and what patients searched to find you.",
];

const strategyPoints = [
  "Put trust first: qualifications, timings, location and what happens at an appointment, stated clearly on every key page.",
  "Write for patients, not for search engines — clear answers in plain language, with no exaggerated claims.",
  "Win the local searches around the clinic before chasing broader health terms.",
  "Keep health content accurate and current, and remove anything that is out of date.",
  "Make contacting the clinic the easiest action on every page, day or night.",
];

const processSteps = [
  {
    title: "Audit the practice online",
    description:
      "The website, business profile and local listings are reviewed, so the work starts from what patients see when they search today.",
  },
  {
    title: "Fix trust and local signals",
    description:
      "Practitioner details, timings and local listings are corrected and completed, giving patients and search engines a practice they can trust.",
  },
  {
    title: "Build the service pages",
    description:
      "Pages for each service and specialty are written around the searches patients actually make, with clear answers and next steps.",
  },
  {
    title: "Measure and maintain",
    description:
      "Visibility and enquiries are reported in plain language each month, and the pages that patients use most are kept accurate.",
  },
];

export default function HealthcareSeoPage() {
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
            Healthcare SEO in Pakistan
          </span>{" "}
          — Help Patients Find You
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Clear answers. A trustworthy first impression.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          When someone searches for care, they are often worried — and they choose the practice that answers them clearly and looks trustworthy.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Healthcare SEO is the work of making a clinic or practice easy to find and easy to trust. It covers the pages patients rely on: the services you offer, the people who provide them, the timings, the location and how to book. When those pages are complete, accurate and written in plain language, the practice starts appearing for the searches patients actually make — a specialty and a place, a treatment and a question — instead of only for its own name. That visibility brings enquiries from people who have already decided what they need.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Health searches are different from most others because the stakes are higher. A patient choosing a clinic is choosing whom to trust with their health, and search engines treat that choice with extra care: they look for evidence that the information is accurate, current and written by people who know the subject. A thin website with copied text and no practitioner details fails that test, however good the care itself may be. The work on this page is about bringing the website up to the standard of the practice, as part of the wider{" "}
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
          Patient searches start with their words, not yours — and{" "}
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
          The work begins with the practice itself: who works there, what they treat, when they are available and where the clinic is. Practitioner pages state qualifications and experience plainly. Service pages explain what each treatment involves, who it is for and how an appointment works, in language a patient can follow without a medical dictionary. Timings, fees where the practice chooses to publish them, and directions are kept current, because a patient who arrives to a closed clinic rarely comes back.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">Local visibility</Link> and trustworthy content are built around that foundation. The Google Business Profile is completed with accurate hours and services, listings across the web are made consistent, and guides are written to answer the questions patients ask before they book — what a first visit involves, how to prepare, what to bring. Nothing is exaggerated and nothing medical is promised: the site earns trust by being accurate, complete and easy to use, which is exactly what both patients and search engines are looking for.
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
          The strategy is to answer the patient before they have to ask. Someone searching for care wants to know three things: can this practice help me, can I trust the people there, and how do I reach them. The website is therefore organised around those questions, with service pages that explain, practitioner pages that reassure, and contact details that are never more than a tap away. Local search is the priority, because most patients choose a clinic near home or work — and the practices that win those local searches are the ones with the clearest, most complete presence.
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
          This is for clinics, dental practices, physiotherapy centres, diagnostic labs and other healthcare providers in Pakistan whose patients find them by searching. It suits practices with real practitioners and real premises, where the website should reflect the standard of care patients receive. If your practice is trusted by the patients who find it, but too few patients find it in the first place, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Healthcare SEO for Pakistan practices
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Patients in Pakistan search in English and in Urdu, on phones, often for a clinic near a specific area — Gulberg, DHA, Johar Town, Model Town, Bahria Town or their own neighbourhood in Karachi or Islamabad. They weigh the distance, the timings, the doctor's background and what other patients have said. A practice in Lahore serves a different set of local searches from one in Karachi, and both need pages and local signals built around their own area. The work is planned around that: local pages for the areas you serve, accurate information a patient can act on, and a presence that looks as careful as the care itself.
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
          title="Ready to talk about healthcare SEO?"
          description="Tell me about your practice and patients and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
