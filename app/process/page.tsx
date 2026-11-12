import type { Metadata } from "next";
import { Compass, Hammer, Rocket, Target, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const processDescription =
  "Discover, Strategy, Build, Launch, Optimize: how Abdul Rehman takes a project from market research and a growth plan to launch and ongoing optimization.";

export const metadata: Metadata = {
  title: {
    absolute: "Our Process | Abdul Rehman SEO Consultant Lahore",
  },
  description: processDescription,
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process | Abdul Rehman SEO Consultant Lahore",
    description: processDescription,
    url: "/process",
    type: "website",
  },
};

const steps = [
  {
    name: "Discover",
    body: "We map your market, your competitors, and the search demand you can actually win — before anything is built or spent.",
    icon: Compass,
  },
  {
    name: "Strategy",
    body: "One growth plan: which channels, which pages, which campaigns — and the exact numbers that will define success.",
    icon: Target,
  },
  {
    name: "Build",
    body: "Design, development, and tracking instrumented from day one. No 'we'll add analytics later' — later never comes.",
    icon: Hammer,
  },
  {
    name: "Launch",
    body: "Ship, submit, switch on: sitemaps, Search Console, ad accounts, automations — everything verified live.",
    icon: Rocket,
  },
  {
    name: "Optimize",
    body: "Read the data, double down on winners, cut losers. This is where growth compounds instead of plateauing.",
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
            Our <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">Process</span>
          </h1>
          <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Discover. Strategy. Build. Launch. Optimize.</p>
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
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground">Step</span>
                    <span className="ml-2 font-mono text-sm font-bold text-primary-600 dark:text-primary-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <step.icon
                    className="size-5 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {step.name}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
