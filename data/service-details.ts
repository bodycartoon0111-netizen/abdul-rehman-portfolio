/**
 * Per-service editorial detail owned by the services pages.
 *
 * This augments the canonical `Service` records in `@/data/services`
 * (name, tagline, problem, solution, deliverables, technologies, idealFor,
 * faqs) with the deeper sections the detail pages render: problems breakdown,
 * strategy, process, and SEO metadata with natural keyword phrasing.
 *
 * Keyed by the 10 canonical service slugs:
 * seo, google-ads, meta-ads, web-development, app-development,
 * custom-software, wordpress, shopify, performance-marketing, ai-automation
 */

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  problems: ServiceProblem[];
  strategy: string;
  strategyPoints: string[];
  process: ServiceProcessStep[];
  metaTitle: string;
  metaDescription: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  seo: {
    slug: "seo",
    problems: [
      {
        title: "Invisible on the searches that matter",
        description:
          "Competitors capture the enquiries while your site sits on page three for the terms your customers actually type.",
      },
      {
        title: "Technical issues silently leaking traffic",
        description:
          "Slow pages, crawl errors, and missing structure quietly cap how much of your site search engines will even consider ranking.",
      },
      {
        title: "Content with no search strategy",
        description:
          "Blog posts and pages published without keyword intent behind them — effort that never compounds into traffic.",
      },
    ],
    strategy:
      "SEO is treated as a compounding asset, not a checklist. The strategy starts with a full technical and competitive audit, then prioritizes the pages closest to revenue — service and location pages first, supporting content second. Every change is tracked against rankings, traffic, and enquiries so the work stays accountable.",
    strategyPoints: [
      "Technical foundation first: crawlability, speed, and index hygiene before anything else",
      "Keyword mapping by intent — commercial pages target commercial terms",
      "Content built around topics your customers search, not around what you want to say",
      "Authority built through genuine mentions and digital PR, never link schemes",
    ],
    process: [
      {
        title: "Audit",
        description:
          "A deep technical, on-page, and competitive audit that finds exactly what is holding the site back.",
      },
      {
        title: "Foundation",
        description:
          "Technical fixes, site architecture, and keyword mapping — the groundwork every later win depends on.",
      },
      {
        title: "Build",
        description:
          "On-page optimization and strategic content creation, rolled out in priority order by revenue impact.",
      },
      {
        title: "Compound",
        description:
          "Authority building and continuous refinement, with monthly reporting tied to rankings, traffic, and leads.",
      },
    ],
    metaTitle: "SEO Expert Pakistan — Search Engine Optimization Services | Abdul Rehman",
    metaDescription:
      "Work with an SEO expert in Pakistan: technical audits, on-page optimization, and content strategy that compound into rankings, traffic, and enquiries.",
  },
  "google-ads": {
    slug: "google-ads",
    problems: [
      {
        title: "Ad spend with nothing to show",
        description:
          "Campaigns running on broad defaults — budget burned on irrelevant clicks while real buyers never see the ad.",
      },
      {
        title: "Clicks that never convert",
        description:
          "Traffic arrives but the landing experience doesn't match the promise, so money leaves through the same door it entered.",
      },
      {
        title: "No idea what's actually working",
        description:
          "Conversion tracking half-configured or missing, which means every optimization decision is a guess.",
      },
    ],
    strategy:
      "Google Ads works when structure, intent, and landing pages pull in the same direction. The strategy isolates high-intent searches into tightly themed campaigns, matches each ad group to a dedicated landing experience, and verifies conversion tracking before a single rupee of scale is spent. Budgets grow only behind proven cost-per-acquisition numbers.",
    strategyPoints: [
      "Search intent mapped first — campaigns built around how buyers actually search",
      "Tight ad groups with dedicated landing pages, never generic homepages",
      "Conversion tracking verified before scaling, so every decision is data-backed",
      "Negative keywords and search-term reviews as an ongoing discipline, not a one-time setup",
    ],
    process: [
      {
        title: "Research",
        description:
          "Keyword, competitor, and audience research to find the searches worth paying for — and the ones to avoid.",
      },
      {
        title: "Build",
        description:
          "Campaign architecture, ad copy, and landing pages constructed around intent, with tracking verified end to end.",
      },
      {
        title: "Launch",
        description:
          "Controlled launch with conservative budgets while real conversion data accumulates.",
      },
      {
        title: "Scale",
        description:
          "Winners get budget, losers get cut, and testing continues — optimization as a routine, not an event.",
      },
    ],
    metaTitle: "Google Ads Expert Pakistan — PPC Management Services | Abdul Rehman",
    metaDescription:
      "Google Ads management by an expert in Pakistan: intent-based campaigns, conversion-focused landing pages, and tracking you can trust.",
  },
  "meta-ads": {
    slug: "meta-ads",
    problems: [
      {
        title: "Boosted posts, not campaigns",
        description:
          "Money spent on boosted posts with no funnel thinking — reach without a path to revenue.",
      },
      {
        title: "Creative that stops nobody",
        description:
          "Ads that look like ads get scrolled past. Without thumb-stopping creative, even perfect targeting fails.",
      },
      {
        title: "Targeting on autopilot",
        description:
          "Overlapping audiences competing against each other, driving up costs while learning stays shallow.",
      },
    ],
    strategy:
      "Meta rewards advertisers who feed the algorithm clarity: clear conversion events, distinct creative angles, and patient budgets. The strategy tests creative concepts systematically — hooks, formats, and offers — while keeping audience structure simple enough for the algorithm to learn. Retargeting closes the loop on the interest prospecting creates.",
    strategyPoints: [
      "Creative testing as the core lever — multiple hooks and formats per angle",
      "Simple, non-overlapping audience structure that lets the algorithm learn",
      "Full-funnel thinking: prospecting, retargeting, and retention as one system",
      "Pixel and Conversions API setup verified so optimization has clean signal",
    ],
    process: [
      {
        title: "Foundation",
        description:
          "Pixel, Conversions API, and event tracking audited and fixed — the algorithm is only as good as its signal.",
      },
      {
        title: "Creative",
        description:
          "Ad angles and creative concepts developed around real customer motivations, not stock imagery.",
      },
      {
        title: "Testing",
        description:
          "Structured creative and audience tests with clear kill/scale rules — no emotional attachment to losing ads.",
      },
      {
        title: "Scaling",
        description:
          "Winning combinations scaled gradually while fresh creative keeps fatigue from eroding returns.",
      },
    ],
    metaTitle: "Meta Ads Expert Pakistan — Facebook & Instagram Ads | Abdul Rehman",
    metaDescription:
      "Facebook and Instagram advertising by a Meta ads expert in Pakistan: creative testing, full-funnel structure, and retargeting that converts.",
  },
  "web-development": {
    slug: "web-development",
    problems: [
      {
        title: "A website that doesn't sell",
        description:
          "Pretty pages that confuse visitors — no clear message, no clear next step, and enquiries that never arrive.",
      },
      {
        title: "Slow, fragile, embarrassing",
        description:
          "Long load times and broken layouts on phones, where most of your visitors actually are.",
      },
      {
        title: "Developer-dependent for every change",
        description:
          "Simple text edits require a ticket and a wait, so the site slowly goes stale.",
      },
    ],
    strategy:
      "A business website has one job: turn visitors into enquiries. The strategy starts from that conversion goal and works backwards — message, structure, then design. Technical choices favor speed, maintainability, and SEO-readiness: modern frameworks, clean code, and performance budgets that are measured, not hoped for.",
    strategyPoints: [
      "Conversion-first structure — every page has a job and a next step",
      "Performance as a feature: fast loads on real mobile connections",
      "SEO-ready from the first commit: semantics, metadata, and schema",
      "Built so non-developers can update content without breaking anything",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Your offer, your customers, and what a 'win' looks like for the site — the brief everything else serves.",
      },
      {
        title: "Blueprint",
        description:
          "Sitemap, wireframes, and content plan agreed before a single pixel is designed.",
      },
      {
        title: "Build",
        description:
          "Design and development in parallel, with staging links so you see progress weekly.",
      },
      {
        title: "Launch",
        description:
          "Testing across devices, analytics and SEO checks, then launch — with handover training included.",
      },
    ],
    metaTitle: "Web Development Pakistan — Business Websites That Convert | Abdul Rehman",
    metaDescription:
      "Professional web development in Pakistan: fast, SEO-ready business websites designed to turn visitors into enquiries.",
  },
  "app-development": {
    slug: "app-development",
    problems: [
      {
        title: "An idea stuck in documents",
        description:
          "The app concept is clear in your head but translating it into a shippable product feels impossibly far away.",
      },
      {
        title: "Quoted timelines nobody believes",
        description:
          "Vague scopes and ballooning budgets from teams that never defined what 'version one' actually includes.",
      },
      {
        title: "An app users abandon",
        description:
          "Launched but confusing — downloads that never become daily habits because the core flow wasn't designed around real use.",
      },
    ],
    strategy:
      "Apps succeed on focus: one core job done brilliantly beats ten features done averagely. The strategy defines a tight MVP around the single most valuable user flow, ships it to real users fast, and lets actual behavior — not opinions — decide what gets built next. Cross-platform tooling keeps one codebase serving both major platforms.",
    strategyPoints: [
      "MVP discipline — the smallest version that delivers real value ships first",
      "User flows designed around actual behavior, validated before heavy build",
      "Cross-platform development for iOS and Android from one codebase",
      "Analytics and crash reporting built in from day one, not bolted on later",
    ],
    process: [
      {
        title: "Scoping",
        description:
          "The idea turned into a defined MVP: user stories, core flows, and a firm definition of 'version one'.",
      },
      {
        title: "Design",
        description:
          "Interface design and clickable prototypes you can test with real users before development begins.",
      },
      {
        title: "Build",
        description:
          "Agile development in weekly cycles with test builds you can run on your own phone.",
      },
      {
        title: "Launch",
        description:
          "Store submission, launch checklist, and a post-launch plan for the improvements real usage will reveal.",
      },
    ],
    metaTitle: "App Development Pakistan — iOS & Android Apps | Abdul Rehman",
    metaDescription:
      "Mobile app development in Pakistan: focused MVPs for iOS and Android, designed around real users and shipped to the stores.",
  },
  "custom-software": {
    slug: "custom-software",
    problems: [
      {
        title: "Processes held together by spreadsheets",
        description:
          "Critical operations living in Excel files and WhatsApp threads — fragile, unsearchable, and one lost phone away from disaster.",
      },
      {
        title: "Off-the-shelf tools that almost fit",
        description:
          "Subscriptions piled on subscriptions, each covering 80% of the need and none of them talking to each other.",
      },
      {
        title: "No visibility into the business",
        description:
          "Decisions made on gut feeling because the data exists but lives in five disconnected places.",
      },
    ],
    strategy:
      "Custom software earns its keep by removing friction from the specific way your business actually works. The strategy maps the real workflow first — not the idealized one — then builds the smallest system that removes the biggest pain. Integrations connect what you already use; automation handles the repetitive middle; dashboards surface what matters.",
    strategyPoints: [
      "Workflow-first: the software follows your process, not the other way around",
      "Start with the highest-friction problem, prove value, then expand",
      "Integrations with your existing tools instead of rip-and-replace",
      "Built for the team that will use it daily — simple beats clever",
    ],
    process: [
      {
        title: "Mapping",
        description:
          "Your current workflow documented honestly — including the workarounds nobody admits to.",
      },
      {
        title: "Specification",
        description:
          "A clear build plan: what the system does, what it connects to, and what success looks like.",
      },
      {
        title: "Build",
        description:
          "Iterative development with working versions in your hands early and often.",
      },
      {
        title: "Adoption",
        description:
          "Training, documentation, and support until the team genuinely prefers the new way.",
      },
    ],
    metaTitle: "Custom Software Development Pakistan — Business Systems | Abdul Rehman",
    metaDescription:
      "Custom software development in Pakistan: internal tools, dashboards, and integrations built around how your business actually works.",
  },
  wordpress: {
    slug: "wordpress",
    problems: [
      {
        title: "A WordPress site held together by plugins",
        description:
          "Forty plugins deep, updates everyone is afraid to run, and a site that gets slower every month.",
      },
      {
        title: "Hacked, or one update away from it",
        description:
          "Outdated themes and nulled plugins turning the site into a liability instead of an asset.",
      },
      {
        title: "Can't publish without breaking things",
        description:
          "A fragile page-builder setup where every content update risks the layout.",
      },
    ],
    strategy:
      "WordPress is at its best when it's boring: a lean theme, a handful of well-chosen plugins, and hardened security. The strategy strips the bloat, locks down the attack surface, and rebuilds the editing experience so publishing feels safe. Speed optimization and SEO fundamentals come standard, not as add-ons.",
    strategyPoints: [
      "Lean builds — only the plugins the site actually needs, nothing more",
      "Security hardening: updates, backups, and locked-down access as standard",
      "Editor experience your team can use without fear of breaking layouts",
      "Performance and SEO fundamentals baked in from the start",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Current site reviewed: plugin bloat, security gaps, speed issues, and what's worth keeping.",
      },
      {
        title: "Blueprint",
        description:
          "Theme approach, plugin shortlist, and content structure agreed up front.",
      },
      {
        title: "Build",
        description:
          "Clean build or rebuild on staging, with content migrated and redirects mapped.",
      },
      {
        title: "Handover",
        description:
          "Security checklist, backup routine, and training so your team publishes confidently.",
      },
    ],
    metaTitle: "WordPress Development Pakistan — Secure, Fast WP Sites | Abdul Rehman",
    metaDescription:
      "WordPress development in Pakistan: lean, secure, fast WordPress websites your team can actually manage.",
  },
  shopify: {
    slug: "shopify",
    problems: [
      {
        title: "A store that doesn't convert",
        description:
          "Traffic arrives but checkout stays quiet — friction in the product pages, the cart, or the trust signals.",
      },
      {
        title: "Generic theme, generic results",
        description:
          "An out-of-the-box look that tells customers nothing about why they should buy from you specifically.",
      },
      {
        title: "Held back by app overload",
        description:
          "Monthly app fees stacking up for features the theme could have handled natively.",
      },
    ],
    strategy:
      "Shopify stores win on trust and frictionless checkout. The strategy sharpens the offer and product presentation first, then removes every unnecessary step between 'interested' and 'ordered'. Local payment methods, clear shipping information, and mobile-first design are treated as conversion essentials, not nice-to-haves.",
    strategyPoints: [
      "Conversion-focused product pages: photography guidance, reviews, and clear offers",
      "Checkout friction audit — every extra step measured against its cost",
      "Local payment and shipping setup done properly from day one",
      "App minimalism: native theme features first, paid apps only where they earn it",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Existing store or business reviewed: offer strength, funnel leaks, and quick wins.",
      },
      {
        title: "Design",
        description:
          "Store design built around your products and customers — not a generic theme demo.",
      },
      {
        title: "Build",
        description:
          "Development, product setup, payments, shipping, and apps — configured and tested.",
      },
      {
        title: "Launch",
        description:
          "Pre-launch checklist, analytics, and a growth roadmap for what comes after day one.",
      },
    ],
    metaTitle: "Shopify Development Pakistan — High-Converting Stores | Abdul Rehman",
    metaDescription:
      "Shopify development in Pakistan: conversion-focused online stores with proper payments, shipping, and mobile-first design.",
  },
  "performance-marketing": {
    slug: "performance-marketing",
    problems: [
      {
        title: "Marketing spend nobody can defend",
        description:
          "Budget going out across channels with no clear line to revenue coming back.",
      },
      {
        title: "Channels working against each other",
        description:
          "Google, Meta, and email each optimized in isolation — double-counted conversions and contradictory decisions.",
      },
      {
        title: "Reports full of vanity metrics",
        description:
          "Impressions and clicks reported as wins while the actual question — did it make money? — goes unanswered.",
      },
    ],
    strategy:
      "Performance marketing means one thing: every rupee accountable to revenue. The strategy unifies tracking across channels so each gets honest credit, sets target acquisition costs from your real margins, and reallocates budget continuously toward what converts. Creative and landing pages are treated as part of media performance, because they are.",
    strategyPoints: [
      "Unified measurement — one source of truth across Google, Meta, and beyond",
      "Targets set from your margins, not from platform benchmarks",
      "Budget fluidity: spend follows proven return, not channel loyalty",
      "Creative and landing pages optimized as part of the media equation",
    ],
    process: [
      {
        title: "Baseline",
        description:
          "Tracking audit and historical analysis — establishing what the numbers actually say today.",
      },
      {
        title: "Targets",
        description:
          "Acquisition costs and return targets agreed from your unit economics.",
      },
      {
        title: "Execution",
        description:
          "Campaigns launched or rebuilt across channels with unified reporting.",
      },
      {
        title: "Optimization",
        description:
          "Continuous reallocation and testing against the targets — marketing as a managed investment.",
      },
    ],
    metaTitle: "Performance Marketing Pakistan — ROI-Focused Campaigns | Abdul Rehman",
    metaDescription:
      "Performance marketing in Pakistan: multi-channel campaigns held accountable to revenue, with unified tracking and honest reporting.",
  },
  "ai-automation": {
    slug: "ai-automation",
    problems: [
      {
        title: "Hours lost to copy-paste work",
        description:
          "Your team spends its days moving data between tools instead of serving customers.",
      },
      {
        title: "Leads going cold",
        description:
          "Enquiries waiting hours for a first response because follow-up depends on someone remembering.",
      },
      {
        title: "AI hype with no use case",
        description:
          "Everyone says 'use AI' but nobody can name the specific workflow where it pays for itself in your business.",
      },
    ],
    strategy:
      "Automation starts from costed workflows, not from tools. The strategy identifies the repetitive processes eating the most hours, prices them, and automates the most expensive one first — with humans approving anything customer-facing. AI handles drafting, classifying, and routing; people handle judgment and relationships.",
    strategyPoints: [
      "Workflow-first: the most expensive repetitive process gets automated first",
      "Human-in-the-loop on anything external — AI drafts, people approve",
      "Integrations across your existing stack: CRM, email, sheets, and more",
      "Measured in hours returned to the team, not in demos that impress",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Your repetitive workflows mapped and costed — finding where automation actually pays.",
      },
      {
        title: "Design",
        description:
          "The automation blueprint: triggers, steps, human checkpoints, and failure handling.",
      },
      {
        title: "Build",
        description:
          "Implementation and testing against real scenarios, including the edge cases.",
      },
      {
        title: "Handover",
        description:
          "Documentation, monitoring, and training — plus a clear path for the next workflow.",
      },
    ],
    metaTitle: "AI Automation Pakistan — Workflow Automation Services | Abdul Rehman",
    metaDescription:
      "AI automation services in Pakistan: lead follow-up, reporting, and workflow automation that returns hours to your team.",
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
