import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: {
    absolute: "About Abdul Rehman — SEO Specialist & Web Developer",
  },
  description:
    "Marketing brain, developer hands: the story and philosophy behind Abdul Rehman's SEO, performance marketing, and web development work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Abdul Rehman — SEO Specialist & Web Developer",
    description:
      "Marketing brain, developer hands: the story and philosophy behind Abdul Rehman's SEO, performance marketing, and web development work.",
    url: "/about",
  },
  keywords: [
    "Abdul Rehman",
    "SEO specialist",
    "web developer",
    "performance marketer",
    "digital growth consultant",
  ],
};

const PHILOSOPHY = [
  {
    title: "Own the whole loop",
    body: "Traffic without conversion is expense. Conversion without traffic is a hobby. I work the full loop — attract, convert, retain, automate — because fixing one link while the others break is how budgets die.",
  },
  {
    title: "Boring beats clever",
    body: "Fast pages, clear offers, honest tracking, consistent publishing. The fundamentals compound; the clever hack expires. I'd rather build you something unsexy that works for five years.",
  },
  {
    title: "Teach, don't mystify",
    body: "You'll understand what I'm doing and why. No jargon walls, no black-box retainers. A client who understands the work makes better decisions — and better decisions grow businesses.",
  },
];

const SKILL_GROUPS = [
  {
    name: "Growth Marketing",
    skills: ["SEO", "Google Ads", "Meta Ads", "Performance Marketing", "Conversion Optimization", "Email Marketing"],
  },
  {
    name: "Development",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "WordPress", "Shopify"],
  },
  {
    name: "Automation & AI",
    skills: ["n8n", "OpenAI", "Workflow Automation", "AI Chat Assistants", "CRM Integrations"],
  },
];

const TECH_ECOSYSTEM: Array<{ group: string; items: Array<{ name: string; purpose: string }> }> = [
  {
    group: "Marketing",
    items: [
      { name: "Google Ads", purpose: "Intent-based advertising on the world's largest search engine." },
      { name: "Meta Ads", purpose: "Demand creation across Facebook and Instagram." },
      { name: "WordPress", purpose: "The CMS I reach for when clients need full content control." },
      { name: "Shopify", purpose: "The fastest serious path to a direct-to-consumer store." },
    ],
  },
  {
    group: "Development",
    items: [
      { name: "Next.js", purpose: "Production-grade React framework behind every fast site I ship." },
      { name: "React", purpose: "Component architecture for interactive interfaces." },
      { name: "TypeScript", purpose: "Type safety that keeps large codebases reliable." },
      { name: "Node.js", purpose: "APIs and backends that power web applications." },
      { name: "Python", purpose: "Scripting, data work, and AI integrations." },
      { name: "PostgreSQL", purpose: "The database I trust with client data." },
      { name: "Prisma", purpose: "Type-safe database access without the boilerplate." },
      { name: "Tailwind CSS", purpose: "Utility-first styling for consistent, fast design systems." },
      { name: "Vercel", purpose: "Hosting and previews with zero-config deployments." },
    ],
  },
  {
    group: "Analytics",
    items: [
      { name: "GA4", purpose: "Behavioral analytics — what visitors actually do." },
      { name: "Search Console", purpose: "Ground truth for rankings, clicks, and index health." },
    ],
  },
  {
    group: "Automation",
    items: [
      { name: "n8n", purpose: "Self-hosted workflow automation connecting every tool." },
      { name: "OpenAI", purpose: "Language models for content, support, and research workflows." },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma", purpose: "Where interfaces are designed before a line of code." },
    ],
  },
];

const PRINCIPLES = [
  "Fixed quotes, never open-ended billing",
  "You own everything: code, accounts, data",
  "Plain-language reporting — no vanity metrics",
  "I say no when something won't work",
  "Async-first communication, documented in writing",
  "Long-term thinking over quick wins",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="about-heading" className="relative overflow-hidden bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-lav/30 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">About</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 id="about-heading" className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
                  Marketing brain.<br />
                  <span className="text-pine">Developer hands.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  I&apos;m <strong className="font-bold text-ink">Abdul Rehman</strong>. I grow
                  businesses with SEO, performance marketing, and websites I build myself — then
                  automate the whole thing so it keeps working when nobody&apos;s watching.
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-muted">
                  No agency layers, no handoffs, no &ldquo;that&apos;s the developer&apos;s
                  department.&rdquo; When the person running your ads can also rewrite the
                  landing page, tracking gets fixed in hours — not sprints.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-full bg-pine px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
                  >
                    Work With Me
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-full border border-line px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-pine hover:text-pine"
                  >
                    See the Work
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <figure className="mx-auto max-w-sm">
                <Image
                  src="/images/abdul-rehman.webp"
                  alt="Portrait of Abdul Rehman"
                  width={760}
                  height={760}
                  priority
                  className="aspect-square w-full rounded-3xl border border-line object-cover shadow-2xl"
                />
                <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Abdul Rehman — somewhere between the code and the campaign
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-surface py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading
                eyebrow="Story"
                title="How I got here"
                align="left"
              />
            </div>
            <div className="max-w-2xl space-y-6 text-[17px] leading-relaxed text-ink">
              <Reveal>
                <h2 className="sr-only">My story</h2>
                <p>
                  I started on the technology side — learning how websites are actually built,
                  not just how they look in a page builder. Writing code teaches you something
                  marketing courses don&apos;t: everything on the web is changeable, measurable,
                  and improvable.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Then came the harder question: who finds the things I build? That led into
                  SEO — the slow, compounding discipline of earning attention from search — and
                  from there into paid acquisition, where every mistake has a price tag and
                  every lesson is written in revenue.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Today I work the full loop. The same person who plans your keyword strategy
                  builds your landing pages, wires your conversion tracking, manages your ad
                  spend, and automates your follow-up. Fewer handoffs, fewer excuses, one
                  accountable owner for growth.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Philosophy"
            title="What I believe about growth"
            lede="Three convictions that shape every engagement."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-[0_20px_50px_-15px_rgba(30,58,46,0.25)]">
                  {/* Animated gradient accent bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-pine via-gold to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  {/* Soft color wash on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-gold-pale/0 transition-all duration-500 group-hover:from-mint/20 group-hover:via-transparent group-hover:to-gold-pale/40"
                  />
                  <span className="relative text-xs font-black tracking-[0.24em] text-pine transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-3 text-xl font-extrabold text-ink transition-colors duration-300 group-hover:text-pine">{p.title}</h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-ink">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Two disciplines, one operator"
            lede="The rare part isn't knowing both — it's knowing how they connect."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-line bg-paper p-7">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-pine">{g.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <li
                        key={s}
                        className="cursor-default rounded-full bg-mint/40 px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine hover:text-white hover:shadow-[0_6px_16px_-6px_rgba(30,58,46,0.5)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Journey"
            title="From curiosity to growth systems"
            lede="Six stages, one direction — scroll to walk through it."
            align="center"
          />
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="sr-only">Career journey timeline</h2>
            <Timeline />
          </div>
        </Container>
      </section>

      {/* Technology ecosystem */}
      <section className="bg-surface py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Toolbox"
            title="The technology ecosystem"
            lede="Every tool below earned its place by solving a real problem. Here's what each one is for."
            align="center"
          />
          <div className="mt-14 space-y-10">
            {TECH_ECOSYSTEM.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 0.05}>
                <article>
                  <h3 className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.22em] text-pine">
                    {group.group}
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                    <span className="text-muted">{group.items.length}</span>
                  </h3>
                  <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((t) => (
                      <div
                        key={t.name}
                        className="group relative overflow-hidden rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-[0_16px_40px_-15px_rgba(30,58,46,0.28)]"
                      >
                        {/* Animated gradient accent bar */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-pine via-gold to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                        />
                        {/* Soft color wash on hover */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 to-gold-pale/0 transition-all duration-500 group-hover:from-mint/25 group-hover:to-gold-pale/30"
                        />
                        <dt className="relative text-[15px] font-extrabold text-ink transition-colors duration-300 group-hover:text-pine">{t.name}</dt>
                        <dd className="relative mt-1.5 text-sm leading-relaxed text-muted">{t.purpose}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Working principles */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Working with me"
                title="Six rules I work by"
                lede="Non-negotiables. If any of these sound wrong for you, we're probably not a fit — and that's fine."
                align="left"
              />
              <Reveal delay={0.1} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-pine px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
                >
                  Start a Project
                </Link>
              </Reveal>
            </div>
            <ul className="space-y-4">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p} delay={i * 0.06}>
                  <li className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-black text-white"
                    >
                      ✓
                    </span>
                    <span className="pt-1 text-[15px] font-semibold text-ink">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
