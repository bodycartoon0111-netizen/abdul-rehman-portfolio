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
    metaTitle: "Ecofold Packaging Website Case Study | Abdul Rehman",
    metaDescription:
      "Case study: website strategy and build for Ecofold Packaging — product-led structure, technical SEO, and a quote-focused buyer journey. See how it works.",
  },
  zproperty: {
    slug: "zproperty",
    implementation: [
      "Studied how property seekers in Pakistan actually browse — area-first, with price and plot size as the primary filters — so I could explain how real estate websites work for the people using them, not just for search engines.",
      "Designed listing and detail templates — property listing website design Pakistan, shaped around the facts that decide an enquiry — that surface location, size, price and contact immediately.",
      "Built the site for speed on mobile connections, since the majority of property browsing happens on phones — a core part of real estate website development Pakistan and of property website development generally.",
      "Set up location-focused page structure so area-specific searches land on relevant, useful pages, including the ZProperty Lahore property search experience and ZProperty property search Pakistan more broadly.",
      "I treated this ZProperty case study as a working test of the ZProperty real estate platform — a real estate website case study Pakistan clients could read end to end — comparing it with the best real estate website design I could find and setting out to beat it on clarity, not decoration.",
      "Along the way I answered the questions clients ask me most — how to build a property website, how to build a property website in Pakistan and how property websites rank on Google — and wrote the answers up as a ZProperty website case study in real estate website design.",
      "I planned the pages around the exact searches people type — find property in Pakistan ZProperty, find houses for sale in Lahore ZProperty and find property in Lahore ZProperty — so the ZProperty real estate website Pakistan visitors land on matches what they asked for, and so the ZProperty website Pakistan ranks for the terms that matter.",
      "I documented the ZProperty project Abdul Rehman built as a property website case study, a real estate website case study and a property portal website case study, and I keep it in my ZProperty portfolio as proof of how I work.",
    ],
    designDecisions: [
      "Listing cards optimized for scanning — property search website design in practice: photo, price, size, and area readable at a glance.",
      "Trust signals placed near every enquiry action, because this ZProperty real estate website is a place where property decisions need confidence before contact.",
      "Urdu-audience-aware UX patterns: simple language, obvious navigation, minimal jargon — so anyone using the online property search website or the online property search Pakistan pages can act without guessing.",
      "Contact paths kept short — one tap to call or WhatsApp, because that's how this market converts — which is why the ZProperty website redesign kept the same one-tap habit instead of adding steps.",
      "I approached the ZProperty website design and the ZProperty web design as one job: real estate platform website design measured against the best real estate website design Pakistan has to offer, not a brochure.",
      "I kept the property portal website design and the property finder website design honest: filters for area, price and size first, and no listing dressed up as something it is not.",
      "For the Pakistan audience I tuned the property listing website Pakistan pages, the property portal website Pakistan pages and the real estate platform website Pakistan pages around local search — property website design Pakistan in practice, with local language and local trust signals.",
      "I built the ZProperty platform website as one system with the ZProperty website, and I treat real estate website SEO Pakistan and property website SEO Pakistan as part of the build, not a coat of paint added at the end.",
    ],
    metaTitle: "ZProperty Real Estate Website | Abdul Rehman",
    metaDescription:
      "ZProperty real estate website Pakistan — my case study on the ZProperty website design and real estate website SEO. Book a free SEO audit today.",
  },
  "calculadora-matematica": {
    slug: "calculadora-matematica",
    implementation: [
      "Scoped the tool around the calculations Spanish-speaking students and professionals reach for most often, building it as an online math calculator tool first — the work behind this calculator website case study, and behind a math tool website case study readers can follow end to end, including Calculadora Matemática Pakistan.",
      "Built a fully client-side calculator experience — instant results with no page reloads and no server dependency — so the Calculadora Matemática calculator website stays fast even on weak connections.",
      "Designed the entire interface in Spanish, with terminology matched to how the audience actually describes these operations — the Calculadora Matemática website is a Spanish-first tool, not a translation layered on afterwards.",
      "Optimized for search discovery around calculator-intent queries, with clean, fast pages that answer the need immediately — including how calculator websites rank on Google and what calculator website SEO actually rewards.",
      "Along the way I answered the questions I get asked most: how to build a calculator website, how to build a calculator website Pakistan readers ask about, and how to build a calculator web app without a server.",
      "I planned the pages around the exact searches people type — online calculator for students Pakistan, free online calculator Pakistan, free math calculator Pakistan, math calculator online Pakistan, free calculator tool Pakistan and online math calculator Pakistan — so the tool meets the search instead of fighting it.",
      "I wrote this up as a calculator tool website case study, a calculator app website case study and a calculator web app case study — a tool website case study Pakistan readers can check against the live tool — and I keep the Calculadora Matemática project in my portfolio as the clearest example of a tool built around one job.",
      "I built the Calculadora Matemática web app to be a free calculator website first and a showcase second: a simple online calculator tool and a free online math calculator that gives an answer before it asks for anything.",
    ],
    designDecisions: [
      "Utility-first layout — the calculator is the hero, not a banner — because this is a simple calculator tool website and a simple calculator tool Pakistan readers can use without learning anything new: visitors arrive with a task and the page respects that.",
      "Large, touch-friendly inputs because a meaningful share of use happens on phones — the same thinking behind the calculator web app Pakistan version of the tool, built for small screens first.",
      "Explanatory microcopy in plain Spanish alongside results, so the tool also teaches — that is what makes it an online calculator for students, not just a box that returns a number.",
      "Minimal visual noise — a tool earns repeat visits through speed and reliability, not decoration — which is why I judge it against the best online calculator websites, the best calculator tool websites and the best online calculator Pakistan has to offer, not against prettier pages.",
      "I designed the Calculadora Matemática calculator as an online calculator tool free to use and a free calculator tool online — a free math calculator online in practice: no account, no paywall, just the answer.",
      "I kept the calculator website design, the online calculator website design and the calculator tool website design honest — one job per page, clear labels, and a free online calculator website feel from the first click.",
      "For Pakistan readers I tuned the calculator website Pakistan pages, the calculator website design Pakistan pages, the calculator tool website Pakistan pages and the math calculator website Pakistan pages around the searches they actually make.",
      "I treat calculator website SEO Pakistan as part of the build, and I wrote the Calculadora Matemática website Pakistan pages — and the online calculator tool Pakistan pages — so a calculator web app case study Pakistan readers find is the same tool students use every day.",
    ],
    metaTitle: "Calculadora Matemática: Calculator Website Case Study",
    metaDescription:
      "Calculator website case study: my Calculadora Matemática build — a calculator website Pakistan students use. Book a free SEO audit today.",
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
    metaTitle: "Avexent Positioning-Led Website Case Study | Abdul Rehman",
    metaDescription:
      "Case study: avexent.com — positioning-led website build with service-focused structure and conversion paths for two buyer types. Book a free SEO audit.",
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
    metaTitle: "Digital Clause Services Website Case Study | Abdul Rehman",
    metaDescription:
      "Case study: digitalclause.net — a professional-services website built around trust, clear process, and research-heavy buyer behavior. Book a free audit.",
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
    metaTitle: "Thekedar Contractor Website Case Study | Abdul Rehman",
    metaDescription:
      "Case study: thekedar.com.pk — a Lahore contractor-services website structured around local search behavior and call-first conversions. Book a free audit.",
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
