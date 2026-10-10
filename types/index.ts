/** Shared domain types for the Abdul Rehman portfolio. Strict — no `any` anywhere. */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
  faqs: ServiceFaq[];
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  industry: string;
  challenge: string;
  solution: string;
  services: string[];
  technologies: string[];
  /** Truthful status/result — never invented numbers. */
  outcome: string;
  relatedServices: string[];
  /** Original brand logo, served from /images/projects/. */
  logo: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  projectSlug: string;
  industry: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
  services: string[];
}

export interface Industry {
  slug: string;
  name: string;
  problem: string;
  recommendedServices: string[];
  solution: string;
  /** Slug into data/projects.ts. Empty string when no dedicated project exists yet. */
  relatedProject: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
