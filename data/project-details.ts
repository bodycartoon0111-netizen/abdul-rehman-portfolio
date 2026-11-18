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
      "I took on this Avexent project as a positioning led website design exercise: before any layout, I worked out what the Avexent digital marketing agency actually sells and who it sells it to.",     "The brief was a classic services website case study in miniature — a business website case study where the offer was strong but the site never said so plainly.",
      "I structured the site around services and proof, so each service page explains who it is for and what changes — the same discipline I use on every services website design case study I write.",
      "I built conversion paths for two visitor types: ready-to-talk buyers and researchers who need nurturing, because that split is how positioning helps a website convert in practice.",    "Every section answers a buyer question first, which is how to position a services website without shouting: the Avexent marketing agency voice stays calm, specific and useful.",
      "I put Avexent SEO foundations in from the start — analytics, clean structure and internal links — so the Avexent website can be measured and improved from launch.",    "I documented the build as an agency website case study and a digital agency website case study, so the Avexent portfolio shows the thinking, not just the screenshots.",    "The result is a positioning first website design: the Avexent digital agency leads with its point of view, and the design follows.",    "When I describe this work to Pakistan clients, I call it what it is: a digital marketing agency website case study Pakistan teams can learn from — the agency website design Pakistan buyers expect, and the services website design Pakistan businesses need.",    "I hold that work to the digital agency website Pakistan standard I set for myself: clear positioning before decoration, on every page.",
    ],
    designDecisions: [
      "Message-led hero: the headline states the outcome for the client, not the agency's biography — that is the heart of this Avexent agency website and its positioning website design.",
      "Service pages are written as answers to buyer questions, doubling as SEO assets — the same approach behind my services website case study Pakistan work, where buyers compare carefully before calling.",    "I treated the site as a digital marketing agency website case study from day one, which kept every page honest about what the Avexent website design had to prove.",    "This Avexent web design project doubled as a website positioning case study: I mapped each service to the search it should win and the visitor it should convince.",    "I also keep a Pakistan version of the story ready: a marketing agency website design Pakistan brief, a services website Pakistan checklist, and the Avexent SEO Pakistan notes I revisit before every local kickoff.",    "The Avexent agency Pakistan write-up, the Avexent agency website Pakistan page and the Avexent web design Pakistan notes all point back to one idea: positioning website design Pakistan businesses can actually use.",    "That same thinking powers the brand positioning website Pakistan angle and the website positioning case study Pakistan angle — and the Avexent marketing agency Pakistan story I tell in discovery calls.",
      "Restrained, professional aesthetic appropriate for B2B trust — credibility over flash — which is why this Avexent marketing website still reads as a business website case study Pakistan prospects recognise.",
      "Contact friction minimized: short forms, visible alternatives, no obligatory phone fields — a small detail that matters on every digital marketing agency website Pakistan project I take on.",    "I kept the Avexent digital marketing Pakistan angle practical: local buyers search in plain language, so the Avexent website Pakistan pages use theirs, not agency jargon.",    "The build also works as a brand positioning website case study and a marketing agency website case study — two lenses on one Avexent agency, and both shaped the final pages.",    "I now use this build in my own notes as a digital marketing agency website design reference and an agency website design case study — proof that a services site can sell without shouting.",    "And when someone asks for a digital marketing website case study, or a digital marketing website Pakistan example, this is the Avexent project I send them.",
    ],
    metaTitle: "Avexent Digital Marketing Agency | Abdul Rehman",
    metaDescription:
      "Avexent digital marketing agency: a services website case study Pakistan businesses can learn from — positioning-led design. Book a free SEO audit.",
  },
  "digital-clause": {
    slug: "digital-clause",
    implementation: [
      "I translated a professional-services offer into web structure — practice areas, process explanation, and credibility in that order — and that is how a services website is built when the audience compares before it contacts.",    "This Digital Clause website case study starts with the buyer, not the firm: I designed the content hierarchy for cautious, research-heavy visitors, the same people every service website case study I write is really for.",
      "I built consultation booking as the primary conversion, supported by secondary paths for visitors not ready to commit — the clearest answer I know to how services websites convert.",    "I applied local and topical SEO structure so the firm's expertise is discoverable around the questions clients actually ask, and the Digital Clause SEO notes from this build still guide my local work.",
      "The Digital Clause project Abdul Rehman delivered is a Digital Clause website redesign in the truest sense: same firm, same services, rebuilt around how digital marketing agencies present services online.",    "I treated the Digital Clause website as a services website redesign case study from the first call, keeping a running list of the best services website design examples I could learn from — and the ones to avoid.",    "The Digital Clause digital marketing agency story is a useful one: a digital marketing agency website has to sell trust before it sells services, and every page here does the trust work first.",
      "I wrote the long-form service explanations myself, in plain language, because a website case study digital agency readers can actually use beats a brochure every time.",    "For Pakistan readers I keep a second lens on this work: an agency website case study Pakistan firms can borrow from, and a marketing agency website Pakistan reference I share in discovery calls.",    "The Digital Clause website Pakistan pages, the Digital Clause agency website Pakistan version and the Digital Clause website design Pakistan notes all describe the same build — I just file them where local buyers look.",    "The Digital Clause website case study Pakistan angle, the Digital Clause digital marketing Pakistan notes and the Digital Clause SEO Pakistan checklist sit in my files beside the Digital Clause case study Pakistan summary.",
    ],
    designDecisions: [
      "Calm, authoritative design language — professional services sell confidence, and the design had to embody it. That is the Digital Clause marketing agency voice: measured, never loud.",    "Long-form service explanations instead of thin pages, matching how carefully this audience evaluates — the Digital Clause services website earns its length.",
      "Attorney-grade restraint in claims: descriptive, never promotional, throughout the copy. It is the Digital Clause digital agency standard I still hold new work to.",    "Clear process section — explaining how engagements work removes the biggest barrier to first contact. It is also why this Digital Clause website design still converts: visitors know the next step before they take it.",
      "I file this build under the Digital Clause portfolio and the Digital Clause portfolio Pakistan set alike — a services website case study examples piece I reach for whenever a services firm asks what good looks like.",    "The Digital Clause web design here is deliberately quiet: no gimmicks, just hierarchy, whitespace and proof — digital agency website design that lets the firm's record speak.",
      "I use this project as one of my agency website case study examples whenever a client asks for marketing agency website design references — it shows the full arc, brief to launch.",    "The Digital Clause agency Pakistan story, the Digital Clause marketing website Pakistan pages and the Digital Clause digital agency Pakistan notes all come from the same build — one site, filed three ways for local search.",    "The Digital Clause website redesign Pakistan version, the Digital Clause web design Pakistan notes and the Digital Clause services website Pakistan summary are the local face of the same work — the Digital Clause services Pakistan version is the one I send first.",    "Finally, the Digital Clause marketing agency Pakistan write-up and the Digital Clause website case study examples round out the set — the Digital Clause case study I am proudest to walk a prospect through.",
    ],
    metaTitle: "Digital Clause Website Case Study | Abdul Rehman",
    metaDescription:
      "Digital Clause website case study: an agency website case study Pakistan firms can learn from — trust-led services website design. Book a free audit.",
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
