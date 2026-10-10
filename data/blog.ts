/**
 * Blog content model — CMS-ready.
 *
 * The two posts below are original SAMPLE content demonstrating the schema.
 * Swap this array for a CMS fetch (Sanity/Contentful/MDX) without touching
 * the blog pages: they only depend on `blogPosts`, `getPostBySlug` and
 * `getPostSlugs`.
 */

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
  sample: true; // marks placeholder content until real posts ship
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "technical-seo-checklist-2026",
    title: "Technical SEO Checklist for 2026: The Fundamentals That Still Decide Rankings",
    excerpt:
      "Algorithms change, but the technical foundations of search barely move. A practical checklist covering crawlability, Core Web Vitals, structured data, and index hygiene.",
    publishedAt: "2026-10-01",
    readingMinutes: 8,
    tags: ["SEO", "Technical SEO", "Checklist"],
    sample: true,
    metaTitle: "Technical SEO Checklist for 2026 | Abdul Rehman",
    metaDescription:
      "A practical 2026 technical SEO checklist: crawlability, Core Web Vitals, structured data, and index hygiene — the fundamentals that still decide rankings.",
    sections: [
      {
        heading: "Start with crawlability, not keywords",
        paragraphs: [
          "Most ranking problems I diagnose are not content problems — they are access problems. If search engines cannot reliably crawl and render your pages, nothing else you do matters. Run a crawl of your site at least monthly and watch for orphan pages, redirect chains longer than two hops, and soft 404s that quietly eat crawl budget.",
          "Your robots.txt and XML sitemap are the handshake. Keep the sitemap under 50,000 URLs, regenerate it automatically when content changes, and make sure it only lists indexable, canonical URLs.",
        ],
        bullets: [
          "Verify every important page returns a 200 status and the correct canonical tag",
          "Fix redirect chains — each hop leaks authority and slows crawlers",
          "Remove noindexed and redirected URLs from the sitemap",
        ],
      },
      {
        heading: "Core Web Vitals are a tiebreaker, not the game",
        paragraphs: [
          "Google has been consistent: page experience signals matter most when relevance is otherwise equal. That makes them a tiebreaker worth winning, not a strategy on their own. Measure with field data (CrUX via PageSpeed Insights), not just lab scores, because real users on real devices are what count.",
          "The usual wins are unglamorous: properly sized images with explicit dimensions, deferred non-critical JavaScript, and font loading that does not shift the layout. On content sites, the largest contentful paint element is almost always a hero image — preload it and serve it in a modern format.",
        ],
        bullets: [
          "Largest Contentful Paint under 2.5s on mobile field data",
          "Cumulative Layout Shift under 0.1 — set width/height on all media",
          "Interaction to Next Paint under 200ms — defer or remove heavy third-party scripts",
        ],
      },
      {
        heading: "Structured data: mark up what you can prove",
        paragraphs: [
          "Schema markup does not directly boost rankings, but it buys you richer results — review stars, FAQs, breadcrumbs, event dates — which raise click-through rates from the positions you already hold. The rule is simple: only mark up content that is visible on the page. Hidden or misleading markup is the fastest way to lose eligibility.",
          "Start with Organization and WebSite schema, add BreadcrumbList on every template, then layer type-specific markup (Article, Product, FAQPage, LocalBusiness) where it genuinely applies.",
        ],
      },
      {
        heading: "Index hygiene is a quarterly habit",
        paragraphs: [
          "Sites accumulate cruft: tag archives, thin category pages, staging subdomains that leaked into the index. Every quarter, compare the pages Google has indexed against the pages you want indexed. Anything indexed that should not be gets a noindex or a proper 410; anything important that is not indexed gets investigated.",
          "A smaller, cleaner index concentrates your site's authority on the pages that earn business. Technical SEO is mostly this: less, but correct.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-small-marketing-team",
    title: "How AI Automation Fits a Small Marketing Team (Without Replacing Anyone)",
    excerpt:
      "A grounded look at where AI automation actually helps small marketing teams: lead triage, reporting, content repurposing, and follow-up — and where the human stays in charge.",
    publishedAt: "2026-10-03",
    readingMinutes: 7,
    tags: ["AI Automation", "Marketing", "Workflows"],
    sample: true,
    metaTitle: "How AI Automation Fits a Small Marketing Team | Abdul Rehman",
    metaDescription:
      "Where AI automation genuinely helps small marketing teams — lead triage, reporting, repurposing, follow-up — and where the human stays in charge.",
    sections: [
      {
        heading: "Automate the boring middle, not the creative edges",
        paragraphs: [
          "The most useful framing for AI automation in a small team: humans own strategy and taste; machines own repetition and routing. The moment an automation starts making creative or relationship decisions on its own, you have automated the wrong thing.",
          "The boring middle is where teams bleed hours: copying leads between tools, assembling weekly reports from five dashboards, reformatting one piece of content for four channels, chasing people who never replied to the first email.",
        ],
        bullets: [
          "Lead capture → enrichment → CRM → assignment → first follow-up",
          "Weekly reporting assembled automatically, interpreted by a human",
          "One long-form asset repurposed into short-form drafts for review",
        ],
      },
      {
        heading: "Start with one workflow that has a measurable cost",
        paragraphs: [
          "Do not start with a platform. Start with a single workflow where you can name the hours it costs per week. If following up with quote requests takes six hours a week, an automation that drafts the follow-ups and queues them for one-click approval has a price tag you can calculate.",
          "This discipline also keeps the project small enough to finish. Grand automation roadmaps die in planning; one shipped workflow that saves half a day a week builds the appetite — and the budget — for the next one.",
        ],
      },
      {
        heading: "Keep a human in the loop on anything customer-facing",
        paragraphs: [
          "The cheapest failures in AI automation are the embarrassing ones: a bot that replied to a complaint with a sales pitch, a 'personalized' email that got the company name wrong. The fix is not better AI — it is a review step. Drafts are automated; sending is approved.",
          "Over time, as a workflow proves itself, you can widen the autonomous parts. Earn the trust with volume, then spend it carefully.",
        ],
        bullets: [
          "AI drafts, human approves — for every external message",
          "Log every automated action so failures are traceable",
          "Set confidence thresholds: low confidence always routes to a person",
        ],
      },
      {
        heading: "The honest limits",
        paragraphs: [
          "Automation will not fix a broken offer, a confusing website, or a team that does not trust each other. It multiplies whatever process you feed it — including bad ones. Get the process working manually first, even if slowly, then automate the working version.",
          "Done right, a small team with good automation does the output of a team twice its size — and everyone still goes home on time.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
