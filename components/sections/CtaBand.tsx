import Link from "next/link";
import { BRAND_WHATSAPP_LINK } from "@/lib/seo";

interface CtaBandProps {
  title?: string;
  description?: string;
}

/** Shared closing CTA used across services / work / blog pages. Brand tokens only. */
export default function CtaBand({
  title = "Have a project in mind? Let's talk about what growth looks like for you.",
  description = "Tell me where your business stands and where you want it to go. I'll reply with honest next steps — whether or not we end up working together.",
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden rounded-3xl bg-pine-deep px-8 py-14 text-center text-white sm:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-mint/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
      />
      <h2 id="cta-heading" className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="relative mx-auto mt-4 max-w-xl text-white/75">{description}</p>
      <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-pine transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
        >
          Start a project
        </Link>
        <a
          href={BRAND_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
        >
          WhatsApp me
        </a>
      </div>
    </section>
  );
}
