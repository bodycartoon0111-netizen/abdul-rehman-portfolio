import Link from "next/link";

import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";

const PROCESS_STEPS = [
  {
    name: "Discover",
    description:
      "We start with your business, your customers and your market — so we build the right thing, not the loudest thing.",
  },
  {
    name: "Strategy",
    description:
      "A plan grounded in data: keywords, content and pages that target people ready to buy or book.",
  },
  {
    name: "Build",
    description:
      "Design and development that make the strategy real — fast, accessible and easy to manage.",
  },
  {
    name: "Launch",
    description:
      "Technical checks, analytics and Search Console in place before a page goes live, not after.",
  },
  {
    name: "Optimize",
    description:
      "We measure what happens next and improve it — nothing set and forgotten.",
  },
];

// Tools named for the SEO service in the site's service data.
const TOOLS = ["Google Search Console", "GA4", "Screaming Frog", "Ahrefs"];

// Quoted from the FAQ on this site.
const NO_FAKE_GUARANTEES =
  "I won't promise page-one rankings — anyone who guarantees that is selling something. I will show you exactly what's being done and what it's producing.";

export default function CredentialsBlock() {
  const technologyCount = new Set(
    services.flatMap((service) => service.technologies),
  ).size;

  return (
    <section className="bg-paper py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Why hire me"
          lede="Verified facts only — no invented testimonials, ratings, revenue figures or ranking claims."
          align="center"
        />
        <Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat value={projects.length} label="Live projects" />
            <Stat value={services.length} label="Services offered" />
            <Stat value={technologyCount} label="Technologies" />
            <Stat value={industries.length} label="Industries served" />
          </dl>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            I am Abdul Rehman — an SEO consultant and full-stack web developer
            based in Lahore, Pakistan. I help businesses across Pakistan get
            found and get leads by building search-friendly websites and
            running full-funnel campaigns.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <h3 className="font-display text-xl font-semibold">How we work</h3>
            <ol className="mt-4 space-y-4">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.name} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.name}</p>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-display text-xl font-semibold">
              Tools I work with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Named in the SEO service listing on this site.
            </p>
            <blockquote className="group mt-8 rounded-xl border border-border bg-card p-6 transition-colors hover:border-pine hover:bg-pine">
              <p className="text-lg leading-relaxed transition-colors group-hover:text-white">{NO_FAKE_GUARANTEES}</p>
              <p className="mt-3 text-sm font-medium text-muted-foreground transition-colors group-hover:text-white/85">
                No fake guarantees — quoted from the FAQ on this site.
              </p>
            </blockquote>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
            >
              Book a free consultation
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink/40"
            >
              More about me
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink/40"
            >
              See the work
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
