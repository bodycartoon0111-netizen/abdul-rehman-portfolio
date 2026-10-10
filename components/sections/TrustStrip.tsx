import { Marquee } from "@/components/ui/marquee";

const EXPERTISE = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Web Development",
  "WordPress",
  "Shopify",
  "AI Automation",
  "Custom Software",
];

/** Expertise marquee strip. Uses the shared Marquee primitive (pauses on hover, static under reduced motion). */
export default function TrustStrip() {
  return (
    <section aria-label="Areas of expertise" className="relative overflow-hidden border-y border-line bg-surface py-5">
      <Marquee duration={32} ariaLabel="Areas of expertise">
        {EXPERTISE.map((item) => (
          <span key={item} className="flex items-center gap-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-muted">
              {item}
            </span>
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
    </section>
  );
}
