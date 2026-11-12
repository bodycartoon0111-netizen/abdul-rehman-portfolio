import type { Service } from "@/types";

/**
 * The 11 services. Original copy, SEO-aware without keyword stuffing.
 * No invented metrics anywhere — outcomes are described truthfully.
 */
export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    tagline: "Get found on Google by customers who are ready to buy.",
    description: "Technical audits, on-page optimization, local SEO and content that ranks in Lahore and across Pakistan.",
    problem:
      "SEO services in Lahore that compound: technical audits, on-page optimization, local SEO and content — delivered by one consultant, not handed down a chain of juniors. Your site ranks for the searches your customers actually type, in Lahore and across Pakistan.",
    solution:
      "I build SEO as an asset, not a campaign. Technical fixes so search engines can crawl and understand your site, content mapped to real search intent, and authority signals that compound over time. The result is rankings you own and traffic that doesn't invoice you every month.",
    deliverables: [
      { text: "Technical SEO audit with prioritized fixes", href: "/services/seo-audit" },
      { text: "Keyword and search-intent mapping", href: "/services/keyword-research" },
      { text: "On-page optimization (titles, structure, schema)", href: "/services/technical-seo" },
      { text: "Content strategy and article briefs" },
      { text: "Internal linking architecture", href: "/services/technical-seo" },
      { text: "Local SEO and Google Business Profile setup", href: "/services/local-seo" },
      { text: "Plain-language monthly reporting" },
    ],
    technologies: [
      "Google Search Console",
      "GA4",
      "Screaming Frog",
      "Ahrefs",
      "Next.js",
      "WordPress",
    ],
    idealFor:
      "Businesses that want a steady flow of enquiries and sales from Google without depending on ad spend.",
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Most sites see meaningful movement in three to six months. SEO compounds — early work on technical health and content keeps paying long after it's done.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No, and you should be skeptical of anyone who does. Rankings depend on competition and search engines I don't control. What I guarantee is transparent work and honest reporting of what's happening.",
      },
      {
        q: "Will my website need changes?",
        a: "Almost certainly — technical fixes and content improvements are where most SEO gains come from. I'll explain every change and why it matters before anything goes live.",
      },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    tagline: "Get found on Google Maps by customers near you in Lahore.",
    description: "Google Business Profile setup and optimisation, Maps ranking, local keywords, reviews and NAP consistency for Lahore businesses.",
    problem:
      "Local SEO services in Lahore for businesses that serve customers nearby: clinics, restaurants, salons, shops, plumbers, electricians, schools and estate agents in DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt and Faisal Town. When someone nearby searches for what you do, Google shows a map first. If your profile is half-finished, your details do not match, or you have few recent reviews, that customer rings the next listing instead of you.",
    solution:
      "I start with your Google Business Profile: I claim and verify it, pick the category that matches what you actually do, and fill in every field properly — your real business name, service areas, hours, phone, website, services and a plain description of what you offer. Then I work on the searches that bring calls: local keywords on your website, such as a dentist in DHA or a plumber in Johar Town, written in the words customers use. I check your name, address and phone number everywhere they appear, so Google sees one consistent business, and I list you in local directories that fit what you do. For reviews, I set up a simple routine: ask happy customers at the right moment, after a good service, a delivery or a successful appointment, and reply to every review, good and bad. I never buy reviews, write them myself, or ask staff to leave them. I track calls, direction requests and website visits from your profile in Google Business Profile insights, Search Console and GA4, and I tell you plainly what changed each month.",
    deliverables: [
      { text: "Google Business Profile setup, verification and optimisation", href: "/blog/local-seo-lahore-google-business-profile-guide" },
      { text: "Maps ranking work for your service areas in Lahore", href: "/blog/local-seo-lahore-google-business-profile-guide" },
      { text: "Local keyword research and on-page local content", href: "/services/keyword-research" },
      { text: "Review routine: how to ask, when to ask, and replies to every review" },
      { text: "NAP audit: name, address and phone checked everywhere" },
      { text: "Local citations in directories that fit your business" },
      { text: "Monthly reporting on calls, direction requests and profile views" },
    ],
    technologies: [
      "Google Business Profile",
      "Google Search Console",
      "GA4",
    ],
    idealFor:
      "Clinics and dentists, restaurants and cafes, salons, shops, plumbers, electricians, lawyers, schools and coaching centres, estate agents and home-service businesses that take customers in person or visit them at home. It fits a business in DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt or Faisal Town, and it works the same way for businesses in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan that serve customers in a specific area.",
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Most sites see meaningful movement in three to six months. SEO compounds — early work on technical health and content keeps paying long after it's done.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No, and you should be skeptical of anyone who does. Rankings depend on competition and search engines I don't control. What I guarantee is transparent work and honest reporting of what's happening.",
      },
      {
        q: "Will my website need changes?",
        a: "Almost certainly — technical fixes and content improvements are where most SEO gains come from. I'll explain every change and why it matters before anything goes live.",
      },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    tagline: "Search and Performance Max campaigns engineered for profit, not clicks.",
    description: "Search and Performance Max campaigns with conversion tracking, tight keyword intent and budgets managed for profit.",
    problem:
      "Google Ads management in Pakistan that starts with tracking, not spending. Intent-based Search and Performance Max campaigns, conversion-focused landing pages, and budgets that grow only behind proven cost-per-acquisition numbers — run by one consultant in Lahore.",
    solution:
      "I run Google Ads like a P&L: tight keyword intent, aggressive negative lists, conversion tracking you can actually trust, and landing pages built to close. Every unit of spend is traced back to revenue, and budgets flow to what converts cheapest.",
    deliverables: [
      { text: "Account, tracking, and waste audit" },
      { text: "Campaign architecture (Search, Performance Max, remarketing)", href: "/services/performance-marketing" },
      { text: "Keyword research and negative-list management", href: "/services/keyword-research" },
      { text: "Ad copy and asset testing program" },
      { text: "Landing page recommendations", href: "/services/web-development" },
      { text: "Bid and budget strategy" },
      { text: "Bi-weekly optimization and reporting" },
    ],
    technologies: [
      "Google Ads",
      "GA4",
      "Google Tag Manager",
      "Looker Studio",
      "Next.js",
      "WordPress",
    ],
    idealFor:
      "Businesses with a proven offer that need predictable, scalable lead flow from high-intent searches.",
    faqs: [
      {
        q: "What ad budget do I need to start?",
        a: "Enough to gather statistically meaningful data in your market — I'll tell you the honest minimum for your niche before we spend anything. Starting too small just produces noise.",
      },
      {
        q: "How fast will I see results?",
        a: "Campaigns can be live within two weeks once tracking is verified. Expect a learning and tuning phase first — profitable scale comes after the data tells us what works.",
      },
      {
        q: "Do you write the ad copy?",
        a: "Yes — headlines, descriptions, and creative direction are included. Ads written around the customer's intent, not your feature list.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    tagline: "Scroll-stopping creative and full-funnel campaigns on Meta.",
    description: "Full-funnel Meta and Instagram campaigns with creative testing, Conversions API tracking and retargeting.",
    problem:
      "Meta Ads services in Pakistan that start with creative, not boosting. Full-funnel Facebook and Instagram campaigns — prospecting, retargeting and retention as one system — with creative testing, Conversions API tracking, and a clear kill-or-scale rule for every ad. Run by one consultant in Lahore.",
    solution:
      "Creative-led testing, broad-but-disciplined targeting, Conversions API tracking done correctly, and funnels that warm cold traffic into buyers. Creative does the targeting now — so the testing program is the strategy.",
    deliverables: [
      { text: "Pixel, Conversions API, and tracking setup" },
      { text: "Audience and full-funnel strategy", href: "/services/performance-marketing" },
      { text: "Creative concepts and testing matrix" },
      { text: "Ad copywriting" },
      { text: "Campaign build, testing, and scaling", href: "/services/performance-marketing" },
      { text: "Retargeting sequences", href: "/services/performance-marketing" },
      { text: "Revenue-tied reporting" },
    ],
    technologies: [
      "Meta Ads Manager",
      "Conversions API",
      "GA4",
      "Figma",
      "Shopify",
      "WordPress",
    ],
    idealFor:
      "E-commerce and consumer brands that sell where their customers scroll — Instagram and Facebook.",
    faqs: [
      {
        q: "How much creative do I need?",
        a: "More than you think and less than you fear. I work with a testing matrix — variations of hooks, formats, and angles — and we double down on winners instead of guessing.",
      },
      {
        q: "What's a sensible starting budget?",
        a: "It depends on your product price and audience size. I'll give you an honest minimum for your market — enough to test creative properly, not just burn quietly.",
      },
      {
        q: "Can you also manage my social media pages?",
        a: "My focus is paid performance, not organic social management. I can advise on what content supports the ads, but page management is a different service.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Fast, conversion-focused websites built with modern code.",
    description: "Fast, conversion-focused Next.js websites with technical SEO built in from the first commit.",
    problem:
      "Web development services in Pakistan that start from the conversion goal and work backwards: message, structure, then design. Fast, SEO-ready Next.js websites — built with modern code, measured performance budgets, and technical SEO from the first commit — by one consultant in Lahore.",
    solution:
      "Custom-built with Next.js and React: sub-second loads, SEO-ready structure from the first commit, and every page designed around one job — turning visitors into enquiries. No bloated themes, no plugin towers.",
    deliverables: [
      { text: "Conversion-first UX and page structure", href: "/services/performance-marketing" },
      { text: "Custom Next.js / React development", href: "/blog/fast-website-seo-nextjs" },
      { text: "Technical SEO baked in from day one", href: "/services/technical-seo" },
      { text: "Core Web Vitals and speed optimization", href: "/blog/technical-seo-checklist-2026" },
      { text: "CMS integration where you need it", href: "/services/wordpress" },
      { text: "Analytics and conversion tracking", href: "/services/performance-marketing" },
      { text: "Launch, hosting setup, and handover docs" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
    ],
    idealFor:
      "Businesses that need their website to act like a salesperson, not a brochure.",
    faqs: [
      {
        q: "How long does a website take?",
        a: "Most marketing sites take three to six weeks from kickoff, depending on how ready your content is. You'll get a firm timeline in the proposal.",
      },
      {
        q: "Can you redesign my existing site?",
        a: "Yes — and I'll first tell you honestly whether a redesign or targeted fixes will get you further. Sometimes the foundation is fine and the conversion path is what's broken.",
      },
      {
        q: "Will I be able to update content myself?",
        a: "Yes. Where it makes sense I integrate a CMS with an editing experience your team can actually use — plus a handover walkthrough.",
      },
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    tagline: "iOS and Android apps, from idea to App Store.",
    description: "Cross-platform iOS and Android apps from a single codebase, from scoping to store submission.",
    problem:
      "Great product ideas stall because agencies quote enterprise prices, or deliver codebases nobody can maintain after launch.",
    solution:
      "App development in Pakistan works best cross-platform: one codebase for iOS and Android, one backend, and one team — Abdul Rehman. Cross-platform builds from a single codebase: native feel, one team, faster iterations — plus a backend designed to scale past your first ten thousand users, not just your first hundred.",
    deliverables: [
      { text: "Product scoping and user flows", href: "/process" },
      { text: "UI/UX design" },
      { text: "Cross-platform app development" },
      { text: "Backend APIs and database", href: "/services/custom-software" },
      { text: "App Store and Play Store submission" },
      { text: "Push notifications and analytics" },
      { text: "Post-launch support plan" },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Expo",
    ],
    idealFor:
      "Founders validating a mobile product without hiring an in-house team.",
    faqs: [
      {
        q: "Should I build for iOS, Android, or both?",
        a: "Cross-platform means you don't have to choose — one codebase ships to both stores, which is the right call for most MVPs and early-stage products.",
      },
      {
        q: "How much does an app cost?",
        a: "It depends entirely on scope — a focused MVP and a feature-rich platform are different projects. Scoping first, fixed quote second. Never the other way around.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Full repository access, documentation, and handover are part of every build — no hostages, no lock-in.",
      },
    ],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    tagline: "Internal tools, dashboards, and systems built around how you work.",
    description: "CRMs, dashboards and internal tools built around your workflow, with documentation and training included.",
    problem:
      "Off-the-shelf software forces your team into someone else's workflow, and the subscriptions pile up — while the one feature you actually need still doesn't exist.",
    solution:
      "Purpose-built software: CRMs, dashboards, booking systems, internal tools — designed around your actual process, integrated with the tools you already use, and owned outright instead of rented forever.",
    deliverables: [
      { text: "Requirements and process mapping", href: "/process" },
      { text: "System architecture and data design" },
      { text: "Custom web application development", href: "/services/web-development" },
      { text: "Admin dashboards and reporting" },
      { text: "Third-party integrations" },
      { text: "Data migration" },
      { text: "Documentation and team training" },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Python",
    ],
    idealFor:
      "Teams that have outgrown spreadsheets and generic SaaS — and know exactly what's slowing them down.",
    faqs: [
      {
        q: "How do I decide between building and buying?",
        a: "If an off-the-shelf tool covers 90% of your workflow, buy it. If you're bending your process around the tool — or paying for five tools that don't talk — it's time to build. I'll tell you honestly which one you are.",
      },
      {
        q: "How long does custom software take?",
        a: "Scoped in phases: a useful first version typically ships in weeks, not quarters, then we iterate on real usage instead of imagined requirements.",
      },
      {
        q: "What about maintenance after launch?",
        a: "Every build includes documentation and handover. Ongoing support plans are available, but the system is yours — you're never forced to keep me on retainer to keep it running.",
      },
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    tagline: "WordPress done right: fast, secure, and easy to manage.",
    description: "Lean, secure WordPress builds with a custom theme, speed optimization and an editing experience your team can use.",
    problem:
      "Most WordPress sites are plugin towers — slow, fragile, and one update away from breaking. The platform gets blamed for what bad builds caused.",
    solution:
      "Lean WordPress builds: a custom theme, only the plugins you genuinely need, hardened security, and a Gutenberg editing experience your team will actually use. WordPress's flexibility without its reputation for bloat.",
    deliverables: [
      { text: "Custom theme development" },
      { text: "Speed and Core Web Vitals optimization", href: "/blog/technical-seo-checklist-2026" },
      { text: "Security hardening" },
      { text: "SEO-ready configuration", href: "/services/seo" },
      { text: "Gutenberg editing experience" },
      { text: "Migration from page builders" },
      { text: "Training and handover" },
    ],
    technologies: [
      "WordPress",
      "Gutenberg",
      "WooCommerce",
      "PHP",
      "Cloudflare",
      "SEO tooling",
    ],
    idealFor:
      "Content-driven sites and businesses that want full control without depending on a developer for every edit.",
    faqs: [
      {
        q: "Is WordPress still a good choice in 2026?",
        a: "For content-heavy sites and teams that publish often — absolutely. The key is a lean build. A well-built WordPress site is fast and secure; a page-builder tower is neither.",
      },
      {
        q: "Can you speed up my existing WordPress site?",
        a: "Usually, significantly. I audit what's actually slow — hosting, theme, plugins, images — and fix in order of impact. Sometimes that means rebuilding the theme; I'll show you the numbers first.",
      },
      {
        q: "What about security and updates?",
        a: "Hardening is part of every build: least-privilege access, update strategy, backups, and monitoring. Plus a plain-English guide so updates stop being scary.",
      },
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "High-converting Shopify stores, built to sell.",
    description: "Conversion-tuned Shopify stores with a fast custom theme, checkout optimization and pixel tracking.",
    problem:
      "Generic themes and app overload make stores slow and same-looking. Checkout friction, weak product pages, and blind tracking quietly kill sales you already earned.",
    solution:
      "Conversion-tuned Shopify builds: a fast, clean theme customized around your brand, product architecture that guides buying decisions, upsells that don't annoy, and tracking that shows what actually sells.",
    deliverables: [
      { text: "Store setup and theme customization" },
      { text: "Product and collection architecture" },
      { text: "Checkout and upsell optimization" },
      { text: "Speed optimization", href: "/blog/technical-seo-checklist-2026" },
      { text: "Payments, shipping, and tax setup" },
      { text: "Analytics and pixel tracking", href: "/services/meta-ads" },
      { text: "Launch checklist and training" },
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "Klaviyo",
      "Meta Pixel",
      "GA4",
      "Shopify Apps",
    ],
    idealFor:
      "Brands launching direct-to-consumer sales — or stores that get traffic but not enough orders.",
    faqs: [
      {
        q: "Shopify or WooCommerce — which should I pick?",
        a: "Shopify if you want selling infrastructure handled for you and a store live fast. WooCommerce if you need deep customization and already run WordPress. I'll recommend based on your situation, not my preference.",
      },
      {
        q: "Can you migrate my existing store?",
        a: "Yes — products, customers, orders, and URL redirects handled so you don't lose rankings or break bookmarks in the move.",
      },
      {
        q: "Do you handle product uploads and content?",
        a: "I set up the structure and train your team; bulk product imports can be included. Ongoing catalog management stays with you — that's how it should be.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    tagline: "Full-funnel paid growth across Google, Meta, and beyond — managed as one P&L.",
    description: "Google and Meta managed as one P&L, with unified tracking, shared creative learnings and plain-language reporting.",
    problem:
      "Agencies optimize channels in silos: Google reports a ROAS, Meta reports a ROAS, and nobody reports profit. Budgets stay where they're comfortable instead of where they convert.",
    solution:
      "One accountable owner across channels: unified tracking and attribution, creative learnings shared between platforms, landing pages built to convert the traffic, and budgets that move to whatever acquires customers cheapest.",
    deliverables: [
      { text: "Cross-channel growth strategy", href: "/blog/performance-marketing-pakistan" },
      { text: "Unified tracking and attribution setup" },
      { text: "Google and Meta campaign management", href: "/services/google-ads" },
      { text: "Creative testing program", href: "/services/meta-ads" },
      { text: "Landing page conversion optimization", href: "/services/web-development" },
      { text: "Budget allocation by marginal acquisition cost" },
      { text: "Monthly growth reporting in plain language" },
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "GA4",
      "Google Tag Manager",
      "Looker Studio",
      "n8n",
    ],
    idealFor:
      "Businesses already spending on ads that need one accountable owner for growth — not three dashboards.",
    faqs: [
      {
        q: "How is this different from hiring channel specialists?",
        a: "Specialists optimize their channel; I optimize your profit. When Google and Meta compete for the same budget, someone has to decide based on marginal cost per customer — that's the job.",
      },
      {
        q: "What spend level makes this worthwhile?",
        a: "Enough that reallocating budget between channels moves the needle. If you're spending meaningfully on two or more channels without unified reporting, you're the right fit.",
      },
      {
        q: "How do you report results?",
        a: "One report: spend, revenue, cost per acquisition, and what changed because of the data. No vanity metrics, no 40-slide decks that say nothing.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "AI workflows that remove busywork and follow up like clockwork.",
    description: "Practical AI workflows for lead follow-up, CRM updates and reporting, with human-in-the-loop safeguards.",
    problem:
      "AI automation services in Pakistan that start from costed workflows, not from tools. Lead follow-up, CRM updates and reporting — automated where they pay, with a human approving anything customer-facing. Practical AI for small teams, built in Lahore.",
    solution:
      "Practical AI automation, not demos: instant lead responses, CRM updates, content pipelines, and reporting — wired into the tools you already use, with human-in-the-loop safeguards where judgment matters.",
    deliverables: [
      { text: "Automation opportunity audit", href: "/blog/ai-automation-small-marketing-team" },
      { text: "Instant lead response and nurturing workflows", href: "/blog/ai-automation-small-marketing-teams-pakistan-workflows" },
      { text: "CRM and tool integrations", href: "/services/custom-software" },
      { text: "AI chat assistants for sales and support" },
      { text: "Content and reporting pipelines", href: "/blog/ai-automation-small-marketing-team" },
      { text: "Human-in-the-loop safeguards" },
      { text: "Documentation and handover" },
    ],
    technologies: [
      "n8n",
      "OpenAI",
      "Python",
      "WhatsApp API",
      "HubSpot",
      "Airtable",
    ],
    idealFor:
      "Teams losing time — or leads — to manual, repetitive work that software should be doing.",
    faqs: [
      {
        q: "Will AI replace my team?",
        a: "It replaces the repetitive parts of their jobs — data entry, first responses, follow-up reminders — so humans spend time on judgment and relationships. That's the goal I design for.",
      },
      {
        q: "What tools can you integrate with?",
        a: "CRMs, spreadsheets, email, WhatsApp, ad platforms, and most tools with an API. The audit maps your actual stack before anything is built.",
      },
      {
        q: "Is my business data safe?",
        a: "Automations run on infrastructure you control where possible, with least-privilege access and no training on your private data. Data handling is documented, not hand-waved.",
      },
    ],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);
