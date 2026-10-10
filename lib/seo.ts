import type { Metadata } from "next";

/* ── Brand constants ─────────────────────────────────────────────── */
export const BRAND_NAME = "Abdul Rehman";
export const BRAND_EMAIL = "abdulrehmanasghar916@gmail.com";
export const BRAND_WHATSAPP = "+923714972789";
export const BRAND_WHATSAPP_LINK = "https://wa.me/923714972789";
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/in/abdulrehman--asghar/";
export const SOCIAL_FACEBOOK =
  "https://www.facebook.com/profile.php?id=61592492806563";
export const SOCIAL_INSTAGRAM =
  "https://www.instagram.com/abdulrehman.tech.service/";

/* ── URL helpers ─────────────────────────────────────────────────── */
export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const fallback = "https://abdul-rehman-portfolio-bodycartoon0111-netizen.vercel.app";
  const base = raw && raw.length > 0 ? raw : fallback;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${clean}`;
}

/* ── Shared metadata ─────────────────────────────────────────────── */
const TAGLINE =
  "SEO, digital marketing, web development and AI automation — growth systems for businesses worldwide.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Abdul Rehman — SEO, Web Development & Digital Growth",
    template: "Abdul Rehman — %s",
  },
  description: TAGLINE,
  keywords: [
    "Abdul Rehman",
    "SEO specialist",
    "digital marketing",
    "web development",
    "performance marketing",
    "AI automation",
    "custom software",
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    title: "Abdul Rehman — SEO, Web Development & Digital Growth",
    description: TAGLINE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — SEO, Web Development & Digital Growth",
    description: TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Page-level metadata helper with a title segment + optional overrides. */
export function pageMetadata(
  title: string,
  description: string = TAGLINE,
  path = "/",
): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${BRAND_NAME} — ${title}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

/* ── JSON-LD builders (schema.org) ───────────────────────────────── */

function baseContext(): Record<string, unknown> {
  return { "@context": "https://schema.org" };
}

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "Person",
    name: BRAND_NAME,
    url: absoluteUrl("/"),
    email: BRAND_EMAIL,
    jobTitle: "SEO Specialist & Full-Stack Web Developer",
    description: TAGLINE,
    knowsAbout: [
      "Search Engine Optimization",
      "Digital Marketing",
      "Web Development",
      "Performance Marketing",
      "AI Automation",
      "Custom Software Development",
    ],
    sameAs: [SOCIAL_LINKEDIN, SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
  };
}

export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "WebSite",
    name: `${BRAND_NAME} — Portfolio`,
    alternateName: BRAND_NAME,
    url: absoluteUrl("/"),
    description: TAGLINE,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: BRAND_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function buildProfessionalServiceJsonLd(): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "ProfessionalService",
    name: `${BRAND_NAME} — Digital Growth Services`,
    url: absoluteUrl("/"),
    description: TAGLINE,
    email: BRAND_EMAIL,
    telephone: BRAND_WHATSAPP,
    priceRange: "$$",
    areaServed: "Worldwide",
    sameAs: [SOCIAL_LINKEDIN, SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceJsonLd(
  name: string,
  description: string,
  slug: string,
): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(`/services/${slug}`),
    provider: {
      "@type": "Person",
      name: BRAND_NAME,
      url: absoluteUrl("/"),
      email: BRAND_EMAIL,
    },
    areaServed: "Worldwide",
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function buildFaqPageJsonLd(
  faqs: FaqEntry[],
): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
