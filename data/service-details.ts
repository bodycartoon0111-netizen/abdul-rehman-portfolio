/**
 * Per-service editorial detail owned by the services pages.
 *
 * This augments the canonical `Service` records in `@/data/services`
 * (name, tagline, problem, solution, deliverables, technologies, idealFor,
 * faqs) with the deeper sections the detail pages render: problems breakdown,
 * strategy, process, and SEO metadata with natural keyword phrasing.
 *
 * Keyed by the 11 canonical service slugs:
 * seo, local-seo, google-ads, meta-ads, web-development, app-development,
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
  h1: string;
    h1Highlight: string;
  problems: ServiceProblem[];
  strategy: string;
  strategyPoints: string[];
  process: ServiceProcessStep[];
  metaTitle: string;
  metaDescription: string;
  snippet?: string;
  problemsHeading?: string;
  solutionHeading?: string;
  faqHeading?: string;
  serviceArea?: { heading: string; text: string };
  heroLinks?: { prefix: string; anchor: string; href: string; suffix: string }[];
  introLinks?: { prefix: string; anchor: string; href: string; suffix: string }[];
  deliverablesLead?: string; ctaTitle?: string; ctaDescription?: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  seo: {
    slug: "seo",
    h1: "SEO Services in Lahore — Rank Higher, Convert Better",
      h1Highlight: "SEO Services in Lahore",
    problems: [
      {
        title: "Invisible on the searches that matter",
        description:
          "Competitors capture the enquiries while your site sits on page three for the terms your customers actually type — the gap the best SEO services in Lahore are hired to close.",
      },
      {
        title: "Technical issues silently leaking traffic",
        description:
          "Slow pages, crawl errors, and missing structure quietly cap how much of your site search engines will even consider ranking — the hidden losses you hire SEO consultant Lahore expertise to find.",
      },
      {
        title: "Content with no search strategy",
        description:
          "Blog posts and pages published without keyword intent behind them — effort that never compounds into traffic, whether it is SEO services Johar Town Lahore businesses need or a city-wide content plan.",
      },
    ],
    strategy:
      "SEO is treated as a compounding asset, not a checklist. The strategy starts with a full technical and competitive audit, then prioritizes the pages closest to revenue — service and location pages first, supporting content second. Every change is tracked against rankings, traffic, and enquiries so the work stays accountable. I run it as an SEO consultant in Lahore Pakistan clients can message directly — one person, one plan, reported plainly.",
    strategyPoints: [
      "Technical foundation first: crawlability, speed, and index hygiene before anything else — where top SEO services Lahore work begins",
      "Keyword mapping by intent — commercial pages target commercial terms",
      "Content built around topics your customers search, not around what you want to say",
      "Authority built through genuine mentions and digital PR, never link schemes",
    ],
    process: [
      {
        title: "Audit",
        description:
          "A deep technical, on-page, and competitive audit that finds exactly what is holding the site back — the first step of freelance SEO services Lahore businesses get from one person, not a team.",
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
    metaTitle: "SEO Services in Lahore | SEO Expert Pakistan — Free Audit",
    metaDescription:
      "SEO services in Lahore from one consultant: technical audits, on-page SEO, local SEO and content that compound into rankings, traffic and enquiries.", ctaTitle: "Ready to hire SEO consultant Lahore?", ctaDescription: "If you want to hire SEO expert in Lahore, tell me about your goals and I'll reply with an honest assessment of what this service can — and can't — do for you.",
problemsHeading: "SEO Problems We Solve in Lahore",
    solutionHeading: "SEO Services in Lahore — The Solution",
    faqHeading: "Frequently Asked Questions About SEO in Lahore",
    snippet:
        "SEO services in Lahore cover technical audits, on-page optimization, local SEO and content — the work that gets a business found on Google by customers in Lahore who are ready to buy. As a consultant, I do the work myself, and every change is tracked against rankings, traffic and enquiries. If you are looking to hire SEO expert in Lahore, you will work directly with me — no handover, no juniors.",
serviceArea: {
  heading: "SEO Services Across Pakistan",
  text: "Work is in person in Lahore, from SEO services in DHA Lahore to SEO services in Gulberg Lahore, and remote in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan. As an SEO expert Lahore Pakistan businesses can reach directly, I consult in English and Roman Urdu.",
},
    heroLinks: [
      {
          prefix: "For Maps and nearby searches, see ",
        anchor: "Local SEO services in Lahore",
        href: "/services/local-seo",
        suffix: ".",
      },
      {
        prefix: "Work with an ",
        anchor: "SEO consultant in Lahore",
        href: "/",
        suffix: ", not an agency.",
      },
      {
          prefix: "See all eleven ",
        anchor: "digital marketing services",
        href: "/services",
        suffix: ".",
      },
      {
          prefix: "",
        anchor: "Read the blog",
        href: "/blog",
        suffix: ".",
      },
  ],
  },
  "local-seo": {
    slug: "local-seo",
    h1: "Local SEO Services in Lahore — Get Found on Google Maps",
    h1Highlight: "Local SEO Services in Lahore",
    problems: [
      {
        title: "You do not show up on the map",
        description:
          "A customer nearby searches for what you do, Google shows three businesses on Maps, and yours is not one of them. The call goes to a competitor. — the gap the best local SEO services in Lahore are hired to close.",
      },
      {
        title: "Your profile looks half-finished",
        description:
          "No photos, or stock photos. Wrong hours, missing services, no description, and questions left unanswered. It reads like a business that may have closed.",
      },
      {
        title: "Your details do not match anywhere",
        description:
          "One phone number on your website, another on a directory, and a different spelling of your address on your profile. Google trusts consistency, and mixed details cost you trust.",
      },
    ],
    strategy:
      "Local SEO is not a trick. It is the steady work of making one business easy for Google and customers to trust: a complete profile, the right category, clear service areas, consistent details, real photos, fresh posts and genuine reviews. I start with the profile, because that is what customers see first on Maps. Then I fix the website pages that support it, so the profile and the site tell the same story about where you work and what you do. I check what competitors in your area are doing — the categories they use, the reviews they answer, the photos they post — and I close the gaps that matter, one at a time. I do not chase every directory or add keywords to your business name, because that gets listings suspended and looks desperate to customers. The work is checked in Google Business Profile insights, Search Console and GA4, so we can see calls, direction requests and visits, and keep doing what works. That is what Google Maps ranking services Lahore businesses get from me: steady map visibility, not a one-off fix.",
    strategyPoints: [
      "Profile first: claim, verify, and complete every field before anything else",
      "One consistent name, address and phone number everywhere customers find you",
      "Local keywords written the way customers search, not stuffed into names or pages",
      "Real reviews earned at the right moment, with a reply to every one",
    ],
    process: [
      {
        title: "Check",
        description:
          "I look at your profile, your website and your competitors in your area, and I check for duplicate listings, wrong categories and details that do not match. — the local SEO audit Lahore businesses start with before any monthly work.",
      },
      {
        title: "Fix the profile",
        description:
          "Claim and verify the profile, set the right category and service areas, add real photos, correct hours, services and description, and answer open questions.",
      },
      {
        title: "Fix the website",
        description:
          "Local pages and keywords for the areas you serve, with NAP details that match the profile and internal links that help customers find the right page. — Google Maps optimization services Pakistan businesses run alongside their website, not instead of it.",
      },
      {
        title: "Keep it alive",
        description:
          "Weekly posts, new photos, review replies and a monthly check of calls, direction requests and profile views, with the next fixes listed in plain language. — the steady rhythm a local SEO company Lahore businesses hire should keep.",
      },
    ],
    metaTitle: "Local SEO services Lahore | Google Maps & Reviews Expert",
    metaDescription:
      "Local SEO services in Lahore: Google Business Profile setup, Maps ranking, local keywords, reviews and NAP consistency for DHA, Gulberg and Johar Town.",
    problemsHeading: "Local SEO Problems We Solve in Lahore",
    solutionHeading: "Local SEO Services in Lahore — The Solution",
    faqHeading: "Frequently Asked Questions About Local SEO in Lahore",
    snippet:
      "Local SEO services in Lahore are the work of getting your business found on Google Maps and in nearby searches, by the customers who are closest and most ready to act. I do this work myself, as a consultant in Lahore, and I start from your profile and your website as they are — no shortcuts, no bought reviews, no promises about page one. Local SEO takes time: a complete, verified profile can start appearing within weeks, but competitive areas take longer, and the businesses that keep their profile fresh are the ones that hold their place.",
    serviceArea: {
      heading: "Local SEO Services Across Pakistan",
      text: "In Lahore, I work in person in DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town, Cantt and Faisal Town — including local SEO services DHA Lahore clinics, restaurants and shops ask for first, and the near me SEO services Lahore customers search for when they need someone nearby. I also work remotely in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan — Google Maps SEO services Pakistan businesses use when their customers are nearby. Consultation available in English and Roman Urdu.",
    },
    heroLinks: [
      {
        prefix: "Local SEO sits inside ",
        anchor: "SEO services in Lahore",
        href: "/services/seo",
        suffix: " — this page covers the Maps and nearby-search part.",
      },
      {
        prefix: "Start with my ",
        anchor: "Local SEO guide for Lahore businesses",
        href: "/blog/local-seo-lahore-google-business-profile-guide",
        suffix: ".",
      },
      {
        prefix: "Or read the ",
        anchor: "Google Business Profile mistakes Lahore businesses make",
        href: "/blog/google-business-profile-mistakes-lahore",
        suffix: " before you change anything.",
      },
      {
        prefix: "See all ",
        anchor: "digital marketing services",
        href: "/services",
        suffix: ".",
      },
    ],
    introLinks: [
      {
        prefix: "I am Abdul Rehman, an SEO consultant in Lahore and a local SEO expert Lahore businesses call when their map listing stops bringing calls. Local SEO is the part of SEO that deals with place: when someone in DHA searches for a clinic, or someone in Gulberg searches for a restaurant, or someone in Johar Town searches for a plumber, Google answers with a map. The three businesses on that map get the calls. Local SEO is the work of getting your business into that group and keeping it there. It is not the same as ranking a website for a general search. Your website still matters — it needs to be fast, clear and easy to use when a customer taps through — but the profile is what most nearby customers see first, so that is where I start. Read my ",
        anchor: "Local SEO guide for Lahore businesses",
        href: "/blog/local-seo-lahore-google-business-profile-guide",
        suffix: " for the steps, or keep reading for how I do the work.",
      },
      {
        prefix: "Reviews decide a lot of those calls. A business with recent, honest reviews and replies to each one looks open and trusted. A business with no reviews, or with reviews nobody answers, looks uncertain. I help you earn real reviews by asking at the right moment and making it easy for a happy customer to leave one, and I help you reply to the unhappy ones calmly, with facts. What I will not do is buy reviews, write them, or ask staff to leave them — fake reviews get removed, and they damage trust when they are found. The same plain rule applies to your details: one name, one address, one phone number, spelled the same way everywhere. My ",
        anchor: "guide to Google Business Profile mistakes in Lahore",
        href: "/blog/google-business-profile-mistakes-lahore",
        suffix: " walks through the errors that quietly hold a profile back.",
      },
      {
        prefix: "If you want me to look at your profile with you, ",
        anchor: "book a free consultation",
        href: "/contact",
        suffix: " and we can go through it together.",
      },
    ],
    deliverablesLead: "Everything local SEO in Lahore should include — your profile, Maps, local keywords, reviews, citations and plain monthly reporting.",
  },
  "google-ads": {
    slug: "google-ads",
    h1: "Google Ads Consultant in Lahore — Clicks That Convert",
      h1Highlight: "Google Ads Consultant in Lahore",
    problems: [
      {
        title: "Ad spend with nothing to show",
        description:
          "Campaigns running on broad defaults — budget burned on irrelevant clicks while real buyers never see the ad — the waste the best Google Ads consultant is hired to stop, and the first thing a Google Ads specialist checks.",
      },
      {
        title: "Clicks that never convert",
        description:
          "Traffic arrives but the landing experience doesn't match the promise, so money leaves through the same door it entered — the leak a Google Ads consultant for online stores plugs first, because the product page has to close the sale.",
      },
      {
        title: "No idea what's actually working",
        description:
          "Conversion tracking half-configured or missing, which means every optimization decision is a guess — the blind spot the best Google Ads consultant Lahore businesses hire should catch first.",
      },
    ],
    strategy:
      "Google Ads works when structure, intent, and landing pages pull in the same direction. As a Performance Max consultant, I treat Performance Max as a scale channel, not a set-and-forget box: it only gets budget once Search has proved what converts. The strategy isolates high-intent searches into tightly themed campaigns, matches each ad group to a dedicated landing experience, and verifies conversion tracking before a single rupee of scale is spent. That is the Google Ads management services Pakistan businesses get from one person, not a team. Budgets grow only behind proven cost-per-acquisition numbers. I work the same way as a Google Ads consultant for small businesses and for larger advertisers: isolate intent, verify tracking, then scale what proves itself.",
    strategyPoints: [
      "Search intent mapped first — campaigns built around how buyers actually search. That is the starting point of PPC management services Pakistan businesses get from one person, not a team. PPC management Lahore clients get that same start, in person",
      "Tight ad groups with dedicated landing pages, never generic homepages — and Shopping feeds structured the way a Google Shopping Ads consultant would, so the right product shows for the right search",
      "Conversion tracking verified before scaling, so every decision is data-backed — the standard I hold as a Google Ads consultant for lead generation, where a form fill is the sale",
      "Negative keywords and search-term reviews as an ongoing discipline, not a one-time setup — the discipline that keeps a Google Ads consultant for service businesses from paying for tyre-kickers",
    ],
    process: [
      {
        title: "Research",
        description:
          "Keyword, competitor, and audience research to find the searches worth paying for — and the ones to avoid — the first job of a Google Ads consultant for startups, where the budget has no room for waste.",
      },
      {
        title: "Build",
        description:
          "Campaign architecture, ad copy, and landing pages constructed around intent — as a Google Ads consultant for ecommerce, I build the same way for online stores: tracking verified end to end.",
      },
      {
        title: "Launch",
        description:
          "Controlled launch with conservative budgets while real conversion data accumulates. As a Google Ads consultant for SaaS, I keep that launch tight until the trial and demo numbers prove the funnel.",
      },
      {
        title: "Scale",
        description:
          "Winners get budget, losers get cut, and testing continues — optimization as a routine, not an event — the routine a Google Ads consultant for B2B accounts follows, where a lead is worth more than a click.",
      },
    ],
    metaTitle: "Google Ads Consultant in Pakistan | PPC Expert Lahore",
    metaDescription:
      "Google Ads consultant in Lahore, Pakistan: intent-based Search and Performance Max campaigns, verified tracking, and budgets managed for profit.",
    problemsHeading: "Google Ads Problems We Solve in Pakistan",
    solutionHeading: "Google Ads Management in Pakistan — The Solution",
    faqHeading: "Frequently Asked Questions About Google Ads in Pakistan",
    snippet:
      "Google Ads management in Pakistan means building Search and Performance Max campaigns around buyer intent, verifying conversion tracking before spending at scale, and managing bids and budgets against real cost-per-acquisition numbers — the approach I take as a Google Ads consultant for small business owners, and as a PPC consultant for small business budgets: every rupee has to earn its place. The account stays in your name, and every change has a written reason. That is the standard a PPC consultant Lahore businesses hire should keep — and the one I keep as a Google Ads management consultant.",
    serviceArea: {
      heading: "Google Ads Management Across Pakistan",
      text: "Google Ads management Pakistan-wide: work is in person in Lahore with a freelance Google Ads consultant, and remote in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan. If you want to hire PPC consultant help in Lahore, or hire Google Ads expert help, consultation is available in English and Roman Urdu — from a Google Ads expert in Lahore Pakistan businesses can reach directly.",
    },
    heroLinks: [
      {
        prefix: "Work with an ",
        anchor: "SEO consultant in Lahore",
        href: "/",
        suffix: " who also runs your ads.",
      },
      {
        prefix: "See all eleven ",
        anchor: "digital marketing services",
        href: "/services",
        suffix: ".",
      },
      {
        prefix: "Pair it with ",
        anchor: "Meta Ads services in Pakistan",
        href: "/services/meta-ads",
        suffix: " for full-funnel coverage.",
      },
      {
        prefix: "",
        anchor: "Read the blog",
        href: "/blog",
        suffix: ".",
      },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    h1: "Meta Ads Consultant in Lahore — Facebook & Instagram That Convert",
      h1Highlight: "Meta Ads Consultant in Lahore",
    problems: [
      {
        title: "Boosted posts, not campaigns",
        description:
          "Money spent on boosted posts with no funnel thinking — reach without a path to revenue — the waste the best Meta Ads consultant is hired to stop — and the first thing the best Meta Ads expert Lahore businesses hire checks is the funnel, not the boost button.",
      },
      {
        title: "Creative that stops nobody",
        description:
          "Ads that look like ads get scrolled past. Without thumb-stopping creative, even perfect targeting fails — the gap the best Facebook Ads consultant is hired to close.",
      },
      {
        title: "Targeting on autopilot",
        description:
          "Overlapping audiences competing against each other, driving up costs while learning stays shallow — the mess the best Instagram Ads consultant is hired to untangle.",
      },
    ],
    strategy:
      "Meta rewards advertisers who feed the algorithm clarity: clear conversion events, distinct creative angles, and patient budgets. If you are weighing a Meta Ads vs Google Ads consultant, the difference is intent: Google catches buyers who already know what they want, while Meta has to earn attention first — so creative carries more weight here. The strategy tests creative concepts systematically — hooks, formats, and offers — while keeping audience structure simple enough for the algorithm to learn. Retargeting closes the loop on the interest prospecting creates — the full-funnel view a Facebook Ads management consultant keeps, from first scroll to final sale. I work the same way as a Meta Ads consultant for small businesses and for larger brands: test creative, verify tracking, then scale what proves itself.",
    strategyPoints: [
      "Creative testing as the core lever — multiple hooks and formats per angle — the lever a freelance Instagram Ads consultant pulls first, before spending on scale",
      "Simple, non-overlapping audience structure that lets the algorithm learn — the structure I keep as an Instagram Ads consultant for small business accounts, where overlap wastes the budget",
      "Full-funnel thinking: prospecting, retargeting, and retention as one system — the shape I give it as a Meta Ads consultant for lead generation, where the enquiry is the sale",
      "Pixel and Conversions API setup verified so optimization has clean signal — the check a Meta Ads expert does before spending",
    ],
    process: [
      {
        title: "Foundation",
        description:
          "Pixel, Conversions API, and event tracking audited and fixed — the algorithm is only as good as its signal — the first job of a Meta Ads consultant for startups, where the budget has no room for waste.",
      },
      {
        title: "Creative",
        description:
          "Ad angles and creative concepts developed around real customer motivations, not stock imagery — the starting point I use as a Meta Ads consultant for ecommerce, where the product has to sell itself in the first seconds.",
      },
      {
        title: "Testing",
        description:
          "Structured creative and audience tests with clear kill/scale rules — no emotional attachment to losing ads — the discipline I keep as a Facebook Ads consultant for small business budgets, where every test has to earn its keep.",
      },
      {
        title: "Scaling",
        description:
          "Winning combinations scaled gradually while fresh creative keeps fatigue from eroding returns — the gradual scaling a Meta Ads consultant for B2B accounts follows, where a lead is worth more than a click.",
      },
    ],
    metaTitle: "Meta Ads Consultant Pakistan | Facebook & Instagram Ads",
    metaDescription:
      "Meta Ads consultant in Pakistan: Facebook and Instagram campaigns with creative testing, full-funnel structure and retargeting, run by one consultant in Lahore.",
    problemsHeading: "Meta Ads Problems We Solve in Pakistan",
    solutionHeading: "Meta Ads Services in Pakistan — The Solution",
    faqHeading: "Frequently Asked Questions About Meta Ads in Pakistan",
    snippet:
      "Meta Ads services in Pakistan cover Facebook and Instagram advertising — the work of a Facebook and Instagram Ads consultant: creative testing, audience strategy, Conversions API tracking, and full-funnel campaigns that turn attention into enquiries, calls and sales. The work is managed by one consultant, and every ad lives or dies by its numbers. That is the approach I take as a Meta Ads consultant for small business Lahore owners, where every rupee of creative testing has to earn its place.",
    serviceArea: {
      heading: "Meta Ads Services Across Pakistan",
      text: "Meta Ads services Pakistan-wide: work is in person in Lahore with a freelance Meta Ads consultant, and remote in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan. If you want to hire Meta Ads expert help in Lahore, or hire Facebook Ads consultant help, consultation is available in English and Roman Urdu — from a Meta Ads expert in Lahore Pakistan businesses can reach directly, and a Facebook Ads consultant Pakistan businesses can brief directly.",
    },
    heroLinks: [
      {
        prefix: "Work with an ",
        anchor: "SEO consultant in Lahore",
        href: "/",
        suffix: " who also runs your ads.",
      },
      {
        prefix: "See all eleven ",
        anchor: "digital marketing services",
        href: "/services",
        suffix: ".",
      },
      {
        prefix: "Pair it with ",
        anchor: "Google Ads management in Pakistan",
        href: "/services/google-ads",
        suffix: " for intent-led coverage.",
      },
      {
        prefix: "",
        anchor: "Read the blog",
        href: "/blog",
        suffix: ".",
      },
    ],
  },
  "web-development": {
    slug: "web-development",
    h1: "Web Development in Pakistan — Websites Built to Convert",
      h1Highlight: "Web Development in Pakistan",
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
    metaTitle: "Web Development Services Pakistan | Fast SEO-Ready Sites",
    metaDescription:
      "Web development in Pakistan: fast, SEO-ready Next.js websites built to turn visitors into enquiries. One consultant in Lahore — design, build and launch.",
    problemsHeading: "Web Development Problems We Solve in Pakistan",
    solutionHeading: "Web Development Services in Pakistan — The Solution",
    faqHeading: "Frequently Asked Questions About Web Development in Pakistan",
    snippet:
      "Web development services in Pakistan cover business websites, online stores and web applications — designed to turn visitors into enquiries. A good build is fast on real mobile connections, SEO-ready from the first commit, and editable by your team without breaking anything.",
    serviceArea: {
      heading: "Web Development Services Across Pakistan",
      text: "Work is in person in Lahore, and remote in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan. Consultation available in English and Roman Urdu.",
    },
    heroLinks: [
      {
        prefix: "Work with an ",
        anchor: "SEO consultant in Lahore",
        href: "/",
        suffix: " who builds the site and ranks it.",
      },
      {
        prefix: "See all eleven ",
        anchor: "digital marketing services",
        href: "/services",
        suffix: ".",
      },
      {
        prefix: "Every build is SEO-ready — see the ",
        anchor: "SEO services in Lahore",
        href: "/services/seo",
        suffix: ".",
      },
      {
        prefix: "Need WordPress instead? See ",
        anchor: "WordPress development",
        href: "/services/wordpress",
        suffix: ".",
      },
      {
        prefix: "Selling online? See ",
        anchor: "Shopify development",
        href: "/services/shopify",
        suffix: ".",
      },
      {
        prefix: "",
        anchor: "Read the blog",
        href: "/blog",
        suffix: ".",
      },
    ],
  },
  "app-development": {
    slug: "app-development",
    h1: "App Development in Pakistan — iOS & Android Apps That Work.",
      h1Highlight: "App Development in Pakistan",
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
    metaTitle: "App Development Company Pakistan | iOS & Android Apps",
    metaDescription:
      "Mobile app development in Pakistan: focused MVPs for iOS and Android, designed around real users and shipped to stores — lean, fast, zero bloat.",
  faqHeading: "App Development FAQ",
  snippet:
    "App development in Pakistan means designing and building mobile apps for iOS and Android — usually from one cross-platform codebase — then shipping them to the App Store and Google Play with the backend, analytics and store listings they need to work. A focused MVP ships first; real usage decides what gets built next.",
  introLinks: [
    { prefix: "App development in Pakistan works best cross-platform: one codebase for iOS and Android, one backend, and one team — ", anchor: "Abdul Rehman", href: "/about", suffix: ". I build focused MVPs for founders who want a real product in users' hands, not a demo. The app ships with its its", },
    { prefix: "", anchor: "backend and APIs", href: "/services/custom-software", suffix: "included, and the", },
    { prefix: "", anchor: "website", href: "/services/web-development", suffix: "to support it when you need one.", },
    { prefix: "", anchor: "Discuss your app idea", href: "/contact", suffix: ".", },
  ],
  deliverablesLead: "Everything an app development company in Pakistan should deliver — from scoping to store submission.",
  },
  "custom-software": {
    slug: "custom-software",
    h1: "Custom Software in Pakistan — Systems Built for Business.",
      h1Highlight: "Custom Software in Pakistan",
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
    metaTitle: "Custom Software Development Pakistan | CRMs & Dashboards",
    metaDescription:
      "Custom software development in Pakistan: internal tools, dashboards and integrations built around how your business works. Custom-built, never off-the-shelf.",
    faqHeading: "Custom Software FAQ",
    snippet: "Custom software development in Pakistan means building internal tools, dashboards and systems around how a specific business actually works — instead of forcing the team into off-the-shelf software. The workflow is mapped first, then the smallest useful system is built, integrated with existing tools, and owned outright.",
    introLinks: [
      { prefix: "Custom software development in Pakistan should start with your workflow, not with a feature list. I map how your team actually works — spreadsheets, workarounds and all — then build the CRM, dashboard or internal tool that removes the biggest friction first. The system is yours outright, with ", anchor: "apps on top", href: "/services/app-development", suffix: " when you need them and", },
      { prefix: "", anchor: "automation", href: "/services/ai-automation", suffix: " for the repetitive middle.", },
      { prefix: "", anchor: "Discuss your system", href: "/contact", suffix: ".", },
    ],
    deliverablesLead: "Everything custom software development in Pakistan should deliver — from process mapping to team training.",
  },
  wordpress: {
    slug: "wordpress",
    h1: "WordPress Development in Pakistan — Fast, Secure Websites.",
      h1Highlight: "WordPress Development in Pakistan",
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
      "WordPress is at its best when it's boring: a lean theme, a handful of well-chosen plugins, and hardened security. The strategy strips the bloat, locks down the attack surface, and rebuilds the editing experience so publishing feels safe. Speed optimization and SEO fundamentals come standard in WordPress development services Pakistan, not as add-ons.",
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
    metaTitle: "WordPress Development Pakistan | Fast, Secure Sites",
    metaDescription:
      "WordPress development in Pakistan: lean, secure, super-fast WordPress websites your team can easily manage — no bloated themes, no plugin chaos.",
    faqHeading: "WordPress FAQ",
    snippet: "WordPress development in Pakistan means building lean, secure WordPress websites with a custom theme, only the plugins the site genuinely needs, and hardened security — so the team can publish without fear and the site stays fast. WordPress's flexibility without its reputation for bloat.",
    introLinks: [
      { prefix: "WordPress development in Pakistan should be boring — in the best way. A lean custom theme, only the plugins your site genuinely needs, and hardened security, built by one consultant in Lahore: ", anchor: "Abdul Rehman", href: "/about", suffix: ". Your team publishes without fear, your site stays fast, and the", },
      { prefix: "", anchor: "SEO fundamentals", href: "/services/seo", suffix: " are baked in from the start. Selling online instead? See", },
      { prefix: "", anchor: "Shopify development", href: "/services/shopify", suffix: ".", },
      { prefix: "", anchor: "Discuss your WordPress site", href: "/contact", suffix: ".", },
    ],
    deliverablesLead: "Everything WordPress development services in Pakistan should include — custom theme, speed, security, and training.",
  },
  shopify: {
    slug: "shopify",
    h1: "Shopify Development in Pakistan — Stores Built to Convert.",
      h1Highlight: "Shopify Development in Pakistan",
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
    metaTitle: "Shopify Development Pakistan | High-Converting Stores",
    metaDescription:
      "Shopify development in Pakistan: conversion-focused online stores with proper payments, shipping and mobile-first design — built to sell from day one.",
    faqHeading: "Shopify FAQ",
    snippet: "Shopify development in Pakistan means building a conversion-focused online store on Shopify — fast theme, product architecture, checkout optimization, local payments like COD and JazzCash, courier setup, and tracking — so a brand can sell from day one without managing servers or security.",
    introLinks: [
      { prefix: "Shopify development in Pakistan is not just a theme — it is COD that works, JazzCash and EasyPaisa connected properly, courier setup that reconciles, and a mobile-first store that loads fast on Pakistani connections. I build conversion-focused stores for brands that want to sell from day one, with ", anchor: "tracking that shows what actually sells", href: "/services/performance-marketing", suffix: " and", },
      { prefix: "", anchor: "Meta ads", href: "/services/meta-ads", suffix: " ready to plug in. Not sure Shopify is right? Compare it with", },
      { prefix: "", anchor: "WordPress and WooCommerce", href: "/services/wordpress", suffix: ".", },
      { prefix: "", anchor: "Discuss your store", href: "/contact", suffix: ".", },
    ],
    deliverablesLead: "Everything Shopify development in Pakistan should include — store, checkout, local payments, and tracking.",
  },
  "performance-marketing": {
    slug: "performance-marketing",
    h1: "Performance Marketing in Pakistan — Campaigns With ROI.",
      h1Highlight: "Performance Marketing in Pakistan",
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
    metaTitle: "Performance Marketing Agency Pakistan | Google & Meta Ads",
    metaDescription:
      "Performance marketing in Pakistan: multi-channel campaigns held accountable to revenue, with unified tracking and honest reporting — no vanity metrics.",
  faqHeading: "Performance Marketing FAQ",
  snippet: "Performance marketing in Pakistan means running paid campaigns across Google, Meta and beyond with every rupee held accountable to revenue — unified tracking, targets set from real margins, and budgets moved continuously toward what acquires customers cheapest. No vanity metrics: spend, revenue and cost per acquisition, reported plainly.",
  introLinks: [
    { prefix: "Performance marketing in Pakistan only works when every rupee is accountable to revenue. I run ", anchor: "Google Ads", href: "/services/google-ads", suffix: " and", },
    { prefix: "", anchor: "Meta Ads", href: "/services/meta-ads", suffix: " as one system — unified tracking, targets set from your real margins, and budgets moved to whatever acquires customers cheapest. One accountable owner, not three dashboards.", },
    { prefix: "", anchor: "Discuss your ad spend", href: "/contact", suffix: ".", },
  ],
  deliverablesLead: "Everything performance marketing in Pakistan should include — strategy, tracking, campaigns, creative, and honest reporting.",
  },
  "ai-automation": {
    slug: "ai-automation",
    h1: "AI Automation in Pakistan — Workflows That Save You Hours",
      h1Highlight: "AI Automation in Pakistan",
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
    metaTitle: "AI Automation Services Pakistan | Workflows & Chatbots",
    metaDescription:
      "AI automation services in Pakistan: lead follow-up, CRM updates and reporting workflows that return hours to your team. Human-in-the-loop, built in Lahore.",
    problemsHeading: "AI Automation Problems We Solve in Pakistan",
    solutionHeading: "AI Automation Services in Pakistan — The Solution",
    faqHeading: "Frequently Asked Questions About AI Automation in Pakistan",
    snippet:
      "AI automation services in Pakistan cover lead follow-up, CRM updates, reporting and chat assistants — the repetitive work that eats a small team's week. The work starts by costing the workflow, automates the most expensive one first, and keeps a human approving anything a customer sees.",
    serviceArea: {
      heading: "AI Automation Services Across Pakistan",
      text: "Work is in person in Lahore, and remote in Karachi, Islamabad, Rawalpindi, Faisalabad and Multan. Consultation available in English and Roman Urdu.",
    },
    heroLinks: [
      { prefix: "Work with an ", anchor: "SEO consultant in Lahore", href: "/", suffix: " who automates what he measures.", },
      { prefix: "See all eleven ", anchor: "digital marketing services", href: "/services", suffix: ".", },
      { prefix: "Need a new system, not a workflow? See ", anchor: "custom software", href: "/services/custom-software", suffix: ".", },
      { prefix: "", anchor: "Read the blog", href: "/blog", suffix: ".", },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
