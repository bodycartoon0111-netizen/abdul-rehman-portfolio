import type { Industry } from "@/types";

/**
 * The 9 industries served. recommendedServices reference slugs in
 * data/services.ts; relatedProject references a slug in data/projects.ts
 * (empty string where no dedicated project exists yet).
 */
export const industries: Industry[] = [
  {
    slug: "e-commerce",
    name: "E-commerce",
    problem:
      "Ad costs keep rising while generic stores convert a fraction of their traffic. Slow pages, weak product content, and blind tracking turn paid clicks into expensive bounces.",
    recommendedServices: [
      "shopify",
      "web-development",
      "seo",
      "performance-marketing",
      "meta-ads",
    ],
    solution:
      "A fast, conversion-tuned storefront, SEO that captures buying-intent searches, and paid campaigns managed against profit — so every channel knows what the others are doing.",
    relatedProject: "ecofold-packaging",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    problem:
      "Listings get buried, portals take the margin, and enquiries arrive through forms nobody answers fast enough. Trust is the product — and most sites don't sell it.",
    recommendedServices: ["web-development", "seo", "google-ads", "meta-ads"],
    solution:
      "Your own listings platform with instant-contact paths like WhatsApp, local SEO that captures 'near me' intent, and ads aimed at serious buyers — not browsers.",
    relatedProject: "zproperty",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    problem:
      "Patients choose providers they trust before they ever call. Thin websites, no reviews strategy, and invisible local search presence hand appointments to competitors.",
    recommendedServices: ["seo", "web-development", "google-ads"],
    solution:
      "Authoritative, patient-friendly content, local SEO that wins the map pack, and a website that answers questions and books appointments without friction.",
    relatedProject: "",
  },
  {
    slug: "dental",
    name: "Dental",
    problem:
      "Dental is brutally local: patients search, compare two or three clinics, and book the one that looks most credible. Most clinic sites look identical and say nothing.",
    recommendedServices: ["seo", "web-development", "google-ads", "meta-ads"],
    solution:
      "Treatment-level SEO pages, before/after credibility done tastefully, review generation systems, and ads that fill chairs for high-value treatments.",
    relatedProject: "",
  },
  {
    slug: "construction",
    name: "Construction",
    problem:
      "Great builders lose jobs to whoever shouts loudest. Word-of-mouth doesn't scale, and paid leads from aggregators come with commissions and tire-kickers.",
    recommendedServices: ["web-development", "seo", "google-ads"],
    solution:
      "A credibility-first web presence with project proof, local SEO for 'contractor near me' searches, and direct enquiry paths that cut out the middleman.",
    relatedProject: "thekedar",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    problem:
      "Agencies, consultants, and firms sell expertise — but their websites read like everyone else's. Discovery calls come from referrals or not at all.",
    recommendedServices: ["seo", "web-development", "performance-marketing"],
    solution:
      "Positioning sharp enough to be remembered, service pages that rank for buyer-intent searches, and a site engineered to turn readers into booked calls.",
    relatedProject: "avexent",
  },
  {
    slug: "saas",
    name: "SaaS",
    problem:
      "Paid acquisition gets expensive fast, and feature-led marketing doesn't explain why anyone should switch. Organic growth needs content and tools that rank — not a blog nobody reads.",
    recommendedServices: [
      "web-development",
      "seo",
      "performance-marketing",
      "ai-automation",
    ],
    solution:
      "SEO-driven tool and content pages that capture problem-aware searches, a site optimized for trial signups, and automation that nurtures trials into customers.",
    relatedProject: "calculadora-matematica",
  },
  {
    slug: "education",
    name: "Education",
    problem:
      "Students and parents compare options online long before enrolling. Institutions with weak search presence and clunky admissions pages lose to whoever communicates better.",
    recommendedServices: ["web-development", "seo", "ai-automation"],
    solution:
      "Search-visible program and resource pages, a frictionless enquiry and admissions flow, and automated follow-up so no prospective student goes cold.",
    relatedProject: "calculadora-matematica",
  },
  {
    slug: "local-businesses",
    name: "Local Businesses",
    problem:
      "Local customers search, glance at the top three results, and call one of them. If you're not visible in local search and maps, you don't exist for most buyers.",
    recommendedServices: ["seo", "web-development", "google-ads", "meta-ads"],
    solution:
      "Local SEO that wins the map pack, a fast mobile-first site with click-to-call and WhatsApp paths, and ads geo-targeted to your actual service area.",
    relatedProject: "thekedar",
  },
];

export const industriesBySlug: Record<string, Industry> = Object.fromEntries(
  industries.map((i) => [i.slug, i]),
);
