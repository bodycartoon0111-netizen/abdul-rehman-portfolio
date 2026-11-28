import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { absoluteUrl, BRAND_NAME, buildBreadcrumbJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: {
    absolute: "Contact SEO Consultant Lahore, Pakistan | Abdul Rehman",
  },
  description:
    "Contact SEO consultant Lahore for SEO, Google & Meta Ads, websites or AI automation. Every message gets a reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "Contact SEO Consultant Lahore, Pakistan | Abdul Rehman",
    description:
      "Contact SEO consultant Lahore for SEO, Google & Meta Ads, websites or AI automation. Every message gets a reply within one business day.",
    url: absoluteUrl("/contact"),
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
    title: "Contact SEO Consultant Lahore, Pakistan | Abdul Rehman",
    description: "Contact SEO consultant Lahore for SEO, Google & Meta Ads, websites or AI automation. Every message gets a reply within one business day.",
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

const whatsappHref = "https://wa.me/923714972789?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20AbdulRehman%20Tech";

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
          Contact <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO Consultant Lahore</span> — Let&apos;s Build Something That Grows
        </h1>
        <p className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">Wondering how to contact an SEO consultant? Tell me about your project — I read every message myself.
          {" "}You can hire SEO expert for a website audit here, or hire a website SEO expert for ongoing work — either way, tell me what you want to grow.</p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Tell me about your project — the more specific you are about your goals, the more
          useful my reply will be. I read every message personally and respond within one
          business day. I&apos;m Abdul Rehman, an SEO consultant in Lahore — if you are not
          sure what you need yet, book a free SEO audit or browse the{" "}
          <Link
            href="/services"
            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            digital marketing services
          </Link>{" "}
          first. Prefer direct? WhatsApp and email are on this page — use whichever SEO consultant contact suits you best.
          {" "}If you want to hire SEO specialist for small business help, or hire freelance digital marketing consultant support for a campaign, tell me in the form below.
          {" "}You can also hire SEO consultant for a new website, hire SEO consultant for monthly SEO, or book a free marketing consultation before you decide anything.
          {" "}If you would rather work with a freelance digital marketer one to one, or request a quote for SEO services, say so in your message and I will reply with next steps.
        </p>
        </header><section aria-label="Ways to get in touch" className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-neutral-700"><p>You can get in touch with SEO consultant help through the form below, by email or on WhatsApp — all three reach me directly, and every SEO project enquiry gets a personal reply. If you would rather talk to an SEO consultant first, book a call with SEO consultant Abdul Rehman by mentioning a day and time in your message — you can book SEO consultation time the same way.</p><p>Message me directly here — one question or a full project, no sales team and no ticket queue. If you prefer to work with a freelance SEO consultant who answers his own emails, or to work with an SEO consultant who treats your budget like his own, start with the form and tell me what you want to grow.</p><p>To contact a freelance SEO consultant, use the form below or message me directly — either way you reach me, not an account manager. To contact a digital marketing consultant about ads or a website as well as SEO, say so in your message, and to contact SEO freelancer support directly, WhatsApp is usually fastest. This page is your freelance SEO consultant contact point, and to contact Abdul Rehman SEO consultant help directly, any channel on this page works. When you hire a freelance SEO consultant you should know exactly who does the work — with me, it is always me.</p><p>Ready to start an SEO project? You can get a free SEO audit before we talk, or request a free SEO audit in your message — every SEO audit request gets a reply within one business day, and every enquiry can start with a free SEO consultation. Local businesses can book a free SEO audit Lahore owners use to see where they stand, or start SEO project Lahore work with a free SEO consultation first.</p><p>Businesses that hire SEO consultant Lahore support from me work directly with me — no handover to juniors — and if you want to hire freelance SEO consultant Lahore help for a longer engagement, say so in your message. To contact freelance SEO consultant Lahore businesses recommend, to contact SEO expert Lahore help for a one-off review, or to contact digital marketing consultant Lahore businesses use for ads and websites too, the same form covers it. For contact SEO consultant for small business help or contact SEO consultant for startups advice, mention your stage and goals in the form.</p><p>Businesses across the country can contact SEO consultant Pakistan support here, and can get a free SEO audit Pakistan owners use to prioritise fixes. If you need to hire SEO consultant in Pakistan contact me through the form, email or WhatsApp, and if you want to hire Google Ads consultant Lahore contact me the same way — just mention Google Ads in your message. To book SEO consultation Lahore sessions, mention a day and time; for any SEO services contact — or SEO services Lahore contact for local work — the same form covers it. If you want to work with Abdul Rehman SEO directly, this page is where it starts, and every SEO audit request Lahore businesses send gets a personal reply. Email is the SEO consultant email contact for detailed briefs, and the SEO consultant Lahore contact number is +92 371 4972789 — WhatsApp or call.</p></section>

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
                <p className="mt-1 text-sm text-neutral-600 transition group-hover:text-white/85">Prefilled message — just press send. The SEO consultant WhatsApp contact for quick questions, and the SEO consultant Lahore WhatsApp number for local businesses.
                  {" "}If you want to hire Meta Ads specialist for lead generation, hire Google Ads specialist for sales, or get help with Google Ads campaigns, WhatsApp is the fastest way to reach me.
                  {" "}You can also get help with Meta Ads campaigns here — tell me what you want the ads to do and I will tell you if I can help.</p>
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
            <div className="group/info mt-8 rounded-xl border border-neutral-200 bg-white p-5 text-sm leading-relaxed text-neutral-700 transition-colors hover:border-pine hover:bg-pine">
              <p className="font-semibold text-neutral-900 transition group-hover/info:text-white">What happens next?</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 transition-colors group-hover/info:text-white/85">
                <li>You send the form to contact SEO consultant Lahore — I read it the same day.</li>
                <li>I reply with honest first impressions and clarifying questions, so every SEO audit request gets a personal answer.</li>
                <li>If we&apos;re a fit, we schedule a call and I prepare a scoped proposal — your SEO consultation booking, confirmed by email.</li>
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
          <li>Your budget range (if you know it)</li><li>Whether you would like to request a free SEO audit or a full proposal</li>
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

      <section aria-labelledby="google-business-heading" className="mt-20 max-w-3xl">
        <div className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-colors hover:bg-pine">
          <h2 id="google-business-heading" className="text-3xl font-bold tracking-tight text-neutral-900 transition group-hover:text-white">
            AbdulRehman Tech on Google
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700 transition group-hover:text-white/85">
            I run AbdulRehman Tech as an internet marketing service from Lahore. You can find my business on Google — check the hours, the areas I serve, and leave a review after we work together.
            {" "}If you want to hire SEO consultant for ecommerce store work, hire SEO consultant for local business growth, or hire SEO consultant for content marketing, mention it in your message and I will reply with honest next steps.
            {" "}The same goes if you want to hire SEO consultant for technical SEO fixes, hire SEO consultant for one time SEO audit, or hire SEO consultant for lead generation — tell me what you need and I will say plainly whether I can help.
            {" "}And if you are planning a redesign, you can hire SEO consultant for website redesign SEO here too, so the new site keeps the rankings the old one earned.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700 transition group-hover:text-white/85">
            Monday – Saturday: 9:00 AM – 11:00 PM PKT · Sunday: Closed
          </p>
          <p className="mt-2 text-lg leading-relaxed text-neutral-700 transition group-hover:text-white/85">
            Lahore, Islamabad, Karachi, Rawalpindi, Faisalabad, Multan — and remote clients worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://maps.app.goo.gl/EapYDNXRFq5Zoj666" target="_blank" rel="noopener noreferrer" className="rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-white group-hover:text-pine">
              View on Google Maps
            </a>
            <a href="https://g.page/r/CVEVkSQEg5kEEBM/review" target="_blank" rel="noopener noreferrer" className="rounded-full border border-pine px-5 py-3 text-sm font-semibold text-pine transition group-hover:border-white group-hover:text-white">
              Leave a review on Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
