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
  const fallback = "https://abdulrehmantech.com";
  const base = raw && raw.length > 0 ? raw : fallback;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${clean}`;
}

/* ── Shared metadata ─────────────────────────────────────────────── */
const TAGLINE =
  "Freelance SEO consultant in Lahore, Pakistan. Grow your business with SEO, Google & Meta Ads, websites and AI automation. Book a free SEO audit today..";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "SEO Consultant in Lahore | Freelance SEO Expert Pakistan",
    template: "Abdul Rehman — %s",
  },
  description: TAGLINE,
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    title: "SEO Consultant in Lahore | Freelance SEO Expert Pakistan",
    description: TAGLINE,
    locale: "en_US",
    images: [absoluteUrl("/opengraph-image")],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Consultant in Lahore | Freelance SEO Expert Pakistan",
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
  path = "/", openGraphDescription?: string,
): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${BRAND_NAME} — ${title}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website",
      title: fullTitle,
      description: openGraphDescription ?? description,
      locale: "en_US",
      url,
      images: [absoluteUrl("/opengraph-image")],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: openGraphDescription ?? description,
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
    publisher: buildPersonJsonLd(),
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
): Record<string, unknown> {  return {
    ...baseContext(),
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(`/services/${slug}`),
    provider: { ...buildPersonJsonLd(), email: BRAND_EMAIL },
    
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

/* ── LocalBusiness + ProfessionalService (merged) ──────────────── */
/* Opening hours are Pakistan Standard Time (PKT, UTC+05:00), as confirmed
   by the owner. Coordinates are city-level for Lahore, Pakistan — they are
   not a street address (no street address is published). */
export function buildLocalBusinessJsonLd(
  pagePath = "/",
): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Abdul Rehman — Digital Growth Services",
    url: absoluteUrl(pagePath),
    telephone: BRAND_WHATSAPP,
    email: "contact@abdulrehmantech.com",
    priceRange: "$$",
    currenciesAccepted: "PKR, USD",
    openingHoursSpecification: [
      {
        
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5204,
      longitude: 74.3587,
    },
    areaServed: [
      "Lahore (DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt, Faisal Town)",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Worldwide (remote)",
    ],
    sameAs: [SOCIAL_LINKEDIN, SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
  };
}


/** OfferCatalog of the site's services — name + description only, no prices. */
export function buildOfferCatalogJsonLd(
  services: Array<{ name: string; description: string; slug: string }>,
): Record<string, unknown> {
  return {
    ...baseContext(),
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(`/services/${service.slug}`),
      },
    })),
  };
}
