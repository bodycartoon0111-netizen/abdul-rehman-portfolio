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

const TITLE = "Off-Page SEO Services Pakistan | Earn Authority & Links";
const DESCRIPTION =
  "Off-page SEO services for Pakistan businesses: digital PR, link earning and authority building that raise trust with search engines and bring visitors.";
const SLUG = "off-page-seo";
const NAME = "Off-Page SEO";

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
    title: "Great pages nobody has vouched for",
    description:
      "Your content may be accurate and useful, yet search engines have no outside evidence that anyone values it. Without links and mentions, even strong pages struggle to be believed.",
  },
  {
    title: "Competitors with years of authority",
    description:
      "Established competitors have collected links and mentions over years, and that history shows in their rankings. A new or quiet site needs its own evidence before it can stand beside them.",
  },
  {
    title: "Local signals that do not add up",
    description:
      "A Google Business Profile that is thin, listings that disagree about your details, and no local mentions leave search engines unsure which business to show. Local customers search, and see someone else.",
  },
];

const deliverables = [
  "Link audit of your current backlinks, separating the links that help from the ones that do nothing or harm.",
  "Digital PR angles and outreach to publications and sites your customers actually read.",
  "Linkable content ideas — guides and resources other sites will want to reference.",
  "Local citation and directory work, keeping your business name, address and phone consistent.",
  "Google Business Profile review, with the gaps that weaken local visibility filled in.",
  "Competitor link gap analysis, showing where rivals earn links that you could earn too.",
  "Broken-link and unlinked-mention recovery, turning mentions your site already has into links.",
  "A monthly link and mention report, in plain language, showing what was earned and where it came from.",
];

const strategyPoints = [
  "Earn links by making something worth linking to, before asking anyone for a link.",
  "Prefer relevant, local and industry links over large numbers of unrelated ones.",
  "Keep business details identical everywhere, so local signals reinforce each other.",
  "Study where competitors earn their links, and earn the same kinds of links honestly.",
  "Reject shortcuts — bought links and link schemes risk the rankings they promise to improve.",
];

const processSteps = [
  {
    title: "Audit the profile",
    description:
      "Your current links, mentions and listings are reviewed, so the work starts from evidence rather than from assumptions.",
  },
  {
    title: "Plan the angles",
    description:
      "Content and PR angles are chosen around what other sites want to reference and what your customers want to read.",
  },
  {
    title: "Earn the links",
    description:
      "Outreach, digital PR and local work run together, each link earned in the open from a real site for a real reason.",
  },
  {
    title: "Report and repeat",
    description:
      "Earned links and mentions are reported in plain language, and the work that is winning is repeated the next month.",
  },
];

export default function OffPageSeoPage() {
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
            Off-Page SEO Services in Pakistan
          </span>{" "}
          — Earn Authority That Lasts
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Trust search engines can see.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Trust that search engines can see — earned off your site, from the places your customers already read.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Off-page SEO is the reputation side of the wider{" "}
          <Link href="/services/seo" className="font-semibold text-neutral-900 underline">
            SEO services in Lahore
          </Link>{" "}
          I offer: everything that happens away from your website and still shapes how search engines judge it. The pages on your site say what you do; the web around it says whether anyone believes you. Links, mentions, reviews and local listings are the signals search engines use to settle that question, and this service earns them honestly — through work worth linking to, rather than through shortcuts that can damage a site for years.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          A website can have good content and solid technical foundations and still sit below competitors, because search engines do not only judge pages — they judge reputations. If nobody links to your site, nobody mentions it, and no local listing confirms it, there is little for a search engine to trust. The result is familiar: pages that deserve to rank sit on the second page while older, better-known competitors take the enquiries, even when their content is no better than yours. Off-page SEO is the work that closes that trust gap, steadily and openly.
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
          Good off-page work starts with pages worth linking to — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how those pages are chosen.
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
          The approach starts with something worth linking to. Nobody links to a service page out of kindness, so the work creates the material other sites want to reference — clear guides, useful data, and pages that answer questions better than anything else available. Then it earns attention for that material: digital PR aimed at publications and sites your customers actually read, outreach to relevant local and industry sites, and listings that keep your business details consistent wherever they appear. Every link is earned in the open, from real sites, for a real reason.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/services/local-seo" className="font-semibold text-neutral-900 underline">Local work</Link> runs alongside it. For a Lahore business, much of the authority that matters is local: your Google Business Profile, local directories and the mentions that tie your business to the city. Those signals are checked, corrected and built up, so that when someone searches for your service in Lahore, the evidence points to you. The same applies across Pakistan: city pages, local coverage and consistent listings all add up to a reputation search engines can verify. Nothing here is bought or faked — earned authority is slower, but it is the kind that lasts, and it is the kind that survives the updates that punish shortcuts.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included, and every link it earns is reported with its source, so you can see exactly what was gained and where it came from.
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
          The strategy is to earn trust the way a real business earns it: by doing something worth noticing, and then making sure the right people notice it. That is why the work starts with content and only then moves to outreach — a link to a page that nobody would want to read is a link that nobody will give. Relevance is the second rule: a handful of links from sites your customers trust is worth more than hundreds from sites nobody in your market has heard of. And patience is the third: authority compounds month by month, and the links earned this month make the next month easier. There is no step in the plan that depends on search engines not noticing what was done, because everything about it is open and honest.
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
          This service is for businesses whose on-page work is already in decent shape but whose rankings have stalled — sites with good content and sound foundations that still sit below older competitors. It suits Lahore businesses that need stronger local visibility, Pakistan-wide businesses competing with national brands, and owners who understand that reputation takes time and would rather earn it than buy it. If your site is trustworthy but nobody outside it has said so yet, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Off-page SEO for Pakistan businesses
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Authority in Pakistan is earned locally as much as nationally. A Lahore business benefits most from links and mentions rooted in the city — local publications, community sites, business directories and the local searches that follow them — while a Pakistan-wide business needs the same care spread across Karachi, Islamabad, Rawalpindi and beyond. The work is planned around that geography, with outreach and listings aimed at the places your customers actually find you. Because the links are earned from real Pakistani and international sites for real reasons, the authority they build is the kind that lasts through search updates rather than vanishing with them.
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
            href="/services/keyword-research"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Keyword Research
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
          title="Ready to talk about Off-Page SEO?"
          description="Tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
