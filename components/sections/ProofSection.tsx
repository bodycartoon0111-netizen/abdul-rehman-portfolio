import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";

const STATS = [
  { value: 6, label: "Live projects shipped" },
  { value: 10, label: "Services offered" },
  { value: 18, label: "Technologies in the stack" },
  { value: 9, label: "Industries served" },
];

/**
 * Proof section — ONLY truthful numbers, animated by the shared Stat
 * component (counts up on scroll into view, static under reduced motion).
 */
export default function ProofSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="No vanity metrics. Everything here is verifiable."
          lede="I don't invent revenue figures, traffic claims, or testimonials. What I can show you is real: shipped work, real capabilities, real range."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Stat value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
