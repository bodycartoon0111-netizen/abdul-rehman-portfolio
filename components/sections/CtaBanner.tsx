import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { BRAND_WHATSAPP_LINK } from "@/lib/seo";

/** Big closing CTA banner. Server component. */
export default function CtaBanner() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-pine-deep px-8 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-mint/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">
              Let&apos;s build
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Have a project in mind? Let&apos;s turn it into growth.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Tell me where your business is and where you want it to be. I&apos;ll
              reply with honest first thoughts — and a plan if we&apos;re a fit.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-pine transition-transform hover:scale-105"
              >
                Start a Project
              </Link>
              <a
                href={BRAND_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
