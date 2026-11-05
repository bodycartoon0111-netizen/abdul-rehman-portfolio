/** Shared domain types for the Abdul Rehman portfolio. Strict — no `any` anywhere. */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
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
