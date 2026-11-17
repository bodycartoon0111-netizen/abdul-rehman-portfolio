import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

const TITLE = "Ecommerce SEO Services | Abdul Rehman";
const DESCRIPTION =
  "Ecommerce SEO services: SEO for E-commerce in Pakistan — product, category and technical optimisation that turns search into sales and orders.";
const SLUG = "ecommerce";
const NAME = "E-Commerce SEO";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/industries/${SLUG}` },
  openGraph: { siteName: BRAND_NAME,
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
      "Slow pages, confusing navigation and missing delivery or payment details push visitors away at the last step — online store SEO Pakistan work starts with that last step. A store can win the click and still lose the order if the path to checkout feels uncertain.",
  },
  {
    title: "Marketplaces take the search, you take the cost",
    description:
      "Large marketplaces dominate the searches your customers make, while your own store stays invisible. Every order then arrives through someone else, with their fees and their rules attached.",
  },
];

const deliverables = [
  "Product page SEO Pakistan work starts with product and category page optimisation, with titles, descriptions and headings written for the way shoppers actually search.",
  "Category page SEO for ecommerce starts with site structure and internal linking that guides search engines — and visitors — from a category to the right product in as few steps as possible.",
  "An ecommerce website SEO audit Pakistan stores start with: a technical review of crawl, indexing and faceted navigation, so duplicate and near-duplicate pages stop competing with each other.",
  "Ecommerce SEO audit services include a product schema and review markup review, so listings can show price, availability and ratings where search engines support them.",
  "Ecommerce site speed SEO: page speed and mobile usability work, because most Pakistani shoppers browse on a phone and leave slow stores quickly.",
  "Ecommerce content marketing SEO means content for buying guides and category hubs that answer the questions shoppers ask before they choose a product.",
  "A Shopify SEO expert Pakistan stores hire handles out-of-stock and discontinued products too, so dead pages stop wasting crawl budget and visitors are guided to a live alternative.",
  "A monthly report in plain language: which products and categories gained visibility, and what changed because of it.",
];

const strategyPoints = [
  "Start with the pages that already earn revenue — how to rank ecommerce website in Pakistan stores starts there — and fix those before chasing new keywords.",
  "Make category pages genuinely useful — with guidance, comparisons and real product detail — instead of thin lists of links. That is how to rank Shopify store in Pakistan pages that shoppers compare before they buy.",
  "Treat site speed and mobile experience as ranking work, not as an afterthought.",
  "Use search data to decide what to stock, feature and promote, not guesswork about what might sell.",
  "Build the store as the destination, so search brings customers to you directly rather than through a marketplace.",
];

const processSteps = [
  {
    title: "Audit the store",
    description:
      "An ecommerce SEO audit reviews the catalogue, crawl behaviour and current rankings, so the work starts from what the store actually needs.",
  },
  {
    title: "Fix the foundations",
    description:
      "Structure, duplicate pages, speed and mobile issues are corrected — the work an ecommerce SEO agency Lahore stores hire me for — giving search engines a store they can crawl and trust.",
  },
  {
    title: "Optimise what sells",
    description:
      "An ecommerce SEO consultant for small business rewrites product and category pages around real search demand, starting with the lines that matter most.",
  },
  {
    title: "Grow and report",
    description:
      "Ecommerce link building, content and measurement continue month by month — the ecommerce SEO checklist Pakistan stores need, worked through in order — with plain-language reporting on the products that gained ground.",
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
            Ecommerce SEO Services
          </span>{" "}
          — Turn Search into Sales
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Bring shoppers in. Turn visits into orders.</p>
        <p className="mt-4 text-xl font-medium text-neutral-700">
          Search that brings shoppers to the products they already want — and a store that turns that visit into an order.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <Link href="/blog/ecommerce-seo-pakistan" className="font-semibold text-neutral-900 underline">E-commerce SEO</Link> is the work of making an online store easy for shoppers — and for search engines — to understand. SEO for ecommerce stores covers the pages where money changes hands: product pages, category pages and the structure that connects them. When those pages are clear, fast and written around the way people actually search, SEO for ecommerce websites means the store starts appearing for the searches that already carry buying intent, instead of only for its own brand name. That traffic arrives without paying for every click, and it keeps arriving after the work is done.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The challenge for a Pakistan online store — e-commerce SEO Pakistan work — is different from the challenge for a brochure website. A store may hold hundreds or thousands of products, each with its own page, and every one of those pages can help or hurt. Filters, sorting options and variants can multiply URLs until search engines waste their time on copies. Supplier descriptions repeated across dozens of stores give search engines nothing new to rank. And shoppers in Pakistan browse mostly on phones, often on slower connections, so a heavy page is a lost sale before the product is even seen. This page explains how to do SEO for online store Pakistan problems like these, as part of the wider ecommerce SEO services Lahore stores ask me for, and the{" "}
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
          The starting point is ecommerce keyword research: knowing what your customers actually search for — and{" "}
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
          The work begins with the catalogue itself — and with how to increase online store sales with SEO. Products are grouped the way shoppers think, not the way a warehouse is organised, and category pages are given real content: guidance on choosing, comparisons between options and answers to the questions people ask before they buy. Product pages get descriptions written for the buyer in front of them, with the details that settle a purchase — sizes, materials, compatibility, delivery and returns — stated plainly. Internal links then connect the pieces, so a visitor who lands on a guide can reach the product in one or two clicks, and search engines can follow the same path.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The <Link href="/services/technical-seo" className="font-semibold text-neutral-900 underline">technical side</Link> runs alongside it: ecommerce technical SEO means faceted navigation is controlled so that filters do not flood search results with copies of the same page. Slow images are compressed, heavy scripts are trimmed, and the store is checked on a real phone rather than only on a fast office connection. Structured data is added where it helps listings show price and availability. None of this is a trick: it is the store made easier to crawl, easier to load and easier to buy from — the three things search engines and shoppers both reward.
        </p>
      </section>

      {/* Included / deliverables */}
      <section aria-labelledby="included-heading" className="mt-16 max-w-4xl">
        <h2 id="included-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          What is included
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          The work below is all included — the ecommerce SEO checklist I follow for every store, and the online store SEO services Lahore stores ask me for — and every change is reported in plain language, so you can see what was done to the store and why.
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
          Shopify SEO services Pakistan and WooCommerce SEO services follow one ecommerce SEO strategy: treat the store as a shop, not as a pile of pages. In a real shop, the best sellers are near the front, the shelves are labelled in the words customers use, and nobody has to walk through the stockroom to find what they came for. The same logic applies online: the products that earn the most get the most attention, the categories carry the words shoppers type, and nothing important sits more than a couple of clicks from the homepage. Search data guides those decisions — what people ask, which products they compare and where they give up — and that is how to rank ecommerce website pages that already earn, so the store improves where it matters most, rather than everywhere at once.
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
          SEO for online stores in Pakistan starts with shops that already sell but rely too heavily on paid ads or marketplaces for their orders. Ecommerce SEO for small business Pakistan suits shops with a real catalogue and real stock, where the website is the business rather than a side project — fashion, electronics, beauty, home goods, groceries and any store where shoppers compare before they buy. SEO for Shopify stores and SEO for WooCommerce stores are both built the same way: pages written for how shoppers search, and a store that loads fast on a phone. Ecommerce SEO for startups is the same work at a smaller scale: if your store gets traffic but too few orders from search, or gets orders only when you pay for them, this is the work that changes the balance.
        </p>
      </section>

      {/* Service area */}
      <section aria-labelledby="service-area-heading" className="mt-16 max-w-4xl">
        <h2 id="service-area-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          E-commerce SEO for Pakistan stores
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Shoppers in Pakistan search in a mix of English and Urdu terms, compare prices across several stores and marketplaces, and often pay on delivery — so trust signals matter as much as rankings. Delivery times, cash-on-delivery options, return policies and clear contact details all shape whether a visitor becomes a buyer, and they shape what search engines show too. Local SEO for ecommerce stores matters here too: a Lahore store may serve customers nationwide, while a store in Karachi or Islamabad faces the same questions from a different city. The best ecommerce SEO services Pakistan stores can hire are planned around that reality, and an ecommerce SEO expert Lahore stores can reach plans them that way: SEO for E-commerce in Pakistan means pages written for how Pakistani shoppers actually search and decide, on the phones they actually use, with the delivery and payment details they actually need to see.
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
          description="Tell me about your store and goals — as an ecommerce SEO consultant Pakistan stores can reach directly, I'll reply with an honest assessment of what this service can — and can't — do for you. If you want to hire ecommerce SEO expert Pakistan stores trust, that conversation starts here."
        />
      </div>
    </main>
  );
}
