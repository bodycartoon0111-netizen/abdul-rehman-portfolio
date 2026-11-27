/**
 * Blog content model — CMS-ready.
 *
 * The two posts below are full-length guides for this site, written to the same standard as the newer posts, demonstrating the schema.
 * Swap this array for a CMS fetch (Sanity/Contentful/MDX) without touching
 *
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
  image?: string;
  title: string;
  titleHighlight?: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
  category: string;
  sample: boolean; // marks placeholder content until real posts ship
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "shopify-vs-wordpress",
    image: "/images/blog/blog-shopify-vs-wordpress.jpg",
    title: "Shopify vs WordPress: The Right Store for Pakistan — and for Selling Worldwide",
  titleHighlight: "The Right Store for Pakistan — and for Selling Worldwide",
    excerpt:
      "Shopify vs WordPress for your online store: payments, COD, speed, SEO and control compared honestly — pick the right platform that fits your business best.",
    publishedAt: "2026-11-10",
    readingMinutes: 16,
    tags: ["Shopify", "WordPress", "E-Commerce", "Pakistan"],
    category: "Web Development",
    sample: false,
    metaTitle: "Shopify vs WordPress: The Right Store for Pakistan — and for Selling Worldwide",
    metaDescription:
      "Shopify vs WordPress compared honestly: payments, COD, speed, SEO, costs, control and ownership for online stores — pick the right one first time.",
    sections: [
      {
        heading: "Shopify vs WordPress: the short answer",
        paragraphs: [
          "There is no single winner. Shopify and WordPress do the same job in different ways, and the right choice depends on your business, your budget, and how much technical work you want to handle yourself.",
          "[Shopify](/services/shopify) is a rented shop. You pay a monthly subscription, and in return you get hosting, security, updates, and a dashboard that is ready to use. You can list products and start selling fast, without touching a server or installing anything. The trade-off is control: the platform sets limits on what you can change, and you keep paying rent for as long as the store exists.",
          "[WordPress](/services/wordpress) with WooCommerce is your own shop. The software is free and open source, you choose the hosting, and you own the files and the database. You can change almost anything — the design, the checkout, the URLs, the features. The trade-off is responsibility: updates, backups, speed, and security are yours to manage, either by yourself or with a developer.",
          "Here is the short version. If you want to start selling this week, with minimal technical hassle, and you are happy paying a monthly fee for that convenience, Shopify is the easier start — and for a small online store, that easy start is usually the right one. If you want full control, lower long-term running costs, and you have someone to maintain the store, WordPress with WooCommerce is the stronger long-term choice. Both work in Pakistan. The mistake is picking one because someone else uses it, without checking whether it fits how your customers actually buy. One more thing before we compare: this guide works whether your customers are in Lahore or London — and the same question is answered the same way as the worldwide one, because the factors are the same everywhere. The factors are the same everywhere — cost, payments, speed, control — and that is true for Pakistani businesses too. Only the details change by country: how people pay, how orders ship, and what the tax rules are. Where a detail is specific to Pakistan, I say so. The rest applies anywhere.",
        ],
      },
      {
        heading: "What you actually pay for: cost factors, not prices",
        paragraphs: [
          "Every Shopify vs WordPress cost comparison starts with cost, and every comparison gets it wrong by quoting a single number. Neither platform has one price. Each has a set of costs that add up differently, and the honest way to compare them is by listing the cost factors sellers actually pay.",
          "With Shopify, the costs in any Shopify vs WordPress pricing comparison are the monthly subscription, transaction fees on some payment gateways, and apps. The subscription covers hosting and the platform itself. The apps are where the bill grows: many useful features — advanced shipping, loyalty points, specific reports, local payment options — come from paid apps, each adding its own monthly charge. A store that starts with one subscription can end up paying for several apps on top of it.",
          "With WordPress and WooCommerce, the costs are hosting, the domain, and plugins. The software itself costs nothing. Hosting is a monthly or yearly charge, and its quality decides much of your store's speed. Many plugins are free; some are paid, usually once a year. Then there is maintenance: updates, backups, and fixes, which cost either your time or a developer's fee.",
          "I give no figures here on purpose, because a number without context would mislead you. A cheap start that needs ten paid add-ons is not cheap, and an expensive start that needs nothing else can be the better deal. Count everything: the subscription or hosting, the transaction fees, the apps or plugins, and the maintenance. Then compare the totals over a year, not a month. The platform that looks cheaper in month one is not always the cheaper one in month twelve. Currency is one detail that changes by country, and it belongs in any cost comparison. Shopify bills in US dollars, so a seller in Pakistan pays in dollars while earning in rupees — the exchange rate and the card charges on top of it are part of the real cost. WooCommerce hosting can be bought from a local provider and paid in rupees, which keeps that part simple. Neither is automatically cheaper. But if you sell in Pakistan and earn in rupees, count the currency cost in the total before you decide.",
        ],
      },
      {
        heading: "Getting paid: cards, wallets and COD — in Pakistan and worldwide",
        paragraphs: [
          "In most countries, customers pay by card or from a wallet, and checkout is straightforward: the customer pays, the payment clears, and the order ships. The unfamiliar part is not the technology but the exceptions: some stores do not take cards in every country, some wallets work only in their home market, and refunds can be slow across borders. So before you compare platforms, think about how your customers will actually pay — by card, by wallet, or by cash.",
          "In Pakistan, the picture is different: cash on delivery is still how most online orders are paid for — and for a clothing brand store, COD is usually the first thing to get right, because fashion buyers pay at the door. A customer orders, the courier delivers, and the money changes hands at the door. Cards are growing, but they are not the default. JazzCash and Easypaisa wallets are widely used, and bank transfer still shows up for larger orders.",
          "Both platforms handle cash on delivery — that is the first thing to check in a comparison for an online store. You can offer COD on Shopify and on WooCommerce, and for most Pakistani stores it will be the most-used option. That alone makes the card checkout less important than many comparisons suggest. What matters more is how smoothly the order flows from checkout to courier: the customer places the order, you confirm it, the courier picks it up, and the cash comes back.",
          "Where the platforms differ is card and wallet payments. Shopify’s own checkout, Shopify Payments, covers cards in many countries — but it is not available for Pakistan-based stores, so a Shopify store here uses third-party gateways, manual payment methods, or COD. That works, but it takes setup, and some gateways add their own fees. WooCommerce is more flexible here: you can install almost any local gateway plugin, including options built for Pakistani wallets and banks, and you can add manual methods like bank transfer alongside them.",
          "Check your payment setup before you choose a platform, not after: COD, courier flow, and the gateways your customers actually use. If most of your customers will pay COD, the platform's card checkout matters less than its COD and courier flow — the checkout that fits your customers wins. If most of your customers are abroad and pay by card, the range of card gateways matters most. Either way, test the full checkout yourself — place a test order, pay the way your customers will pay, and see where it breaks. A store that cannot take money properly is not a store.",
        ],
      },
      {
        heading: "Speed and SEO: which one ranks better?",
        paragraphs: [
          "Both platforms can rank on Google. Neither wins the Shopify vs WordPress SEO question by default. The store that ranks is the one that is built well — fast, clear, and easy for search engines to read. The platforms differ in how much control they give you over that.",
          "Shopify is fast out of the box: managed hosting against a build you control. The hosting is managed, the pages are served from a content delivery network, and you do not have to think about servers. But the URL structure is fixed: product pages live under /products/ and collections under /collections/, and you cannot change that. You also have less control over technical details like redirects and structured data, and every app you add can slow the store down. A Shopify store with twenty apps is often slower than a Shopify store with five.",
          "WordPress gives you full control in the WordPress vs Shopify comparison. You decide the URL structure, the redirects, the schema markup, and the caching. That control is powerful in the hands of someone who knows SEO — and dangerous in the hands of someone who does not. A WooCommerce store on cheap hosting, with a heavy theme and no caching, will be slow. A well-built one, on good hosting, can be faster than most Shopify stores. Speed is not a property of the platform. It is a property of the build, and our guide to [fast website SEO with Next.js](/blog/technical-seo-checklist-for-websites) explains the measurements Google actually uses.",
          "For SEO specifically, WordPress gives the expert more room, and Shopify gives the beginner more safety. If you plan to invest seriously in search — content, category pages, internal linking — WordPress lets you do more of it, your way. More control for the expert, more safety for the beginner. If you would rather not touch technical settings at all, Shopify keeps you from breaking things. Either way, the platform is only the starting point for the SEO question. Our [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers the fixes that matter on both, and [SEO services in Lahore](/services/seo) is where we do this work for clients.",
        ],
      },
      {
        heading: "Control and ownership: who really owns your store?",
        paragraphs: [
          "This is the difference people notice too late. Shopify is rented. Your store lives on Shopify's servers, under Shopify's rules. You cannot move it to another host. If you stop paying, the shop closes. If Shopify changes a rule or a price, you live with it. Your products, orders, and customer data can be exported, but the store itself — the design, the apps, the setup — stays behind, and that is why a Shopify vs WordPress migration costs more than the switch itself: the design has to be rebuilt and every URL redirected.",
          "WordPress is owned — and Shopify vs WooCommerce is the real comparison here, since WooCommerce is the WordPress store. The files and the database are yours. You can move the store to another host whenever you want, change anything in the code, and keep running without paying any platform rent. Nobody can close your shop because you missed a subscription. That ownership is the strongest argument for WooCommerce, and it is the reason many established businesses choose it.",
          "But ownership means responsibility: the platform that gives you everything also asks you to maintain everything. Updates, backups, and security are yours. WordPress is the most-used platform on the web, which also makes it the most-targeted: an unpatched plugin or a weak admin password is how stores get hacked. If an update breaks the checkout on a Friday night, there is no support team to call — there is you, or your developer. Shopify takes that weight off you, and the monthly fee is partly the price of that peace of mind.",
          "Ask yourself which risk you would rather carry — who fixes it when it breaks. With Shopify, the risk is dependence: the platform can change, and you cannot leave easily. With WordPress, the risk is maintenance: the store is yours, and so is everything that goes wrong with it. There is no version without risk. There is only the risk you are better equipped to handle.",
        ],
      },
      {
        heading: "Running the store day to day",
        paragraphs: [
          "A store is not a website you finish, whichever platform you pick. It is a daily operation: adding products, processing orders, booking couriers, answering customers, running sales. The platform you pick decides how much of that is easy and how much is work.",
          "On Shopify, most of it happens in one dashboard — that is the Shopify vs WordPress ease of use difference in daily work. Products, orders, discounts, and customer records live in the same place, and the interface is built for people who are not technical. Courier booking usually comes from an app, and the good ones connect to Pakistani couriers so labels and tracking work without manual entry — and for a local business, that courier connection matters more than any feature list. If you ship internationally, the same applies with DHL or FedEx: labels, tracking, and duties have to work without manual entry, or every cross-border order becomes a chore. That courier flow is also the dropshipping question: whichever platform you pick, the supplier-to-customer flow has to work without manual entry. The cost is the app subscription, and the risk is that the app you depend on changes or disappears.",
          "On WooCommerce, the same jobs are done with plugins — and for a small business store, that plugin range is usually the deciding factor. There are local plugins for Pakistani couriers, for JazzCash and Easypaisa, for SMS notifications, and for Urdu or Roman Urdu messages to customers. The range is wider than Shopify's app store, and the cost is usually lower. The work is the setup: each plugin has to be installed, configured, and kept updated, and two plugins can conflict in ways that take time to fix.",
          "One thing matters on both platforms, and it is easy to miss: many Pakistani customers do not complete a checkout at all. They tap a WhatsApp button, ask about the product in Roman Urdu, negotiate delivery, and place the order in the chat. If your store has no clear WhatsApp option, you lose those customers before the checkout loads. Both platforms can add a WhatsApp button and track the click as a conversion — and if you run ads as well, our comparison of [Meta Ads vs Google Ads](/blog/google-ads-vs-meta-ads) explains which channel brings those chats in the first place.",
          "Sales spikes need planning on both platforms. Ramadan and Eid bring the biggest online shopping weeks in Pakistan, and a store that is slow or broken during those weeks loses the year's best sales. Test the store before the season, not during it: place orders, check the courier flow, and make sure the checkout holds up under real traffic.",
        ],
      },
      {
        heading: "Which one should you pick?",
        paragraphs: [
          "By now you have the full picture, so here is the answer to which is better Shopify or WordPress for your store, in plain terms.",
          "Pick Shopify if you want to launch fast — the answer for most new stores — you do not want to manage hosting or updates, your product range is focused, and you are comfortable paying a monthly fee for support and convenience. It is the better choice for a first store, for a side business, and for a small business: anyone who wants to spend their time selling rather than maintaining a website.",
          "Pick WordPress with WooCommerce if you want the lowest long-term running cost, you need custom features or local payment gateways, you have someone to maintain the store, or you plan to build serious content and SEO around it — and if content is the plan, the answer is WordPress: it started as a blogging platform, and it still does content better. It is the better choice for a store you intend to run for years, and for a business where the website itself is a core asset. If neither platform fits what the store needs to do — and a question for a service business is often answered this way, since services sell bookings, not products — the answer is [custom software](/services/custom-software) built for that store, rather than a platform bent to fit it.",
          "Before you decide, answer four questions honestly. How many products will you sell — ten or a thousand? Who will maintain the store when something breaks? How will most of your customers pay — COD, wallet, or card? And where do you want the business to be in two years — a small shop, or a brand with content, rankings, and repeat customers? The answers point to the platform more reliably than any feature list. One question matters more if you sell beyond Pakistan: where are your customers? If most of them are abroad, card checkout, multi-currency prices, and international shipping matter more than COD. If most of them are local, COD and local couriers matter most. A store built for one audience can serve the other, but the checkout and shipping have to be set up for the customers you actually have — not the ones you hope to get. That is true for a dropshipping store too: the supplier ships, the courier delivers, and the platform just has to stay out of the way. And if you are still unsure, the cheapest test is a conversation: [book a free consultation](/contact) and we will look at your products, your customers, and your budget together, then tell you which one fits — even if the answer is neither.",
        ],
      },
      {
        heading: "How I build online stores",
        paragraphs: [
          "I am Abdul Rehman, a freelance SEO consultant in Lahore, Pakistan, and I build online stores alongside the SEO, Google and Meta Ads work I do for clients. When a store needs building, I follow my five-step [process](/process) — Discover, Strategy, Build, Launch, Optimize — and I check the result in Google Search Console, GA4, and Screaming Frog, so decisions come from the store's own data. You can read more about how I work on my [about page](/about).",
          "Most of the stores I build are on Shopify or WordPress, because those are the platforms most Pakistani businesses need. That includes a clothing brand store, where photos, COD and courier flow matter more than any feature list. Shopify development and WordPress development are both services I offer — [Shopify development services in Pakistan](/services/shopify) and [WordPress development services in Pakistan](/services/wordpress) — and the choice between them is made the way this article describes it: from the client's products, customers, and budget, not from a preference for one platform. Some stores outgrow both, and then a custom build is the answer: a fast, purpose-built site, usually in Next.js, made for that business alone. That is a job for [web development services in Pakistan](/services/web-development). If the store also needs to live on customers' phones as an app, that is [app development](/services/app-development) work, on top of the store itself.",
          "One thing I tell every store owner before we start: \"I won't promise page-one rankings — anyone who guarantees that is selling something.\" The same honesty applies to a store build. I will not promise a fixed number of sales, because no honest developer can. What I will do is build a store that is fast, that takes payments the way your customers pay, that ranks for the searches that matter — the starting point is our [e-commerce SEO work in Pakistan](/industries/ecommerce) — and that you can run without calling me every week.",
        ],
      },
      {
        heading: "Shopify vs WordPress in short",
        paragraphs: [
          "Shopify is the easier start: hosted, fast to launch, supported, and rented — a Shopify store vs WordPress website comparison comes down to that rent against ownership. WordPress with WooCommerce is the stronger long-term asset: owned, flexible, cheaper to run, and yours to maintain. Payments in Pakistan favour neither — COD works on both, and the gateway setup deserves checking before you choose. SEO favours the better build, not the platform. Ownership favours WordPress; convenience favours Shopify.",
          "Pick the one that fits your products, your customers — whether they are in Lahore, London, or anywhere else — and who will maintain it. That is the decision in one line: fit first, features second. Get that decision right — whether it is a choice for a new business or a rebuild of an old store — and the platform stops mattering: the store does the work.",
          "If you want help deciding — a decision for a new business included — or a store built on either platform, [book a free consultation and free SEO audit](/contact) — or [message me on WhatsApp at +92 371 4972789](https://wa.me/923714972789). Tell me what you sell and how your customers pay, and I will tell you in plain language which platform fits, what it will take to build, and what to do first.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Which is cheaper, Shopify or WordPress?",
          "A: It depends on what you count. Shopify has a monthly subscription plus apps and sometimes transaction fees. WordPress has hosting, a domain, plugins, and maintenance. Compare the full cost over a year — subscription or hosting, apps or plugins, fees, and maintenance time — and the answer is usually closer than people expect. That full-year comparison is how to choose between Shopify and WordPress on cost — and the same method works for the rest: list everything, then compare the totals.",
          "Q: Can I switch from Shopify to WordPress, or the other way around, later?",
          "A: Yes, but a switch is a project, not a click. Products, orders, and customers can be moved, but the design has to be rebuilt and every URL needs a redirect, or the rankings you built will break. It is possible and sometimes worth it — but it is far cheaper to choose carefully now than to migrate later.",
          "Q: Which is better for SEO in Pakistan?",
          "A: Neither wins by default. Shopify is safer out of the box, with fast hosting and clean basics. WordPress gives you more control over URLs, redirects, and structured data, which matters when SEO becomes serious. The store that ranks is the one that is built well and kept fast, on either platform.",
          "Q: Does Shopify work with cash on delivery in Pakistan?",
          "A: Yes, COD can be set up on a Shopify store, and for most Pakistani stores it will be the most-used payment method. What is not available for Pakistan-based stores is Shopify's own card checkout, Shopify Payments, so card and wallet payments need third-party gateways or manual methods. Plan the payment setup before you choose.",
          "Q: Can I sell internationally with Shopify or WordPress?",
          "A: Yes — both platforms can sell worldwide. Shopify handles multi-currency prices and international shipping labels through its apps, and Shopify Payments covers cards in many countries where it is available. WooCommerce does the same with plugins for currencies, shipping, and local gateways, and you keep full control of the setup. Either way, the work is in the details: taxes and duties, delivery times, and refunds across borders need planning before the first international order — not after it.",
          "Q: Do I need a developer for WooCommerce?",
          "A: Not to start — you can set up a basic store yourself. But for hosting setup, speed, security, and fixing things when they break, most businesses need a developer or the time to learn it. If nobody will maintain the store, Shopify's managed setup is the safer choice.",
        ],
      },
    ],
  },
  {
    slug: "seo-vs-google-ads",
    image: "/images/blog/blog-seo-vs-google-ads.jpg",
    title: "SEO vs Google Ads: Which One Should Your Business Invest In First?",
    titleHighlight: "Which One Should Your Business Invest In First?",
    excerpt:
      "This is the question I hear most from business owners who are ready to spend on search and want to spend it right.",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Google Ads", "Strategy"],
    category: "SEO",
    sample: false,
    metaTitle: "SEO vs Google Ads: Which One Should Your Business Invest In First?",
    metaDescription:
      "SEO vs Google Ads — which should your business invest in first? I compare speed, staying power and risk, and show how to decide with your own numbers.",
    sections: [
      {
        heading: "Speed is the real difference",
        paragraphs: [
          "This is the question I hear most from business owners who are ready to spend on search and want to spend it right. They have one budget, two options — SEO vs Google Ads — and no patience for a wrong answer. So here is the plain version: if you need enquiries this month, start with Google Ads. If you can wait a few months and want enquiries that keep coming after you stop paying, start with SEO. Most businesses end up running both. Very few should start with both on day one.",
          "The two channels put you in front of the same people — people typing what they need into Google — and they do it in opposite ways. Google Ads buys a place at the top of the results. You pay for every click, and the traffic stops the day you stop paying. SEO earns a place in the organic results below the ads. You pay for the work, and the clicks themselves cost nothing. Once a page ranks, it can keep bringing visitors for months with no further spend on that page.",
          "Speed decides most of the SEO vs Google Ads choice, so start there. Google Ads can bring visitors within days of launch. You write the ad, pick the searches, set it live, and people start clicking. That is why it is the right first move for a new business, a new service, or a slow period where the phone has to ring now.",
          "SEO moves on a different clock. A commonly cited range is three to six months before you see movement worth noticing, and six to twelve months before a campaign shows what it is really worth. I tell clients three to six months before they see movement worth noticing — that's the range I keep seeing on real sites, and Google's Maile Ohye said much the same in a 2017 video. A new website has almost no chance of ranking for competitive searches in its first months, however good the pages are. Google needs time to find the site, test it against the pages already ranking, and decide it deserves a place.",
          "That gap in timing is not a flaw in either channel. It is the trade. Ads sell you speed. SEO sells you staying power.",
        ],
      },
      {
        heading: "What you are left with when you stop",
        paragraphs: [
          "Ask what happens the month you stop paying, because that answer separates the two more clearly than anything else.",
          "Stop Google Ads and the traffic stops with it. Same day. There is nothing left behind except what you learned: which searches brought calls, which pages converted, which offers people ignored. That learning is real value, and it is the main reason I tell clients to treat early ads as research as much as advertising.",
          "Stop SEO work and the rankings fade slowly instead of switching off. Pages you built keep ranking. Links you earned keep counting. The traffic drops over weeks and months, not overnight, and a page that ranks well can keep bringing enquiries long after the work on it is done. That is the part people mean when they call SEO an asset. You are building something you keep.",
          "Neither is free. Ads charge per click. SEO charges for the work every month — content, technical fixes, reviews, links — and the clicks are free only after the work is done. Anyone who tells you SEO traffic is free is skipping the part where someone has to do the work.",
        ],
      },
      {
        heading: "Run the maths before you spend",
        paragraphs: [
          "The fastest way to decide is to work out what a customer is worth to you, and what it would cost to buy one through ads. Do this with your own figures, not anyone else's.",
          "First, what does one new customer bring in, after the cost of doing the job? That is your ceiling. Then find out roughly what a click costs for your main service searches — Google's Keyword Planner shows this inside a Google Ads account, and you do not need to run ads to look. Then look at your own website: out of every ten visitors, how many call or fill in a form? And out of every ten enquiries, how many become customers?",
          "Put those together and you get the cost of winning one customer through ads. If that number is comfortably below what the customer is worth, ads are probably your fastest path to growth. If it is close to what the customer is worth, or above it, ads will eat your margin and SEO — where you do not pay per visitor — is usually the better long-term bet.",
          "Two things move this maths more than anything else. A landing page that turns clicks into calls, and conversion tracking that counts calls and forms correctly. If your tracking misses phone calls, your ads will look like they are failing while the phone is actually ringing. Fix the counting before you judge the channel. My [Google Ads service](/services/google-ads) starts with that check, and my [SEO audit](/services/seo-audit) does the same on the organic side.",
        ],
      },
      {
        heading: "When to start with Google Ads",
        paragraphs: [
          "I start a client on ads when the phone has to ring this month — a new business, a new service, a slow patch. A launch that needs customers this quarter. A search where people act urgently — a burst pipe, a tow truck, a toothache — and the job goes to whoever answers first. In those cases, waiting months for rankings is not patience, it is a decision to miss the work.",
        ],
      },
      {
        heading: "When to start with SEO",
        paragraphs: [
          "I start them on SEO when they can wait and the clicks are too dear to keep buying. In some trades the clicks cost so much that a small budget runs out before the campaign has had time to learn anything. Legal, medical, and home services searches are often like this. When every click carries a heavy charge, paying for each visitor stops making sense, and earning the click starts to.",
          "SEO is also the right first move when you already have revenue coming in and can afford to build slowly. The organic traffic arrives as a second stream instead of a rescue plan.",
          "And if your website is new, put a small share of the effort into SEO foundations from the start even while ads do the heavy lifting — service pages written properly, your business profile filled in, the technical basics fixed. That groundwork shortens the wait later. The [SEO service](/services/seo) page walks through what those foundations are.",
        ],
      },
      {
        heading: "How the two work together",
        paragraphs: [
          "The strongest setup, for most businesses, is both — in that order. Ads first, for speed and for learning. SEO second, built on what the ads taught you. Then, as the organic rankings arrive, you pull ad spend back from the searches you now win for free and point it at new services, new searches, or your own brand name, where competitors may be bidding against you.",
          "They help each other too. The landing pages you improve for ads also improve your organic pages, and better pages can lower what you pay per click. And the searches that convert through ads tell you exactly which pages to build for SEO, so the content work starts from proof instead of guesswork.",
          "The mistake is treating them as two separate projects run by two separate people who never compare notes. One plan, one set of numbers, one list of the searches that matter. That is how you stop paying twice for the same customer.",
          "One more warning: do not quit SEO at month two. That is usually right before it starts to pay off, and the business concludes SEO does not work — when what happened is that it was stopped before it could. If you start SEO, commit to at least six months of steady work before you judge it. My guide to [how long SEO takes](/blog/how-long-does-seo-take) sets out the month-by-month picture so you know what to expect and when.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is SEO or Google Ads better for a small business?",
          "A: Neither is better in general — it depends on your timing and your margins. If you need customers now and each customer is worth enough to cover the cost of buying the click, ads are better first. If you can wait a few months and want enquiries that do not stop when the budget does, SEO is better first. If you can afford both, run both — but start with the one that fixes your most urgent problem.",
          "Q: Can I do SEO and Google Ads at the same time?",
          "A: Yes, and most established businesses should. The question is when to add the second. Start with one, get it working, then add the other — ads first for speed and learning, then SEO built on what the ads proved.",
          "Q: Why does SEO take so much longer than Google Ads?",
          "A: Because Google Ads buys placement and SEO has to earn it. An ad goes live the day you pay. An organic ranking has to wait for Google to find the page, compare it with the pages already ranking, and decide it deserves a place — and the pages already there have had months or years to earn their spot. That is also why the ranking lasts: it was earned, not rented.",
          "Q: How do I know which one is working?",
          "A: Count enquiries, not clicks. Set up conversion tracking for calls and form submissions before you spend anything, then compare the enquiries each channel brings against what it costs you. Give SEO months, not weeks.",
        ],
      },
      {
        heading: "If you are still unsure",
        paragraphs: [
          "Tell me what you sell, how quickly you need the phone to ring, and what one customer is worth to you. I will tell you plainly which channel I would start with and why. [Book a free SEO audit](/contact) or [message me on WhatsApp](https://wa.me/923714972789) and I will go through it with you.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-seo-specialist",
    image: "/images/blog/blog-how-to-choose-seo-specialist.jpg",
    title: "How to Choose an SEO Specialist for Your Business",
    excerpt:
      "Hiring an SEO specialist is a strange purchase. You are paying for work you cannot see, measured in numbers you may not trust, from a person whose promises you have no way to check…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Consultant", "Hiring"],
    category: "SEO",
    sample: false,
    metaTitle: "How to Choose an SEO Specialist for Your Business",
    metaDescription:
      "How to choose an SEO specialist: the checks I run before hiring anyone, the red flags that end the conversation, and the questions to ask first.",
    sections: [
      {
        heading: "Start by writing down what you want to buy",
        paragraphs: [
          "Hiring an SEO specialist is a strange purchase. You are paying for work you cannot see, measured in numbers you may not trust, from a person whose promises you have no way to check on day one. Business owners I talk to have often been burned once already — a monthly fee that bought a report full of green ticks and no new customers. This is how to choose an SEO specialist and get it right.",
          "The short version: judge a specialist by what you can verify, not by what they promise. References you can call. A sample report you can read. A clear explanation of what will change on your site and how you will know it worked. Walk away from guaranteed rankings, bought link packages, and reports you cannot connect to enquiries or sales. That matters twice as much on a tight budget: the SEO consultant vs agency for a small budget question should be settled on evidence, not on the monthly fee, because the cheapest option is the one that brings enquiries, not the one with the lowest invoice.",
          "Before you talk to anyone, write one paragraph. Which services or products should bring more customers? How will you count success — calls, booking requests, quote forms, orders? If yours is a brand-new site, say so in that paragraph, because the SEO consultant vs agency for a new website choice is a different one: a new site needs its foundations first, and a consultant will usually tell you that plainly, while an agency may sell you a monthly package before the foundations exist. And if your customers are nearby, say that too, because the SEO consultant vs agency for local business question is answered the same way: ask each candidate how they would win the searches in your area, and judge them on that answer rather than on a generic list of services.",
          "One paragraph is enough, and it changes the whole conversation. Without it, every specialist sells you their standard package. With it, you can ask each candidate the same question: how would you get me more of this, and how will I know it worked? The ones who answer in your terms are worth talking to. The ones who answer in jargon are selling you their work, not your outcome.",
        ],
      },
      {
        heading: "Freelancer, agency, or someone in-house",
        paragraphs: [
          "There are three ways to buy SEO, and the right one depends on your size and your budget. If you are weighing up SEO consultant vs agency pros and cons, or freelancer vs agency for SEO, the question underneath is always the same one: SEO consultant vs agency which is better for your business, your budget, and how fast you need results?",
          "A freelancer is usually the cheapest way to get senior hands on your site — you talk to the person doing the work. I've seen the downside too: one person goes quiet, and the work stops. That is the trade at the heart of freelance SEO vs agency SEO: a freelancer gives you direct access to senior hands, while an agency gives you cover when someone is away. For a small business, the SEO agency vs freelancer for small business choice usually comes down to whether you need one expert or a team.",
          "I go to an agency when a site needs a team at once — someone for content, someone technical, someone for reporting. That suits a bigger site with several things happening at the same time. The catch I've seen: you're sold by a senior and served by a junior. Ask who exactly will work on your account, and ask to meet them. That is also where SEO consultant vs agency communication differs most: with a consultant you talk to the person doing the work, while with an agency you often talk to an account manager. SEO consultant vs agency accountability is clearer with a consultant, because one person owns the result, and SEO consultant vs agency turnaround time is usually faster too, since there is no handover between departments.",
          "I only recommend an in-house specialist once SEO is a permanent part of how you win customers. They know your business from the inside, but I've rarely seen one person cover every skill SEO needs — technical, content, and outreach in a single hire is rare. That is why the SEO consultant vs agency for startups question, and the SEO consultant vs agency for a growing business question, usually have the same answer: hire the consultant first, and move to an agency or an in-house hire only when the work outgrows one person.",
        ],
      },
      {
        heading: "What to check before you sign",
        paragraphs: [
          "Most specialists have similar websites and use the same words. The difference shows up in evidence, so ask for it directly.",
          "Ask for two clients you can phone or email. Not logos on a page — real people you can call. A specialist who has done good work will have clients willing to say so. One who only offers logos, or testimonials with no name attached, is asking you to trust a picture. Call the references and ask one question: did enquiries go up, and did the specialist tell you plainly what they were doing each month?",
          "Ask to see a sample report from another client, with the names removed. Does the first number in it mean anything to you — calls, forms, orders? Or is it a wall of rankings with no line connecting them to money? When you compare SEO consultant vs agency results, ask both the same question: show me the calls, forms, or orders the work produced, not just the rankings, because rankings without enquiries are the report nobody should pay for. A good report leads with enquiries and works backwards to what caused them.",
          "Ask what they will do in the first month, in plain words. You are listening for specifics: a technical check of your site, a look at what you already rank for, a plan for your main service pages, a way to measure calls and forms. Vague answers — \"we will optimise your site and build your presence\" — mean there is no plan yet, or the plan is the same for every client.",
          "Ask about their technical depth. SEO is not only content. A specialist should be comfortable talking about how search engines crawl a site, what stops a page from being indexed, and how a sitemap and a canonical tag work — and able to show they have fixed these things before. My [technical SEO service](/services/technical-seo) page lists the checks I run first on any site. And ask who writes the content, because the SEO consultant vs agency for content marketing difference is who does the writing: a consultant usually writes or edits it themselves, while an agency usually passes it to a separate content team, so find out before you sign.",
          "Ask how they will report, and how often. Monthly is normal. What matters is honesty: a report that says \"nothing moved this month, here is why, and here is what we are doing about it\" is worth more than one that hides a flat month behind a new chart.",
        ],
      },
      {
        heading: "Red flags that end the conversation",
        paragraphs: [
          "Some things are not warning signs. They are reasons to stop talking.",
          "A guaranteed ranking is the biggest one. Nobody can guarantee first place in search results — Google itself says so — and anyone who does is either lying or planning to rank you for a search nobody makes. Guaranteed positions, guaranteed traffic, guaranteed leads: all the same promise, all impossible to keep honestly.",
          "Bought link packages are next. If a specialist offers a set number of links per month, those links come from somewhere that sells them to anyone, and Google's spam policies treat paid links as a violation. A link that anyone can buy is not a vote of confidence. It is a receipt. Good links are earned, and they cannot be ordered by the dozen.",
          "Secret methods are a third. SEO has no secret sauce. The work is public knowledge: fix the site, write pages that answer real searches, earn mentions, measure everything. A specialist who will not explain what they are doing is either doing nothing or doing something they do not want you to see.",
          "And watch the contract. The accounts, the content, and the data should stay yours. If a specialist insists on owning your search console or your business profile, you are renting your own business. A good contract says plainly what you can cancel, what you keep, and what happens to the work if you leave. The SEO consultant vs agency contracts question matters here as well: a consultant's contract is usually short and plain, while an agency's is usually longer, with notice periods and minimum terms, so read what happens if you cancel, and who keeps the accounts, the content, and the data.",
        ],
      },
      {
        heading: "Start with an audit, not a retainer",
        paragraphs: [
          "The safest way to hire is to pay for a fixed-scope audit first. Give the specialist read-only access to your search console and analytics, and ask for a list of actions with what each one will do and what effect to expect. Judge the result by how specific it is. A list of ten concrete fixes with reasons beats a sixty-page document of automated warnings.",
          "An audit tells you how the specialist thinks before you commit to months of fees. If it is good, the retainer that follows is a continuation, not a gamble. If it is vague, you have spent a small amount to learn something important.",
          "An [SEO audit](/services/seo-audit) done properly covers the technical health of the site, what you already rank for, and where the gaps are against the pages currently winning your searches. That is the whole job in miniature. If a specialist cannot do that part well, the monthly work will not be better. For a shop, the audit should cover the category and product pages too, because the SEO consultant vs agency for ecommerce choice turns on that: a store needs someone who understands product and category pages, not just blog posts.",
        ],
      },
      {
        heading: "The first call: questions that sort the good from the smooth",
        paragraphs: [
          "Keep a shortlist of three to five candidates, and hold a first call with each. On the call, watch who asks questions. A specialist who spends the first ten minutes asking about your business — your customers, your margins, your best service, the searches that already bring you work — is doing the job. One who spends it pitching is selling.",
          "Ask these, and listen to how they answer. Which clients can I contact about your work? Have you worked with my type of business before, and what happened? What results do you expect in three, six, and twelve months, and why? What is the first number in your monthly report?",
          "The wrong answers are easy to spot. Certainty where there should be ranges. Jargon where there should be plain words. A refusal to show a report. And a timeline that promises serious results in thirty days — for most businesses, thirty days is barely enough to lay the groundwork.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How much does an SEO specialist cost?",
          "A: I do not publish figures here because it depends on the size of your site, the state it is in, and how competitive your searches are. Judge the figure you are given by asking what the monthly work actually is, how many hours it takes, and what you get to keep if you cancel. A low fee that buys a copied report is dearer than a higher fee that buys real work.",
          "Q: Should I hire a freelancer or an agency?",
          "A: A freelancer gives you the person doing the work, direct and accountable, and usually suits a smaller site with one clear goal. An agency gives you a team and suits a bigger site that needs content, technical work, and outreach at the same time. Either can be good and either can be bad. Judge the people who will actually work on your account, not the brand on the website. If you are asking when to hire an SEO consultant instead of an agency, the short answer is when you want the person doing the work to be the person you talk to, and when one clear goal matters more than a team. And if you are still wondering how to decide between SEO consultant and agency, write down your goal, your budget, and how fast you need results, then ask each candidate the same questions from this guide and judge them on the evidence they show you, not on the size of their team.",
          "Q: What is the biggest red flag when hiring an SEO?",
          "A: The guaranteed ranking — I covered it above, and it's the one that should end the call.",
          "Q: How long should I give a new SEO specialist before judging them?",
          "A: I give them three months to show visible work and early signals, and six to twelve months to show real results in enquiries. In the first three months you should see changes on the site, new impressions in search console, and reporting that names the work done. If none of that exists after three months, the [timeline](/blog/how-long-does-seo-take) is not the problem — walk away.",
        ],
      },
      {
        heading: "If you want a second opinion",
        paragraphs: [
          "If you are choosing between specialists, I will look over the proposals with you. Send me what you have been offered and I will tell you what is solid and what is sales talk. [Book a free SEO audit](/contact) or [message me on WhatsApp](https://wa.me/923714972789).",
        ],
      },
    ],
  },
  {
    slug: "how-long-does-seo-take",
    image: "/images/blog/blog-how-long-does-seo-take.jpg",
    title: "How Long Does SEO Take to Show Results? A Realistic Timeline",
    excerpt:
      "How long does SEO take? The short answer is three to six months before you see early signs of progress, and six to twelve months before you see results that matter to the business.…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Rankings", "Timeline"],
    category: "SEO",
    sample: false,
    metaTitle: "How Long Does SEO Take to Show Results? A Realistic Timeline",
    metaDescription:
      "How long does SEO take? A realistic timeline, month by month, from the first fixes to steady enquiries — and the signs that tell you it is working.",
    sections: [
      {
        heading: "Results arrive in order",
        paragraphs: [
          "How long does SEO take? The short answer is three to six months before you see early signs of progress, and six to twelve months before you see results that matter to the business. That's the range I give every client, and it lines up with what Google's Maile Ohye said in a 2017 video: four months to a year to put improvements in place and start seeing the benefit.",
          "That is a wide range, and it frustrates people. You are being asked to pay every month for something that may not show in your enquiries until month five or six. So this post sets out what actually happens month by month, what moves faster and what moves slower, and how to tell normal slowness from work that is going nowhere.",
          "SEO results do not arrive all at once. They arrive in a sequence, and each stage takes its own time. A new blog is no different: the SEO timeline for a new blog is the same sequence, and the posts that rank first are usually the ones that answer a real search plainly.",
          "In my experience the enquiries come last. First the impressions climb, then the rankings, then the clicks — and only then the phone calls.",
          "Most business owners only watch the last stage, so months one to four feel like nothing is happening. But the earlier stages are happening in Search Console the whole time. If impressions are growing and new queries are appearing, the campaign is working — the enquiries are simply the last thing to arrive. If impressions are flat after three months of supposed work, that is a different story, and I come back to it below. That is the SEO results timeline for new websites in one line: impressions first, rankings next, clicks after that, enquiries last.",
        ],
      },
      {
        heading: "Month by month: what should actually happen",
        paragraphs: [
          "What follows is my typical experience, not a promise — every site moves at its own pace.",
          "Month one, I start with setup and diagnosis. Analytics and Search Console connected properly, calls and forms tracked, a technical audit of the site, and a decision about which pages matter most. Nothing visible changes on the site yet. A month spent finding the real problems is worth more than a month spent fixing the wrong ones.",
          "The first three months are the fix and write phase. The core pages get fixed first: service pages, titles, headings, meta descriptions — the parts that tell Google what each page is about. Broken links, pages Google cannot reach, and pages that should never have been indexed get dealt with. The first new or rewritten content goes live.",
          "Months two to four are the quiet stretch, and this is where I lose most clients' nerve — clicks often dip while Google re-reads the changed pages. A dip here is normal.",
          "Around months five to six, the line usually turns. Pages that were stuck on page two start reaching the bottom of page one, and the first clicks arrive on searches that matter. This is the point the three-to-six-month range is really describing: not the finish, but the first moment you can feel it. That is what SEO results in the first year look like in practice: the first half is groundwork, the second half is where the line turns.",
          "From month six on, the gap opens up between sites that kept going and sites that stopped. Rankings steady, more pages join the first page, and the enquiries start coming regularly. Every page that ranks makes the next page a little easier to rank. By month twelve, the SEO results in 12 months are usually clear: the pages that kept going are ranking, and the ones that stopped are not.",
        ],
      },
      {
        heading: "Why some sites move faster than others",
        paragraphs: [
          "The range is wide because the starting points are so different. Where you land in that range comes down to what you already have, how fast the work actually goes live, and who you're up against.",
          "What you already have matters first. A site with some age and some existing rankings moves faster than a brand new one. Pages already sitting in positions eight to twenty — just off the first page — can often move up with focused work on the content, the title, and the internal links. New content on a site that already has authority usually takes a few months to settle. A new site, or a site chasing very competitive searches, should expect a year or more, because it has to build trust from nothing while the pages ahead of it have had years to earn theirs. When Ahrefs reviewed the top ten results for a large set of keywords (Ahrefs, 15 May 2025), it found that nearly three quarters of those pages were more than three years old, and the page in first place averaged five years. You are racing pages that have been there for years. For a startup, the SEO results timeline for startups follows the same shape: a slow first year, then a faster second, because a new site has to earn trust from nothing.",
          "How fast the work actually goes live matters next. The clock starts when the changes go live, not when you hire someone. If recommendations sit in a document for two months waiting for a developer, the timeline stretches by two months.",
          "And who you're up against matters too. A search where the top ten are thin pages, forums, and small business sites is winnable in months. A search where the top ten are large, established sites with years of content behind them is a longer fight.",
        ],
      },
      {
        heading: "Different work moves at different speeds",
        paragraphs: [
          "Technical fixes are the fastest. When a page Google could not reach suddenly becomes reachable, or a page that was blocked gets indexed, the change can show within days or a few weeks. These fixes expose value that already exists — the content was good, Google simply could not see it. That is why a [technical SEO](/services/technical-seo) check comes first in my [SEO audit](/services/seo-audit).",
          "Content for moderate searches takes a few months. Google needs time to crawl the page, test it, compare it with what already ranks, and settle on a position. A good page does not jump to the top in a week. It climbs, falls back, climbs again, and then holds.",
          "Competitive commercial searches take far longer — the better part of a year or more. The pages already ranking for them have content quality, links, and brand signals built over years. One good page does not beat that. A sustained run of good pages does, slowly. Authority and link building take the longest, because trust moves gradually. For a service website, the SEO timeline for a service website is the same shape: quick technical wins first, then a slow build of content and trust.",
        ],
      },
      {
        heading: "The early signals worth watching",
        paragraphs: [
          "Since enquiries are the last thing to arrive, you need earlier signals. Open Search Console and watch these: impressions growing on your important pages, new queries appearing for those pages, and pages climbing from positions eight to twenty toward the first page.",
          "Check these monthly, not daily. Daily checks will drive you mad — positions move up and down for reasons that have nothing to do with your site. Monthly checks show the direction.",
          "One warning about reading the numbers: compare clicks and impressions, not average position, when something changes suddenly. Google changes how it counts results from time to time, and average position can jump overnight with no change in real traffic. If your clicks are steady and your position number moved, trust the clicks.",
        ],
      },
      {
        heading: "When slow progress is a warning sign",
        paragraphs: [
          "Slow is normal. Still is not. Here is how to tell them apart.",
          "If after three months nothing has changed on the site — no pages fixed, no content rewritten, no titles changed — the timeline is not the problem. The work is. SEO that produces no visible change in three months is not slow SEO. It is no SEO.",
          "If after six months impressions are flat, no new queries have appeared, and no page has moved, something is wrong. Either the work is aimed at the wrong searches, the site has a technical problem nobody found, or the work was never done. Ask for the list of what changed, in plain words, with dates.",
          "And if anyone promised you serious results in thirty days, that was the warning sign on day one. Thirty days is barely enough to audit a site, fix the urgent problems, and plan the content. A promise of fast results is not confidence. It is a sales line.",
          "For a fuller picture of what good SEO looks like on a smaller site, my guide to [SEO for small businesses](/blog/seo-for-small-businesses) sets out the order of work, and my guide to [keyword research](/blog/keyword-research-that-brings-customers) explains how to pick the searches worth waiting for. The SEO timeline for a small website follows the same order — fix first, then write, then wait — and the smaller the site, the more the order matters.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How long does SEO take for a new website?",
          "A: Longer than for an established one. A new site has no history for Google to judge, so expect six to twelve months before meaningful results, and longer for competitive searches. The first year is mostly building: fixing the technical foundations, publishing pages that answer real searches, and earning the first links and mentions. That work is what makes year two move faster. If your real question is how long does SEO take to rank on page 1, or how long does SEO take to rank for a competitive keyword, the answer is the same range — page one comes after the first signs, and competitive searches take longer still. A new domain follows the same path, so how long does SEO take for a new domain is the same six to twelve months. And for a blog, how long to rank a new blog post and how long does it take for a new blog to rank are the same question: a few months for the post to settle, longer before it brings real traffic.",
          "Q: Why has my SEO done nothing after two months?",
          "A: Because two months is the setup and fix phase, and the results of that phase arrive later. In the first two months the work is audits, fixes, and new pages going live. Google then needs time to find the changes and test them against the results already ranking. What matters at two months is whether the work happened — pages changed, fixes made, content published — not whether the phone is ringing yet. The average time for SEO to work is the same three to six months for the first signs, whether it is a service business or any other kind of site — so how long does SEO take for a service business comes back to the same range. A single page is quicker to judge than a whole site: how long does SEO take to rank a new page is usually a few months, not a year. And how long does SEO take after a redesign is the same story — the clock restarts when the new pages go live, not when the design is signed off.",
          "Q: Can SEO work faster if I spend more?",
          "A: It can move faster, but only up to a point. More budget buys more work done in parallel, and that shortens the build phase. It cannot shorten Google's side of the wait. No amount of money makes Google trust a new page in a week. Spending more helps when the bottleneck is the amount of work. It does not help when the bottleneck is time. So what is a realistic SEO timeline? Three to six months for the first signs, and longer for results that matter — and a startup website is no exception: how long does SEO take for a startup website is the same range, because money buys work, not trust.",
          "Q: How do I know my SEO is working before the enquiries arrive?",
          "A: Watch Search Console, monthly. Look for impressions growing and new queries appearing — those arrive months before the enquiries do. That is when to expect SEO results in their earliest form — impressions first, then clicks — and how long does SEO take to bring traffic follows the same order: the traffic comes after the impressions, not before them.",
        ],
      },
      {
        heading: "If you want a timeline for your site",
        paragraphs: [
          "Every site has its own starting point, so every honest timeline is different. If you want me to look at yours and tell you plainly what to expect, [book a free SEO audit](/contact) or [message me on WhatsApp](https://wa.me/923714972789). I will give you the timeline before you pay for anything.",
        ],
      },
    ],
  },
  {
    slug: "seo-for-small-businesses",
    image: "/images/blog/blog-seo-for-small-businesses.jpg",
    title: "SEO for Small Businesses: A Practical Guide to Getting Found on Google",
    titleHighlight: "A Practical Guide to Getting Found on Google",
    excerpt:
      "[SEO](/services/seo) for small businesses is simple: Google has to find your pages, understand what each one is about, and have a reason to show yours instead of the next result.",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Small Business", "Local SEO"],
    category: "SEO",
    sample: false,
    metaTitle: "SEO for Small Businesses: A Practical Guide to Getting Found on Google",
    metaDescription:
      "SEO for small businesses: a practical guide to getting found on Google — one page per service, the basics done right, and a routine you can keep up.",
    sections: [
      {
        heading: "One page for every main service",
        paragraphs: [
          "[SEO](/services/seo) for small businesses is simple: Google has to find your pages, understand what each one is about, and have a reason to show yours instead of the next result. That is the whole job. Everything else is detail, and this guide works through it in the order that matters.",
          "You do not need a big budget to compete. You need a clear plan, a site that works properly, and the patience to do the same few things well for months. Small businesses win by being specific: a clear service, a clear audience, and pages that answer the exact search a customer types.",
          "The most common SEO problem I find on small business websites is not technical. It is that the services are crammed onto one page, so Google cannot tell what the business is relevant for. Three services described in three paragraphs on a single page will lose to three pages, each one about a single service, every time.",
          "Give every main service its own page. If you offer cleaning, deep cleaning, and move-out cleaning, those are three pages, not three paragraphs on a services page. Each page gets a title that matches how people search, one clear heading, and an opening paragraph that says who it is for and what is included — in plain words, not industry language.",
          "Then fill the page out properly. What the service covers. How it works, step by step. How long it usually takes. What you need from the customer before you start. The questions people always ask. A page that answers all of that is a page Google can trust with a real search, and a page a visitor can read and then act on.",
        ],
      },
      {
        heading: "Use the words your customers use",
        paragraphs: [
          "Keywords are the words people type into Google when they are looking for a business like yours. The mistake most small businesses make is writing in their own jargon. Your trade has words for things that your customers have never used. They search in the words they would say on the phone.",
          "I start by writing down the main services and the questions customers ask before buying. Then check them against reality. Type a phrase into Google and read the autocomplete suggestions — those are real searches from real people. Then open Search Console and look at the queries your site already appears for. The ones where you sit just off the first page are often your fastest wins.",
          "Focus on specific searches rather than broad ones. A broad search like \"cleaning\" brings researchers, students, and job seekers. A specific search — the service, plus the kind of job, plus the words a buyer uses — brings someone who already knows what they need. A search typed by a few people who are ready to buy is worth more than one typed by thousands who are browsing. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) walks through this step in full.",
        ],
      },
      {
        heading: "Fix the technical basics first",
        paragraphs: [
          "Before you write another page, make sure Google can find the ones you have. I open Search Console first — it is free, and it is the only place Google tells you directly how it sees your site. Verify the site, submit your sitemap, and open the page indexing report. Check that your homepage and every service page are indexed. If any are not, find out why before you do anything else. A [technical SEO](/services/technical-seo) check covers exactly this.",
          "Then the basics every page needs. A secure connection, so the address starts with HTTPS. A site that works properly on a phone, because many — often most — visitors are on one; check your own analytics. Open your own site on your phone, on mobile data, and see how it feels. Every important page needs a unique title and a unique description, written for the person reading the search results. Clean, readable web addresses. No broken links, no accidental blocks.",
        ],
      },
      {
        heading: "Your business profile is part of your SEO",
        paragraphs: [
          "If you serve customers in a particular area, your Google Business Profile is not a side task. For many small businesses it brings more calls than the website does. Claim it, fill in every section, and keep it current: the right category, your hours, your services, your contact details, and real photos of real work — not stock images. A profile with old photos, wrong hours, or a phone number that does not match your website tells a careful buyer to move on to the next listing.",
          "Then I ask clients to ask for reviews, and to answer every one they get. They help your profile show up, and they help a stranger decide to call you instead of the business next to yours. Ask recent happy customers directly, make it one tap with your review link, and never pay for reviews. Google's rules treat paid or traded reviews as a violation.",
          "Get listed in the directories your customers actually use, too — industry associations, supplier lists, and the directories for your trade. I'd rather have a business listed in three directories its customers actually use than in a hundred nobody has heard of.",
        ],
      },
      {
        heading: "Publish content that answers real questions",
        paragraphs: [
          "Once the service pages are right, content is what brings in the people who are not searching for a service yet — the ones searching for the problem. I write down the questions you answer every week on the phone or on a quote visit. Each one is a page, or a section of a page, waiting to be written.",
          "Write for the person with the problem, not for the search engine. Explain the problem, the options, what usually goes wrong, and what the next step is. Use the words the customer used when they asked. Do not repeat the keyword mechanically through the text — Google stopped rewarding that years ago.",
          "And a page that helps someone is a page other sites link to, which brings us to the part most small businesses get wrong.",
        ],
      },
      {
        heading: "Earn trust, one link at a time",
        paragraphs: [
          "A link from another website is a vote that your page is worth reading. A few good ones matter more than dozens of weak ones. I start with the links a business has already earned and never claimed — suppliers, partners, associations. I ask each one, politely, to link to the site. Most will.",
          "Then make one page worth citing: a guide that answers a question better than anything else on the subject, or a clear explanation of a process people get confused about. That is the page other sites link to without being asked.",
          "What never to do: buy links, join link schemes, or pay for a package of links per month. A link anyone can buy is not a vote. It is a receipt, and Google's spam policies treat paid links as a violation. The businesses that get hurt by this are almost always the small ones.",
        ],
      },
      {
        heading: "Measure enquiries, not rankings",
        paragraphs: [
          "Rankings are a useful signal, but business results matter more. Check Search Console every month and track the things that lead to money: organic visits, calls, form submissions, and orders. If a page climbs in the rankings but brings no enquiries, the page is aimed at the wrong search.",
          "A simple rhythm keeps this going without taking over your week. Month one: fix the technical issues and improve your highest-value pages. Month two: publish helpful content around real customer questions. Month three: review Search Console and your enquiries, and improve the pages showing promise. Then repeat. SEO is a routine, not a project with an end date.",
          "How long will it take? New pages can be indexed in days, but meaningful ranking for competitive searches usually takes several months of steady work. My guide to [how long SEO takes](/blog/how-long-does-seo-take) sets out the timeline month by month, so you know what to expect and when to worry.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Can I do SEO for my small business myself?",
          "A: Yes, and this guide is the order to do it in: one page per service, the words your customers use, the technical basics fixed, your business profile complete, content that answers real questions, and a monthly check of Search Console. Start with the pages closest to money — your homepage, your main service pages, and your contact page — and work outward.",
          "Q: How long does SEO take for a small business?",
          "A: Expect three to six months before you see early movement, and six to twelve months before the enquiries arrive steadily. Pages already sitting just off the first page can move faster. A new site, or a very competitive search, takes longer.",
          "Q: Do I need a blog for SEO?",
          "A: Not necessarily. What you need is pages that answer the searches your customers make, and for many small businesses the service pages do most of that work. A blog helps when your customers ask questions that do not fit on a service page. If you publish, publish to answer a real question, and publish regularly enough that it becomes a habit.",
          "Q: What is the biggest SEO mistake small businesses make?",
          "A: Cramming every service onto one page, so Google cannot tell what the business is relevant for. After that, it is buying cheap links, ignoring the business profile, and judging the work by rankings instead of enquiries. The fix for the first one is free: give each service its own page.",
        ],
      },
      {
        heading: "Where to start this week",
        paragraphs: [
          "Pick your best service — the one you want more of — and give it a proper page. One title that matches how customers search. One clear heading. An opening paragraph that says who it is for and what is included. Then open Search Console and check that the page is indexed.",
          "If you would rather have someone do the whole job and show you the work as it happens, that is what I do. [Book a free SEO audit](/contact) or [message me on WhatsApp](https://wa.me/923714972789) and I will look at your site and tell you plainly what to fix first.",
        ],
      },
    ],
  },
  {
    slug: "keyword-research-that-brings-customers",
    image: "/images/blog/blog-keyword-research-that-brings-customers.jpg",
    title: "Keyword Research for Small Business: How to Do It So It Actually Brings Customers",
    titleHighlight: "How to Do It So It Actually Brings Customers",
    excerpt:
      "Most keyword lists I see start in the wrong place. Someone opens a tool, types in their trade, and gets hundreds of suggestions, each with a tidy number beside it and no clue which…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Keyword Research", "Small Business"],
    category: "SEO",
    sample: false,
    metaTitle: "Keyword Research for Small Business: How to Do It So It Actually Brings Customers",
    metaDescription:
      "Keyword research for small business: how to find the searches real buyers type, cut the ones that never bring a customer, and give each one a page.",
    sections: [
      {
        heading: "Start from the buyer, not the tool",
        paragraphs: [
          "Most keyword lists I see start in the wrong place. Someone opens a tool, types in their trade, and gets hundreds of suggestions, each with a tidy number beside it and no clue which ones would ever turn into a call. They pick the big numbers. A year later the traffic has grown and the phone has not.",
          "The list was wrong — it was built for traffic, not for buyers. Keyword research for small business is not about finding the most popular searches. It is about finding the searches your buyers type and building one good page for each of them. Here is the method, in the order that works.",
          "A keyword is just the words someone types into a search box. The research starts before any tool opens.",
          "I write down the problems you solve, in the words a customer would say on the phone. Not your trade — the problem. Nobody calls about roofing. They call about the stain on the ceiling or the leak over the bedroom. Each problem is one line. Each line is a search waiting to happen.",
          "Take the lines from where customers already speak: the first sentence of your last twenty calls or emails, the questions you answer on every quote visit, the jobs on your invoices. The question customers ask most often by phone is your first line.",
          "Then add the words customers use that you would never use yourself. Your trade has jargon for everything. Customers do not search in jargon. If your list sounds like your brochure, it is wrong. If it sounds like your customers on the phone, it is right.",
        ],
      },
      {
        heading: "Let Google finish the sentence",
        paragraphs: [
          "Google's own search box is a free keyword tool hiding in plain sight, and it shows you real searches, not estimates.",
          "I take one problem from the list and type it slowly into Google. Read the suggestions that appear as you type. Each one is a search people really make. Then scroll down the results page to the related questions and the related searches at the bottom. Those tell you what people ask next.",
          "Use a private browser window for this, so your own search history does not tilt the suggestions as much (location can still affect them). Add every useful variation to your list, under the problem it belongs to. By the end of this step your list will be far longer than you need.",
        ],
      },
      {
        heading: "Mine the searches you already appear for",
        paragraphs: [
          "If your website has been live for a few months, Google Search Console is the most valuable keyword tool you have, because it shows the searches that already reached your site.",
          "I open the Performance report and look at the Queries tab. Each line is a real search that showed your site. Sort by impressions and look for two things. Queries with many impressions but few clicks — people see you, but your result does not tempt them. And queries where your average position sits between roughly eight and twenty — you are close to the first page, so a dedicated or improved page often moves them up fastest.",
          "Google leaves out queries made a very small number of times, to protect privacy. What you do see is still the most honest keyword data you own, because it comes from your own visitors, not from a tool's estimate.",
          "If you have not set up Search Console yet, do that today. An [SEO audit](/services/seo-audit) starts here for the same reason.",
        ],
      },
      {
        heading: "Cut everything a buyer would never type",
        paragraphs: [
          "Now comes the step that separates a list that brings customers from a list that brings traffic. Go through every line and ask: would someone with this problem really type this?",
          "A tool matches words, not intentions. It will hand you searches from students, job seekers, people looking for free downloads, and other businesses in your own trade. None of them will ever call you. Cut them all, however big their numbers look. A keyword with a large search count and no buyers behind it is not an opportunity.",
          "In my own lists, the cut is usually bigger than people expect — a large share of the suggestions are from students, job seekers, or people looking for free downloads. Cut them all. Do not mourn the lines you cut. Every one of them is a page you will not waste.",
        ],
      },
      {
        heading: "Sort by buying intent, not search volume",
        paragraphs: [
          "Search volume tells you how many people type something, not who they are. I put the surviving lines in order by how close each person is to buying.",
          "A search that names the problem and asks for someone to fix it sits at the top. A search that asks how something works, or whether it can be done at home, sits lower: useful, but the person behind it may be weeks away from buying. A search that asks for a definition sits at the bottom. It brings readers, not customers.",
          "A search typed twenty times a month by people ready to buy can be worth more than one typed two thousand times by people who are browsing. Far fewer competitors have built a page that targets the small one directly, which is why a small site can win it. Sort by intent and the traffic that arrives is already halfway to calling you.",
        ],
      },
      {
        heading: "Read the results page before you commit",
        paragraphs: [
          "This is the step most guides skip, and it is the step that matters most. Before you build a page for a keyword, search it yourself and read the top results.",
          "What kind of page ranks — a service page, a guide, a directory, a list? How established are those sites? If the top ten are all large directories and old, established sites, that keyword is a hard fight for a small site, whatever a tool's difficulty score says. Tool scores are estimates, and different tools disagree constantly. The results page itself is the better evidence.",
          "A keyword looks open when the pages ranking do not target it directly, when smaller sites are ranking, or when the results are generic pages that only half answer the search. That is a gap a small business can win with one good page. My [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers what that page needs once you build it.",
          "If the results page tells you the fight is wrong, skip the keyword. I'd rather build one page I can win than ten I can't.",
        ],
      },
      {
        heading: "One intent, one page",
        paragraphs: [
          "Now group what is left. If two keywords return near-identical results, Google treats them as one intent, and one page should target both. If the results differ, they need separate pages.",
          "A tap repair search and a fix leaking tap search are one intent — the same person, the same problem, the same page. A tap repair search and a tap repair cost search are two intents. Give them two pages, each answering its own question at the top.",
          "This rule stops a site from publishing ten pages that all say the same thing and compete with each other. One distinct intent, one page.",
        ],
      },
      {
        heading: "Build the first ten, then the next ten",
        paragraphs: [
          "Rank what is left by two things: how likely the searcher is to buy, and how open the results look. Build the best of both first. Start with ten keywords, one page each, and write them properly.",
          "A page built this way needs the basics done right: a title that matches the search, one clear heading, the answer at the top in the customer's words, and links to your related service pages. My [keyword research service](/services/keyword-research) follows this same order for clients.",
          "Do not stop after the first ten. Your customers' words change, new searches appear, and your own Search Console data gets richer every month. Keyword research is not a one-time job.",
          "For the wider picture, my guide to [SEO for small businesses](/blog/seo-for-small-businesses) sets out the order of work, and [how long SEO takes](/blog/how-long-does-seo-take) explains why this slow build beats publishing fifty thin pages at once.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How many keywords should a small business target?",
          "A: Fewer than you think. Start with ten — one page each, aimed at the searches your buyers actually type. A small site that ranks for ten buying searches brings more customers than a site that ranks for a hundred searches typed by browsers. Once the first ten are built and moving, do the next ten.",
          "Q: Do I need a paid tool for keyword research?",
          "A: No. Two free tools from Google cover most of what a small business needs: Keyword Planner, inside a Google Ads account, shows related searches for your seed words, and Search Console shows the searches that already reach your site. Add Google's own search box, and you have the list. Paid tools add estimates and competitor data, which help later, but they never replace starting from your customers' own words.",
          "Q: What is search intent, and why does it matter?",
          "A: Search intent is what the person behind the search actually wants: to buy, to learn, to compare, or to find a specific page. It matters because Google ranks pages that match the intent, not pages that match the words. Match the page to the intent, and the right people find the right page.",
          "Q: Why does my site get traffic but no customers?",
          "A: Because the keywords bring readers instead of buyers. Open Search Console, go to Performance, click the page that gets the traffic, then open the Queries tab and read the actual searches. If the clicks come from questions, definitions, job searches, or the word free, the page is doing its job for the wrong crowd. The fix is a page aimed at the version of the search a buyer types.",
        ],
      },
      {
        heading: "If you want the list built for you",
        paragraphs: [
          "If you would rather have someone do the research and show you the list, that is what I do. [Book a free SEO audit](/contact) or [message me on WhatsApp](https://wa.me/923714972789) and I will look at your site and your Search Console data, then tell you plainly which ten keywords to build first.",
        ],
      },
    ],
  },
  {
    slug: "technical-seo-checklist-for-websites",
    image: "/images/blog/blog-technical-seo-checklist-for-websites.jpg",
    title: "Technical SEO Checklist: 30 Things Every Website Should Get Right",
    titleHighlight: "30 Things Every Website Should Get Right",
    excerpt:
      "Technical SEO is the part of SEO nobody sees. Your visitors never notice it when it works.",
    publishedAt: "2026-11-22",
    readingMinutes: 10,
    tags: ["Technical SEO", "Checklist", "SEO"],
    category: "SEO",
    sample: false,
    metaTitle: "Technical SEO Checklist: 30 Things Every Website Should Get Right",
    metaDescription:
      "A practical technical SEO checklist with 30 checks for crawlability, speed, mobile, schema and indexing — the fixes that keep your site visible.",
    sections: [
      {
        heading: "What this technical SEO checklist is for",
        paragraphs: [
          "Technical SEO is the part of SEO nobody sees. Your visitors never notice it when it works. They only notice it when it breaks — a page that will not load, a link that goes nowhere, a search result that shows the wrong title.",
          "I run this technical SEO checklist in the same order every time I audit a site. If you are starting out, treat it as a technical SEO audit checklist for beginners and work the list in order. That order is also how to audit a website for technical SEO: check what Google can reach before you judge anything else. On a technical SEO checklist for large websites the order stays the same — only the schedule changes, with the crawl and index checks monthly and the full list quarterly. Crawl first, then index, then speed, then the rest. The order matters because a page Google cannot reach does not care how fast it is, and a fast page Google never indexes does not rank. Work through the 30 items below in order, and fix what fails before you move on. I work through it as a technical SEO audit checklist step by step, in the same order every time, so nothing gets skipped. If you want to know how to do a technical SEO audit step by step, this list is the order I would follow: access first, then speed, then polish. A new website gets the same treatment: my technical SEO audit checklist for new websites starts with the same access checks, before anything else.",
          "If you want the deeper version of the audit work behind this list, my [SEO audit service](/services/seo-audit) follows the same sequence. The same sequence works as a technical SEO checklist for a new domain — run it before launch, not after, so nothing starts out blocked. It is also the sequence I follow when someone asks me how to fix technical SEO issues: find the problem first, then fix it in order. The [technical SEO service](/services/technical-seo) page covers what the fixes look like once the checklist is done.",
        ],
      },
      {
        heading: "Crawl: can Google reach your pages?",
        paragraphs: [
          "**1. Your robots.txt file does not block anything important.**",
          "Open yoursite.com/robots.txt in a browser and read it. One line — `Disallow: /` — blocks your whole site. I have seen it left over from a staging build more than once. Your robots.txt should name your sitemap and block only the parts of the site that should never be crawled, like admin pages and internal search results. That check is where I start whenever a client asks how to find and fix technical SEO issues: first find out what Google can reach, then fix what it cannot. The tools for that check are free, and my technical SEO audit tools checklist starts with them: Search Console, PageSpeed Insights, and a crawler.",
          "**2. Your XML sitemap exists, is submitted, and lists only pages you want indexed.**",
          "A sitemap at /sitemap.xml, submitted in Google Search Console, with every canonical URL in it. The same check sits at the heart of a technical SEO checklist for SaaS websites, where the docs, the changelog and the app pages all need to stay in the index. A technical SEO checklist for online stores starts in the same place, with one clean URL per product and category. No noindexed pages, no redirected pages, no 404s. Keep the sitemap clean so Google does not waste crawl on pages you never want indexed.",
          "**3. Every important page returns a 200 status code.**",
          "I run a crawl and look at the status codes. That crawl is where a technical SEO crawl errors checklist starts: a 404 or a chained redirect tells me where the crawl is breaking, and the technical SEO redirect checklist is short — one hop, straight to the final URL. A page that answers 200 but should never have been indexed is the classic entry on a technical SEO indexing problems checklist. A page that matters should answer 200. Anything else — a 404, a 500, a redirect — is a page that is not doing its job.",
          "**4. Redirect chains are short, or gone.**",
          "A redirect should go straight from the old URL to the final one. Chains of two or three hops slow crawlers down. Fix them so each redirect points directly at the destination.",
          "**5. Every important page is reachable within three clicks of the homepage.**",
          "Deep pages get crawled less often and rank worse. That is why a technical SEO checklist for service websites starts with the service pages themselves, and why a technical SEO site structure checklist keeps every important page within three clicks of the homepage. If a service page or a product page sits five levels down, I move it up. Your site structure should look like a shallow pyramid, not a maze.",
          "**6. Internal links use real links, not buttons that run scripts.**",
          "Google follows `<a>` tags with a real `href`. A navigation item that only works through a click handler may be invisible to a crawler. Check your main menu and your footer in the page source, not just on screen.",
        ],
      },
      {
        heading: "Index: does Google keep the right pages?",
        paragraphs: [
          "**7. Your key pages are actually indexed.**",
          "In Search Console, open the Pages report and compare the indexed count with the pages you care about. A page that is not indexed cannot rank, no matter how good it is.",
          "**8. No accidental noindex tags on pages that should rank.**",
          "Check the meta robots tag on your money pages. A noindex left over from development hides a page completely, and nothing in the visible page tells you it is there. I check this in view-source, because a tag set by a plugin does not always show in the editor — and I've found noindex tags hiding money pages more than once.",
          "**9. No server-level noindex hiding in the headers.**",
          "An X-Robots-Tag header can noindex a page without a single line of HTML. Run a header check on your key pages. If the header says noindex, the page is invisible to Google no matter what the HTML says.",
          "**10. Every page has one canonical tag, and it points at the right URL.**",
          "The canonical should be self-referential on a normal page, and should point at the preferred version on a duplicate. Watch for canonical loops, where page A points to B and B points back to A, and for canonicals pointing at redirected URLs.",
          "**11. Duplicate and thin pages are consolidated or removed.**",
          "Two pages saying the same thing split your ranking between them. Merge the weaker one into the stronger one and redirect it. Pages with almost no content — tag archives, empty category pages, old test pages — should be noindexed or removed, not left in the index.",
        ],
      },
      {
        heading: "Speed: does the page load fast enough?",
        paragraphs: [
          "**12. Largest Contentful Paint is under 2.5 seconds on real mobile data.**",
          "Google's published good threshold for LCP is 2.5 seconds, measured on field data from real visitors. I test on a mid-range phone, not just on my laptop. The hero image is usually the largest element — compress it, serve it in a modern format, and preload it.",
          "**13. Interaction to Next Paint is under 200 milliseconds.**",
          "INP measures how quickly the page responds when someone taps or clicks. Heavy third-party scripts are the usual cause of a bad score. Defer the scripts that can wait, and remove the ones nobody uses.",
          "**14. Cumulative Layout Shift is under 0.1.**",
          "Set width and height on every image and video so the page does not jump while it loads. A button that moves a split second before someone taps it is the kind of small annoyance that costs enquiries.",
          "**15. Server response time is fast.**",
          "Time to first byte should be well under a second for your key pages. Slow hosting, an uncached database query on every request, or a server on the other side of the world from your visitors all show up here. I fix the server before I chase smaller wins.",
          "**16. Images are sized, compressed, and lazy-loaded below the fold.**",
          "Serve the size the screen needs, not the original from the camera. That habit is the core of a technical SEO checklist for images — every oversized file you skip is speed your visitors keep. Compress before you upload. Images below the first screen should load only when the visitor scrolls to them. Most of that traffic is on phones, so my technical SEO audit checklist for mobile sites starts with these same image checks on a real phone.",
        ],
      },
      {
        heading: "Mobile and rendering: does the page work on a phone?",
        paragraphs: [
          "**17. The mobile version shows the same content as the desktop version.**",
          "Google indexes the mobile version of your site first. If the mobile layout hides content, trims text, or drops sections, Google treats that content as gone. Check the mobile page in Search Console's URL inspection tool and compare it with the desktop version. For a small business the stakes are plain: my technical SEO audit checklist for local business sites checks the mobile page first, because that is the page their customers see.",
          "**18. Text is readable without zooming, and tap targets are big enough.**",
          "Small text and buttons packed together are a mobile usability failure. That is the first thing I check on a mobile technical SEO checklist, because most visitors arrive on a phone and a page they cannot read is a page they leave. On a technical SEO checklist for local business websites I check the same things on a real phone first, because most local visitors arrive on one and a blocked page loses the call. A visitor should be able to read the page and tap a link without pinching or missing. Basic check, and it still catches sites — I find small text and cramped tap targets on live sites regularly.",
          "**19. JavaScript-rendered content appears in the rendered HTML.**",
          "If your site builds its content with JavaScript, I use the URL inspection tool to see what Google actually gets after rendering. That rendered view is the core of a technical SEO checklist for JavaScript websites — what the tool shows after rendering is what Google can actually use. Content that never renders is content that never ranks. Server-side rendering or pre-rendering fixes this for most sites. That is why my technical SEO audit checklist for JavaScript sites always starts with the rendered HTML, not the source code. Single page apps need the same care, so I run a technical SEO audit checklist for single page apps against the rendered pages too: if the content only exists after rendering, that rendered view is what counts.",
          "**20. No pop-ups or interstitials cover the main content on mobile.**",
          "A full-screen pop-up that blocks the page on a phone hurts visitors and can hurt rankings. Keep calls to action small, dismissible, and off the first screen.",
        ],
      },
      {
        heading: "Structured data: can Google understand the page?",
        paragraphs: [
          "**21. Organization and WebSite schema are in place.**",
          "Basic schema tells Google who you are and what the site is. It is the starting point, and it takes minutes to add.",
          "**22. Breadcrumb schema matches the visible breadcrumbs.**",
          "If your pages show breadcrumb navigation, mark it up. It helps Google show the path in search results, and it confirms your site structure.",
          "**23. Type-specific schema is used only where it genuinely applies.**",
          "Article schema on articles, Product schema on product pages, FAQPage schema where the page shows real questions and answers. A technical SEO checklist for news websites starts with Article schema on every story, so Google knows what each page is, and the same rule applies on a technical SEO checklist for multi-language websites, where each language version gets its own markup. Only mark up content that is visible on the page — hidden or misleading markup can cost you eligibility for rich results. I keep a separate technical SEO audit checklist for multilingual websites for those sites, because every language version needs the same access checks. News sites need the same care at speed: my technical SEO audit checklist for news sites starts with the Article schema on every story, because Google has to know what each page is.",
          "**24. Schema validates cleanly in the Rich Results Test.**",
          "I run every templated page type through the test before I call the work done. A single syntax error can invalidate the whole block, and the test shows you exactly where it is. For shops, that test runs on the product pages first: my technical SEO audit checklist for ecommerce stores starts with the product page, because prices, availability, and review counts have to be true. Shopify stores get the same treatment, so I run a technical SEO audit checklist for Shopify stores against the product and collection pages first.",
        ],
      },
      {
        heading: "Security, links, and hygiene: the checks that stop quiet damage",
        paragraphs: [
          "**25. The whole site runs on HTTPS with no mixed content.**",
          "Every page should load over HTTPS, and every image, script, and stylesheet on the page should too. A single insecure resource triggers a browser warning that scares visitors away.",
          "**26. Broken internal and outbound links are fixed.**",
          "I crawl the site and fix every 404 a visitor or a crawler can reach. A broken link on a key page wastes the authority that page has and tells visitors the site is not maintained.",
          "**27. Your internal links point at the pages that earn business.**",
          "Link from your blog posts to your service pages with words that describe the destination. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) covers how to choose the pages worth linking to. Orphan pages — pages with no internal links pointing at them — are pages Google may never find. That is why my technical SEO audit checklist for blogs always includes the oldest posts: they are the pages that quietly break.",
          "**28. Images have descriptive alt text.**",
          "Alt text describes the image for screen readers and for Google. Write what the image shows, in plain words. Leave decorative images with empty alt text so screen readers skip them.",
          "**29. Your site has one preferred version, and every other version redirects to it.**",
          "The www and non-www versions, and the HTTP version, should all redirect to the one canonical address. Two live versions of the same site split your rankings in half.",
          "**30. You re-run this checklist on a schedule, not when something breaks.**",
          "Technical SEO drifts. Plugins update, pages get added, redirects pile up. I re-run the crawl and the Pages report monthly, and the full checklist every quarter. A site that is checked on a schedule rarely breaks badly, because the small problems get caught while they are still small. Startups drift fastest, so my technical SEO audit checklist for startups runs monthly: the crawl, the checklist, and the pages that move the money. The SaaS version of that schedule is a technical SEO audit checklist for SaaS: pricing and docs pages every month, the full list every quarter. The report I send afterwards follows a technical SEO audit report checklist: what I checked, what I found, and what to fix first.",
        ],
      },
      {
        heading: "How long does the checklist take?",
        paragraphs: [
          "A small site — under fifty pages — takes a morning to check and a few days to fix, depending on what comes up. A large site with thousands of pages takes longer, mostly because the crawl itself takes time and because sorting real errors from noise is real work. The size of the site decides it, not the checklist. Most service business sites are that size, and my technical SEO audit checklist for service websites takes the same morning: the 30 items, in order.",
          "Start with items 1 to 11. Those are the access checks, and they decide whether the rest of the list matters. Speed and mobile come next, because they decide what happens to the traffic the first group earns. Schema and hygiene go last, on a schedule, because they are maintenance, not emergencies.",
          "If you would rather have someone else run it, that is what I do. This checklist is the list I work from, and my [SEO audit](/services/seo-audit) runs it against your site in this order, then hands you a short list of fixes in priority order. My [process](/process) page shows how an audit runs from first check to final report.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Does technical SEO alone get a site to page one?",
          "A: No. Technical SEO gets Google to your pages and lets them load properly. If you are wondering how to find technical SEO errors on a website, start with the crawl and index checks above — most errors show up there first. Rankings still need content that answers the search and pages people actually want to use. It is the foundation, not the whole house.",
          "Q: How often should I run a technical SEO checklist?",
          "A: Monthly for the crawl and the Search Console Pages report, quarterly for the full list. On the monthly run I also look at crawl budget — knowing how to check crawl budget issues matters on larger sites, because if Google spends its crawl on the wrong pages, the important ones wait. After any redesign, migration, or platform change, run the whole thing again before you call the launch done.",
          "Q: My site is built on WordPress. Does this checklist still apply?",
          "A: Yes. The checks are the same; only the fixes change. WordPress has plugins for sitemaps, redirects, and schema, which makes some of it easier — but a bad plugin can also create the redirect chains and bloated pages this list exists to catch. My [WordPress SEO guide](/blog/wordpress-seo) covers the platform-specific parts.",
          "Q: Do I need paid tools to run this checklist?",
          "A: No. Google Search Console and PageSpeed Insights cover most of it, and both are free. A crawl tool helps on larger sites, but on a small site you can check the key pages by hand and still catch the problems that matter.",
        ],
      },
      {
        heading: "Want me to run this checklist on your site?",
        paragraphs: [
          "[Book a free SEO audit](/contact) and I will go through all 30 items against your site in the order above, then tell you plainly what needs fixing first. Or [message me on WhatsApp](https://wa.me/923714972789) and I will tell you where to start. If your site runs on WordPress, I will show you how to audit technical SEO for a WordPress site as I go, so you can run the same checks yourself next time. That list is my technical SEO audit checklist for 2026, and I work through it in the same order on every audit.",
        ],
      },
    ],
  },
  {
    slug: "why-website-not-ranking",
    image: "/images/blog/blog-why-website-not-ranking.jpg",
    title: "Why Is My Website Not Ranking on Google: 15 SEO Problems to Check",
    titleHighlight: "15 SEO Problems to Check",
    excerpt:
      "\"Why is my website not ranking?\" is the question I hear most. The frustrating part is that there is rarely one answer.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["SEO", "Rankings", "Troubleshooting"],
    category: "SEO",
    sample: false,
    metaTitle: "Why Is My Website Not Ranking on Google: 15 SEO Problems to Check",
    metaDescription:
      "Wondering why is my website not ranking? I walk through 15 real problems — indexing, content, speed, links — and how to check each one yourself.",
    sections: [
      {
        heading: "Start by finding out which problem you actually have",
        paragraphs: [
          "\"Why is my website not ranking?\" is the question I hear most. The frustrating part is that there is rarely one answer. A site can be invisible for fifteen different reasons, and the fix for one does nothing for the others. So before you buy more content or more links, work out which problem you have.",
          "The first check takes one minute. Search Google for `site:yourdomain.com`, using your own address. If you see your pages, Google has your site and your problem is ranking, not discovery. If you see nothing, or only a page or two, Google has not added your site yet, or something told it not to. That one search decides which half of this list matters to you.",
          "Then open Google Search Console. It is free, and its Pages report and URL inspection tool answer most of the questions below directly. Work through the fifteen problems in order. The early ones are the ones that hide a site completely, and they are also the ones people miss most often.",
        ],
      },
      {
        heading: "Problem 1: Your site is not indexed at all",
        paragraphs: [
          "If Google has not indexed your pages, they cannot rank. Check the Pages report in Search Console and compare the indexed count with the pages you actually have. A new site can take days or weeks to be found, especially if no other site links to it. Submit your sitemap in Search Console and use the URL inspection tool to request indexing for your homepage and your key pages. Then wait. Indexing is not instant, and re-submitting the same page every day does not speed it up.",
        ],
      },
      {
        heading: "Problem 2: A noindex tag is hiding your pages",
        paragraphs: [
          "This is the one I find most often, and it is the easiest to miss. A noindex tag in the page, or a noindex set by a server header, tells Google to drop the page from search. It is often set while the site was being built and never removed, or set by a plugin nobody remembers installing. I check key pages in view-source, and the server headers too. If a page that should rank carries a noindex, remove it and request indexing again.",
        ],
      },
      {
        heading: "Problem 3: Your robots.txt file blocks Google",
        paragraphs: [
          "Your robots.txt file tells search engines where they may not go. One line — `Disallow: /` — blocks the whole site, and it's the classic leftover from a staging build. I've opened robots.txt files and found it sitting there on live sites. Open yoursite.com/robots.txt and read it. If it blocks your important sections, fix it, then check the Pages report to confirm Google can reach those pages again.",
        ],
      },
      {
        heading: "Problem 4: Google cannot find all your pages",
        paragraphs: [
          "Without a sitemap and without internal links, Google has to discover pages by following links from other pages, and pages buried deep in the site get missed. Every important page should be listed in your XML sitemap and linked from somewhere a crawler can reach — the menu, the footer, or a related page. A page with no links pointing at it is an orphan, and orphans rarely get indexed. My [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers the crawl side of this in more detail.",
        ],
      },
      {
        heading: "Problem 5: Your pages point Google somewhere else",
        paragraphs: [
          "A wrong canonical tag tells Google that another page is the real version, and Google believes it. Check the canonical on each key page. It should point at itself, unless the page is genuinely a duplicate of another page. Canonicals pointing at redirected URLs, or two pages canonicalising to each other, send Google in circles. The same applies to the www and non-www versions of your site — if both are live, Google sees two copies of every page. Pick one version and redirect the other to it.",
        ],
      },
      {
        heading: "Problem 6: You are targeting the wrong keywords",
        paragraphs: [
          "A page can rank perfectly well for a search nobody makes, and the owner still calls it invisible. Or it can chase a phrase that the biggest sites in the niche already own, with no realistic way in. Before you write another page, I check what people actually search for and what the top results for that search look like. If the first page is full of huge, established sites and your page is thinner than all of them, you picked the wrong fight. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) shows how to pick searches you can actually win.",
        ],
      },
      {
        heading: "Problem 7: Your content does not match what the searcher wants",
        paragraphs: [
          "Google matches pages to intent, not just to words. If someone searches for a how-to guide and your page is a sales pitch, they leave, and Google notices. I read the top results for your target search and ask what kind of page they are: a guide, a comparison, a product page, a list. Then build that kind of page, and answer the question in the first screen. A page that makes the visitor scroll and hunt for the answer loses to a page that gives it straight away.",
        ],
      },
      {
        heading: "Problem 8: Your content is too thin to compete",
        paragraphs: [
          "A page with a few short paragraphs rarely ranks for anything competitive, because it gives Google and the reader very little to work with. I don't mean every page needs thousands of words. It means the page has to cover the topic properly — the question, the steps, the edge cases, the thing people get wrong. Compare your page honestly with the pages above you. If theirs answers five questions and yours answers one, the fix is content, not more optimisation.",
        ],
      },
      {
        heading: "Problem 9: Your site is too slow, especially on a phone",
        paragraphs: [
          "Speed is a ranking factor, and it is also a visitor factor — a page that takes too long to load loses people before they read a word. Google's published good thresholds are a main content paint within 2.5 seconds, a tap response within 200 milliseconds, and almost no layout shift while the page loads. Test your key pages with PageSpeed Insights and look at the field data, which comes from real visitors, not a lab test. Compress the hero image, defer scripts that can wait, and check the page on a real phone on mobile data. If it feels slow to you, it feels slow to the people who matter.",
        ],
      },
      {
        heading: "Problem 10: Your site does not work properly on mobile",
        paragraphs: [
          "Google indexes the mobile version of your site first. If the mobile layout hides content, shrinks text until it is unreadable, or puts buttons so close together that people tap the wrong one, you have a ranking problem and a visitor problem at the same time. Open your own site on your own phone — I do this on every audit — and use it the way a stranger would. If anything frustrates you, fix it before you touch anything else.",
        ],
      },
      {
        heading: "Problem 11: You have almost no backlinks",
        paragraphs: [
          "Links from other sites are still one of the strongest signals Google uses to judge whether a page is worth trusting. A page with no links pointing at it, on a site with no links pointing at it, starts every ranking fight at a disadvantage. I tell clients this is the slowest problem to fix, because links have to be earned — by content worth linking to, by being listed where your industry looks, by doing work people mention. My [off-page SEO service](/services/off-page-seo) covers how this works. There is no shortcut that lasts: bought links and link schemes can lead to a manual action.",
        ],
      },
      {
        heading: "Problem 12: Your site has a penalty or a security problem",
        paragraphs: [
          "If your rankings vanished suddenly, check Search Console's Manual Actions and Security Issues sections before anything else. A manual action means Google found a rule broken — thin content at scale, unnatural links, hidden text. A security issue means the site was hacked or is serving malware, and Google will warn visitors away until it is clean. Both have a fix path in Search Console, and both need to be resolved and then submitted for review. Guessing at content changes while a manual action sits unaddressed wastes weeks.",
        ],
      },
      {
        heading: "Problem 13: Your pages are cannibalising each other",
        paragraphs: [
          "Two pages on your site targeting the same search split your ranking between them, and Google often picks the wrong one — or ranks neither well. Search your own site for the phrase and see how many pages come up. If two or three pages all aim at the same query, merge the weaker ones into the strongest, redirect the old URLs to it, and give each remaining page one clear job. One page per search is the rule.",
        ],
      },
      {
        heading: "Problem 14: Your content is out of date",
        paragraphs: [
          "I see this on guides written years ago — screenshots that don't match the current tool, steps that no longer work. Refresh the pages that matter: update the facts, fix the screenshots, add what has changed since it was written, and change the updated date when you do. It's often the cheapest ranking win on the site.",
        ],
      },
      {
        heading: "Problem 15: You have not given SEO enough time",
        paragraphs: [
          "This is the hardest one to hear, and it is real. A new page can take weeks to rank, and a new site can take months, even when everything is done right. Google has to find the page, index it, test it against the pages already there, and decide where it belongs. If you changed something last week and nothing moved, that is normal. Check the trend over a month, not over a day. But \"give it time\" is only good advice if the first fourteen problems are already fixed. Time does not fix a noindex tag.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "Work through the list in order and write down what you find. Most stuck sites have one or two problems from this list, not fifteen, and the fix is usually smaller than the owner feared. A noindex removed, a canonical corrected, a page rewritten to match the search — these are afternoon jobs, and they move rankings more than another month of guessing.",
          "If you find the problem and it is a content or structure job, my [SEO services](/services/seo) cover the fix, and the [SEO audit](/services/seo-audit) runs all fifteen checks against your site and hands you the short list in priority order. My [on-page SEO guide](/blog/on-page-seo-guide) covers the page-level fixes — titles, headings, and internal links — that most of these problems come down to.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How long does it take a new website to show up on Google?",
          "A: Usually days to weeks. Google says crawling can take a few days to a few weeks. A sitemap submitted in Search Console and a few links from other sites help Google find you faster, but there is no way to force instant indexing.",
          "Q: My site is indexed but stuck on page three. Is that a different problem?",
          "A: Yes. Indexing is problem one; ranking is the rest of the list. A page on page three is usually losing on content depth, backlinks, or intent match. Compare it honestly with the ten pages above it and fix the gap that is most obvious.",
          "Q: Can one bad page hurt the whole site?",
          "A: One page rarely does. A pattern does — hundreds of thin pages, duplicated content across the site, or a hacked section. If Search Console shows a large number of pages excluded for quality reasons, the pattern is the problem, not any single page.",
          "Q: I fixed the problem. How long until rankings come back?",
          "A: After the fix, Google has to recrawl the page, which can take days to a few weeks depending on how often it visits your site. Request indexing once in Search Console to ask Google to recrawl it (this does not guarantee faster indexing), then watch the Queries report over the next month. If nothing changes after a full recrawl, the problem was not the one you fixed.",
        ],
      },
      {
        heading: "Want me to find the problem on your site?",
        paragraphs: [
          "[Book a free SEO audit](/contact) and I will run all fifteen checks against your site and tell you plainly which one is holding you back. Or [message me on WhatsApp](https://wa.me/923714972789) and describe what you are seeing — I will tell you where to look first.",
        ],
      },
    ],
  },
  {
    slug: "seo-friendly-website",
    image: "/images/blog/blog-seo-friendly-website.jpg",
    title: "How to Build an SEO-Friendly Website From Day One",
    excerpt:
      "Most websites get SEO added afterwards, like paint on a finished house. Someone launches, waits a few months, wonders why Google ignores the site, and then pays to fix the structur…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "Web Development", "Website"],
    category: "SEO",
    sample: false,
    metaTitle: "How to Build an SEO-Friendly Website From Day One",
    metaDescription:
      "An SEO-friendly website is built, not fixed later. I explain the structure, speed, mobile and content decisions to get right before you launch.",
    sections: [
      {
        heading: "SEO is a building decision, not a repair job",
        paragraphs: [
          "Most websites get SEO added afterwards, like paint on a finished house. Someone launches, waits a few months, wonders why Google ignores the site, and then pays to fix the structure, the speed, and the URLs — the things that were cheapest to get right on day one and most expensive to change later.",
          "An SEO-friendly website is easy for people to use and easy for search engines to crawl, understand, and index. Build for both from the start and you avoid the rebuild most sites eventually need.",
          "I build sites this way for clients, and my [web development service](/services/web-development) follows the same order as this post. If you already have a site and want to know how far off it is, my [SEO audit](/services/seo-audit) checks it against these points.",
        ],
      },
      {
        heading: "Plan the structure before you write a line of code",
        paragraphs: [
          "I draw the site before I build it — homepage at the top, service pages one level down. Most pages should sit within three clicks of the homepage. A good structure looks like a shallow pyramid: service or category pages one level down, and individual articles or products below those. The further a page sits from the homepage, the less often Google crawls it and the less weight it carries.",
          "Group related pages together. Services under /services/, articles under /blog/, and each service with its own page instead of one long page that tries to cover everything. Give the main navigation clean, descriptive labels — \"SEO services\" tells Google and the visitor far more than \"What we do\". Add breadcrumb navigation on deeper pages so people always know where they are and can step back up a level.",
        ],
      },
      {
        heading: "Build mobile-first, not mobile-friendly",
        paragraphs: [
          "Google indexes the mobile version of your site first. That means the phone version is the real version, and the desktop version is the extra. Build the mobile layout first, then expand it for larger screens — not the other way round.",
          "On mobile, the same content must be there as on desktop. Text that is trimmed, sections that are hidden, and images that are dropped on small screens are all content Google treats as gone. Buttons need enough space to tap without hitting the wrong one, text needs to be readable without zooming, and menus need to work with touch. I test on a real mid-range phone, not just by shrinking my browser window. The phone test is the honest one.",
        ],
      },
      {
        heading: "Make it fast from the first deploy",
        paragraphs: [
          "Speed is not a polish step. It is a structural choice, and the choices that decide it happen early: the hosting, the framework, the number of scripts, the size of the images.",
          "Pick hosting that answers quickly. Keep the page light — every plugin, widget, and tracking script adds weight, and most sites carry scripts nobody uses anymore. Compress images before you upload them and serve them in a modern format. Load images below the first screen only when the visitor scrolls to them. Keep the hero image small and preload it, because it is usually the largest thing on the page.",
          "Test your key pages with PageSpeed Insights and look at the field data — that's real visitors, not a lab test. Then check the page on a real phone: if it feels slow to you, it feels slow to the people who matter.",
        ],
      },
      {
        heading: "Use clean URLs and real HTML",
        paragraphs: [
          "A URL should say what the page is about: /services/seo/, not /page?id=42. Keep URLs short, use hyphens between words, and keep the target phrase in the slug. Once a URL is live and linked, treat it as permanent — changing URLs later means redirects (and broken links if you miss any).",
          "Use HTML the way it was meant to be used. One `<h1>` per page, carrying the main subject. `<h2>` for the sections, `<h3>` for the points inside them. Real `<a>` tags with real destinations for navigation, not buttons that only work through scripts — Google follows links, and a link that only exists in JavaScript may not exist to a crawler at all. My [on-page SEO guide](/blog/on-page-seo-guide) walks through the heading and title rules page by page.",
        ],
      },
      {
        heading: "Put the technical basics in place before launch",
        paragraphs: [
          "There is a short list of technical items that should be done before a site goes live, not after. My [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers all thirty; these are the ones that matter most on day one.",
          "Set up an XML sitemap that lists only the pages you want indexed, and submit it in Google Search Console. Write a robots.txt that names the sitemap and blocks only admin pages and internal search results. Give every page a self-referential canonical tag. Run the whole site on HTTPS with no mixed content. Add basic schema — Organization and WebSite first, then the types that fit each page. And set up Search Console and analytics on day one, so you have data from the start instead of guessing later about what the launch did.",
        ],
      },
      {
        heading: "Write content that answers the search",
        paragraphs: [
          "A site with perfect structure and empty pages ranks for nothing. Every page needs one clear job: one search, one visitor, one answer. Before I write a service page, I search for the phrase you want it to rank for and read the top results. What kind of page are they — a guide, a comparison, a service page? Build that kind of page, and make it better by answering the question more directly and more completely.",
          "Write for the person first. Short paragraphs, plain words, the answer near the top. A visitor who finds the answer in the first screen stays; a visitor who has to hunt for it leaves, and Google reads that departure as a signal. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) shows how to pick the searches worth building pages for, and my [SEO services](/services/seo) page covers the content work that follows the build.",
        ],
      },
      {
        heading: "Link your pages together on purpose",
        paragraphs: [
          "Internal links are how you tell Google which pages matter. Every new page should link to two or three related pages, and related pages should link back. A blog post about a topic should link to the service page that sells the work, using words that describe the destination. A service page should link to the articles that explain the topic in depth.",
          "No page should be an orphan. If nothing on your site links to a page, Google may never find it, and visitors certainly will not. When you publish, check that the new page is linked from somewhere a crawler can reach — the menu, a category page, or a related article — and that it links outwards in turn.",
        ],
      },
      {
        heading: "Launch checklist: run this before you go live",
        paragraphs: [
          "Run this the day before launch, not the week after.",
          "If all nine pass, launch. If any fail, fix them first. A launch with a broken form or a blocked sitemap costs more than a launch delayed by a day.",
        ],
        bullets: [
          "Every important page returns a 200 status and loads on a real phone.",
          "The sitemap is submitted and lists only pages you want indexed.",
          "Robots.txt does not block anything important.",
          "Every page has a unique title, a unique meta description, and one H1.",
          "All images have descriptive alt text and sensible file sizes.",
          "The site runs on HTTPS with no mixed content warnings.",
          "Search Console and analytics are installed and verified.",
          "Forms work — submit one yourself from your phone and confirm the message arrives where someone reads it.",
          "The contact details are the same everywhere: the site, the footer, and your business profile.",
        ],
      },
      {
        heading: "The mistake to avoid",
        paragraphs: [
          "The mistake I see most is building the site, launching it, and then treating SEO as a separate project that starts later. By then the URLs are set, the structure is set, the platform is set, and every fix means rework. The sites that rank fastest are the ones where SEO was in the build brief, not in the repair brief.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Should I build on WordPress, Shopify, or a custom site for SEO?",
          "A: Any of them can rank. What matters is whether the platform lets you control URLs, titles, headings, redirects, and speed. WordPress gives you the most control out of the box; Shopify is strong for stores but needs care with duplicate URLs; a custom build gives you full control if it is built with SEO in mind. My [WordPress SEO guide](/blog/wordpress-seo) and my [Shopify SEO guide](/blog/shopify-seo) cover the platform-specific parts.",
          "Q: Does the domain name matter for SEO?",
          "A: Less than it used to. A short, memorable domain that matches your business name is worth more than a keyword-stuffed one. Google stopped rewarding exact-match domains years ago. Pick a name people can remember and spell, and keep it.",
          "Q: How long after launch until the site ranks?",
          "A: A new site usually takes weeks to be indexed properly and months to rank for anything competitive. The launch checklist in this post gets you indexed; rankings come from content, links, and time after that. My guide on [how long SEO takes](/blog/how-long-does-seo-take) sets out the timeline honestly.",
          "Q: Can I add SEO to a site that is already live?",
          "A: Yes, and most of my audit work is exactly that. Structure and URLs are harder to change on a live site, but speed, content, internal links, and technical fixes can all be done after launch. Start with an audit so you fix the blocking problems first instead of the easy ones.",
        ],
      },
      {
        heading: "Want the build done right from day one?",
        paragraphs: [
          "[Book a free SEO audit](/contact) and I will look at your site — or your build plan — and tell you plainly what needs to change before launch. Or [message me on WhatsApp](https://wa.me/923714972789) and I will tell you where to start.",
        ],
      },
    ],
  },
  {
    slug: "on-page-seo-guide",
    image: "/images/blog/blog-on-page-seo-guide.jpg",
    title: "On-Page SEO Guide: How to Optimize a Page for Google and Users",
    titleHighlight: "How to Optimize a Page for Google and Users",
    excerpt:
      "Off-page SEO depends on other people. Technical SEO depends on the platform. On-page SEO is the one part I can change today, on any site — and the pages that rank best are usually…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "On-Page SEO", "Content"],
    category: "SEO",
    sample: false,
    metaTitle: "On-Page SEO Guide: Optimize a Page for Google and Users",
    metaDescription:
      "This on-page SEO guide covers titles, meta descriptions, headings, content, images and internal links — the page-level work that decides rankings.",
    sections: [
      {
        heading: "On-page SEO is the work you control completely",
        paragraphs: [
          "Off-page SEO depends on other people. Technical SEO depends on the platform. On-page SEO is the one part I can change today, on any site — and the pages that rank best are usually the ones where someone took the time to get it right.",
          "This guide walks through the page-level work in the order I do it on an audit: first the search the page is for, then the title and description, then the headings and content, then the images, links, and schema. My [SEO audit](/services/seo-audit) runs the same checks, and my [SEO services](/services/seo) cover the fixes when a site has hundreds of pages to work through.",
        ],
      },
      {
        heading: "Start with one search per page",
        paragraphs: [
          "Every page gets one job. One search, one visitor, one answer. A page that tries to rank for five different searches introduces itself as nothing, and Google treats it that way.",
          "Before you touch the page, search for the phrase you want it to rank for and read the top results. What kind of page are they? A guide, a comparison, a service page, a list? That tells you what the searcher wants. Then check whether your page is that kind of page. If someone searches for a how-to and your page is a sales pitch, no amount of title tweaking will fix it — the page is the wrong shape for the search.",
          "Pick the phrase with [keyword research](/services/keyword-research) before you write, not after. The research decides which page to build and what it has to cover. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) shows how to pick searches that bring buyers, not just readers.",
        ],
      },
      {
        heading: "Write a title that says what the page is",
        paragraphs: [
          "The title tag is the headline of the search result, and it is the first thing a searcher reads. Google's own guidance is simple: give every page a unique title, keep it descriptive and concise, and do not stuff it with keywords. Keep it under roughly 60 characters so it does not get cut off in the results.",
          "Put the main subject near the front, in the words the searcher uses — I check this first on every page I audit. \"On-Page SEO Guide: How to Optimize a Page\" says what the page is in the first words. \"Home\" or \"Services | Company Name\" says nothing, and those are the titles I still find on live sites every week. The title and the visible H1 do not have to be identical, but they should describe the same page — a title that promises one thing and an H1 that says another confuses both the reader and Google.",
        ],
      },
      {
        heading: "Write a meta description that earns the click",
        paragraphs: [
          "A meta description does not directly affect rankings. It decides clicks. It is the short text under the title in the search results, and a good one tells the searcher why this result is the right one.",
          "I keep it short and unique to the page — around 140 to 155 characters — and include the page's main points in plain words. Write it as a promise the page keeps: what the reader will learn, and why it is worth their time. Google sometimes rewrites descriptions, and it does not always show the text you wrote, but a clear description still earns more clicks than a missing one, and Google bolds the searcher's words when they appear in it.",
        ],
      },
      {
        heading: "Use one H1 and a real heading structure",
        paragraphs: [
          "Every page needs exactly one H1, carrying the main subject. Then H2s for the sections, H3s for the points inside them. No skipping from H1 to H4 for styling, and no headings used just to make text big and bold.",
          "Headings are the page's outline. A reader skimming the page should understand what it covers from the headings alone, and Google reads them the same way. I write headings as the questions and statements people actually search for, not as clever labels. \"Write a meta description that earns the click\" is a better heading than \"Optimisation essentials\", because it matches the question in the reader's head.",
          "Open each section with the direct answer in a sentence or two, then the detail. Readers who get the answer fast stay to read the rest. Readers who have to hunt for it leave.",
        ],
      },
      {
        heading: "Write content that answers the search properly",
        paragraphs: [
          "Content is still the core of on-page SEO. Google's guidance on this has been steady for years: write for people first, be original and accurate, and keep the page up to date. A page that answers the question thoroughly, in its own words, with examples from real work, beats a page that repeats the same thin summary as every other result.",
          "Depth matters, but length on its own does not. A page should be as long as the topic needs — long enough to cover the question, the steps, and the thing people get wrong, and no longer. Put your page next to the ones above it and read them side by side. If they cover the question properly and yours only skims it, more tweaking won't help — the page needs more substance.",
        ],
      },
      {
        heading: "Optimise images the way you optimise text",
        paragraphs: [
          "Images are part of the page, and Google reads them too. Compress every image before you upload it, serve the size the screen needs, and give each image descriptive alt text that says what it shows. Alt text is written for screen readers first and for Google second, so write it as a plain caption, not as a list of keywords. A chart showing a ranking trend gets alt text describing the trend. A decorative divider gets empty alt text so screen readers skip it.",
        ],
      },
      {
        heading: "Link internally with words that describe the destination",
        paragraphs: [
          "Internal links do two jobs: they help visitors find the next useful page, and they tell Google which pages matter and how they relate. Every important page should have links pointing at it from other pages on your site. A page with no internal links is an orphan, and orphans rarely rank.",
          "I use anchor text that describes the destination. \"Read my technical SEO checklist\" tells Google and the reader what the link is. \"Click here\" tells them nothing. Link from blog posts to the service pages they support — my [technical SEO checklist](/blog/technical-seo-checklist-for-websites) links to the [technical SEO service](/services/technical-seo) page, for example — and link service pages back to the articles that explain the topic in depth. Three to five internal links per page is a good habit, but the number matters less than the relevance: link where the reader would genuinely want to go next.",
        ],
      },
      {
        heading: "Keep the URL short, stable, and descriptive",
        paragraphs: [
          "The slug should say what the page is about in a few words, with hyphens between them: /on-page-seo-guide/, not /blog/post-2847/. Put the main subject in the slug, keep it short, and never put dates in it — a dated URL looks stale the moment the year changes, and it makes updating the content awkward.",
        ],
      },
      {
        heading: "Add schema where the page earns it",
        paragraphs: [
          "Schema markup does not directly boost rankings, but it buys you richer results — FAQ answers, breadcrumbs, review stars — which raise click-through rates from the positions you already hold. Use FAQ schema only on a page that shows those questions and answers, Article schema on a blog post, and Product schema with price and availability only on a product page, then test the page in Google's Rich Results Test before you publish. The rule is simple: only mark up content that is visible on the page. Hidden or misleading markup is the fastest way to lose eligibility for rich results.",
        ],
      },
      {
        heading: "Check the page experience before you publish",
        paragraphs: [
          "On-page SEO ends where technical SEO begins, and the two meet on the same page. Before you publish, I open the page on a real phone on mobile data and use it like a visitor would. If anything lags, jumps, or gets in the way of a tap, I fix that before I worry about another heading tweak.",
        ],
      },
      {
        heading: "A quick on-page checklist for every page",
        paragraphs: [
          "Run that list on your ten most important pages first. Most sites have a title problem, a heading problem, or a linking problem on at least one of them, and those are afternoon fixes.",
        ],
        bullets: [
          "One search, one job, and the page is the right shape for that search.",
          "Unique title under roughly 60 characters, subject near the front.",
          "Unique meta description, 140 to 155 characters, promising what the page delivers.",
          "One H1, then H2s and H3s that read like an outline of the answers.",
          "Content that answers the question in the first screen, then covers it properly.",
          "Images compressed, sensibly sized, with descriptive alt text.",
          "Three to five internal links with descriptive anchor text, and no broken links.",
          "Short, stable, descriptive URL with the subject in the slug.",
          "Schema only for content that is visible on the page, tested before publish.",
          "Page feels fast on a real phone, on mobile data.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Does the meta description affect rankings?",
          "A: Not directly. Google has said meta descriptions are not a ranking factor. They affect clicks, and clicks are what turn a ranking into traffic. A page with a good description gets more visits from the same position than a page with a missing one.",
          "Q: Should I use the exact keyword in every heading?",
          "A: No. Use it in the title, the H1, and the first paragraph, then write headings that match the questions the reader has. Headings stuffed with the same phrase read badly and do not help. Google understands synonyms and related words — the page needs to be about the topic, not to repeat one phrase.",
          "Q: How many internal links should a page have?",
          "A: There is no fixed number. Three to five relevant links is a good habit for a normal article, more on a long guide. The rule that matters is relevance: link where the reader would genuinely want to go next, with words that describe the destination. A page with twenty forced links is worse than a page with three good ones.",
          "Q: Is on-page SEO enough on its own?",
          "A: No, but nothing else works well without it. A page with strong on-page SEO and no backlinks will struggle against pages that have both. A page with backlinks and broken on-page SEO wastes the links. Get the page right first, then build authority around it — my [off-page SEO service](/services/off-page-seo) covers that half.",
        ],
      },
      {
        heading: "Want me to optimise your pages?",
        paragraphs: [
          "[Book a free SEO audit](/contact) and I will run this on-page checklist against your most important pages and tell you plainly what needs fixing first. Or [message me on WhatsApp](https://wa.me/923714972789) and I will tell you where to start.",
        ],
      },
    ],
  },
  {
    slug: "local-vs-national-vs-international-seo",
    image: "/images/blog/blog-local-vs-national-vs-international-seo.jpg",
    title: "Local SEO vs National SEO vs International SEO: What Does Your Business Need?",
    titleHighlight: "What Does Your Business Need?",
    excerpt:
      "I've seen a shop that serves one neighbourhood pay for a national campaign and wonder why the phone stayed quiet — the work was done properly, for the wrong audience.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["Local SEO", "SEO", "Strategy"],
    category: "SEO",
    sample: false,
    metaTitle: "Local SEO vs National SEO vs International SEO: What Does Your Business Need?",
    metaDescription:
      "Local SEO vs national SEO — and international too. I explain what each one targets, what the work looks like, and how to pick the right scope.",
    sections: [
      {
        heading: "The wrong scope is the most expensive SEO mistake",
        paragraphs: [
          "I've seen a shop that serves one neighbourhood pay for a national campaign and wonder why the phone stayed quiet — the work was done properly, for the wrong audience. An online store that ships anywhere buys local SEO and wonders why nobody outside its own area ever finds it.",
          "Local SEO vs national SEO is not a question of which one is better. It is a question of where your customers are and how they buy from you. Get that answer right and the rest of the decision follows. Get it wrong and every month of work pushes you in the wrong direction.",
          "This post explains the three scopes — local, national, and international — what the work actually looks like for each, and how to pick the one your business needs. If you want help applying it to your own site, my [SEO services](/services/seo) cover all three, and my [SEO audit](/services/seo-audit) will tell you which scope your site is currently built for.",
        ],
      },
      {
        heading: "Local SEO: winning the area you serve",
        paragraphs: [
          "Local SEO is for businesses whose customers need to be nearby, or who trust a provider that is nearby. A plumber, a dentist, a restaurant, a clinic, a law firm, a home-services company — if the customer visits you or you visit them, you are playing a local game. Most of the work is learning how to optimize for near me searches, because those are the searches that bring the phone calls. That includes local SEO for brick and mortar stores too: a shop with a door customers walk through needs the same local work as a plumber.",
          "The work centres on three things. First, your Google Business Profile: complete, accurate, with real photos, real services, and current hours. For local searches, Google shows a map with a handful of businesses above the regular results, and that map is driven mainly by your Business Profile, but your website, reviews, and proximity all feed into it too. A profile that is unclaimed, out of date, or empty loses to one that is kept current. Second, your service and location pages: one honest page per service you actually offer, in the area you actually serve — never one thin duplicated page per town you wish you served. Third, reviews and listings: a steady flow of genuine reviews, and the same name, address, and phone number everywhere the business appears online. I keep a short local SEO ranking factors list in my head when I check a business: a complete profile, honest service pages, and reviews that keep coming. That same name, address, and phone number are what my local SEO citation checklist is really checking: one name, one address, one phone number, everywhere. When a client asks me how to build local citations, I start with the directories their customers actually use, not with a list of hundreds.",
          "Local SEO is usually the quickest scope to show movement, because the competition is smaller — you are competing with the other businesses in your area, not with every site on the internet. It is also the scope where small, boring fixes matter most: a wrong phone number, an old photo, hours that do not match reality. My [local SEO service](/services/local-seo) covers this work, and my guide on [how long SEO takes](/blog/how-long-does-seo-take) sets out the timeline honestly. If you are starting from nothing, I would begin with a simple local SEO checklist for new business: claim the profile, fix the details, then ask your first customers for reviews. That is why I start every job with a plain local SEO audit for small business owners: profile, pages, reviews, and listings, checked one by one. If you want to know how to rank in local search results, that is where it starts: the profile, the pages, and the patience to keep them current.",
        ],
      },
      {
        heading: "National SEO: competing on authority, not proximity",
        paragraphs: [
          "National SEO drops the geography advantage entirely. You are not trying to be the closest option. You are trying to be the most trusted answer to a question anyone in the country might ask. This fits businesses that sell online or work remotely — an online store that ships anywhere, a software product, a service delivered by phone or video call.",
          "The work changes completely. The map and the profile matter far less; there is no local pack to win for most national searches. Instead the work is content depth and earned authority: strong service and product pages, guides that answer the questions your buyers actually ask, and links from sites that Google already trusts. The keyword research is broader, the content has to be better than the national brands already on page one, and the timeline is longer — national rankings are measured in months, and anyone promising them on a calendar is guessing.",
          "National SEO needs more of everything — more pages, more content, more links — and more patience. A local campaign can work with a handful of strong pages. A national one needs a site that covers its topic properly, with the depth to prove it. If you are choosing between the two, that difference in effort is the honest price of going national.",
        ],
      },
      {
        heading: "International SEO: the same game in several languages",
        paragraphs: [
          "International SEO is national SEO multiplied by the complications of serving several countries and languages. It fits businesses that genuinely sell across borders — an exporter, a store that ships abroad, a software product with users in several markets.",
          "The technical work is the part people underestimate. Each market needs its own version of the key pages, in the right language, with the right currency and the right delivery information. You have to signal to Google which version is for which audience, so the wrong version does not show up in the wrong search — the standard way is hreflang, a tag that links the language and country versions of a page together. Without it, Google may show the wrong language version in the wrong search, and translated pages can compete with each other instead of the version you meant to rank. You also have to decide the URL structure: separate country domains, subdomains, or folders under one domain. Each choice has trade-offs: separate country domains give the clearest signal but split your site's authority and cost the most to run; subdomains keep the brand together but still split authority; folders under one domain keep authority together but make local hosting and local rules harder. Changing it later means redirects and lost rankings, so it needs deciding before the build.",
          "Then there is the part no tool can do for you: the content has to be genuinely local to each market, not translated word for word. Search behaviour differs between markets, competitors differ, and even the dominant search engine can differ. A page that ranks in one market may be irrelevant in another. And you can only sell in a market you can actually serve — if you cannot take orders, deliver, charge in the local currency, and support customers there, international SEO is premature. Fix the operations first.",
          "International SEO is the most advanced of the three scopes, and the most expensive to get wrong. A business that is not ready for it should not buy it.",
        ],
      },
      {
        heading: "The comparison, side by side",
        paragraphs: [
          "**Who it is for:** Local SEO — Businesses serving one area; National SEO — Businesses selling across one country; International SEO — Businesses selling in several countries or languages. Clients often ask me about local SEO vs Google Ads at this point, and my honest answer is that ads stop the day you stop paying, while local rankings keep bringing calls. If you want to know how to improve local search visibility, start with the local row: map results come from the profile, the pages, and the reviews.",
          "**Where you show up:** Local SEO — Map results and local searches; National SEO — Regular search results across the country; International SEO — Search results in each target country and language.",
          "**Main work:** Local SEO — Business profile, service pages, reviews, listings; National SEO — Content depth, authority, links; International SEO — Country and language versions, hreflang, localisation. For the map part I work through a simple Google Maps ranking checklist: complete profile, right categories, real photos, and reviews that keep coming. The local work is also how I answer owners who ask how to get more local customers from Google: profile, pages, reviews.",
          "**What a lead looks like:** Local SEO — Call, booking, direction request; National SEO — Purchase, quote request, signup; International SEO — Purchase, demo request, distributor enquiry. That call is what owners mean when they ask how to rank on Google Maps for a service business: the map listing is what brings the call.",
          "**Biggest risk:** Local SEO — Thin location pages, wrong business details; National SEO — Competing with big national brands; International SEO — Wrong version showing up, poor translation.",
          "**Timeline:** Local SEO — Usually the quickest to show movement; National SEO — Months, and slower than local; International SEO — Slowest, and only after the operations are ready. That speed is why I keep a plain local SEO checklist for 2026 on hand for new clients: profile, pages, reviews, and listings, in that order.",
        ],
      },
      {
        heading: "How to pick the right scope",
        paragraphs: [
          "Run your business through four questions. The answers usually settle it.",
          "**Do customers need to be near you, or trust a nearby provider?** If yes, local SEO is your foundation. Start with the Business Profile and your service pages, and do not buy anything else until those are right. I would start with a plain local SEO checklist for service businesses: profile, pages, reviews, and listings, kept current.",
          "**Can you serve a customer anywhere in the country equally well?** If yes, you are playing national, and your edge is content depth and earned authority, not proximity. The work is bigger and slower, and the site needs to prove it knows its topic.",
          "**Do you genuinely sell across several countries or languages?** If yes, and only if yes, international SEO comes into play — with its hreflang, its country and language versions, and its localisation work. If the answer is \"one day, maybe\", the answer is no for now.",
          "**Are you somewhere in between?** A service business operating across several areas in one country runs local SEO at scale: a distinct, genuinely useful presence for each area you actually serve. That is a local strategy with more pages, not a national one. That mix is exactly what local SEO for service area businesses looks like: one honest page per area you actually serve. And if those areas mean separate branches, I use a local SEO checklist for multi-location businesses, because each branch needs its own profile and its own pages.",
        ],
      },
      {
        heading: "The hybrid most growing businesses actually need",
        paragraphs: [
          "Most businesses do not pick one scope forever. They start local, win their area, and then grow into national — or they start national for the product that ships anywhere, while the local service arm runs a local campaign alongside it. That is normal, and it works, as long as each part of the site has one clear scope. The mistake is mixing them on the same page: a service page that tries to rank locally and nationally at once ranks for neither. The same slow growth applies to franchises, so I keep a local SEO checklist for franchises ready for owners with more than one branch: one profile and one set of pages per branch. When the site runs on WordPress, I use the same local SEO checklist for WordPress sites: profile, pages, reviews, and listings, kept current. A restaurant is the clearest example of that slow growth: my local SEO checklist for restaurants starts with the profile and the menu page, then the reviews.",
          "Keep the scopes separate on the site. Local pages for the local service, national pages for the product that ships anywhere, and international versions only for the markets you can actually serve. My [process](/process) page shows how I plan that split during an audit, before any work starts.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Can I do local SEO and national SEO at the same time?",
          "A: Yes, if the site keeps them separate. Local pages for the local service, national pages for the product that sells anywhere. What does not work is one page trying to do both jobs, or a national campaign for a business whose customers all come from one area.",
          "Q: Is international SEO just translating my site?",
          "A: No. Translation is the smallest part. The real work is the structure — which version serves which audience, signalled with hreflang — plus content written for each market, not translated word for word, and operations that can actually serve those markets. A translated site with no hreflang and no local delivery will not rank well anywhere.",
          "Q: Which scope is fastest?",
          "A: Local is usually the quickest to show movement, because the competition is smaller. National is slower, and international is slowest. But none of them is fast in any way that should comfort you — all three are measured in months, and a scope chosen for speed instead of fit is a scope that wastes the months it saves.",
          "Q: I serve one area now but plan to expand. What should I do?",
          "A: Win the area first. Local SEO pays for the expansion. When the enquiries start coming from outside your area on their own, and you can serve them, that is the moment to build the national pages — not before. Expanding into national SEO before the local base is solid spreads the same effort over a much bigger fight.",
        ],
      },
      {
        heading: "Want me to work out the right scope for your business?",
        paragraphs: [
          "[Book a free SEO audit](/contact) and I will look at where your customers actually come from, what your site is currently built for, and which scope fits — then tell you plainly, with the order to do it in. Or [message me on WhatsApp](https://wa.me/923714972789) and describe your business in a line or two, and I will tell you where to start.",
        ],
      },
    ],
  },
  {
    slug: "seo-for-ecommerce-websites",
    image: "/images/blog/blog-seo-for-ecommerce-websites.jpg",
    title: "SEO for Ecommerce Websites: A Practical Growth Strategy",
    titleHighlight: "A Practical Growth Strategy",
    excerpt:
      "The stores I look at usually have the same problem: good products, fine photos, and almost no search traffic. The owner assumes SEO does not work for their niche.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["SEO", "Ecommerce", "Online Store"],
    category: "SEO",
    sample: false,
    metaTitle: "SEO for Ecommerce Websites: A Practical Growth Strategy",
    metaDescription:
      "SEO for ecommerce websites: how I structure product and category pages, fix duplicate content, and turn search traffic into orders that actually arrive.",
    sections: [
      {
        heading: "Start with the structure, not the keywords",
        paragraphs: [
          "The stores I look at usually have the same problem: good products, fine photos, and almost no search traffic. The owner assumes SEO does not work for their niche. What I usually find is simpler: the store was built to look good, not to be found.",
          "I do SEO for ecommerce websites in one order — structure first, then pages, then content, then links. Skip the order and the work leaks away. A store with great blog posts and a broken category structure still loses to a plain store that Google can crawl and shoppers can use.",
          "A store is a tree. The homepage sits at the top, category pages sit under it, subcategories under those, and product pages at the ends of the branches. Every important product should sit a few clicks from the homepage. When a product hides five clicks deep, behind filters and faceted URLs, Google treats it as unimportant and shoppers never reach it.",
          "I draw the tree before I touch a keyword. Which categories deserve their own page? Which products belong together? A store selling shoes might have running shoes, walking shoes, and trail shoes as separate category pages, because people search for each of those separately. A store that lumps them all under one \"shoes\" page forces one page to do the work of three.",
          "Faceted navigation is where most stores quietly break. Filters for size, colour, brand, and price create hundreds of near-identical URLs. Google crawls them, indexes some, and splits the ranking strength of the real category page across copies of itself. The fix is unglamorous: canonical tags pointing filtered URLs back to the main category page, and noindex on filter combinations that add nothing new. Your shoppers still get their filters. Google stops chasing copies.",
        ],
      },
      {
        heading: "Category pages are your money pages",
        paragraphs: [
          "For most stores, the pages that earn the orders are category pages, not product pages and not the blog. A person searching for a type of product — the category, in plain words — is close to buying. They have not picked a brand or a model yet. They want a page that shows the options and helps them choose.",
          "That is why a category page with nothing but a grid of product tiles rarely ranks. Google has nothing to read. Add real copy to the page: a short introduction at the top that names the category the way buyers name it, and a longer section lower down that answers the questions buyers ask before they choose — how to pick, what the differences between the options are, what to check before ordering. Keep it written for the buyer, not stuffed with the same phrase ten times. One honest paragraph beats a wall of repeated keywords.",
          "Product pages matter too, but differently. Each product needs its own title, its own description, and its own images — not the supplier's description copied across ten stores. If ten stores carry the same product with the same manufacturer text, Google has no reason to pick yours. Write the description the way you would describe the product to a customer standing in front of you: what it is for, what it is made of, what fits with it, and what a buyer usually asks about it. Add the details buyers actually check — sizes, materials, care, delivery, returns — in plain words on the page.",
        ],
      },
      {
        heading: "Duplicate content is the quiet killer",
        paragraphs: [
          "Duplicate content is the most common technical problem I find on stores, and the owner almost never knows it exists. It comes from everywhere: the same product listed in two categories with two URLs, a product with colour variants each on its own URL, a supplier description reused word for word, a category page and a tag page showing the same products.",
          "None of this is a penalty in the dramatic sense. It is quieter than that. Google picks one version to show, and it may not pick the version you want. Or it splits the signals across several versions and none of them ranks.",
          "The fixes are mechanical. One URL per product, with variants handled on that page. Canonical tags on the copies. Unique descriptions wherever a page is meant to rank. And a regular check in Search Console for pages Google indexed that you never meant to rank — search results pages, empty tag pages, old out-of-stock products. If a page brings no traffic and serves no buyer, it should not be indexed.",
        ],
      },
      {
        heading: "Product schema and the details buyers check",
        paragraphs: [
          "Structured data is the markup that tells Google what a page is: a product, its price, its availability, its reviews. When it is set up right, a search result can show the price, the stock status, and the review stars before anyone clicks. That changes the click. A listing that shows a price and an in-stock note gets picked over a bare blue link.",
          "I do not treat schema as decoration. It has to match the page. If the markup says a product is in stock and the page says it is not, that mismatch erodes trust with Google and with the buyer. Set it up once, check it in Google's Rich Results Test, and recheck it whenever the store changes — a new theme, a new app, a redesign can all break it silently.",
          "Images carry weight too. Every product image needs a descriptive file name and alt text that says what the image shows. Compress the images before upload. A product page with six uncompressed photos loads slowly on a phone, and a slow page loses buyers before they read a word. Speed is part of SEO for ecommerce websites because it is part of shopping: nobody waits for a store that will not open.",
        ],
      },
      {
        heading: "Content that brings buyers, not just readers",
        paragraphs: [
          "A store blog earns its place when it answers the searches buyers make before they buy. The searches that matter sit between research and purchase: how to choose, what the difference is between two options, what size to pick, how to care for something, whether a cheaper option is worth it. Those searches belong to buying guides and comparison posts, and every one of them should link to the category or product page it is about. My guide to [keyword research that brings customers](/blog/keyword-research-that-brings-customers) shows how to pick the searches buyers actually type, and my [Shopify SEO guide](/blog/shopify-seo) shows the same order applied to a Shopify store.",
        ],
      },
      {
        heading: "Links still decide who wins",
        paragraphs: [
          "A store with clean pages and no links is a shop with no roads leading to it. Links from other sites are still one of the strongest signals Google uses to decide which store to trust, and product pages almost never earn links on their own. Nobody links to a product page for fun.",
          "The pages that earn links are the useful ones: the buying guide, the comparison, the honest review of a product type, the tool or calculator that solves a real problem. My [technical SEO checklist](/blog/technical-seo-checklist-for-websites) is the kind of useful page other sites link to, because it gives them something concrete to point their readers at. Suppliers, bloggers, and journalists link to pages that help their readers. So the link work starts with making pages worth linking to, and then telling the right people they exist.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Rankings alone will mislead you on a store. A category page can rank and still earn nothing if the wrong people arrive. I watch four things: organic sessions to product and category pages, the search queries behind them in Search Console, the conversion rate of organic visitors, and the revenue those visitors bring. If traffic rises and revenue does not, the wrong pages are ranking, or the pages that rank do not convince anyone to buy.",
          "Check Search Console's Queries tab for your top category pages once a month. Read the actual searches. If the clicks come from people looking for free patterns, repair guides, or jobs, the page is attracting the wrong crowd. If they come from people naming the product type and a feature — waterproof, extra wide, for small kitchens — the page is doing its job.",
          "SEO for ecommerce websites takes time. A new category page can take weeks to settle into results, and a store with hundreds of pages needs months of steady work before the pattern is clear. What compounds is the structure: every category page that ranks keeps bringing buyers on its own, month after month. That is the whole point. You build the pages once, and they keep working.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How long does SEO for ecommerce websites take to show results?",
          "A: It depends on the store. A store with clean structure and a few strong category pages can see movement in weeks. A large store with duplicate content and thin pages usually needs months of steady fixes before the pattern turns. The pages that rank keep bringing traffic without another payment per click, so the work compounds — but there is no honest shortcut to the first results.",
          "Q: Should I focus on product pages or category pages first?",
          "A: Category pages first, in most stores. They match the searches buyers make when they have not picked a product yet, and one strong category page can bring orders for dozens of products. Product pages come next, with unique descriptions and correct schema. Blog posts come after both, feeding links and traffic into the pages that sell.",
          "Q: What is the biggest SEO mistake online stores make?",
          "A: Copying the supplier's product description onto every product page, and letting filters create hundreds of duplicate URLs. Both are invisible to the owner and obvious to Google. Unique descriptions and canonical tags on filtered URLs fix most of it, and neither job needs a developer to start.",
          "Q: Do I need a blog for ecommerce SEO?",
          "A: You need content that answers buyer questions, and a blog is the simplest place to put it. Buying guides, comparisons, and how-to-choose posts bring in people who are close to buying, and they earn the links product pages never will. A blog full of posts unrelated to what you sell brings readers who never buy, so the topic choice matters more than the post count.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If your store brings traffic but few orders, or orders but no search traffic, the structure is usually the place to look. I start with a [technical SEO audit](/services/technical-seo) of the store — crawl, structure, duplicates, speed — then work through the category and product pages in order of the revenue they should bring. If you want me to look at yours, [book a free SEO audit](/contact) and tell me what you sell. Or [message me on WhatsApp](https://wa.me/923714972789) and I will tell you plainly what I would fix first.",
        ],
      },
    ],
  },
  {
    slug: "shopify-seo",
    image: "/images/blog/blog-shopify-seo.jpg",
    title: "Shopify SEO: How to Get More Organic Traffic Without Paying for Every Click",
    titleHighlight: "How to Get More Organic Traffic Without Paying for Every Click",
    excerpt:
      "Shopify makes it easy to open a store. It does not make it easy to get found. I've looked at Shopify stores that look finished — good theme, good photos, products loaded — and brin…",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["Shopify", "SEO", "Ecommerce"],
    category: "SEO",
    sample: false,
    metaTitle: "Shopify SEO: How to Get More Organic Traffic Without Paying for Every Click",
    metaDescription:
      "Shopify SEO: a plain guide to ranking your store without paying for every click — collections, product pages, speed, and content that brings buyers.",
    sections: [
      {
        heading: "Fix the foundation before you write a word",
        paragraphs: [
          "Shopify makes it easy to open a store. It does not make it easy to get found. I've looked at Shopify stores that look finished — good theme, good photos, products loaded — and bring in almost no search traffic. The owner usually thinks they need more ads. What they need is Shopify SEO done in the right order, starting with the pages that already exist.",
          "The good news is that Shopify handles a lot of the basics for you: hosting, security, a sitemap, and mobile-friendly themes. The work that remains is yours. Collections, product pages, speed, and content. Get those right and the store starts earning clicks it does not have to pay for.",
          "Before keywords, before blog posts, check that Google can actually find and use your store. Shopify generates a sitemap automatically at yourstore.com/sitemap.xml. Submit it in Google Search Console and check that your important pages are indexed. Then look at the pages Google indexed that you never wanted: internal search results, tag pages, filter URLs. Those are pages that split your store's strength across copies of itself.",
          "Shopify creates duplicate URLs more often than owners realise. A product can appear under its own URL and under a collection URL. Tags and filters create more versions. Shopify adds canonical tags by default, which helps, but themes and apps can break that. Check a few product pages and confirm the canonical tag points to the one URL you want Google to show.",
          "Then look at speed. The usual culprits on Shopify are a heavy theme, apps you installed and forgot, and uncompressed images. Many storefront apps still load their scripts on your pages even when you do not use the feature — admin-only apps do not, so check which of your apps actually adds code to the storefront. Remove the ones you do not need. Compress images before you upload them. Run your homepage and a product page through PageSpeed Insights and fix the biggest problem it names, not the smallest. A store that loads slowly on a phone loses buyers before they see a product.",
        ],
      },
      {
        heading: "Collections first, blog second",
        paragraphs: [
          "Here is the mistake I see most often on Shopify stores: the owner writes blog posts for months while the collection pages sit empty. Collection pages are the highest-value pages a Shopify store has. They match the searches buyers make when they know the type of product they want but have not picked one yet. A blog post rarely outranks a good collection page for those searches, and while your own collection pages stay empty they never get the chance to try.",
          "So start there. Open your top collections — the ones that should bring the most orders — and give each one real copy. A short introduction at the top, written for the buyer, naming the category in plain words. A longer section lower on the page that answers the questions buyers ask before they choose: how to pick, what the differences are, what to check. Two or three honest sentences at the top are worth more than a page of keyword repetition.",
          "Then check the collection itself. Sold-out products sitting at the top of the page send buyers away, and a page that sends buyers away converts poorly. Move out-of-stock products down or hide them until they return. Merge collections that split one search between them — five near-identical collections competing for the same keyword beat each other instead of your competitors. Name the collection the way buyers search, not the way your stockroom labels it.",
          "Product pages come next. Each one needs a unique title and description, not the supplier's text copied from another store. If ten stores carry the same product with the same description, Google has no reason to pick yours. Write it the way you would describe the product to a customer: what it is for, what it is made of, what fits with it. Add the details buyers check — sizes, materials, care, delivery, returns — on the page itself. And give every image a descriptive file name and alt text that says what the image shows.",
        ],
      },
      {
        heading: "Keywords that match the page",
        paragraphs: [
          "On Shopify, the keyword job splits in two. Product and collection pages target the searches of people ready to buy: the product type, the feature, the use. Blog posts target the searches of people still deciding: how to choose, what the difference is, which one suits a particular need.",
          "Mix those two up and both fail. A blog post aimed at a buying search will not beat a collection page for it. A product page aimed at a learning search will not satisfy a reader who wants a guide.",
          "I find keywords the same way on every store: start with the products, list the ways buyers describe them, and check the searches in Google Search Console and in Keyword Planner (inside a Google Ads account) to see which versions people actually type. Then assign one target search to each page, and do not assign the same search to two pages. Two pages chasing one search split the result and neither wins.",
          "Internal links tie the two halves together. Every blog post should link to the collection or product it is about, in the text, where the reader is ready to look. Every collection page should link to its related collections. The rule I use is simple: every important page should be reachable from the homepage in a few clicks, and every blog post should give the reader a next step that leads to a product.",
        ],
      },
      {
        heading: "Content that feeds the store",
        paragraphs: [
          "Once the collections deserve the traffic, the blog earns its place. Its job is specific: capture the searches of people researching, and guide them toward the collections. A post about choosing the right option, comparing two types, or solving a problem your products solve. Each post links to the collection it belongs to, and the collection gets stronger from the links.",
          "Keep the posts useful and specific. A short post that answers one question well beats a long post that circles it. And keep publishing steadily rather than in bursts — a store that adds one good post a month for a year builds more than a store that publishes ten posts in a week and stops.",
        ],
      },
      {
        heading: "The Shopify quirks worth knowing",
        paragraphs: [
          "Shopify has a few habits that catch owners out. The URL structure puts products under /products/ and collections under /collections/, and you cannot change that. That is fine — clean, short URLs inside that structure work well. What hurts is changing a URL after the page has ranked. If you rename a product or a collection, set up a redirect from the old URL to the new one, or the rankings and links pointing at the old URL break.",
          "Schema markup — the code that lets Google show price, availability, and review stars in search results — is partly handled by Shopify themes, but not always well. Check a product page in Google's Rich Results Test. If the price or availability is missing or wrong, the theme or an app is the usual cause, and it is worth fixing: a listing that shows a price and an in-stock note gets picked over a bare link.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Watch organic sessions to your collection and product pages, not just total traffic. A blog post can bring thousands of readers who never buy, and that traffic flatters the report while the store stays quiet. I check Search Console's Queries tab for the top collections once a month and read the actual searches. If the searches behind the clicks name the product type buyers want, the pages are pulling the right people. If the searches are for free downloads or repair help, the wrong crowd is arriving.",
          "Track the conversion rate of organic visitors separately from paid. Organic traffic that converts is the payoff for all of this work: pages that keep earning orders month after month, with no per-click bill attached. It takes time — a new collection page can take weeks to settle, and a store starting from nothing usually needs months before the pattern is clear. The stores I see win are the ones that keep the structure clean and keep publishing after the first month.",
          "If you are choosing between platforms rather than improving a Shopify store, I wrote separately about [Shopify vs WordPress](/blog/shopify-vs-wordpress) — the honest comparison, including which one is easier to keep fast and which one gives you more control. And if your store runs on WordPress instead, the same principles apply with different tools, in my [WordPress SEO checklist](/blog/wordpress-seo).",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is Shopify good for SEO, or should I move to another platform?",
          "A: Shopify is good for SEO when the store is built well. It handles hosting, security, and the sitemap for you, and its themes are mobile-friendly out of the box. What holds most Shopify stores back is not the platform — it is empty collection pages, copied product descriptions, and too many apps slowing the site down. Fix those and Shopify ranks fine.",
          "Q: What is the most important Shopify SEO task?",
          "A: Fix your collection pages first. They match the searches buyers make, and most stores leave them as bare product grids with nothing for Google to read. Real copy, the right products at the top, and a name that matches how buyers search — that one job moves more traffic than a month of blog posts.",
          "Q: How many apps is too many on Shopify?",
          "A: No one number fits every store — I judge each app by what it does for the buyer. If it earns its place — reviews that build trust, a feature customers actually use — it stays. If nobody can say what it does, I take it off. I audit apps every few months on stores I work on, and the ones nobody remembers installing are usually the ones slowing the site down.",
          "Q: Can Shopify SEO work without paying for ads at all?",
          "A: Yes, but not fast. Organic traffic compounds: a collection page that ranks keeps bringing buyers on its own, month after month. Ads bring traffic the day you switch them on and stop the day you switch them off. Most stores that grow steadily use both — ads for speed, SEO for the traffic that keeps coming. My comparison of [Google Ads vs Meta Ads](/blog/google-ads-vs-meta-ads) covers the paid side if you want it.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open your top five collections today and read them as a buyer would. If a collection page is a bare grid with no words on it, that is your first job. I start Shopify work the same way — a [technical SEO audit](/services/technical-seo) of the store, then the collections in order of the revenue they should bring. If you want me to look at yours, [book a free SEO audit](/contact) and tell me what you sell. Or [message me on WhatsApp](https://wa.me/923714972789) and I will tell you plainly what I would fix first.",
        ],
      },
    ],
  },
  {
    slug: "wordpress-seo",
    image: "/images/blog/blog-wordpress-seo.jpg",
    title: "WordPress SEO: The Complete Optimization Checklist for Business Websites",
    titleHighlight: "The Complete Optimization Checklist for Business Websites",
    excerpt:
      "WordPress SEO gives you more control over your rankings than almost any other platform. That is its strength and its trap.",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["WordPress", "SEO", "Website"],
    category: "SEO",
    sample: false,
    metaTitle: "WordPress SEO: The Complete Optimization Checklist for Business Websites",
    metaDescription:
      "WordPress SEO: the full checklist for a business website — settings, plugins, speed, on-page work, and the habits that keep rankings from slipping.",
    sections: [
      {
        heading: "The foundation: settings, hosting, and one plugin",
        paragraphs: [
          "WordPress SEO gives you more control over your rankings than almost any other platform. That is its strength and its trap. With control comes the chance to get the basics wrong — a setting left on after launch, two plugins fighting each other, a theme that looks good and loads slowly. I have audited WordPress sites where one checkbox was the whole problem, and sites where the problem was twenty small things stacked up.",
          "This checklist is the order I work through on a business website. Start at the top. Each step depends on the ones before it.",
          "First, check that search engines can see your site at all. In Settings, then Reading, WordPress has a box labelled \"Discourage search engines from indexing this site\". It gets switched on during development and forgotten at launch. If it is ticked, nothing else on this checklist matters — Google is being told to stay away. Untick it.",
          "Next, confirm the site runs on HTTPS everywhere. A secure certificate is standard on decent hosting now, and the site should redirect the non-secure version to the secure one. Mixed versions — some pages on one, some on the other — split your site in Google's eyes.",
          "Set permalinks to Post name, under Settings then Permalinks. Short, readable URLs with the page's words in them beat long URLs full of dates and numbers. Do this early, before you publish much, because changing URLs later means setting up redirects for every page you move.",
          "Then install one SEO plugin — Yoast SEO, Rank Math, or All in One SEO — and only one. They all do the same core jobs: titles, meta descriptions, sitemaps, schema, redirects. Running two at once creates duplicate titles and duplicate sitemaps, and the two plugins fight over the same settings. Pick one, configure it properly, and leave the other alone. Rank Math and Yoast both handle the sitemap for you; submit that sitemap in Google Search Console and check that your important pages are indexed.",
          "Hosting matters more than most owners think. A cheap shared host that slows down under traffic will undo good on-page work. You do not need the most expensive plan. You need a host that keeps the site fast and online, with a certificate included and backups running. If the site goes down for hours at a time, no checklist fixes that.",
        ],
      },
      {
        heading: "Theme and speed",
        paragraphs: [
          "Your theme decides how fast the site can be and how clean its code is. A heavy theme with features you never use is dead weight on every page. Choose a lightweight theme with clean code and good mobile display, from a developer who still updates it. A theme that has not been updated in two years is a risk, not a bargain.",
          "Speed is not a vanity metric on WordPress. It is the thing visitors feel first. The usual fixes are unglamorous: a caching plugin, images compressed and served in a modern format, and lazy loading so images below the fold do not block the first screen. Remove plugins you do not use — each one adds code to every page. I have seen sites with forty plugins where twelve did the work and the rest were installed once and forgotten.",
          "I check speed with PageSpeed Insights, then I open the site on a real phone on mobile data. If the page drags or jumps while it loads, that is what a customer feels — and I fix the biggest problem the test names first, then test again.",
        ],
      },
      {
        heading: "On-page work: one keyword per page",
        paragraphs: [
          "Every page on a business website should have one job and one target search. The homepage targets what the business is. A service page targets that service. A blog post targets one question. When two pages chase the same search, they split the result and neither ranks well. I keep a simple map — one row per page, one target search per row — and check new pages against it before they go live.",
          "For each page, the title tag carries the target search near the front, in words a person would actually type. The meta description is a reason to click, written for the person reading the search results, with the target search in it naturally. The H1 is the page's heading and should match what the visitor expects from the title they clicked. URLs stay short and readable, with the key words in them.",
          "Headings structure the page for readers first and search engines second. One H1, then H2s for the main sections, H3s for sub-points. A page where every heading is an H2, or where the headings are written for Google instead of the reader, is hard to read and hard to rank.",
          "Images need descriptive file names and alt text that says what the image shows. That helps search engines understand the page, and it helps visitors who use screen readers. It also matters when an image fails to load — the alt text is what shows instead.",
        ],
      },
      {
        heading: "Internal links and schema",
        paragraphs: [
          "Internal links are how Google understands what your site is about and which pages matter most. Link from each page to the pages related to it, in the text, where a reader would want to go next. A blog post about choosing a service should link to that service page. A service page should link to related services and to the contact page. The homepage should link to the pages that earn the business.",
          "Schema markup is the structured data that tells Google what a page is — a business, a service, an article, a set of questions and answers. Your SEO plugin handles the basics. The types worth adding on a business site are the organisation details, breadcrumb navigation, and FAQ markup on pages that actually answer questions. It has to match the page: markup that promises answers the page does not give will not help and can hurt.",
        ],
      },
      {
        heading: "Content habits that keep rankings",
        paragraphs: [
          "WordPress makes publishing easy, and that is where most sites quietly decay. Old posts go stale, links break, and pages that once ranked slip because nobody looked at them for two years.",
          "I keep four habits. First, update the pages that already rank before writing new ones. A post from two years ago with outdated screenshots and dead links will lose to a fresher competitor. Second, fix broken links when you find them, and redirect any URL you change — a 301 redirect from the old URL to the new one, not a dead end. Third, publish steadily rather than in bursts. One good post a month for a year builds more than ten posts in a week followed by silence. Fourth, check Search Console once a month: which pages bring clicks, which searches bring them, and which pages Google is struggling to index.",
        ],
      },
      {
        heading: "The monthly check",
        paragraphs: [
          "Set aside an hour a month for this, and the site stays healthy:",
        ],
        bullets: [
          "Open Search Console. Check for indexing errors, and read the Queries tab for your most important pages. Are the searches from buyers or from readers?",
          "Open your site on your phone. Is it fast? Does the call button work? Does the form work?",
          "Check for plugin and theme updates, and apply them after a backup.",
          "Look at your five most important pages. Is anything outdated, broken, or missing?",
          "Check the contact form by submitting it yourself. A form that shows \"thank you\" while the message goes nowhere is the most expensive bug on a business website.",
        ],
      },
      {
        heading: "Most problems are not mysterious",
        paragraphs: [
          "Most WordPress SEO problems are not mysterious. They are a setting, a plugin, a slow theme, or a page that never got finished. Work through this checklist in order and you will find them. If your store runs on Shopify instead, the same principles apply with different tools — my [Shopify SEO guide](/blog/shopify-seo) walks through the platform-specific parts. And if you want the wider strategy behind the checklist, start with my guide to [technical SEO](/services/technical-seo) and the [on-page SEO guide](/blog/on-page-seo-guide).",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Do I need an SEO plugin for WordPress, or can I do SEO without one?",
          "A: You can do it without one, but there is no good reason to. A plugin handles titles, meta descriptions, sitemaps, and schema in one place, and it stops you from editing code by hand for every page. The rule is one plugin, not two — Yoast SEO, Rank Math, and All in One SEO all do the job, and running two at once creates duplicate settings that fight each other.",
          "Q: What is the most important WordPress SEO setting?",
          "A: The visibility box in Settings, then Reading. \"Discourage search engines from indexing this site\" gets switched on during development and forgotten at launch, and while it is on, Google is being told to stay away. I check it first on every WordPress site I look at, because it is the one setting that makes everything else pointless.",
          "Q: How many plugins is too many?",
          "A: There is no fixed number, but every plugin adds code to your pages and a new thing that needs updating. If a plugin does not earn its place, remove it. Audit yours every few months and delete the ones nobody remembers installing.",
          "Q: How often should I update old WordPress content?",
          "A: Review your most important pages every few months, and your blog posts at least once a year. Update the facts, fix the broken links, and refresh anything that has gone stale. A page that already ranks is usually easier to improve than a new page is to rank, so updating beats publishing when you have to choose.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open Settings, then Reading, and check the visibility box. Then check your plugins — how many do you have, and which ones do you actually use? Those two checks take ten minutes and find the problem on more WordPress sites than any other step. If you want me to run the full checklist on your site, [book a free SEO audit](/contact) and I will go through it in order and tell you what to fix first. Or [message me on WhatsApp](https://wa.me/923714972789) and tell me what your site runs on.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads",
    image: "/images/blog/blog-google-ads-vs-meta-ads.jpg",
    title: "Google Ads vs Meta Ads: Which Platform Is Better for Your Business?",
    titleHighlight: "Which Platform Is Better for Your Business?",
    excerpt:
      "There is no single winner in Google Ads vs Meta Ads. Anyone who tells you one platform is always better is selling you their service, not an answer.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["Google Ads", "Meta Ads", "Advertising"],
    category: "SEO",
    sample: false,
    metaTitle: "Google Ads vs Meta Ads: Which Platform Is Better for Your Business?",
    metaDescription:
      "Google Ads vs Meta Ads: which platform fits your business? I compare intent, targeting, formats, and cost drivers so you can pick the right one first.",
    sections: [
      {
        heading: "How Google Ads works",
        paragraphs: [
          "There is no single winner in Google Ads vs Meta Ads. Anyone who tells you one platform is always better is selling you their service, not an answer. The right choice depends on what you sell, who buys it, and whether those buyers are already looking for it.",
          "The two platforms work in opposite ways, and that is the whole comparison. Google shows your ad to people who typed a search. Meta shows your ad to people who match a profile, while they scroll. One catches demand that already exists. The other creates demand that did not exist a minute ago. Either one can work. Picking the wrong one first wastes the budget that should have gone to the right one.",
          "Google Ads shows your ad when someone searches for words you chose, or watches or reads something related on YouTube, on partner sites, or in Maps. The search ad is the core of it: a person types a problem, and your ad appears above the organic results with a short text answer.",
          "That person told you what they want. A search for a plumber, a lawyer, or a particular product is a person with a problem right now. That intent is why Google clicks usually cost more than Meta clicks — you're paying to stand in front of someone who is already looking. I've seen that gap decide the whole budget.",
          "Google Ads has other formats too: Shopping ads that show products with images and prices in search results, video ads on YouTube, and display ads across partner sites. But the search campaign is where most businesses start, because it is where the intent is highest. The targeting is built on keywords and the searches behind them. Your job is choosing the right searches, writing ads that match them, and sending the click to a page that answers the same search.",
        ],
      },
      {
        heading: "How Meta Ads works",
        paragraphs: [
          "Meta Ads — the ads you run through Meta Ads Manager across Facebook, Instagram, Messenger, and Threads — works the other way around. Nobody typed a search. Your ad appears in a feed because of who the person is: their interests, their behaviour, their age, their location, or their similarity to your existing customers.",
          "That means your ad has to earn attention it was not asked for. A person scrolling past holiday photos does not want your ad. They might want your product, but only if the image or video stops them. Creative does the work on Meta that keywords do on Google — I have seen a weak image fail no matter how good the targeting is.",
          "Meta is strong in three places: visual products that photograph well, new products and brands nobody searches for yet, and reaching people again after they visited your website. That last one — retargeting — is where Meta earns its keep for many businesses. Someone visited your site and left. Meta lets you show them the product again, in their feed, for days afterwards.",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: [
          "The differences are easier to see next to each other:",
        ],
        bullets: [
          "**How people find you.** On Google, they search for it. On Meta, you appear while they scroll.",
          "**Buying intent.** High on Google Search, because the person asked. Lower on Meta, because you interrupted them — higher only for retargeting, where the person already showed interest.",
          "**Targeting.** Google targets searches and keywords. Meta targets people: interests, demographics, behaviours, and audiences built from your customers — Meta is phasing lookalike audiences out in favour of Advantage+ Audience, so treat lookalikes as a legacy option, not the starting point.",
          "**Ad formats.** Google leans on text and Shopping listings, with video on YouTube. Meta leans on images, short video, carousels, and stories.",
          "**Cost per click.** Google clicks often cost more, because the intent is higher. Meta clicks are often cheaper, because the person was not looking.",
          "**Best for.** Google suits services people search for when they need them, and products with clear search demand. Meta suits visual products, brand awareness, new launches, and retargeting.",
          "**Time to results.** Either platform can bring traffic within days — on Meta, testing the creative well takes longer, because the ad itself has to be proven before the campaign works.",
        ],
      },
      {
        heading: "What drives the cost on each platform",
        paragraphs: [
          "Competition is the first cost driver. If many businesses bid for the same searches on Google, or the same audiences on Meta, the auction pushes the price up. A niche with few advertisers costs less to enter than a crowded one, on either platform.",
          "Relevance is the second. On Google, an ad that matches the search and a page that matches the ad earns a better quality score, and better quality means you pay less for the same position. On Meta, an ad people engage with — they watch it, click it, save it — earns cheaper delivery than an ad people scroll past. Each platform rewards ads that people actually respond to.",
          "Targeting width is the third. Narrow targeting on either platform costs more per click but wastes less. Broad targeting costs less per click and wastes more. The right width depends on your budget: a small budget spent broadly disappears before it learns anything.",
          "And the page the click lands on is the fourth. An ad that sends people to a slow homepage with no clear next step wastes clicks on both platforms equally. A page that matches the ad, loads fast, and makes the next step obvious converts more of the same clicks into enquiries. Before you raise a budget on either platform, fix the landing page.",
        ],
      },
      {
        heading: "Which one should you start with?",
        paragraphs: [
          "Ask these questions in order, and the answer usually picks itself.",
          "Do people already search for what you sell? If yes, start with Google. You are meeting demand that exists, and the people who click are already partway to buying. Services people look up when they need them — repairs, professional help, specific products — belong here first.",
          "Is your product visual, new, or an impulse buy? If yes, start with Meta. People need to see it before they know they want it. Fashion, food, home decor, and new brands fit here, because the photo does the selling and the search volume does not exist yet.",
          "Do you sell to businesses? Google is usually the starting point, because business buyers search for solutions by name and by problem. Meta can work for business audiences too, but the targeting is by job and interest rather than by search, so the test takes longer.",
          "Is your budget small? Pick one platform and do it properly before adding the second. Running both on a small budget splits the money so thin that neither campaign gathers enough data to learn. One channel, done well, beats two channels starved of budget.",
        ],
      },
      {
        heading: "Using both together",
        paragraphs: [
          "Most businesses that can fund both end up running both, each for the job it does best. The pattern I see most often is Google catching the people who are ready to buy, and Meta building awareness and bringing back the people who visited but did not act.",
          "Start the second platform only once the first one works on its own. If your Google campaigns bring enquiries at a cost you can live with, add Meta for awareness and retargeting. If Meta brings buyers, add Google to catch the searches your Meta ads create. Adding the second platform to fix a broken first one just doubles the problem.",
        ],
      },
      {
        heading: "The test that settles it",
        paragraphs: [
          "If you genuinely cannot decide the Google Ads vs Meta Ads question, run a small test instead of debating it. Pick one clear offer, one landing page, and one goal — an enquiry, a booking, a sale. Run Google Search for a few weeks and Meta for a few weeks, with the same offer and the same page, and compare the cost per result, not the cost per click.",
          "Keep the test honest: same offer, same page, same way of counting a result. If one platform brings enquiries at a cost your business can afford and the other does not, you have your answer. If both work, you have a two-platform plan. If neither works, the problem is probably the offer or the page, not the platform — and no amount of switching platforms will fix that.",
          "If you want the budget side of this decision, my guide to [how much to spend on Google Ads](/blog/google-ads-budget-guide) walks through what moves cost and how to set a budget from your own numbers. And if you want help choosing and running the right platform, my [Google Ads service](/services/google-ads) and [Meta Ads service](/services/meta-ads) pages set out what I do on each.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is Google Ads or Meta Ads cheaper?",
          "A: Meta clicks are often cheaper, but Google clicks usually come from people with stronger intent. The comparison that matters is the cost per lead or per sale, not the cost per click. A platform is cheaper only if it brings you customers for less — and that depends on your industry, your offer, and your landing page, so test it rather than trusting a general answer.",
          "Q: Can I run Google Ads and Meta Ads at the same time?",
          "A: Yes, and most businesses that can fund both do — the usual pattern is the one I described above. Start the second platform only once the first one works on its own.",
          "Q: Which platform is better for a new business nobody has heard of?",
          "A: Meta, in most cases. Nobody searches for a brand they do not know exists, so Google has little demand to catch. Meta lets you put the product in front of people who match your buyer, with images and video that show what it is. Once people start searching for you by name, Google becomes the place to catch them.",
          "Q: Which platform is better for services people search for when they need them?",
          "A: Google. When someone has a problem and types it into a search, they want an answer now, and a search ad meets them at that moment. Meta can support it with retargeting, but the first click for an urgent service almost always comes from a search.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Answer the four questions above honestly, and start with one platform. If people search for what you sell, start with Google. If they need to see it first, start with Meta. If you want me to look at your business and tell you which one I would pick — and why — [book a free SEO audit](/contact) and bring the question with you. Or [message me on WhatsApp](https://wa.me/923714972789) and tell me what you sell.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-budget-guide",
    image: "/images/blog/blog-google-ads-budget-guide.jpg",
    title: "How Much to Spend on Google Ads: A Practical Budget Guide",
    titleHighlight: "A Practical Budget Guide",
    excerpt:
      "There is no fixed answer to how much to spend on Google Ads. Anyone who gives you one number for every business is guessing.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["Google Ads", "Budget", "PPC"],
    category: "SEO",
    sample: false,
    metaTitle: "How Much to Spend on Google Ads: A Practical Budget Guide",
    metaDescription:
      "How much to spend on Google Ads? No fixed number fits every business — I show what moves cost, how to set a budget, and how to check your own numbers.",
    sections: [
      {
        heading: "Why no honest guide gives you one number",
        paragraphs: [
          "There is no fixed answer to how much to spend on Google Ads. Anyone who gives you one number for every business is guessing. The right budget for your business comes from your own numbers: what a customer is worth to you, how many enquiries turn into customers, and what a click costs in your market. This guide shows you how to work that out, and how to check your own figures before you spend anything serious.",
          "Google Ads has no set price. You choose a daily budget, and Google charges you when someone clicks your ad. What a click costs depends on how many businesses want the same search, how relevant your ad is, and how good the page behind it is. A click for a quiet niche costs far less than a click for a crowded professional service. Same platform, same country, completely different cost.",
          "That is why the budget question has to be worked backwards, from the customer to the click, instead of forwards from a round number. A business that knows what a customer is worth can work out the most it can afford to pay for one. A business that picks a round number first is spending blind, and usually finds out months later that the maths never worked.",
        ],
      },
      {
        heading: "The four numbers that decide your budget",
        paragraphs: [
          "Four numbers decide what you should spend. Change any one of them and the budget you need changes with it.",
          "Start with what a customer is worth to you. Not the first order alone — the full value of a customer over time, if they come back or recommend you. A business where one customer is worth a great deal can afford to pay more for each one than a business where one customer is worth very little.",
          "Next, your close rate: the share of enquiries that become customers. If one enquiry in four becomes a customer, you need four enquiries for every customer you want. If one in ten becomes a customer, you need ten. I ask clients this number first, and most don't know it until they count it — counting it is the first honest step.",
          "Then your website conversion rate: the share of visitors who call, book, or submit a form. A page that turns one visitor in ten into an enquiry needs far fewer clicks than a page that turns one in fifty into an enquiry. This is why the landing page matters more than the budget. Doubling your conversion rate halves the budget you need for the same number of customers.",
          "Last, your cost per click: what you pay when someone clicks your ad in your market. This is the one number you cannot know from inside your business. You find it in Google's own tools, which I cover below.",
        ],
      },
      {
        heading: "The formula, worked backwards",
        paragraphs: [
          "Here is the method, in plain words: customers wanted, divided by the share of enquiries you close, divided by the share of visitors who enquire, multiplied by what a click costs. That is the budget. If the answer is more than you can afford, the fix is not to spend the money anyway and hope. The fix is to change one of the four numbers: improve the page so more visitors enquire, follow up enquiries faster so more of them close, or narrow the targeting so the clicks you buy are the ones most likely to become customers.",
          "An illustrative worked example, with round numbers so you can check the maths: say you want 10 customers a month, you close one enquiry in four, one visitor in twenty enquires, and a click costs $2. You need 40 enquiries (10 ÷ 0.25), which need 800 clicks (40 ÷ 0.05), which cost $1,600 a month (800 × $2). Change any one of those four numbers and the answer moves with it — that is the whole point of working it backwards.",
        ],
      },
      {
        heading: "What moves your cost",
        paragraphs: [
          "Four things move what you pay, most of which you can influence.",
          "Start with your industry. Some markets have many advertisers bidding for the same searches, and the auction pushes the cost up. Others are quiet. You cannot change your industry, but you can choose which searches you bid on inside it — the broad, obvious search is usually the most contested, while the specific search that names the exact problem is often cheaper and closer to a buyer.",
          "Then look at your keywords. Broad keywords invite Google to guess widely, and the guesses cost you. Specific keywords, matched tightly to the searches buyers actually type, waste less. Check the search terms report in your account regularly — it shows the real searches that triggered your ads — and add the irrelevant ones as negative keywords so you stop paying for them.",
          "Ad relevance comes next. An ad that matches the search, and a page that matches the ad, earns a better quality score from Google. Better quality means you pay less for the same position. A generic ad sent to a generic homepage pays the most and converts the least.",
          "And the landing page itself. A fast page that answers the search, shows the next step clearly, and makes contacting you easy turns more clicks into enquiries. A slow page that talks about something else turns clicks into bounces. Every click that bounces is money spent on nothing.",
        ],
      },
      {
        heading: "How to check your own numbers in Keyword Planner",
        paragraphs: [
          "Before you commit to a budget, check what clicks cost in your market. Google's Keyword Planner is free, and it is the honest place to start. You need a Google Ads account to open it — creating the account costs nothing, and you do not have to run ads to use the planner.",
          "Open Tools, then Keyword Planner, then \"Discover new keywords\". Enter the searches your customers would type — the services you offer, the products you sell, the problems you solve. Planner shows you keyword ideas, and for each one, the range Google shows for what advertisers typically pay for a click at the top of the page. That range is your cost per click, for your market, for those searches. It is a range, not a promise — your actual cost depends on your ad and your page — but it is real data about your market, not a guess from a blog post.",
          "Then use \"Get search volume and forecasts\" with the keywords you chose. Enter a daily budget and Planner shows you the clicks and impressions that budget could bring, based on the keywords and their typical costs. Try a few budget levels and watch how the forecast changes. The point is not to take the forecast as a promise. The point is to see the shape of it: how far a small budget goes in your market, and where adding more stops buying much extra.",
          "Write down what you find: the keywords, the click-cost range for each, and the forecast for the budget you are considering. That sheet is the basis of your decision about how much to spend on Google Ads. If the numbers say the budget you had in mind buys too few clicks to learn anything, you know before you spend — and you can narrow the keywords, improve the page, or wait until the budget fits the goal.",
        ],
      },
      {
        heading: "How to start, and when to spend more",
        paragraphs: [
          "Start with a small test, not a full budget. Pick the searches that match your best customers, send them to one page that answers those searches, and watch what an enquiry costs you. If the cost per enquiry is one your business can live with, raise the budget in small steps and watch whether that cost holds. If it climbs as you spend more, you are reaching into weaker searches — pull back, tighten the keywords, and grow from the searches that already work. If the test brings no enquiries at all, do not spend more to fix it. Check the page first, then the targeting, then the offer — the money follows the maths, not the other way round.",
        ],
      },
      {
        heading: "The mistakes that waste a budget",
        paragraphs: [
          "The most expensive mistake is running ads without conversion tracking. If Google Ads never hears about your enquiries, the account looks dead while the business gets leads — or looks healthy while the leads never arrive. Set up tracking for every real lead type: form submissions, calls, bookings. Then test it yourself, from your own phone, and confirm the conversion appears in the account.",
          "The second is broad match left to run wild. Broad match lets Google guess which searches your keywords cover, and the guesses include job seekers, do-it-yourselfers, and people looking for a different company by name. Check the search terms report, add the waste as negative keywords, and tighten the terms that spend the most.",
          "If you want the other half of the paid decision — which platform to start with — my comparison of [Google Ads vs Meta Ads](/blog/google-ads-vs-meta-ads) covers that. And if you are weighing paid ads against search work that keeps bringing traffic without another payment per click, my guide to [how long SEO takes](/blog/how-long-does-seo-take) sets out the honest timeline.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is there a minimum budget for Google Ads?",
          "A: Google lets you set a daily budget of your own choosing, so there is no fixed minimum that suits every business. The practical minimum is the budget that buys enough clicks to learn what an enquiry costs you. A budget so small that it brings a handful of clicks a month teaches you nothing — you need enough enquiries to judge the campaign honestly.",
          "Q: How do I know what a click costs in my industry?",
          "A: Open Google's Keyword Planner, enter the searches your customers type, and look at the click-cost range it shows for each keyword. That range is real data about your market. Your actual cost depends on your ad relevance and your landing page, but the planner's range is the honest starting point — far better than any general figure from a blog post.",
          "Q: How long should I test Google Ads before deciding it works?",
          "A: Long enough to gather a readable number of enquiries, not a fixed number of days. A handful of clicks tells you nothing. Run the test until you can see what an enquiry actually costs you, then compare that with what a customer is worth. If the test is too small to judge, it was too small to run.",
          "Q: Should I spend more if my ads are working?",
          "A: Yes — gradually. If the cost per enquiry is one your business can live with, raise the budget in steps and watch whether the cost per enquiry holds. If it rises sharply as you spend more, you are reaching into weaker searches. Pull back, tighten the keywords, and grow from the searches that already work.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open Keyword Planner today and check the click-cost range for the five searches your best customers would type. Then work the formula backwards from what a customer is worth to you. That one exercise tells you more about your budget than any article can. If you want me to run the numbers with you and set up the test properly, [book a free SEO audit](/contact) and bring the question with you. Or [message me on WhatsApp](https://wa.me/923714972789) and tell me what you sell — I will tell you plainly what I would check first.",
        ],
      },
    ],
  },
  {
    slug: "seo-audit-guide",
    image: "/images/blog/blog-seo-audit-guide.jpg",
    title: "SEO Audit Guide: How to Find and Fix the Problems Holding Your Website Back",
    titleHighlight: "How to Find and Fix the Problems Holding Your Website Back",
    excerpt:
      "I run an SEO audit the same way every time. I start with the question that matters most: can search engines reach the pages, read them, and understand what each page is for? If the…",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["SEO", "SEO Audit", "Technical SEO"],
    category: "SEO",
    sample: false,
    metaTitle: "SEO Audit Guide: How to Find and Fix the Problems Holding Your Website Back",
    metaDescription:
      "An SEO audit finds the problems holding your website back. I walk through crawl, content, speed and links, in the order to check them first.",
    sections: [
      {
        heading: "What an SEO audit actually checks",
        paragraphs: [
          "I run an SEO audit the same way every time. I start with the question that matters most: can search engines reach the pages, read them, and understand what each page is for? If the answer to any part of that is no, the rest of the work waits. An SEO audit is not a long list of scores. It is a check of the chain between a search and a customer, link by link, until the weak link shows itself.",
          "Most sites I audit do not have one big problem. They have five or six small ones stacked on top of each other. A page blocked by accident. A title that says nothing. A service page with no internal links pointing at it. A contact form that stopped sending mail months ago. None of those looks dramatic on its own. Together they are enough to keep a good business invisible. The audit finds them in order, so the fix list is short and the first fix is the one that matters most.",
          "An SEO audit checks four things. Can search engines crawl the site? Are the right pages indexed? Does each page say clearly what it is about, and answer the search behind it? And does the site earn trust — through speed, through a clean experience on a phone, and through links from other sites that vouch for it?",
          "That is the whole job. Tools will hand you a hundred warnings if you let them. Most of those warnings are noise. A missing alt tag on a decorative image will not sink a site. A page that returns a 404 and still sits in your navigation will. Part of the audit is learning to tell the difference. I sort every finding into three piles: it blocks something, it weakens something, or it is cosmetic. Blockers go first. Cosmetic items go last, and some of them never get fixed at all, because they were never worth fixing.",
        ],
      },
      {
        heading: "Start with crawl and index: can Google reach the pages?",
        paragraphs: [
          "I open Search Console first, before I look at a single page on the site itself. The Page indexing report is the most honest picture of a site's health, because it is Google's own record of what it found and what it did with it. I look for the rows that mean a page was found and skipped — \"Crawled — currently not indexed\" and \"Discovered — currently not indexed\" — and I read the reasons, not just the counts. A handful of skipped pages is normal. A whole section skipped is a signal.",
          "Then I run a crawl of my own and compare the two lists. Pages my crawler reaches that Google ignores. Pages Google wants that my crawler never reaches. That comparison finds the problems a single tool misses. An orphan page — one with no internal link pointing at it — is the classic example. It exists, it is in the sitemap, and nobody can reach it by clicking, so Google treats it as unimportant. The fix is a link, not a rewrite.",
        ],
        bullets: [
          "Open Search Console and read the Page indexing report, reasons first, counts second",
          "Crawl the site yourself and compare your list with Google's list",
          "Check that every version of the address redirects to one secure address",
          "Read robots.txt line by line, and check the sitemap lists only indexable pages",
        ],
      },
      {
        heading: "Check the pages that earn business, one by one",
        paragraphs: [
          "A crawler sees a site shallowly. An audit also needs a deep look at the pages that matter — the homepage, the main service pages, and the pages that already bring traffic. I open each one and ask the same questions. Does the title say what the page is about in plain words? Does the main heading match the title, or does it say something different? Is there one clear topic per page, or three topics fighting for the same address?",
          "Duplicate and near-duplicate pages are common here. Two service pages that say almost the same thing in slightly different words. A blog post and a service page aimed at the same search. When two pages chase one search, Google picks one, and it is not always the one you would pick. The audit notes which page should win and what happens to the other one — usually a rewrite aimed at a different search, or a redirect into the stronger page.",
          "I read the content the way a visitor would. Does the first screen answer the search that brought them here? Does it say what the business does, for whom, and what to do next? A page can be well written and still fail this test, because it talks about the business in general and never answers the specific question the visitor typed. My guide to [why a website does not rank](/blog/why-website-not-ranking) walks through that mismatch in detail, and it is the single most common content finding in the audits I run.",
        ],
      },
      {
        heading: "Speed and phones: the experience check",
        paragraphs: [
          "Many visitors arrive on a phone, often on a connection far slower than office Wi-Fi, so check your own analytics to see how yours arrive. I test the site the way they meet it: I open the important pages on a mid-range phone, on mobile data, and I watch what happens. Does the main content appear quickly? Does the page jump around while it loads? Does the button respond when I tap it, or does it lag? I don't judge speed from a lab score alone — PageSpeed Insights backs up what I see with field data from real visitors, which tells me what people actually experienced.",
        ],
      },
      {
        heading: "Content and keywords: does each page match a real search?",
        paragraphs: [
          "Once the technical side is clean, I look at what the pages are actually targeting. I pull the queries from Search Console for each important page and read them. Are the searches from buyers, or from readers? A page that ranks for questions and definitions brings visitors who were never going to buy. A page that ranks for service words and intent words brings the people who were. Both kinds of page have a place, but they are different jobs, and an audit that confuses them will recommend the wrong fixes.",
          "I check the match between the search and the page, too. If the search promises one thing and the page talks about another, visitors leave fast, and Google notices. That is why I check the title and the first screen against the actual queries, not against the keywords someone planned six months ago. Plans go stale. Search Console shows the real queries behind your traffic (though it omits very rare ones for privacy).",
          "Internal links get checked here as well. A service page with no links pointing at it from the rest of the site is a page Google treats as unimportant, however good its content is. I look at which pages get linked, and which never do, and I fix the gaps with links inside real sentences, on words a reader would actually click. The [keyword research](/services/keyword-research) service covers the search side of this work, and the [on-page SEO guide](/blog/on-page-seo-guide) covers the page side.",
        ],
      },
      {
        heading: "Links and trust: who vouches for the site?",
        paragraphs: [
          "The last part of the audit looks outward. Who links to the site, and what do those links say? A link from a real site in your field, pointing at a useful page, is worth more than a dozen links from directories nobody reads. I look for the opposite, too: links from sites that have nothing to do with the business, links that all use the exact same anchor text, and links pointing at pages that no longer exist.",
          "Broken backlinks deserve a fix. If other sites link to a page that now returns a 404, that trust is wasted. A redirect to the closest live page recovers it. I also check the internal version of the same problem: links inside the site that point at dead pages, and pages that link out to sites that no longer exist. Both are small, both are common, and both are easy to miss without a crawl.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How long does an SEO audit take?",
          "A: For a small business site, a day or two of checking and a short list of fixes. For a larger site, the crawl alone takes time.",
          "Q: Will an SEO audit alone improve my rankings?",
          "A: No. An audit finds the problems; fixing them improves the rankings. A site can have a perfect audit and still need better content and more trust before it ranks. The audit tells you where to spend the effort, and in what order.",
          "Q: How is an SEO audit different from a technical SEO audit?",
          "A: A technical SEO audit covers crawl, index, speed and structure. A full SEO audit covers those plus content, keywords and links. If your site has never been audited, start with the full version — the content findings are usually as important as the technical ones.",
          "Q: Do I need to run an SEO audit if my rankings look fine?",
          "A: Yes, at least once a year. Rankings can look fine while a problem grows underneath them — a section slowly dropping out of the index, or a template change quietly breaking titles across the site. An audit catches those before they show up in traffic.",
        ],
      },
      {
        heading: "Want me to run an SEO audit on your site?",
        paragraphs: [
          "If you would rather have someone else run it, that is what I do. [Book a free SEO audit](/contact) and I will go through this checklist against your site in the same order, then tell you plainly what needs fixing first. If you prefer to message first, [message me on WhatsApp](https://wa.me/923714972789). I reply to every message myself.",
        ],
      },
    ],
  },
  {
    slug: "ai-seo-2027",
    image: "/images/blog/blog-ai-seo-2027.jpg",
    title: "AI SEO in 2027: What Is Changing and What I Tell Businesses to Do Now",
    titleHighlight: "What Is Changing and What I Tell Businesses to Do Now",
    excerpt:
      "I still type a few words into Google most days — and I also ask ChatGPT questions I would once have typed into Google. That split is the shift.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["AI SEO", "SEO", "AI"],
    category: "SEO",
    sample: false,
    metaTitle: "AI SEO in 2027: What Is Changing and What I Tell Businesses to Do Now",
    metaDescription:
      "AI SEO in 2027: what AI Overviews, AI Mode and ChatGPT search change for businesses, and the practical steps to stay visible in AI answers now.",
    sections: [
      {
        heading: "What AI SEO is, in plain words",
        paragraphs: [
          "I still type a few words into Google most days — and I also ask ChatGPT questions I would once have typed into Google. That split is the shift. For a long time, searching meant typing a few words into Google, getting ten links, opening a few tabs and reading the pages yourself. Now search works in two stages. Search engines still store and organise web pages. AI tools then read those pages for you and write a direct answer. Google's AI Overviews sit at the top of results. Google's AI Mode offers a chat-style search. ChatGPT search and Perplexity answer questions with citations to the pages they read.",
          "That changes what AI SEO means. It is no longer only about ranking in a list of links. It is about getting your business mentioned and recommended inside AI answers. The work that earns that is close to classic SEO, but not identical to it. This post sticks to what is verifiably known as of late 2026, and labels anything forward-looking as what to watch. I am not going to present guesses about 2027 as facts.",
          "AI SEO is the work of earning visibility inside AI-generated answers. People in the industry also call it generative engine optimisation, or GEO, and answer engine optimisation, or AEO. The names differ. The job is the same: make sure that when an AI tool answers a question in your field, your business is one of the sources it reads, cites, or recommends.",
          "Classic SEO still decides much of that. Google has said that AI Overviews and AI Mode are rooted in its core search ranking systems. That means the pages that can be cited are, in most cases, pages that already rank well. A page Google cannot find, cannot read, or does not trust will not be cited either. So AI SEO does not replace SEO. It adds a second test on top of it: once a page is found, is it clear enough, specific enough, and trustworthy enough for an AI to quote?",
          "That second test is where I see most businesses fail. Their pages are written for a human skimming a list of links, with the key facts buried halfway down, wrapped in vague claims. An AI tool reading that page has seconds to decide what it says. It picks the page that states the fact plainly, with evidence, in the first few lines. My [AI search vs Google search](/blog/ai-search-vs-google-search) post compares the two experiences side by side, and the [SEO services](/services/seo) page covers the classic side of this work.",
        ],
      },
      {
        heading: "What is verifiably known as of late 2026",
        paragraphs: [
          "A few facts are solid, because they come from Google itself, from published research, or from the tools' own behaviour.",
          "Google's AI Overviews have been live since 2024, and they now appear on many searches. Google reported that AI Overviews had grown to over 2.5 billion monthly users (Google, May 2026). AI Mode passed 100 million monthly users early on, and Google later reported it passing one billion monthly active users. Queries in AI Mode are longer than classic searches — people ask full questions, with detail, instead of typing two or three words.",
          "ChatGPT search is real and growing. ChatGPT reached 900 million weekly active users in February 2026, according to reports of OpenAI's own figures. Its search connects to live web pages through its crawler and shows citations. Perplexity works the same way, as a chat-based search engine that reads pages and summarises facts with sources.",
          "The click loss is measured: in a Pew Research Center study of nearly 69,000 real Google searches in March 2025, users who saw an AI summary clicked an ordinary result on 8% of visits, against 15% when no summary appeared, and only 1% of visits clicked a source the summary cited. That is the core of the change — the question gets answered, and the source may never see the visit.",
          "Google has also said that AI features need no special schema or special text files. That matters, because a lot of advice in this space tells you to add files and markup that Google says it ignores. The basics still decide who gets read: crawlable pages, clear content, real authority.",
        ],
      },
      {
        heading: "What is changing inside the answer",
        paragraphs: [
          "The first change is that people ask full questions. A classic search was \"best CRM small business\". An AI Mode question is closer to \"which CRM works for a five-person sales team that needs invoicing and email follow-up, and what does it cost to run?\" The AI splits a question like that into several smaller searches and runs them together. That is called query fan-out. It means the pages that get pulled into an answer are often not the ones that rank for the single phrase you track. They are the pages that cover the pieces of the question.",
          "The second change is that original facts beat generic content. Generic AI posts are everywhere now — the same basic definitions, repeated. Search engines and AI models skip those, because the same information is already everywhere. Google's helpful content guidance favours real experience and original reporting. AI models also look for original facts they can quote with confidence: a specific process, a real comparison, a number you measured yourself, a mistake you made and what it taught you. My post on [keyword research that brings customers](/blog/keyword-research-that-brings-customers) makes the same point from the keyword side — the searches worth winning are the specific ones, not the generic ones.",
          "The third change is that recommendations and citations are different things. A page can be cited as a source for a fact and still not be recommended as the business to choose. Citations come from pages that state facts clearly. Recommendations come from being named in sources the AI already trusts — often third-party lists, comparisons, reviews, and videos, not your own pages. That stings if you only publish your own content — but it means the work now includes earning mentions elsewhere, not just writing more pages at home. The [off-page SEO](/services/off-page-seo) service covers that side.",
        ],
      },
      {
        heading: "What to watch — not certainties, but signals",
        paragraphs: [
          "Everything in this section is a signal to watch, not a fact about 2027. Treat it that way, and check it again in a few months before you act on it.",
          "Watch whether AI Mode becomes the default way people search, rather than an option they choose. Google has made it easier to enter AI Mode from Overviews and the search box, but has not made it the default search experience, and at its I/O event in May 2026 it described its new intelligent search box as the biggest upgrade to the search box in over 25 years. If that shift continues, the share of searches that end without a click will keep growing, and being cited will matter more than ranking tenth.",
          "Watch whether AI agents start doing tasks for people, not just answering questions. Google has announced information agents that monitor the web in the background, and agentic booking features for services with live availability. If those reach your field, the business that can be booked or contacted cleanly from an AI answer will win work that never reaches a website at all. That makes accurate business details — hours, services, contact methods — more valuable, not less.",
          "None of these is guaranteed. All of them point the same way: specific, provable, well-organised information wins, and vague claims lose.",
        ],
      },
      {
        heading: "What to do now: the practical steps",
        paragraphs: [
          "Start with the pages that already rank. Those are the pages AI tools can already read. Make the key fact of each page easy to find: a direct answer near the top, in plain words, with the detail that proves it. If a page answers a question, say the answer first, then the explanation. If a page compares options, put the comparison where it can be read without scrolling through three screens of introduction. The [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers the crawl and speed side of this, and the [on-page SEO guide](/blog/on-page-seo-guide) covers the page side.",
          "Add facts only you can state. Your process, your criteria for choosing one option over another, the mistakes you see buyers make, the questions you get asked every week. That is the material an AI cannot get from a generic post, and it is the material it quotes when it can find it. The [SEO audit](/services/seo-audit) service is the fastest way to find which of your pages already have that material buried in them, and which are just repeating what everyone else says.",
          "Check your visibility by asking, not by guessing. Once a month, ask ChatGPT, Perplexity, Gemini and AI Mode the questions your buyers actually ask. Record who gets cited, who gets recommended, and what the answer says about your business. If it says something wrong about you, fix the source it read — usually your own site, or a directory listing with old details. If it never mentions you, the problem is usually that your pages do not answer those questions directly.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is classic SEO dead because of AI search?",
          "A: No. Google says AI Overviews and AI Mode are rooted in its core ranking systems, so the pages that get cited are usually pages that already rank. Classic SEO decides which pages can be read. AI SEO decides which of those pages get quoted. You need both, and the first one comes first.",
          "Q: What is the difference between AI SEO, GEO and AEO?",
          "A: Very little in practice. AI SEO is the general term. GEO, generative engine optimisation, and AEO, answer engine optimisation, describe the same job: earning visibility inside AI-generated answers. Do not pay for three separate services that are one job.",
          "Q: Do I need llms.txt or special AI markup on my site?",
          "A: No. Google says AI features need no special schema or AI text files, and research by Ahrefs (June 2026) and SE Ranking (October 2026) found no measurable effect from adding llms.txt. Spend that effort on clearer content instead.",
          "Q: How do I know if AI search is sending me business?",
          "A: Search Console shows impressions in AI Overviews and AI Mode, but not which competitors were cited or what the answer said. Ask the tools yourself, once a month, with the questions your buyers actually ask, and record who appears. That manual check is the measurement that matters right now.",
        ],
      },
      {
        heading: "Want me to check how AI search sees your business?",
        paragraphs: [
          "If you would like me to run that check on your site, [book a free SEO audit](/contact) and I will look at which of your pages AI tools can read, what they say about your business, and what to fix first. If you prefer to message first, [message me on WhatsApp](https://wa.me/923714972789). I reply to every message myself.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-vs-google-search",
    image: "/images/blog/blog-ai-search-vs-google-search.jpg",
    title: "AI Search vs Google Search: How SEO Is Changing for Businesses",
    titleHighlight: "How SEO Is Changing for Businesses",
    excerpt:
      "I still use Google search every day. I also ask ChatGPT questions I would once have typed into Google. Most people I know do both now, without thinking about it.",
    publishedAt: "2026-11-22",
    readingMinutes: 8,
    tags: ["AI Search", "SEO", "Google"],
    category: "SEO",
    sample: false,
    metaTitle: "AI Search vs Google Search: How SEO Is Changing for Businesses",
    metaDescription:
      "AI search vs Google search: how AI answers change what businesses must do to be found, cited and chosen — and what still works from classic SEO.",
    sections: [
      {
        heading: "Google search: you rank, the user chooses",
        paragraphs: [
          "I still use Google search every day. I also ask ChatGPT questions I would once have typed into Google. Most people I know do both now, without thinking about it. That is the shift this post is about. AI search vs Google search is not a contest with one winner. It is two different ways of finding things, and a business needs to be visible in both, because buyers now use both, often for the same decision.",
          "Google search gives you a list of links and lets you choose. AI search gives you an answer and chooses the sources for you.",
          "Classic Google search works like this. You type a few words. Google shows a list of links. You open a few tabs, read the pages yourself, and decide which business to trust. The business competes for a position on that list, because the clicks go to the top few links. The user does the judging.",
          "That model rewarded a clear set of skills. Technical health, so Google could find and read the pages. Content that matched the search. Links from other sites that vouched for the business. A fast page that worked on a phone. Those skills still matter, and anyone telling you classic SEO is dead is selling you something. Google has said that AI Overviews and AI Mode are rooted in its core search ranking systems. The pages that AI tools cite are, in most cases, pages that already rank well. If Google cannot find your page, no AI tool will quote it either.",
          "The weakness of classic search was always the work it put on the user. Ten links means ten decisions. A buyer comparing options had to open each site, read each pitch, and piece together the answer themselves. Most people did that for big decisions and skipped it for small ones. They clicked the first result that looked right and moved on.",
          "My [SEO audit guide](/blog/seo-audit-guide) walks through the classic checks in order, and the [SEO services](/services/seo) page covers the work that keeps those checks clean. None of that work has become useless. It has become the foundation for the next layer.",
        ],
      },
      {
        heading: "AI search: the model answers, the model chooses",
        paragraphs: [
          "AI search works differently. You ask a full question, in normal words. The tool reads several pages, puts the answer together, and shows it to you, with citations to the pages it used. ChatGPT search, Perplexity, Gemini, and Google's own AI Mode and AI Overviews all work this way now. The user still sees sources, but the tool has already done the choosing.",
          "That flips the model. With classic SEO, you ranked, and the user chose. With AI-generated answers, the model selects what information users see. A business can rank on page one and still not appear in the answer, if the AI judges another page clearer, more specific, or more trustworthy. And a business can appear in the answer without ranking first, if its page states the fact the AI needs in the clearest form.",
          "The numbers behind this are measured. A Pew Research Center study of nearly 69,000 real Google searches in March 2025 found that when an AI summary appeared, users clicked a traditional search result on just 8% of visits, compared with 15% when no summary was present. Only 1% of visits resulted in a click on a source cited inside the AI summary itself. Users were also more likely to end their browsing session entirely after reading an AI answer — 26% of the time, against 16% without a summary. The question gets answered, and the source may never see the visit.",
          "That is why AI search vs Google search matters for a business. It is not about which tool wins. It is about the fact that a growing share of buyers now get their answer before they ever reach a website, and the businesses that get mentioned in that answer are the ones that get the call.",
        ],
      },
      {
        heading: "How the two searches handle a real question",
        paragraphs: [
          "Take a buyer who needs a service and is comparing options. In classic Google search, they type a short phrase, scan the list, and open three or four sites. They compare the sites themselves. The business with the clearest homepage, the best reviews, and the easiest contact step usually wins the click, and then the enquiry.",
          "In AI search, the same buyer asks a full question: what they need, what matters to them, what they want to avoid, and what their situation is. The AI splits that question into several smaller searches and runs them together. It reads the pages it finds, compares them, and writes an answer that names two or three options and says why each one fits. The buyer reads that answer and contacts one of the named businesses directly. The other sites never get a visit.",
        ],
      },
      {
        heading: "What stays the same",
        paragraphs: [
          "A lot stays the same, and it is worth saying plainly, because the noise in this space makes people throw away work that still counts.",
          "Crawlability comes first. If a search engine cannot reach a page, or cannot read it because it is hidden behind heavy JavaScript, that page will not rank and will not be cited. Plain HTML, a clean sitemap, and a robots file that blocks nothing it should not — those are still the first checks. My [technical SEO checklist](/blog/technical-seo-checklist-for-websites) covers them in order.",
          "Content that answers the search is what gets quoted. The difference is that the search is now often a full question, not a short phrase. So the content has to cover the pieces of that question, not just the head phrase. A page that answers the whole question is the page the AI quotes. A page that answers half of it gets skipped for one that answers all of it.",
          "Trust still decides the close calls — real experience, real reviews, and a site that looks like a real business. The [AI SEO](/blog/ai-seo-2027) post goes deeper on what is verifiably known about this shift and what is still only a signal to watch.",
          "Speed and phones matter just as much. Most searches happen on a phone, and a page that loads slowly or jumps around while it loads loses the visitor whether they arrived from a list of links or from an AI citation. The experience check has not changed. Only the route the visitor took to reach you has.",
        ],
      },
      {
        heading: "What changes, and what to do about it",
        paragraphs: [
          "The first change is the goal. Classic SEO aimed at a ranking and a click. AI search adds a second goal: be cited, and be recommended. A ranking that never becomes a citation is worth less than it was. So I now check both. Does the page rank? And when I ask the AI tools the question myself, does the business appear in the answer? If the first is yes and the second is no, the page needs clearer facts, not more keywords.",
          "The second change is the question itself. People ask longer questions now, with more detail. AI Mode queries are longer than classic searches (about three times longer on average, according to Google). That means the keyword plan has to cover the long questions too, not just the short phrases. My post on [keyword research that brings customers](/blog/keyword-research-that-brings-customers) covers how to find those questions in the words buyers actually use.",
          "The third change is measurement. Search Console now reports impressions in AI Overviews and AI Mode, but not the answer text or which competitors were cited. Rank trackers tell you where you sit in a list. They do not tell you whether the AI recommended you. So the measurement has to include asking the tools directly, once a month, with the questions your buyers ask, and writing down who appears. It is manual work, and it is the only honest measure right now.",
        ],
      },
      {
        heading: "What to keep doing, and what to add",
        paragraphs: [
          "So I keep doing the classic work: a crawlable, fast site that works on a phone, pages that answer real searches, links from real sites, and business details that are accurate everywhere.",
          "What I add is the second test: clear facts near the top of each page, so an AI can quote them; pages that answer the full question, not just the short phrase; and a monthly check where I ask the AI tools the questions buyers actually ask and record who gets cited and who gets recommended.",
          "That is not two separate strategies. It is one strategy with a second test. The pages that pass the classic test and the AI test are the same pages: clear, specific, honest, and easy to read. The pages that fail either test are also the same pages: vague, generic, slow, or hard to find.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: Is Google search going away?",
          "A: No. People still use Google search every day, and classic results still bring a large share of clicks for many businesses. AI search is growing alongside it, not replacing it overnight. A business needs to be visible in both, because buyers use both.",
          "Q: Should I stop doing classic SEO and do AI SEO instead?",
          "A: No — AI SEO builds on classic SEO, because the pages that get cited are usually pages that already rank. Stopping classic SEO to chase AI visibility is like removing the foundation to paint the roof.",
          "Q: Why does my competitor appear in AI answers when I rank higher?",
          "A: Because ranking and being cited are different problems now. The AI picks the page that states the fact most clearly and with the best evidence, not always the page in the top position. If your page is vague where theirs is specific, theirs gets quoted.",
          "Q: How do I check what AI search says about my business?",
          "A: Ask the tools yourself. Once a month, ask ChatGPT, Perplexity, Gemini and AI Mode the questions your buyers actually ask, and record who gets cited and who gets recommended. Search Console shows impressions in AI features, but not the answer text or your competitors, so the manual check is the one that tells you the truth.",
        ],
      },
      {
        heading: "Want me to check how both searches see your business?",
        paragraphs: [
          "If you would like me to run that check on your site, [book a free SEO audit](/contact) and I will look at how you appear in classic results and in AI answers, and what to fix first. If you prefer to message first, [message me on WhatsApp](https://wa.me/923714972789). I reply to every message myself.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-small-businesses",
    image: "/images/blog/blog-ai-automation-small-businesses.jpg",
    title: "AI Automation for Small Business: How It Can Save Time and Operating Costs",
    titleHighlight: "How It Can Save Time and Operating Costs",
    excerpt:
      "Every small business I know has the same problem. The owner spends hours each week on work that has to be done, that nobody will pay extra for, and that pulls them away from the wo…",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["AI Automation", "Small Business", "AI"],
    category: "SEO",
    sample: false,
    metaTitle: "AI Automation for Small Business: How It Can Save Time and Operating Costs",
    metaDescription:
      "AI automation for small business: the repetitive work worth automating first, how to start with one task, and the mistakes that waste the most time.",
    sections: [
      {
        heading: "What AI automation actually is",
        paragraphs: [
          "Every small business I know has the same problem. The owner spends hours each week on work that has to be done, that nobody will pay extra for, and that pulls them away from the work that actually earns money. Answering the same questions. Chasing the same follow-ups. Copying details from one place to another. Sorting emails. Booking appointments. Sending invoices and reminders. None of it is hard. All of it adds up.",
          "AI automation for small business is the work of handing those repetitive jobs to a system that does them the same way every time, without getting tired, forgetting, or going on holiday. That is what I look for in AI automation tools for small teams: something small enough to set up in an afternoon and steady enough to run every day. I use the same test for AI automation for freelance marketers, where one person is doing the work of a whole team. I'm not automating people out of a job. I'm handing the repetitive jobs to a system so the people you have spend their hours on customers — the work a system can't do.",
          "Automation on its own is a set of rules: when this happens, do that. A form fill sends an email. A new order creates an invoice. That kind of automation has existed for years, and it works well for jobs that never change.",
          "AI automation adds judgement to those rules. Instead of following a fixed script, the system reads the message, works out what it means, and decides what to do next. An AI chatbot reads a customer question and answers it from your real information, instead of picking from a list of canned replies. An AI tool reads an incoming email, works out whether it is a new enquiry, a support question, or a supplier invoice, and routes it to the right place. An AI draft takes a rough set of notes and turns them into a first version a human then checks and sends. The same idea sits behind AI tools to automate social media posting: the system drafts the post from your notes, and a human checks it before it goes out. That is also how to automate content scheduling with AI: one queue of posts, checked by a human, before you add anything else.",
          "The difference matters because most small business work is not perfectly regular. Customers ask the same question in ten different ways. Enquiries arrive with missing details. A fixed rule breaks on the eleventh variation. An AI system handles the variation and hands the genuinely unusual cases to a human. That is the point: the system does the routine work, and the human does the work that needs a human. If you want to know how to start AI automation in marketing, this is where I would begin: one repetitive job, one system, and a human checking the result. It is the same starting point I suggest for AI marketing automation for startups, where a small team needs the system to carry the routine work. My [AI automation services](/services/ai-automation) cover this work, and my [process](/process) shows how I would start it with you.",
        ],
      },
      {
        heading: "The work worth automating first",
        paragraphs: [
          "I start with the jobs that happen often, follow a pattern, and are easy to fix if they go wrong. For most small businesses that's customer questions first, then follow-up, then admin. If a job happens daily, follows the same steps each time, and a wrong answer can be fixed with a quick message, it is a good first automation. If a job happens once a month, changes every time, and a mistake costs a customer, leave it alone for now. That test is also how I judge AI automation for lead nurturing small business: the follow-up steps are the same every time, so the system can send them, and the human steps in when a lead answers. I use the same thinking for AI automation for lead scoring: the system ranks enquiries by how they behave, and the person decides who gets the call first.",
          "Customer questions come first. Most support messages are a small number of questions asked over and over: opening hours, delivery times, how to book, what a service includes, where an order stands. An AI chatbot trained on your real answers can handle those at any hour, and pass the rest to a person. The test is simple: if a human would give the same answer nine times out of ten, a system can give it too, and the human can spend their time on the tenth question, which is the one that actually needs them. The same test covers AI automation for SEO tasks. AI automation for keyword research is one of them: the system pulls the list and sorts it the same way every week, and a human reads it before anything is published.",
          "Follow-up comes next. A new enquiry that gets no reply can go to a competitor. A quote that is never followed up is money left on the table. Automation can send the first reply at once, remind the owner when a quote has sat unanswered, and send a polite check-in after a few days. The owner still makes the call. The system makes sure the call is not forgotten. My post on [why a website brings no customers](/blog/why-website-not-ranking) touches the same leak from the website side — the enquiry arrives, and then nothing happens. I see the same gap in AI automation for customer follow up, and in AI automation for email follow up sequences: the system sends the first reply and the reminder, and the owner still makes the call.",
          "Admin comes after that. Copying details between systems, creating invoices from orders, logging appointments, sorting email into folders, drafting the first version of a reply. None of this is visible to customers, which is why it gets ignored, and all of it eats hours. The hours usually show up first — admin was the hidden cost all along — and the money follows once the owner spends those hours on customers. The same hours come back with AI automation for reporting and analytics: the numbers are gathered and laid out the same way every week, and the owner reads them instead of building them. I would say the same about AI automation for ad campaign management, where the system watches the same numbers every day and the owner still decides what to change.",
        ],
      },
      {
        heading: "How to start with one task",
        paragraphs: [
          "Pick one job. Not five. One. The job that annoys you most, or the one that eats the most hours, or the one that costs you the most missed enquiries. Write down, in plain words, what happens now: who does it, what triggers it, what the steps are, and what a good result looks like. If you cannot write that down, the job is not ready to automate, because the system will only do what you can describe. That written-down job is also the answer to how to automate repetitive marketing tasks: once the steps are on paper, I can see which ones a system can take and which ones need a person. The same written-down steps are where AI automation for content creation for small teams starts: the system drafts from your notes, and the person who knows the customers judges the words.",
          "Then build the smallest version that works. A chatbot that answers five questions well is worth more than one that answers fifty badly. A follow-up that sends one reminder on time is worth more than a ten-step sequence that nobody maintains. Run it for a few weeks and watch what actually happens. Which questions does it answer well? Which does it get wrong? Where do people still ask for a human? Fix those, then add the next job. That slow build is what the best AI automation tools for small teams examples have in common. It is also how I judge the best AI tools to automate marketing workflows: one job done well first, then the next, and nothing the owner cannot run themselves.",
          "Keep a human in the loop. Every automated message should have a clear way to reach a person. Every AI draft should be checked before it goes out. Every automated decision that affects a customer should be easy to undo. The businesses that lose trust with automation are not the ones that use it. They are the ones that hide the human behind it, so a customer who needs help cannot find one.",
        ],
      },
      {
        heading: "The mistakes that waste the most time",
        paragraphs: [
          "The biggest mistake is automating a broken process. If your follow-up is already messy — quotes sent late, enquiries answered by whoever happens to see them, no record of who was contacted when — automation will make the mess faster, not better. Fix the process first, on paper, with a human doing it properly for a week. Then automate the fixed version. My [digital growth strategy](/blog/digital-growth-strategy-small-business) post makes the same point at the strategy level: the foundation comes before the tools.",
          "The second mistake is starting with too much. A twelve-tool setup that nobody understands will be abandoned within a month. A single automation that works every day will still be running in a year. Start small, prove the value, then add the next piece — I've seen it happen.",
          "The third mistake is automating the wrong work. The first thing a business automates should be the work customers never see and the owner hates doing — admin, sorting, copying, chasing. The last thing to automate is the conversation with a customer who is unhappy, confused, or about to spend a serious amount of money. Those conversations need a person. A chatbot that tries to handle an angry customer makes the customer angrier. A person who handles it well keeps the customer.",
          "The fourth mistake is trusting the AI output without checking it. AI tools are confident even when they are wrong. They will invent a detail, quote a policy you do not have, or answer a question with information from a different business. Every automated answer needs to be checked against your real information, and every draft needs a human read before it goes out. The cost of one wrong answer to a real customer is higher than the time the automation saved.",
        ],
      },
      {
        heading: "What AI automation cannot do",
        paragraphs: [
          "It can't decide what your business stands for, or build trust with a customer who's been let down, or do the creative work of understanding what a buyer worries about before they buy.",
          "What it can do is clear the routine work out of the way, so the owner has time for those things. That is the honest promise. Not a business that runs itself. A business where the owner spends their hours on customers and quality, instead of on copying details between systems and answering the same five questions for the tenth time this week.",
          "If you run a small business and your week is full of work that a system could do, the question is not whether AI automation works. The question is which job to hand over first, and how to do it without losing the human touch that makes your business yours. That is the test I use for AI tools to save time in marketing: if a tool gives the owner their hours back without losing that touch, it earns its place. It is also what AI automation for small business marketing 2026 comes down to for me: the tools change every year, and the work that matters stays the same.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: What should a small business automate first?",
          "A: The job that happens often, follows a pattern, and is easy to fix if it goes wrong. For most small businesses that is customer questions, follow-up on enquiries, or admin like invoicing and appointment reminders. Start with one, prove it works, then add the next.",
          "Q: Will AI automation replace my staff?",
          "A: No, if it is done well. I'm handing the repetitive jobs to a system, not taking people out of the business. The staff you have spend their hours on customers and on work that needs judgement, instead of on copying details and answering the same questions. A business that automates well usually needs its people more, not less, because it has more customers to look after.",
          "Q: How do I know if an automation is working?",
          "A: Measure the hours. Track how long the job took before automation and how long it takes after, including the time spent checking and fixing the system's work. If the hours came back and the quality held, it works. If the hours came back but customers complain, it does not.",
          "Q: What if the AI gives a customer a wrong answer?",
          "A: That will happen, which is why every automated answer needs to come from your real information and every system needs a clear way to reach a human. Check the answers regularly, fix the source when one is wrong, and keep the human visible. One wrong answer handled quickly costs less than a customer who cannot reach anyone at all.",
        ],
      },
      {
        heading: "Want me to find your first automation?",
        paragraphs: [
          "If you would like me to look at how your business spends its week and find the first job worth automating, [book a free automation review](/contact) and I will go through it with you — we look at the work around your site, not just the site itself. If you prefer to message first, [message me on WhatsApp](https://wa.me/923714972789). I reply to every message myself.",
        ],
      },
    ],
  },
  {
    slug: "digital-growth-strategy-small-business",
    image: "/images/blog/blog-digital-growth-strategy-small-business.jpg",
    title: "The Complete Digital Growth Strategy for Small Business: SEO, Ads, Website & Automation",
    titleHighlight: "SEO, Ads, Website & Automation",
    excerpt:
      "The businesses I look at don't usually have a growth problem. They have a pieces problem — a website, some ads, a social page, a bit of SEO, and none of it connects.",
    publishedAt: "2026-11-22",
    readingMinutes: 9,
    tags: ["Digital Marketing", "SEO", "Strategy"],
    category: "SEO",
    sample: false,
    metaTitle: "The Complete Digital Growth Strategy for Small Business: SEO, Ads, Website & Automation",
    metaDescription:
      "A digital growth strategy for small business, in one plan: SEO, ads, a website that converts, and automation that follows up while you work.",
    sections: [
      {
        heading: "Start with one goal and one customer",
        paragraphs: [
          "The businesses I look at don't usually have a growth problem. They have a pieces problem — a website, some ads, a social page, a bit of SEO, and none of it connects. The ads send people to a page that does not convert. The SEO brings visitors who never enquire. The follow-up never happens, because nobody owns it. Each piece works on its own, and the business as a whole stays still.",
          "A digital growth strategy for small business is the plan that connects those pieces into one system. It says what each channel is for, how they hand work to each other, and what happens after a visitor arrives. I run it as a sequence: foundation first, then visibility, then trust, then conversion. Skip a step and the later steps waste money. Get the order right and each piece makes the next one stronger.",
          "A strategy starts with a decision, not a tool. What is the one result you want in the next few months? More enquiries, more bookings, more online orders, more repeat customers? Pick one. A business that tries to grow everything at once grows nothing, because every channel gets a little effort and none gets enough.",
          "Then describe the customer in plain words. Who are they? What do they search for when they need what you sell? What worries them before they buy? What do they need to see before they trust you? If you cannot answer those questions, no channel will fix it, because every channel will aim at the wrong person. I ask these questions before I touch a website, because the answers decide which pages to build, which searches to target, and which ads to run.",
          "I set one measure that tells me whether it is working. Not sessions, not impressions, not followers. Qualified enquiries: calls, form fills, messages, and bookings from people who actually want to buy. That is the number I judge the strategy by. Everything else is a step toward it.",
        ],
      },
      {
        heading: "Fix the foundation before you spend on visibility",
        paragraphs: [
          "The foundation is the website, the contact process, and the tracking. If any of those is broken, visibility work wastes money, because the visitors it brings will leave without enquiring.",
          "Open your own website on your own phone, on mobile data. Does it load quickly? Does the main content appear without jumping around? Can you tap the phone number? Is there one clear next step near the top — call, message, or a short form — and is it repeated at the bottom? If the only way to reach you is a form buried at the bottom of a long page, most visitors will never get there. My post on [why a website brings no customers](/blog/why-website-not-ranking) walks through the leaks I find most often, and most of them are in the foundation, not in the marketing.",
          "Test the form yourself, from your phone, in a private browser window. Fill it in with a real message and a real number. Did the email arrive? Did it arrive in the inbox or the spam folder? Did anyone get a notification? A form that shows \"thank you\" while the message goes nowhere is the most expensive leak a small business can have, because the customer did everything right and you never knew they existed.",
          "Set up tracking before you run a single ad. Know which source each enquiry came from, and what happened to it afterwards. Without that, you cannot tell whether the ads work, whether the SEO works, or whether the enquiries are coming from somewhere you forgot about entirely. A [website that is built to convert](/services/web-development) starts with those basics, and the [process](/process) I follow starts there too.",
        ],
      },
      {
        heading: "Visibility: SEO for the long term, ads for speed",
        paragraphs: [
          "Visibility has two jobs, and they run on different clocks. SEO builds long-term visibility. It is slower, because it takes time for pages to rank, but the traffic keeps arriving without a per-click bill once it does. Ads bring speed. They put you in front of buyers now, while the SEO work is still building.",
          "SEO starts with the pages that matter. A technically healthy site, pages that answer real questions, and credible mentions from other sites. That is the whole of it, and my [SEO audit guide](/blog/seo-audit-guide) walks through the checks in order. The keyword work behind it is covered in my [keyword research](/services/keyword-research) service and in the post on [keyword research that brings customers](/blog/keyword-research-that-brings-customers). The rule is simple: build pages for the searches buyers actually type, not for the searches you wish they typed. Read the queries in Search Console. They will tell you the truth about who is arriving and why.",
          "Ads start with one channel, not three. Google Ads captures people who are already searching for what you sell, which makes it the fastest route to enquiries for most service businesses. My [Google Ads services](/services/google-ads) cover that work, and my post on [Google Ads vs Meta Ads](/blog/google-ads-vs-meta-ads) compares the two. Meta Ads builds awareness and generates leads from people who were not searching yet, which suits businesses with a visual product or a strong offer. My [Meta Ads services](/services/meta-ads) cover that side. I pick the channel that matches where your buyers are, test it small, and scale it only when the enquiries justify it. Running both at once, badly, wastes the money that one good channel would have used well.",
        ],
      },
      {
        heading: "Trust: give people reasons to believe you",
        paragraphs: [
          "Visibility brings strangers. Trust turns strangers into enquiries. A stranger choosing between two businesses picks the one other people have vouched for, the one that looks like a real business still operating, and the one that answers their questions before they have to ask.",
          "Real reviews are the strongest trust signal a small business has. I ask recent happy customers directly, make it one tap, and never pay for reviews — the rules treat paid or traded reviews as a violation, and a suspended profile costs far more than a slow start. Real photos of real work beat stock images every time. Current hours, services filled in, and a phone number that matches the one on your website all tell a careful buyer that the business is alive and paying attention.",
        ],
      },
      {
        heading: "Conversion: make the next step easy",
        paragraphs: [
          "Conversion is the part most strategies skip, because it is not glamorous. It is the work of making the next step so easy that a visitor who has decided to enquire can do it in seconds, on a phone, without thinking.",
          "One action, not three competing ones. Call, message, or a short form — pick the one your buyers prefer, put it near the top, and repeat it at the bottom. A page that offers five different ways to contact you, in five different places, is a page that asks the visitor to decide how to buy, and most visitors will not decide. They will leave.",
          "Message match matters here too. The page should say the same thing as the search or the ad that brought the visitor, in the same words, above the fold. What you do, for whom, and what happens next. If an ad promises a free quote and the page never mentions one, the visitor leaves. If the search was for a specific service and the page talks about the business in general, the visitor leaves. The fix is not a redesign. It is a page that answers the search that brought the visitor.",
        ],
      },
      {
        heading: "Automation: follow up while you work",
        paragraphs: [
          "Once the foundation, visibility, trust and conversion are working, automation is what keeps the system from leaking. A new enquiry that gets no reply can go to a competitor. A quote that is never followed up is money left on the table. Automation sends the first reply at once, reminds the owner when a quote has sat unanswered, and sends a polite check-in after a few days. The owner still makes the call. The system makes sure the call is not forgotten.",
          "My post on [AI automation for small business](/blog/ai-automation-small-businesses) covers this in detail, and the [AI automation services](/services/ai-automation) page covers the work itself. The rule is the same as everywhere else in this strategy: automate a process that already works, with a human doing it properly first. Automate a messy process and you just get the mess done faster. Fix it on paper, run it by hand for a week, then automate the fixed version.",
        ],
      },
      {
        heading: "A 90-day order to run it in",
        paragraphs: [
          "Do not try to do all of this at once. Run it in order, over about ninety days.",
          "Days 1 to 30 are the foundation. Pick the goal and the customer. Fix the website, the contact process, and the form. Set up tracking. Write the service pages that answer real questions. Nothing else starts until those are done.",
          "Days 31 to 60 are visibility. Publish the pages the keyword work demands. Test one ad channel, small, and watch the enquiries, not the clicks. Ask your recent customers for reviews. Fix the trust gaps the audit found.",
          "Days 61 to 90 are retention and scale. Double down on the channel that brought the enquiries and add the next channel only once the first one holds. Set the monthly review rhythm here too: one hour a month to read the enquiries, check what each channel cost per enquiry, and fix the weakest step before spending more. Retention gets the same attention as new business — a past customer who comes back costs far less to win than a stranger.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Q: How long does a digital growth strategy take to work?",
          "A: Ads can bring early signals within weeks. SEO takes months to show results, because pages need time to rank. The foundation fixes — the form, the contact step, the page that answers the search — can bring enquiries quickly, because they fix leaks that were already losing customers. Judge the strategy on enquiries over ninety days, not on sessions in the first week.",
          "Q: Should a small business do SEO or ads first?",
          "A: Do the foundation first, then both, in the right proportions. Ads bring speed while SEO builds. A business that only runs ads pays for every visitor forever. A business that only does SEO waits months for enquiries. Together, the ads fund the present and the SEO builds the future.",
          "Q: How many channels should a small business be on?",
          "A: Two or three, done well. Not seven. Pick the channels where your buyers actually are, and the ones your team can maintain. A business that posts everywhere, badly, looks worse than a business that is present in two places, properly.",
          "Q: What is the most common mistake in a digital growth strategy?",
          "A: Spending on visibility before fixing the foundation. Ads on a broken site waste money. SEO that brings visitors to a page with no clear next step wastes the traffic. Fix the site, the form, and the follow-up first, then spend on being found.",
        ],
      },
      {
        heading: "Want me to build this plan for your business?",
        paragraphs: [
          "If you would like me to run through this strategy against your business — foundation, visibility, trust, conversion, and the first automation — [book a free SEO audit](/contact) and I will tell you plainly where to start and what to do first. If you prefer to message first, [message me on WhatsApp](https://wa.me/923714972789). I reply to every message myself.",
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
