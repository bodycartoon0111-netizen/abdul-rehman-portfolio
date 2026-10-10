import type { Metadata } from "next";
import Breadcrumbs from "@/components/sections/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Abdul Rehman" },
  description: "How Abdul Rehman handles your information when you use the contact form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-600">Last updated: October 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-neutral-700">
        <section>
          <h2 className="text-xl font-bold text-neutral-900">What I collect</h2>
          <p className="mt-3">
            If you use the contact form, I receive the details you provide: your name, email
            address, company, website, the service you&apos;re interested in, your budget range,
            and your message. I do not collect anything else about you, and this site runs no
            advertising trackers.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">How I use it</h2>
          <p className="mt-3">
            Your details are used for one purpose: to read your enquiry and reply to it. I do
            not sell, rent, or share your information with third parties for marketing, and I
            will not add you to any mailing list you did not ask to join.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Storage and retention</h2>
          <p className="mt-3">
            Enquiries are delivered by email and may be stored in my inbox so I can follow up.
            I keep correspondence only as long as it is useful for the conversation, and you can
            ask me to delete it at any time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Your rights</h2>
          <p className="mt-3">
            You can request a copy of the information you sent, ask for corrections, or ask for
            deletion by writing to{" "}
            <a href="mailto:abdulrehmanasghar916@gmail.com" className="font-semibold text-neutral-900 underline">
              abdulrehmanasghar916@gmail.com
            </a>
            . I will respond within a reasonable time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Changes</h2>
          <p className="mt-3">
            If this policy changes, the updated version will be posted here with a new
            &ldquo;last updated&rdquo; date.
          </p>
        </section>
      </div>
    </main>
  );
}
