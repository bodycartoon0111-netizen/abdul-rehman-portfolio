import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Timeline from "@/components/about/Timeline"; import CredentialsBlock from "@/components/sections/CredentialsBlock"; import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, BRAND_NAME, buildLocalBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Freelance SEO Consultant Portfolio | Abdul Rehman",
  },
  description:
    "Hire freelance SEO consultant Lahore — this freelance SEO consultant portfolio shows my SEO work for small businesses and startups in Lahore, Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: {
    siteName: BRAND_NAME,
    type: "website",
    title: "Freelance SEO Consultant Portfolio | Abdul Rehman",
    description:
      "Hire freelance SEO consultant Lahore — this freelance SEO consultant portfolio shows my SEO work for small businesses and startups in Lahore, Pakistan.",
    url: absoluteUrl("/about"),
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
    title: "Freelance SEO Consultant Portfolio | Abdul Rehman",
    description: "Hire freelance SEO consultant Lahore — this freelance SEO consultant portfolio shows my SEO work for small businesses and startups in Lahore, Pakistan.",
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

const PHILOSOPHY = [
  {
    title: "Own the whole loop",
    body: "Traffic without conversion is expense — and that is the SEO freelancer vs agency difference in one line: one person owns the whole loop, so nothing gets lost between teams. Conversion without traffic is a hobby. What does a freelance SEO consultant do, day to day? In my case, as an SEO consultant focused on measurable results, I find the broken thing, fix it, and measure whether it moved. As an SEO consultant who handles SEO end to end, I work the full loop — attract, convert, retain, automate — because fixing one link while the others break is how budgets die. That is how I judge SEO consultant client work and outcomes: did it move?",
  },
  {
    title: "Boring beats clever",
    body: "Fast pages, clear offers, honest tracking, consistent publishing. That is the point of working with a freelance SEO consultant for small business budgets: one person, one system, no agency overhead. The fundamentals compound; the clever hack expires. I'd rather build you something unsexy that works for five years — that is the work of a freelance SEO consultant for website growth, not a quick fix.",
  },
  {
    title: "Teach, don't mystify",
    body: "You'll understand what I'm doing and why. No jargon walls, no black-box retainers. When you hire an SEO consultant who works directly with clients, you work with the person doing the work — no handoffs, no account managers. A client who understands the work makes better decisions — and better decisions grow businesses. If you are weighing independent SEO consultant vs in-house hire, start by talking to the person who will actually do the work.",
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
      <JsonLd data={buildLocalBusinessJsonLd("/about")} />{/* Hero */}
      <section aria-labelledby="about-heading" className="relative overflow-hidden bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-lav/30 blur-3xl"
        />
        <Container className="relative pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">About</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 id="about-heading" className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
                  Abdul Rehman — <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">Freelance SEO Consultant Portfolio</span>
                </h1>
                <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">
                  Marketing brain.<br />
                  <span className="text-pine">Developer hands.</span>
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  Abdul Rehman — <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO &amp; Digital Marketing Consultant in Lahore</span>
                  <Link href="/services" className="font-semibold text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink">
                    SEO, performance marketing, and websites I build myself
                  </Link>{" "}
                  — then automate the whole thing so it keeps working when nobody&apos;s watching. I keep this SEO consultant about page short: it is my freelance SEO consultant profile and freelance digital marketing consultant portfolio in one place — the work, my freelance SEO consultant working style, my freelance SEO specialist background, and how to reach me. No agency layers, no handoffs, no &ldquo;that&apos;s the developer&apos;s department.&rdquo; When the person running your ads can also rewrite the landing page, tracking gets fixed in hours — not sprints. If you want to hire SEO expert Lahore help, see the SEO consultant portfolio examples in my{" "}
                  <Link href="/work" className="font-semibold text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink">
                    selected work
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="font-semibold text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink">
                    start a project
                  </Link>.
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
      <section className="bg-surface py-16 md:py-20">
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
                <h2 className="h2 text-balance">My Story — From Code to Growth</h2>
                <p>
                  My SEO consultant biography starts on the technology side — learning how websites are actually built,
                  not just how they look in a page builder. Writing code teaches you something
                  marketing courses don&apos;t: everything on the web is changeable, measurable,
                  and improvable. That is the short version of my freelance SEO consultant background and approach — I started in code and stayed close to it — and this SEO freelancer portfolio shows the work, not just the story.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Then came the harder question: who finds the things I build? That led into
                  SEO — the slow, compounding discipline of earning attention from search — and
                  from there into paid acquisition — the work I now do as a freelance digital marketing consultant Lahore businesses hire directly — where every mistake has a price tag and
                  every lesson is written in revenue. That is the SEO consultant about me version in one paragraph: I learned to build first, then learned to be found. Everything here is about freelance SEO consultant work done by one person, end to end — I work as an SEO consultant for content and technical SEO, so both sides sit with one person.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Today I work the full loop as a freelance SEO consultant for startups, as a freelance SEO consultant for B2B businesses, and as a freelance digital marketing consultant for startups. The same person who plans your keyword strategy
                  builds your landing pages, wires your conversion tracking, manages your ad
                  spend, and automates your follow-up. Fewer handoffs, fewer excuses, one
                  accountable owner for growth. Why hire a freelance SEO consultant instead of an agency? Because my freelance SEO consultant approach to client work is simple: you talk to the person doing the work: I work as an independent SEO consultant, and as a freelance SEO consultant Lahore for small business owners, I keep every engagement one-to-one — that is what an SEO consultant for growing businesses looks like. I will not claim to be the best freelance SEO consultant Lahore has — fit matters more than superlatives.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Philosophy"
            title="What I believe about growth"
            lede="Three convictions that shape every engagement — and every project in this freelance SEO expert portfolio."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pine hover:bg-pine hover:shadow-[0_20px_50px_-15px_rgba(30,58,46,0.25)]">
                  {/* Animated gradient accent bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-pine via-gold to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  {/* Soft color wash on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-gold-pale/0 transition-all duration-500 group-hover:from-mint/0 group-hover:via-transparent group-hover:to-gold-pale/0"
                  />
                  <span className="relative text-xs font-black tracking-[0.24em] text-pine transition-colors duration-300 group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-3 text-xl font-extrabold text-ink transition-colors duration-300 group-hover:text-white">{p.title}</h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-ink transition-colors duration-300 group-hover:text-white/85">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Two disciplines, one operator"
            lede="My SEO consultant experience and skills cover both sides — the work I do as a freelance SEO expert Lahore businesses hire directly, as an SEO consultant for ecommerce businesses, and as a freelance SEO consultant for online stores. The rare part isn't knowing both — it's knowing how they connect."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-pine hover:bg-pine">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-pine transition-colors group-hover:text-white">{g.name}</h3>
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
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Journey"
            title="From curiosity to growth systems"
            lede="Six stages, one direction — scroll to walk through my SEO consultant work history and my SEO consultant credentials and experience."
            align="center"
          />
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="sr-only">Career journey timeline</h2>
            <Timeline />
          </div>
        </Container>
      </section>

      
      <CredentialsBlock /> <section className="bg-white py-16 md:py-20"><Container><Reveal><div className="group mx-auto max-w-3xl rounded-2xl border border-line bg-paper p-8 text-center transition-colors hover:border-pine hover:bg-pine"><h2 className="font-display text-2xl font-semibold transition-colors group-hover:text-white">Client reviews</h2><p className="mt-3 text-muted-foreground transition-colors group-hover:text-white/85">Client reviews are published here once verified.</p></div></Reveal></Container></section>{/* Technology ecosystem */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Toolbox"
            title="The technology ecosystem"
            lede="This freelance SEO specialist portfolio runs on the stack below — every tool earned its place by solving a real problem. Here's what each one is for."
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
                        className="group relative overflow-hidden rounded-xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pine hover:bg-pine hover:shadow-[0_16px_40px_-15px_rgba(30,58,46,0.28)]"
                      >
                        {/* Animated gradient accent bar */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-pine via-gold to-mint transition-transform duration-500 ease-out group-hover:scale-x-100"
                        />
                        {/* Soft color wash on hover */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 to-gold-pale/0 transition-all duration-500 group-hover:from-mint/0 group-hover:to-gold-pale/0"
                        />
                        <dt className="relative text-[15px] font-extrabold text-ink transition-colors duration-300 group-hover:text-white">{t.name}</dt>
                        <dd className="relative mt-1.5 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/85">{t.purpose}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Location"
            title="Based in Lahore, Working Across Pakistan"
            align="center"
          />
          <div className="mx-auto mt-8 max-w-2xl text-center text-[17px] leading-relaxed text-ink">
            <p>
              As a Lahore based SEO consultant, I work across DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt and Faisal Town — an SEO consultant in Lahore Pakistan clients can meet face to face, and an SEO consultant Lahore Pakistan freelancer for remote work. Across Pakistan, I work as a freelance SEO consultant in Pakistan, remotely with teams in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan — as an SEO consultant in Pakistan freelancer clients hire directly, and as a freelance SEO consultant Lahore businesses can meet in person. As a Lahore freelance SEO consultant, I am an SEO expert in Lahore Pakistan businesses hire directly — an SEO expert Lahore clients can meet in person, not just over email. I also work as a freelance SEO expert for service businesses — consultation available in English and Roman Urdu.
            </p>
          </div>
        </Container>
      </section>

      {/* What working with me looks like */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Working with me"
            title="What Working With Me Looks Like"
            align="center"
          />
          <div className="mx-auto mt-8 max-w-2xl text-center text-[17px] leading-relaxed text-ink">
            <p>
              If you want to hire freelance SEO consultant Lahore expertise, or an SEO consultant for local businesses, every engagement starts with a free SEO audit and a plain-language plan from Abdul Rehman SEO consultant Lahore. This Lahore SEO consultant portfolio is the short version. When you hire a freelance SEO consultant, you should get the person doing the work, not a handoff chain. My freelance SEO consultant services combine SEO, ads, websites and automation, and I work as a freelance SEO consultant for lead generation too — read how engagements combine on the{" "}
              <Link href="/services" className="font-semibold text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink">
                services page
              </Link>
              , or{" "}
              <Link href="/contact" className="font-semibold text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink">
                start a project
              </Link>.
            </p>
          </div>
        </Container>
      </section>

      {/* Working principles */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Working with me"
                title="Six rules I work by"
                lede="Non-negotiables — and if you are wondering how to choose a freelance SEO consultant, start here. If any of these sound wrong for you, we're probably not a fit — and that's fine. To hire SEO consultant in Lahore support from the person who does the work, or to contact freelance SEO consultant Lahore help directly, start a project. I also work as an SEO consultant for coaches and consultants — the same six rules apply."
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
                  <li className="group flex items-start gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-pine hover:bg-pine">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-black text-white transition-colors group-hover:bg-white group-hover:text-pine"
                    >
                      ✓
                    </span>
                    <span className="pt-1 text-[15px] font-semibold text-ink transition-colors group-hover:text-white">{p}</span>
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
