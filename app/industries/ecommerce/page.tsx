import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "E-Commerce SEO Services Pakistan | Grow Online Sales";
const DESCRIPTION =
  "E-commerce SEO for Pakistan online stores: product, category and technical optimisation that helps shoppers find your products and buy with confidence.";
const SLUG = "ecommerce";
const NAME = "E-Commerce SEO";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/industries/${SLUG}` },
  openGraph: {
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
        alt: "Abdul Rehman - Freelance SEO Consultant",
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
        alt: "Abdul Rehman - Freelance SEO Consultant",
      },
  ],
  },
};

const problems = [
  {
    title: "Thousands of products, no clear path to them",
    description:
      "Large catalogues hide their own best sellers. Thin category pages, filters that create near-duplicate URLs and product pages with copied supplier text leave search engines with little to rank and shoppers with little to trust.",
  },
  {
    title: "Shoppers who leave before they buy",
    description:
      "Slow pages, confusing navigation and missing delivery or payment details push visitors away at the last step. A store can win the click and still lose the order if the path to checkout feels uncertain.",
  },
  {
    title: "Marketplaces take the search, you take the cost",
    description:
      "Large marketplaces dominate the searches your customers make, while your own store stays invisible. Every order then arrives through someone else, with their fees and their rules attached.",
  },
];

const deliverables = [
  "Product and category page optimisation, with titles, descriptions and headings written for the way shoppers actually search.",
  "Site structure and internal linking that guides search engines — and visitors — from a category to the right product in as few steps as possible.",
  "Technical review of crawl, indexing and faceted navigation, so duplicate and near-duplicate pages stop competing with each other.",
  "Product schema and review markup review, so listings can show price, availability and ratings where search engines support them.",
  "Page speed and mobile usability work, because most Pakistani shoppers browse on a phone and leave slow stores quickly.",
  "Content for buying guides and category hubs that answer the questions shoppers ask before they choose a product.",
  "Out-of-stock and discontinued product handling, so dead pages stop wasting crawl budget and visitors are guided to a live alternative.",
  "A monthly report in plain language: which products and categories gained visibility, and what changed because of it.",
];

const strategyPoints = [
  "Start with the pages that already earn revenue, and fix those before chasing new keywords.",
  "Make category pages genuinely useful — with guidance, comparisons and real product detail — instead of thin lists of links.",
  "Treat site speed and mobile experience as ranking work, not as an afterthought.",
  "Use search data to decide what to stock, feature and promote, not guesswork about what might sell.",
  "Build the store as the destination, so search brings customers to you directly rather than through a marketplace.",
];

const processSteps = [
  {
    title: "Audit the store",
    description:
      "The catalogue, crawl behaviour and current rankings are reviewed, so the work starts from what the store actually needs.",
  },
  {
    title: "Fix the foundations",
    description:
      "Structure, duplicate pages, speed and mobile issues are corrected, giving search engines a store they can crawl and trust.",
  },
  {
    title: "Optimise what sells",
    description:
      "Product and category pages are rewritten and rebuilt around real search demand, starting with the lines that matter most.",
  },
  {
    title: "Grow and report",
    description:
      "Content, links and measurement continue month by month, with plain-language reporting on the products that gained ground.",
  },
];

export default function EcommerceSeoPage() {
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
            E-Commerce SEO in Pakistan
          </span>{" "}
          — Turn Search into Sales
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Bring shoppers in. Turn visits into orders.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Search that brings shoppers to the products they already want — and a store that turns that visit into an order.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/blog/ecommerce-seo-pakistan" className="font-semibold text-neutral-900 underline">E-commerce SEO</Link> is the work of making an online store easy for shoppers — and for search engines — to understand. It covers the pages where money changes hands: product pages, category pages and the structure that connects them. When those pages are clear, fast and written around the way people actually search, the store starts appearing for the searches that already carry buying intent, instead of only for its own brand name. That traffic arrives without paying for every click, and it keeps arriving after the work is done.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The challenge for a Pakistan online store is different from the challenge for a brochure website. A store may hold hundreds or thousands of products, each with its own page, and every one of those pages can help or hurt. Filters, sorting options and variants can multiply URLs until search engines waste their time on copies. Supplier descriptions repeated across dozens of stores give search engines nothing new to rank. And shoppers in Pakistan browse mostly on phones, often on slower connections, so a heavy page is a lost sale before the product is even seen. This page explains how that set of problems is approached, as part of the wider{" "}
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
          The starting point is knowing what your customers actually search for — and{" "}
          <Link href="/services/keyword-research" className="font-semibold text-neutral-900 underline">
            keyword research
          </Link>{" "}
          is how that picture is built.
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
          The work begins with the catalogue itself. Products are grouped the way shoppers think, not the way a warehouse is organised, and category pages are given real content: guidance on choosing, comparisons between options and answers to the questions people ask before they buy. Product pages get descriptions written for the buyer in front of them, with the details that settle a purchase — sizes, materials, compatibility, delivery and returns — stated plainly. Internal links then connect the pieces, so a visitor who lands on a guide can reach the product in one or two clicks, and search engines can follow the same path.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The <Link href="/services/technical-seo" className="font-semibold text-neutral-900 underline">technical side</Link> runs alongside it. Faceted navigation is controlled so that filters do not flood search results with copies of the same page. Slow images are compressed, heavy scripts are trimmed, and the store is checked on a real phone rather than only on a fast office connection. Structured data is added where it helps listings show price and availability. None of this is a trick: it is the store made easier to crawl, easier to load and easier to buy from — the three things search engines and shoppers both reward.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included, and every change is reported in plain language, so you can see what was done to the store and why.
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
          The strategy is to treat the store as a shop, not as a pile of pages. In a real shop, the best sellers are near the front, the shelves are labelled in the words customers use, and nobody has to walk through the stockroom to find what they came for. The same logic applies online: the products that earn the most get the most attention, the categories carry the words shoppers type, and nothing important sits more than a couple of clicks from the homepage. Search data guides those decisions — what people ask, which products they compare and where they give up — so the store improves where it matters most, rather than everywhere at once.
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
          This is for online stores in Pakistan that already sell but rely too heavily on paid ads or marketplaces for their orders. It suits shops with a real catalogue and real stock, where the website is the business rather than a side project — fashion, electronics, beauty, home goods, groceries and any store where shoppers compare before they buy. If your store gets traffic but too few orders from search, or gets orders only when you pay for them, this is the work that changes the balance.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          E-commerce SEO for Pakistan stores
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Shoppers in Pakistan search in a mix of English and Urdu terms, compare prices across several stores and marketplaces, and often pay on delivery — so trust signals matter as much as rankings. Delivery times, cash-on-delivery options, return policies and clear contact details all shape whether a visitor becomes a buyer, and they shape what search engines show too. A Lahore store may serve customers nationwide, while a store in Karachi or Islamabad faces the same questions from a different city. The work is planned around that reality: pages written for how Pakistani shoppers actually search and decide, on the phones they actually use, with the delivery and payment details they actually need to see.
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
          title="Ready to talk about e-commerce SEO?"
          description="Tell me about your store and goals and I'll reply with an honest assessment of what this service can — and can't — do for you."
        />
      </div>
    </main>
  );
}
