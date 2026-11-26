import type { Metadata } from "next";
import { Compass, Hammer, Rocket, Target, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd } from "@/lib/seo";

const processDescription =
  "My SEO process step by step, from audit to ranking: the SEO process Pakistan small businesses trust. Discover, Strategy, Build, Launch, Optimize.";

export const metadata: Metadata = {
  title: {
    absolute: "SEO Process Step by Step | Abdul Rehman",
  },
  description: processDescription,
  alternates: { canonical: "/process" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "SEO Process Step by Step | Abdul Rehman",
    description: processDescription,
    url: absoluteUrl("/process"),
    type: "website",
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
    title: "SEO Process Step by Step | Abdul Rehman",
    description: processDescription,
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

const steps = [
  {
    name: "Discover",
    body: "We map your market, your competitors, and the search demand you can actually win — before anything is built or spent. This is my SEO onboarding process and the start of the technical SEO process: I check how your site is built, how Google reads it, and what your customers in Lahore are actually searching for.",
    icon: Compass,
  },
  {
    name: "Strategy",
    body: "One growth plan: which channels, which pages, which campaigns — and the exact numbers that will define success. If you are wondering what happens after an SEO audit, this is it — I turn the findings into your plan, and I will tell you how long does each SEO step take before we start, so there are no surprises.",
    icon: Target,
  },
  {
    name: "Build",
    body: "Design, development, and tracking instrumented from day one. No 'we'll add analytics later' — later never comes. This is the SEO implementation process: the technical fixes, the local SEO process for your Google Business Profile and location pages, and the SEO content process — the pages and posts your customers actually need.",
    icon: Hammer,
  },
  {
    name: "Launch",
    body: "Ship, submit, switch on: sitemaps, Search Console, ad accounts, automations — everything verified live. This is how SEO is done step by step at launch: every page checked, every redirect tested, and the SEO process checklist for launch ticked off before I call it done.",
    icon: Rocket,
  },
  {
    name: "Optimize",
    body: "Read the data, double down on winners, cut losers. This is where growth compounds instead of plateauing. The SEO optimization process never stops: my SEO monthly process — and the SEO monthly process Pakistan clients stay on — pairs the SEO reporting process with the next round of fixes, so you always know how SEO process works in practice and what changed.",
    icon: TrendingUp,
  },
];

export default function ProcessPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Our Process", path: "/process" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Our Process" }]}
        />
        <header className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Process</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
            My{" "}<span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO process Pakistan</span>{" "}— Step by Step
          </h1>
          <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">My SEO process Discover Strategy Build Launch Optimize — five steps, in order, every time.</p><p className="mt-4 max-w-2xl text-lg text-muted-foreground">So, what is the SEO process? It is the order I follow on every project: a careful SEO audit process step by step, then a step by step SEO strategy built from what the audit found. This page is the SEO process explained in plain words — how SEO works step by step, and how I do SEO step by step, from the first call to the monthly reporting. It is the freelance SEO process I run for every client, whether yours is a new website or a business that has been around for years.</p><p className="mt-4 max-w-2xl text-lg text-muted-foreground">If you have ever asked how does SEO work step by step for beginners, here is the short answer: we discover, we plan, we build, we launch, we optimise — and then we repeat what works. Think of this as a step by step SEO process for beginners, and the same SEO working process for beginners I use for every client: the SEO process for small business owners, the SEO process for startups, and the SEO process for new website launches, paced to your budget.</p><p className="mt-4 max-w-2xl text-lg text-muted-foreground">What is the SEO process in Pakistan? It is the same five steps, shaped around how SEO works in Pakistan — local search behaviour, English and Urdu queries, and the competition in your own city. This is how I do SEO step by step in Lahore: the SEO process in Lahore Pakistan clients get from me starts with an SEO audit process Pakistan review, then a clear SEO strategy process Pakistan plan, and the same SEO working process Pakistan businesses can follow and check at every stage. It covers the SEO process for new website Pakistan launches too, and it is the freelance SEO process Pakistan founders usually ask me for first.</p><p className="mt-4 max-w-2xl text-lg text-muted-foreground">If you are new to this, my SEO process Pakistan for beginners starts right here: the SEO process step by step Pakistan version and the SEO process step by step Lahore version are the same five steps, paced to your budget. It is the SEO process for small business Pakistan owners and the SEO process for small business Lahore owners — an SEO process Lahore for small business teams, and an SEO process Pakistan step by step for beginners who want to see the work before they pay for it.</p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {processDescription}
          </p>
        </header>
        <section aria-labelledby="process-steps-heading" className="mt-12">
          <h2
            id="process-steps-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            How we work
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.name}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-pine hover:bg-pine"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground group-hover:text-white/85">Step</span>
                    <span className="ml-2 font-mono text-sm font-bold text-primary-600 group-hover:text-white dark:text-primary-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <step.icon
                    className="size-5 text-muted-foreground/60 group-hover:text-white/85"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground group-hover:text-white">
                  {step.name}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground group-hover:text-white/85">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section><p className="mt-12 max-w-2xl text-lg text-muted-foreground">That is the whole SEO workflow step by step: discover, plan, build, launch, optimise — then repeat what the data says works. It is my SEO process from audit to ranking, the same in Lahore and anywhere else in Pakistan.</p>
      </div>
      <CtaBand />
    </>
  );
}
