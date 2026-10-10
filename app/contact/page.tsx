import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { buildBreadcrumbJsonLd, BRAND_WHATSAPP_LINK } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact — Start Your Project | Abdul Rehman",
  },
  description:
    "Get in touch for SEO, paid ads, web development, or AI automation. Email, WhatsApp, or the enquiry form — replies within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Start Your Project | Abdul Rehman",
    description:
      "Get in touch for SEO, paid ads, web development, or AI automation. Email, WhatsApp, or the enquiry form — replies within one business day.",
    url: "/contact",
    type: "website",
  },
  keywords: [
    "hire SEO consultant",
    "contact Abdul Rehman",
    "start a project",
    "web developer for hire",
  ],
};

const whatsappHref = BRAND_WHATSAPP_LINK;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Let&apos;s build something that grows.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Tell me about your project — the more specific you are about your goals, the more
          useful my reply will be. I read every message personally and respond within one
          business day.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2" aria-label="Direct contact channels">
          <div className="rounded-2xl bg-neutral-50 p-8">
            <h2 className="text-xl font-bold text-neutral-900">Prefer direct?</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Email</p>
                <a
                  href="mailto:abdulrehmanasghar916@gmail.com"
                  className="mt-1 block break-all font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
                >
                  abdulrehmanasghar916@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
                >
                  +92 371 4972789
                </a>
                <p className="mt-1 text-sm text-neutral-600">Prefilled message — just press send.</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">Social</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/abdulrehman--asghar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/61592492806563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/abdulrehman.tech.service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-5 text-sm leading-relaxed text-neutral-700">
              <p className="font-semibold text-neutral-900">What happens next?</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>You send the form — I read it the same day.</li>
                <li>I reply with honest first impressions and clarifying questions.</li>
                <li>If we&apos;re a fit, we schedule a call and I prepare a scoped proposal.</li>
              </ol>
            </div>
          </div>
        </aside>
      </div>

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
