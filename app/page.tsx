import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import {
  pageMetadata,
  buildLocalBusinessJsonLd,
    buildOfferCatalogJsonLd,
} from "@/lib/seo";
import { HeroVisual } from "@/components/hero/HeroVisual";
import TrustStrip from "@/components/sections/TrustStrip";
import ValueProps from "@/components/sections/ValueProps";
const ServicesExplorer = dynamic(() => import("@/components/sections/ServicesExplorer"));
const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork"));
import IndustryExplorer from "@/components/sections/IndustryExplorer";
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
import ProofSection from "@/components/sections/ProofSection";
import CredentialsBlock from "@/components/sections/CredentialsBlock";
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  ...pageMetadata(
    "SEO, Performance Marketing & Web Development",
    "Freelance SEO consultant in Lahore, Pakistan. Grow your business with SEO, Google & Meta Ads, websites and AI automation. Book a free SEO audit today.",
    "/", "Abdul Rehman — SEO, Google & Meta Ads, websites and AI automation from Lahore, Pakistan. See the work, then book a free SEO audit.",
  ),
  title: {
    absolute: "SEO Consultant in Lahore | Freelance SEO Expert Pakistan",
  },
};

const highlights = [
  { k: "SEO", v: "Technical SEO, local search and content" },
  { k: "Performance marketing", v: "Google & Meta Ads managed on real data" },
  { k: "Web development", v: "Fast Next.js sites built to convert" },
  { k: "AI automation", v: "Workflows that save hours every week" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
            <JsonLd data={buildOfferCatalogJsonLd(services)} />

      {/* ── Hero ───────────────────────────────────────────────────── */}
            <section className="relative -mt-8 overflow-hidden bg-paper md:-mt-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-mint/50 blur-3xl" />
                                                        <Container className="relative grid gap-8 pb-8 pt-4 md:pb-10 md:pt-6 lg:grid-cols-2 lg:items-center">
                            <div><h1 className="mt-4 max-w-3xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">
                                        I Turn Search Intent Into <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">Organic Growth, Traffic &amp; Customers</span>
              </h1>
                                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/85 md:text-lg">Turning <strong className="font-bold text-ink">Search</strong>, <strong className="font-bold text-ink">Traffic</strong> &amp; <strong className="font-bold text-ink">Technology</strong> Into <strong className="font-bold text-ink">Growth</strong>. Learn more <Link href="/about">about <strong className="font-bold text-ink">Abdul Rehman</strong></Link>
                        , and browse the <Link href="/services"><strong className="font-bold text-ink">digital marketing services</strong></Link> on offer.
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
                >
                  Get a quote
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  View my work
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
                            <dl className="mt-6 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-2">              
                {highlights.map((h) => (
                <div key={h.k} className="group rounded-2xl border border-line bg-white/70 p-4 transition-colors hover:border-pine hover:bg-pine">
      <dt className="text-sm font-extrabold text-ink group-hover:text-white">{h.k}</dt>
                          <dd className="mt-1 text-[13px] leading-snug text-ink/70 group-hover:text-white/80">{h.v}</dd>
                  </div>
                ))}
              </dl>
                                                </div>
          <Reveal delay={0.15} className="relative">
            <div className="relative">
                              <HeroVisual className="h-[400px] md:h-[560px]" />
              <figure className="absolute -bottom-2 left-4 z-30 md:left-8">
                <Image
                  src="/images/abdul-rehman.webp"
                  alt="Portrait of Abdul Rehman"
                  width={384}
                  height={384}
                  priority
                  className="h-64 w-64 rounded-2xl object-cover drop-shadow-2xl md:h-96 md:w-96"
                />
                <figcaption className="mt-3 text-center text-sm font-extrabold uppercase tracking-[0.18em]">
                  <span className="text-pine">Abdul Rehman</span> <span className="text-gold">— Growth Partner</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </Container>
      </section>

      <TrustStrip />

      {/* ── Services ───────────────────────────────────────────────── */}
      <ServicesExplorer />

      {/* ── Value props ────────────────────────────────────────────── */}
      <ValueProps />

      {/* ── Case studies ───────────────────────────────────────────── */}
      <SelectedWork />

      {/* ── Industries served ──────────────────────────────────────── */}
      <IndustryExplorer />

      {/* ── Process highlights ─────────────────────────────────────── */}
      <ProcessSection />
      <CredentialsBlock />

      {/* ── Proof / credentials ────────────────────────────────────── */}
      <ProofSection />

      {/* ── Why hire a consultant ─────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why hire a consultant"
            title="Why Hire an SEO Consultant in Lahore — Not an Agency?"
            lede="An agency hands your account down a chain of juniors. With a consultant, the person you hire is the person doing the work."
            align="center"
          />
<p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted text-pretty">An SEO consultant improves a website's visibility on Google through technical fixes, keyword research, content optimization and link building. In Lahore, a consultant also handles local SEO — Google Business Profile, Maps rankings and location pages — so nearby customers find the business first.</p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted text-pretty">You can explore the full scope of my <Link href="/services/seo">SEO services in Lahore</Link> or work through the <Link href="/blog/technical-seo-checklist-2026">technical SEO checklist</Link> before we talk.
          </p>
    <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-paper p-7">
              <h3 className="text-xl font-extrabold text-ink">One person, full accountability</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                You work directly with the person doing the work — no account managers, no hand-offs, and no one else to blame when results stall.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-7">
              <h3 className="text-xl font-extrabold text-ink">Strategy + code from the same person</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                SEO, ads and the website are planned and built by the same person, so the strategy never gets lost between a marketer and a developer.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-7">
              <h3 className="text-xl font-extrabold text-ink">Transparent pricing, no lock-in</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                Clear scope and plain reporting, with no long contract tying you down. You stay because the work performs — not because you have to.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Service areas ──────────────────────────────────────────── */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where I work"
            title="Businesses I Help Across Pakistan"
            lede="Lahore is my home base — I meet clients here in person. I deliver SEO, Google &amp; Meta Ads, websites and AI automation remotely to businesses in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan, and anywhere else in Pakistan."
            align="center"
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted text-pretty">In Lahore: DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt and Faisal Town — in-person meetings available. Across Pakistan: Karachi, Islamabad, Rawalpindi, Faisalabad, Multan — remote delivery.</p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted text-pretty">Consultation available in English and Roman Urdu.</p>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-20">
  <Container>
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="h2 mt-4 text-balance">Free SEO Audit — See Where You Rank Today</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">Tell us your website and your target keyword. I'll check where you rank today, list the first 3 fixes, and send it to you — free, no obligation, no sales call unless you ask for one.</p>
      <div className="mt-8">
        <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]">Get My Free Audit</Link>
      </div>
    </div>
  </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <CtaBanner />

      {/* ── Bottom credit ──────────────────────────────────────────── */}
      <div className="border-t border-line py-6 text-center text-sm text-muted">
        <Container>
          <p>
            Built by{" "}
            <Link href="/about" className="font-semibold text-pine hover:underline">
              Abdul Rehman
            </Link>{" "}
            — SEO, performance marketing &amp; web development.
          </p>
          <p className="mt-2">
            <Link href="/sitemap.xml" className="hover:underline">
              Sitemap
            </Link>
            {" · "}
            <Link href="/robots.txt" className="hover:underline">
              Robots
            </Link>
          </p>
        </Container>
      </div>
    </>
  );
}
