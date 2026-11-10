"use client";

import Link from "next/link";
import {
  BRAND_NAME,
  BRAND_EMAIL,
  BRAND_WHATSAPP,
  BRAND_WHATSAPP_LINK,
  SOCIAL_LINKEDIN,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_X,
  SOCIAL_PINTEREST,
} from "@/lib/seo";
import { trackEvent, trackOutboundClick, trackWhatsAppClick } from "@/lib/analytics";

/** All eleven services — slugs must match the /services/[slug] pages. */
const SERVICES = [
  { label: "SEO", slug: "seo" },
  { label: "Local SEO", slug: "local-seo" },
  { label: "Google Ads", slug: "google-ads" },
  { label: "Meta Ads", slug: "meta-ads" },
  { label: "Web Development", slug: "web-development" },
  { label: "App Development", slug: "app-development" },
  { label: "Custom Software", slug: "custom-software" },
  { label: "WordPress", slug: "wordpress" },
  { label: "Shopify", slug: "shopify" },
  { label: "Performance Marketing", slug: "performance-marketing" },
  { label: "AI Automation", slug: "ai-automation" },
] as const;

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A3.99 3.99 0 1 1 16 12a3.99 3.99 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);
const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">    
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
  );
const PinterestIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.627 0 11.983-5.367 11.983-12.013C24 5.367 18.643 0 12.017 0z" />
    </svg>
  );

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_LINKEDIN, Icon: LinkedInIcon },
  { label: "Facebook", href: SOCIAL_FACEBOOK, Icon: FacebookIcon },
  { label: "Instagram", href: SOCIAL_INSTAGRAM, Icon: InstagramIcon },
  { label: "X", href: SOCIAL_X, Icon: XIcon },
  { label: "Pinterest", href: SOCIAL_PINTEREST, Icon: PinterestIcon },
] as const;

const linkClass =
  "text-sm text-muted transition-colors hover:text-pine";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND_NAME} — home`}>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-pill bg-pine text-sm font-extrabold tracking-tight text-white"
              >
                AR
              </span>
              <span className="text-lg font-extrabold tracking-tight">{BRAND_NAME}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Growth systems for ambitious businesses — search visibility,
              high-performing websites, and automation that compounds.
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-muted">
            
            <p className="font-semibold text-ink">Abdul Rehman — Digital Growth Services</p>
            <p>Lahore, Punjab, Pakistan</p>
            <p><a className="font-semibold text-ink transition-colors hover:text-pine" href="tel:+923714972789">+92 371 4972789</a></p>
            <p><a className="font-semibold text-ink transition-colors hover:text-pine" href="mailto:contact@abdulrehmantech.com">contact@abdulrehmantech.com</a></p>
            <p>Mon–Sat, 9:00 AM – 6:00 PM PKT</p></address>
          </div>

          {/* Services sitemap */}
          <nav aria-label="Services">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              Services
            </h2>
            <ul className="mt-5 grid gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={linkClass}
                    onClick={() =>
                      trackEvent("service_select", { service: service.slug })
                    }
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company sitemap */}
          <nav aria-label="About Abdul Rehman">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              About Abdul Rehman
            </h2>
            <ul className="mt-5 grid gap-2.5">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              Get in touch
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${BRAND_EMAIL}`}
                  className="font-semibold text-ink transition-colors hover:text-pine"
                >
                  {BRAND_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={BRAND_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackOutboundClick(BRAND_WHATSAPP_LINK);
                    trackWhatsAppClick(BRAND_WHATSAPP_LINK);
                  }}
                  className="font-semibold text-ink transition-colors hover:text-pine"
                >
                  {BRAND_WHATSAPP}
                </a>
                <span className="block text-xs text-muted">WhatsApp — fastest reply</span>
              </li>
              <li className="pt-1">
                <ul className="flex gap-2.5" aria-label="Social profiles">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${BRAND_NAME} on ${label}`}
                        onClick={() => trackOutboundClick(href)}
                        className="flex h-10 w-10 items-center justify-center rounded-pill border border-line text-muted transition-colors hover:border-pine/40 hover:bg-pine hover:text-white"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
