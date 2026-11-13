import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "SaaS SEO Services Pakistan | Grow Startups Organically";
const DESCRIPTION =
  "SaaS SEO for Pakistan startups: product-led content, technical and comparison-page optimisation that turns search into signups, trials and steady growth.";
const SLUG = "saas-startups";
const NAME = "SaaS Startup SEO";

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
    title: "A good product nobody finds",
    description:
      "The software works, the early users like it, but the website is a single landing page with nothing for search engines to rank. Every signup depends on paid ads (PPC) or personal introductions.",
  },
  {
    title: "Blog posts that bring readers, not users",
    description:
      "Traffic grows, signups do not. The content answers general questions but never reaches the people comparing tools, weighing alternatives or ready to try something new.",
  },
  {
    title: "A site that hides its own product",
    description:
      "Features, integrations and use cases live behind login walls or inside JavaScript that search engines struggle to read. The product's best arguments never reach search at all.",
  },
];

const deliverables = [
  "Product-led content planning: pages for the problems your software solves, the audiences it serves and the features buyers compare.",
  "Comparison and alternative pages that answer the searches buyers make when choosing between tools — written honestly, without attacking competitors.",
  "Feature and use-case page optimisation, so each part of the product can be found by the people looking for exactly that.",
  "Technical review of the marketing site and documentation: crawl, indexing, JavaScript rendering, speed and structure.",
  "Documentation and help-centre SEO, so support searches bring new users to your product instead of to a competitor's guide.",
  "Pricing and signup page optimisation, making the path from search to trial as short and as clear as possible.",
  "Internal linking between the blog, the product pages and the docs, so readers move naturally from a question to a trial.",
  "A monthly report in plain language: which pages brought signups and trials, and what the next pages should cover.",
];

const strategyPoints = [
  "Start with the searches closest to a signup, and build outward to broader topics only after those are won.",
  "Let the product do the persuading: show it working, rather than writing about it in the abstract.",
  "Write comparison pages that are fair enough for a sceptical buyer to trust.",
  "Treat documentation as marketing, because the people reading it are already using — or about to use — software like yours.",
  "Measure signups and trials, not page views, and let that decide what to write next.",
];

const processSteps = [
  {
    title: "Audit the funnel",
    description:
      "The marketing site, product pages and analytics are reviewed, so the work starts from how people actually find — and leave — the product today.",
  },
  {
    title: "Fix the foundations",
    description:
      "Crawl, indexing, speed and structure issues are corrected, so search engines can read the parts of the site that sell the product.",
  },
  {
    title: "Build the product pages",
    description:
      "Feature, use-case and comparison pages are created around the searches buyers make, each one leading clearly to a trial or signup.",
  },
  {
    title: "Grow and measure",
    description:
      "Content and links grow month by month, with plain-language reporting on the pages that brought signups and trials.",
  },
];

export default function SaasStartupsSeoPage() {
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
            SaaS SEO in Pakistan
          </span>{" "}
          — Turn Search into Signups
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Be the product they find — not someone else's.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Your future users are already searching for the problem you solve. This work makes sure they find your product, not someone else's.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          SaaS SEO is the work of turning search into a steady source of signups for a software product. It goes beyond a landing page: feature pages, use-case pages, comparison pages and documentation that together answer every search a buyer makes on the way to a decision. When those pages are built around the words buyers actually use — the problem, the alternative they are leaving, the integration they need — the product starts appearing before the trial starts, rather than only after a paid ad. That traffic costs nothing per click, and it compounds as the library grows.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Startups in Pakistan face a particular version of this problem. Many sell to customers abroad, where they compete with established tools that have years of content behind them. Others sell at home, where buyers compare carefully and want proof before they commit. Either way, a startup cannot buy its way to growth for long: paid acquisition costs rise while the product is still improving. Search is the channel that rewards a better product page over a bigger budget, and that is why it suits a young company, as part of the wider{" "}
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
          Buyer searches come before product searches — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how the buying journey is mapped.
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
          The work begins with the buyer's journey. A person rarely searches for a product name they have never heard; they search for the problem, then for the type of tool that solves it, then for comparisons, and only then for a name. The site is built to meet them at each step: guides that explain the problem honestly, pages that show how the product handles it, and comparison pages that set your tool fairly beside the alternatives buyers are already weighing. Every page ends with the same clear next step — try it — and the trial itself is made easy to start.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The <Link href="/services/technical-seo" className="font-semibold text-neutral-900 underline">technical side</Link> matters more for software than for most industries, because so much of a SaaS site is built in JavaScript and so much of the value sits behind a login. The marketing pages are made readable to search engines, the documentation is opened up to search rather than hidden, and the site is made fast on every device. Internal links connect the blog to the product and the product to the docs, so a reader who arrives with a question can reach a trial without ever feeling sold to.
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
          The strategy is to build a library that sells while the team sleeps. Each page is an asset aimed at one part of the buying journey, and the library grows in the order buyers actually travel: the searches closest to a signup first, the broader questions later. The product stays at the centre — shown, demonstrated and compared — because a startup's advantage is rarely a bigger marketing budget; it is a product that does one thing better than the tools around it. Search is how that advantage reaches the people who are already looking for it.
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
          This is for SaaS startups and young software companies in Pakistan — a live product, early users, and a need for growth that does not depend on ad spend alone. It suits teams selling to businesses or to consumers, at home or abroad, where buyers research before they sign up. If your product works and your users stay, but too few new users find you through search, this is the work that changes that.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          SaaS SEO for Pakistan startups
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Lahore's startup scene — and the scenes growing in Karachi and Islamabad — produce software for both local and international customers, and the search work differs for each. A product selling abroad competes on English-language searches against tools worldwide, where clear comparison pages and strong documentation matter most. A product selling at home answers buyers who want local support, local payment options and a team they can reach. The work is planned around who actually buys: the audience, the language and the comparisons they make, so the pages built are the pages your buyers need.
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
            href="/services/technical-seo"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Technical SEO
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
          title="Ready to talk about SaaS SEO?"
          description="Tell me about your product and users and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
