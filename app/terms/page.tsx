import type { Metadata } from "next";
import Breadcrumbs from "@/components/sections/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | Abdul Rehman" },
  description: "The terms under which you may use this portfolio website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-neutral-600">Last updated: October 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-neutral-700">
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Purpose of this site</h2>
          <p className="mt-3">
            This website presents the services and selected work of Abdul Rehman and provides a
            way to make contact about potential projects. Using the site means you accept these
            terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Content and intellectual property</h2>
          <p className="mt-3">
            All text, design, and original material on this site belongs to Abdul Rehman unless
            stated otherwise. You may read and share links to these pages, but you may not
            reproduce the content for commercial purposes without written permission.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Contact form</h2>
          <p className="mt-3">
            By submitting the contact form you confirm the information you provide is accurate
            to the best of your knowledge. Submitting an enquiry does not create a client
            relationship — that begins only when we both agree on a written scope of work.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Acceptable use</h2>
          <p className="mt-3">
            You agree not to misuse this site: no spam through the contact form, no attempts to
            disrupt the site or its infrastructure, and no scraping of content at a rate that
            degrades the service for others.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Limitation of liability</h2>
          <p className="mt-3">
            The site is provided as-is. While I aim for accuracy, I make no warranties about
            completeness or availability, and I am not liable for decisions you make based on
            the general information published here.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Changes</h2>
          <p className="mt-3">
            These terms may be updated from time to time; the current version will always be
            posted on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
