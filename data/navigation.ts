import type { NavItem } from "@/types";

/** Primary site navigation. Service/work children are generated from data files. */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO", href: "/services/seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "WordPress", href: "/services/wordpress" },
      { label: "Shopify", href: "/services/shopify" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "AI Automation", href: "/services/ai-automation" },
    ],
  },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "EcoFold Packaging", href: "/work/ecofold-packaging" },
      { label: "ZProperty", href: "/work/zproperty" },
      { label: "Calculadora Matemática", href: "/work/calculadora-matematica" },
      { label: "Avexent", href: "/work/avexent" },
      { label: "Digital Clause", href: "/work/digital-clause" },
      { label: "Thekedar", href: "/work/thekedar" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
