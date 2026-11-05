import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faqs";

/**
 * FAQ section: accessible accordion + FAQPage JSON-LD.
 * Server component (Accordion itself is interactive client-side).
 */
export default function FaqSection() {
  const items = faqs.map((f) => ({ question: f.q, answer: f.a }));
  const accordionItems = items.map((item) => {
    if (item.question !== "How long does SEO take to show results?") {
      return item;
      
    return {
      ...item,
      answer: (
        <span>
        
          {item.answer}
        <br />
        Related reading:{" "}
        
        <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
           target="_blank" rel="noopener">Google's SEO Starter Guide</a>
        </span>
        ),
    };
    });

  return (
    <section className="bg-surface py-24 md:py-32">
      <JsonLd data={buildFaqPageJsonLd(items)} />
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Straight answers, before you ask"
          lede="Pricing, timelines, and how working together actually works — no sales-speak."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </section>
  );
}
