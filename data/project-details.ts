/**
 * Per-project editorial detail owned by the case-study pages.
 *
 * Augments the canonical `Project` records in `@/data/projects`
 * (name, url, tagline, industry, challenge, solution, services,
 * technologies, outcome, relatedServices) with the build-level sections:
 * implementation steps, design decisions, and SEO metadata.
 *
 * Copy is written from the public nature of each project — no invented
 * metrics, revenue figures, or traffic claims anywhere.
 *
 * Keyed by the 6 canonical project slugs:
 * ecofold-packaging, zproperty, calculadora-matematica, avexent,
 * digital-clause, thekedar
 */

export interface ProjectDetail {
  slug: string;
  implementation: string[];
  designDecisions: string[];
  metaTitle: string;
  metaDescription: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "ecofold-packaging": {
    slug: "ecofold-packaging",
    implementation: [
      "Mapped the product catalogue and buyer journey — packaging buyers compare specs, materials, and minimum quantities before they ever enquire.",
      "Built a clean, fast marketing site with dedicated pages per product line so each offering can be found and understood independently.",
      "Implemented structured product information and clear calls-to-action directing buyers toward quotes rather than dead ends.",
      "Applied technical SEO fundamentals — semantic markup, metadata, and performance budgets — so the catalogue is discoverable from day one.",
    ],
    designDecisions: [
      "Earthy, tactile visual language that matches the sustainable-packaging positioning without clichés.",
      "Product-first page structure: specs and use-cases above the fold, brand story further down.",
      "Quote-oriented conversion path instead of e-commerce checkout, matching how B2B packaging is actually bought.",
      "Restrained motion and generous whitespace so the products — not the decoration — carry the pages.",
    ],
    metaTitle: "Ecofold Packaging — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: website strategy and build for Ecofold Packaging — product-led structure, technical SEO, and a quote-focused buyer journey.",
  },
  zproperty: {
    slug: "zproperty",
    implementation: [
      "Studied how property seekers in Pakistan actually browse — area-first, with price and plot size as the primary filters.",
      "Designed listing and detail templates that surface the decision-critical facts (location, size, price, contact) immediately.",
      "Built the site for speed on mobile connections, since the majority of property browsing happens on phones.",
      "Set up location-focused page structure so area-specific searches land on relevant, useful pages.",
    ],
    designDecisions: [
      "Listing cards optimized for scanning: photo, price, size, and area readable at a glance.",
      "Trust signals placed near every enquiry action — property decisions need confidence before contact.",
      "Urdu-audience-aware UX patterns: simple language, obvious navigation, minimal jargon.",
      "Contact paths kept short — one tap to call or WhatsApp, because that's how this market converts.",
    ],
    metaTitle: "ZProperty — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: zproperty.pk — a Pakistan real-estate platform designed around how local buyers actually search, scan, and enquire.",
  },
  "calculadora-matematica": {
    slug: "calculadora-matematica",
    implementation: [
      "Scoped the tool around the calculations Spanish-speaking students and professionals reach for most often.",
      "Built a fully client-side calculator experience — instant results with no page reloads and no server dependency.",
      "Designed the entire interface in Spanish, with terminology matched to how the audience actually describes these operations.",
      "Optimized for search discovery around calculator-intent queries, with clean, fast pages that answer the need immediately.",
    ],
    designDecisions: [
      "Utility-first layout: the calculator is the hero, not a banner — visitors arrive with a task and the page respects that.",
      "Large, touch-friendly inputs because a meaningful share of use happens on phones.",
      "Explanatory microcopy in plain Spanish alongside results, so the tool also teaches.",
      "Minimal visual noise — a tool earns repeat visits through speed and reliability, not decoration.",
    ],
    metaTitle: "Calculadora Matemática — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: calculadoramatematica.com — a Spanish-language web calculator built for instant answers and search-driven discovery.",
  },
  avexent: {
    slug: "avexent",
    implementation: [
      "Clarified the positioning first — a services business lives or dies on whether visitors understand the offer in ten seconds.",
      "Structured the site around services and proof, with each service getting room to explain who it's for and what changes.",
      "Built conversion paths for two visitor types: ready-to-talk buyers and researchers who need nurturing.",
      "Implemented analytics and SEO foundations so the site's performance can be measured and improved from launch.",
    ],
    designDecisions: [
      "Message-led hero: the headline states the outcome for the client, not the agency's biography.",
      "Service pages written as answers to buyer questions, doubling as SEO assets.",
      "Restrained, professional aesthetic appropriate for B2B trust — credibility over flash.",
      "Contact friction minimized: short forms, visible alternatives, no obligatory phone fields.",
    ],
    metaTitle: "Avexent — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: avexent.com — positioning-led website build with service-focused structure and conversion paths for two buyer types.",
  },
  "digital-clause": {
    slug: "digital-clause",
    implementation: [
      "Translated a professional-services offer into web structure — practice areas, process explanation, and credibility in that order.",
      "Designed content hierarchy for cautious, research-heavy visitors who compare before contacting.",
      "Built consultation booking as the primary conversion, supported by secondary paths for visitors not ready to commit.",
      "Applied local and topical SEO structure so the firm's expertise is discoverable around the questions clients actually ask.",
    ],
    designDecisions: [
      "Calm, authoritative design language — professional services sell confidence, and the design had to embody it.",
      "Long-form service explanations instead of thin pages, matching how carefully this audience evaluates.",
      "Attorney-grade restraint in claims: descriptive, never promotional, throughout the copy.",
      "Clear process section — explaining how engagements work removes the biggest barrier to first contact.",
    ],
    metaTitle: "Digital Clause — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: digitalclause.net — a professional-services website built around trust, clear process, and research-heavy buyer behavior.",
  },
  thekedar: {
    slug: "thekedar",
    implementation: [
      "Focused the Lahore service pages on the jobs homeowners actually search for — specificity beats generic 'we do everything' pages.",
      "Built service-area structure so each offering and locality combination has a clear, useful landing point.",
      "Designed for the call-first behavior of the local services market: phone and WhatsApp actions prominent on every page.",
      "Kept pages fast and readable on low-end phones, where most local service searches originate.",
    ],
    designDecisions: [
      "Service-plus-area page model reflecting how Lahore customers search for contractors.",
      "Trust-first content: process transparency and clear scope descriptions, since contractor trust is the category's core anxiety.",
      "Call and WhatsApp CTAs above the fold on mobile — matching the market's actual conversion behavior.",
      "Plain-language copy avoiding industry jargon the homeowner audience doesn't use.",
    ],
    metaTitle: "Thekedar — Case Study | Abdul Rehman",
    metaDescription:
      "Case study: thekedar.com.pk — a Lahore contractor-services website structured around local search behavior and call-first conversions.",
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
