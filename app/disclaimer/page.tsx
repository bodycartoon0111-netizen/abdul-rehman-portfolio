import type { Metadata } from "next";
import Breadcrumbs from "@/components/sections/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Disclaimer | Abdul Rehman" },
  description: "Disclaimer: general information on this site is not professional advice and results vary.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-neutral-600">Last updated: October 2026</p>

      <div className="mt-8 space-y-8 leading-relaxed text-neutral-700">
        <section>
          <h2 className="text-xl font-bold text-neutral-900">General information, not advice</h2>
          <p className="mt-3">
            Everything published on this site — including service descriptions, case studies,
            and blog articles — is general information based on my professional experience. It
            is not legal, financial, tax, or business advice, and it is not a substitute for
            advice tailored to your situation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Results vary</h2>
          <p className="mt-3">
            Marketing and development outcomes depend on many factors: your market, budget,
            timing, existing assets, and execution. Nothing on this site promises or guarantees
            specific results such as rankings, traffic, leads, or revenue. Any case study
            describes what was done on that project, not what will happen on yours.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">External links</h2>
          <p className="mt-3">
            Links to live client websites and third-party tools are provided for reference. I
            do not control those sites and am not responsible for their content, availability,
            or practices.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-neutral-900">Accuracy</h2>
          <p className="mt-3">
            I make a genuine effort to keep this site accurate and current, but information can
            become outdated — especially anything about third-party platforms and their
            policies. If you spot an error, let me know and I will correct it.
          </p>
        </section>
      </div>
    </main>
  );
}
