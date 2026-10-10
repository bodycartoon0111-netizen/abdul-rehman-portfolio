import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  pageMetadata,
  buildProfessionalServiceJsonLd,
} from "@/lib/seo";
import { HeroVisual } from "@/components/hero/HeroVisual";
import TrustStrip from "@/components/sections/TrustStrip";
import ValueProps from "@/components/sections/ValueProps";
import ServicesExplorer from "@/components/sections/ServicesExplorer";
import SelectedWork from "@/components/sections/SelectedWork";
import IndustryExplorer from "@/components/sections/IndustryExplorer";
import ProcessSection from "@/components/sections/ProcessSection";
import ProofSection from "@/components/sections/ProofSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  ...pageMetadata(
    "SEO, Performance Marketing & Web Development",
    "Abdul Rehman helps businesses grow with SEO, performance marketing, conversion-focused websites, and AI automation — strategy and code, from one person.",
    "/",
  ),
  title: {
    absolute: "Abdul Rehman — SEO, Performance Marketing & Web Development",
  },
  keywords: [
    "SEO consultant",
    "performance marketing",
    "web developer",
    "AI automation",
    "Google Ads management",
    "Meta Ads",
    "Next.js developer",
    "Abdul Rehman",
  ],
};

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-mint/40 blur-3xl"
      />
      <Container className="relative pb-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal delay={0.08}>
              <h1
                id="hero-heading"
                className="text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-6xl"
              >
                Turning Search, Traffic{" "}
                <span className="text-gold">&amp;</span> Technology Into Growth.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                I&apos;m <strong className="font-bold text-ink">Abdul Rehman</strong> — I help
                businesses get found through <strong className="font-bold text-ink">SEO</strong>,
                scale with <strong className="font-bold text-ink">performance marketing</strong>,
                convert with <strong className="font-bold text-ink">websites I build myself</strong>,
                and systematize it all with{" "}
                <strong className="font-bold text-ink">AI automation</strong>. Marketing strategy
                and the code to ship it — from one person.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-pine px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:bg-pine-deep hover:shadow-[var(--shadow-lift)]"
                >
                  Start a Project
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-pine/25 bg-surface px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-ink transition-all hover:-translate-y-0.5 hover:border-gold hover:text-pine"
                >
                  Explore My Work
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-10 flex gap-8 border-t border-line pt-6">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Projects live</dt>
                  <dd className="mt-1 text-2xl font-black text-ink">6</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Services</dt>
                  <dd className="mt-1 text-2xl font-black text-ink">10</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Industries</dt>
                  <dd className="mt-1 text-2xl font-black text-ink">9</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative">
              <HeroVisual className="h-[400px] md:h-[500px]" />
              <figure className="absolute -bottom-2 left-4 z-30 md:left-8">
                <Image
                  src="/images/abdul-rehman.webp"
                  alt="Portrait of Abdul Rehman"
                  width={384}
                  height={384}
                  priority
                  className="h-64 w-64 rounded-2xl object-cover drop-shadow-2xl md:h-96 md:w-96"
                />
                <figcaption className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">
                  Abdul Rehman — Growth Partner
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildProfessionalServiceJsonLd()} />
      <Hero />
      <TrustStrip />
      <ValueProps />
      <ServicesExplorer />
      <SelectedWork />
      <IndustryExplorer />
      <ProcessSection />
      <ProofSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
