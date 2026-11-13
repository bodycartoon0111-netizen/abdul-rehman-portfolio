import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { buildBreadcrumbJsonLd, buildLocalBusinessJsonLd, BRAND_WHATSAPP_LINK } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: {
    absolute: "Contact SEO Consultant in Lahore, Pakistan | Abdul Rehman",
  },
  description:
    "Contact Abdul Rehman, SEO consultant in Lahore, for SEO, Google & Meta Ads, websites or AI automation. Every message gets a reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SEO Consultant in Lahore, Pakistan | Abdul Rehman",
    description:
      "Contact Abdul Rehman, SEO consultant in Lahore, for SEO, Google & Meta Ads, websites or AI automation. Every message gets a reply within one business day.",
    url: "/contact",
    type: "website",
  },
};

const whatsappHref = BRAND_WHATSAPP_LINK;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      /> <JsonLd data={buildLocalBusinessJsonLd("/contact")} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">
          Get in touch
        </p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          Contact an <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO Consultant in Lahore</span> — Let&apos;s Build Something That Grows
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Tell me about your project — I read every message myself.</p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Tell me about your project — the more specific you are about your goals, the more
          useful my reply will be. I read every message personally and respond within one
          business day. I&apos;m Abdul Rehman, an SEO consultant in Lahore — if you are not
          sure what you need yet, start with a free SEO audit or browse the{" "}
          <Link
            href="/services"
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            digital marketing services
          </Link>{" "}
          first. Prefer direct? WhatsApp and email are on this page.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2" aria-label="Direct contact channels">
          <div className="group h-full rounded-2xl bg-neutral-50 p-8 transition-colors hover:bg-pine">
            <h2 className="text-xl font-bold text-neutral-900 transition group-hover:text-white">Prefer direct?</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 transition group-hover:text-white/85">Email</p>
                <a
                  href="mailto:contact@abdulrehmantech.com"
                  className="mt-1 block break-all font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition group-hover:text-white group-hover:decoration-white/60 hover:decoration-white"
                >
                  contact@abdulrehmantech.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 transition group-hover:text-white/85">WhatsApp</p>
                <WhatsAppLink
                  href={whatsappHref}
                  className="mt-1 block font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition group-hover:text-white group-hover:decoration-white/60 hover:decoration-white"
                >
                  +92 371 4972789
                </WhatsAppLink>
                <p className="mt-1 text-sm text-neutral-600 transition group-hover:text-white/85">Prefilled message — just press send.</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 transition group-hover:text-white/85">Social</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/abdulrehman--asghar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition group-hover:border-white/60 group-hover:text-white hover:border-white hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/61592492806563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition group-hover:border-white/60 group-hover:text-white hover:border-white hover:text-white"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/abdulrehman.tech.service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition group-hover:border-white/60 group-hover:text-white hover:border-white hover:text-white"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
            <div className="group/info mt-8 rounded-xl border border-neutral-200 bg-white p-5 text-sm leading-relaxed text-neutral-700 transition-colors group-hover/info:text-white/85 hover:border-pine hover:bg-pine">
              <p className="font-semibold text-neutral-900 transition group-hover/info:text-white">What happens next?</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>You send the form — I read it the same day.</li>
                <li>I reply with honest first impressions and clarifying questions.</li>
                <li>If we&apos;re a fit, we schedule a call and I prepare a scoped proposal.</li>
              </ol>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Where I Work</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Based in Lahore — in-person meetings available in DHA, Gulberg, Johar Town, Model
          Town, Bahria Town, Wapda Town, Cantt and Faisal Town. Across Pakistan — Karachi,
          Islamabad, Rawalpindi, Faisalabad, Multan — remote delivery. Consultation available
          in English and Roman Urdu.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          What to Include in Your Message
        </h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-neutral-700">
          <li>Your website (if you have one)</li>
          <li>What you want to grow (calls, sales, rankings)</li>
          <li>Your timeline</li>
          <li>Your budget range (if you know it)</li>
        </ul>
      </section>

      <section aria-labelledby="contact-faq-heading" className="mt-20 max-w-3xl">
        <h2 id="contact-faq-heading" className="text-3xl font-bold tracking-tight text-neutral-900">
          Before you write
        </h2>
        <div className="mt-8 divide-y divide-neutral-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-neutral-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span aria-hidden="true" className="text-neutral-500 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
