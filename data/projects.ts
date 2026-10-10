import type { Project } from "@/types";

/**
 * Selected work. All descriptions are original — written from the projects'
 * positioning, never copied from the live sites. Outcomes are truthful
 * status statements only; no invented metrics.
 */
export const projects: Project[] = [
  {
    slug: "ecofold-packaging",
    logo: "/images/projects/ecofold-packaging.png",
    name: "EcoFold Packaging",
    url: "https://ecofoldpackaging.com",
    tagline: "Custom packaging e-commerce for US brands.",
    industry: "E-commerce",
    challenge:
      "A US packaging supplier needed an online storefront that could present dozens of box styles — food, cosmetic, candle, and rigid boxes — and turn browsing buyers into quote requests instead of bounces.",
    solution:
      "I built a fast, SEO-structured e-commerce experience with clear category architecture for each box type, quote-first conversion paths, and on-page SEO aimed at commercial packaging searches.",
    services: ["Web Development", "SEO"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    outcome: "Live and operating — serving US packaging buyers with an SEO-ready catalog.",
    relatedServices: ["web-development", "seo", "shopify"],
  },
  {
    slug: "zproperty",
    logo: "/images/projects/zproperty.png",
    name: "ZProperty",
    url: "https://zproperty.pk",
    tagline: "Pakistan property portal with verified listings.",
    industry: "Real Estate",
    challenge:
      "Property seekers in Pakistan needed listings they could trust — and a way to reach agents instantly instead of submitting forms into a void.",
    solution:
      "I built a listings portal organized around verified properties and WhatsApp-first contact, with city-wise browsing and filters designed to work smoothly on low-end phones.",
    services: ["Web Development", "SEO"],
    technologies: ["Next.js", "React", "PostgreSQL", "WhatsApp API", "SEO"],
    outcome:
      "Live and operating — 205 listings, 78 agents, 13 cities, per the site's public counters.",
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "calculadora-matematica",
    logo: "/images/projects/calculadora-matematica.svg",
    name: "Calculadora Matemática",
    url: "https://calculadoramatematica.com",
    tagline: "30+ free math tools for Spanish-speaking students.",
    industry: "Education",
    challenge:
      "Spanish-speaking students needed fast, free calculators — integrals, derivatives, matrices, statistics — without the cluttered, ad-stuffed pages that dominate the niche.",
    solution:
      "I built a tools platform with 30+ calculators, each on its own SEO-optimized page with structured Spanish content and instant, mobile-friendly results.",
    services: ["Web Development", "SEO"],
    technologies: ["Next.js", "React", "TypeScript", "SEO"],
    outcome:
      "Live and operating — a growing library of free tools serving Spanish-speaking students.",
    relatedServices: ["web-development", "seo"],
  },
  {
    slug: "avexent",
    logo: "/images/projects/avexent.png",
    name: "Avexent",
    url: "https://avexent.com",
    tagline: "AI digital marketing agency website.",
    industry: "Agency",
    challenge:
      "An AI-focused marketing agency needed a site that could clearly explain AI automation, performance marketing, and SEO services — and convert visitors into discovery calls.",
    solution:
      "I designed and built a service-led website with sharp positioning for each offering, conversion-focused page structure, and technical SEO foundations under everything.",
    services: ["Web Development", "AI Automation"],
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    outcome: "Live and operating — positioning the agency's AI and growth services.",
    relatedServices: ["web-development", "ai-automation", "performance-marketing"],
  },
  {
    slug: "digital-clause",
    logo: "/images/projects/digital-clause.svg",
    name: "Digital Clause",
    url: "https://digitalclause.net",
    tagline: "Full-service digital marketing agency site.",
    industry: "Agency",
    challenge:
      "A digital marketing agency offering SEO, paid ads, content, email, and web/software services needed one website to carry five service lines without confusing visitors.",
    solution:
      "I built a structured multi-service website with dedicated positioning for each line, consistent conversion paths across all of them, and SEO-ready architecture.",
    services: ["Web Development", "SEO"],
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    outcome: "Live and operating — a single home for the agency's five service lines.",
    relatedServices: ["web-development", "seo", "google-ads", "meta-ads"],
  },
  {
    slug: "thekedar",
    logo: "/images/projects/thekedar.png",
    name: "Thekedar",
    url: "https://thekedar.com.pk/lahore",
    tagline: "Lahore's directory of verified builders and contractors.",
    industry: "Construction",
    challenge:
      "Finding a trustworthy builder in Lahore meant asking around. Contractors needed a zero-commission way to get discovered by serious clients.",
    solution:
      "I built a WhatsApp-first directory of verified builders, contractors, and architects — searchable profiles and categories with direct contact, and zero commission sitting in between.",
    services: ["Web Development", "SEO"],
    technologies: ["Next.js", "React", "PostgreSQL", "WhatsApp API", "SEO"],
    outcome:
      "Live and operating — connecting Lahore clients with verified contractors, commission-free.",
    relatedServices: ["web-development", "seo"],
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);
