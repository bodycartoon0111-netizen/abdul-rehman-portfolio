import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getPostSlugs, getPostBySlug } from "@/data/blog";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  // Last-modified dates come from each page's data or its last edit, not
  // from "new Date()" on every build, so crawlers can trust lastmod.
  // 2026-10-08 is the site-launch date, kept as the fallback for pages
  // whose content has not changed since launch.
  const siteLastModified = new Date("2026-10-08");
  // Pages revised on 2026-11-09 (homepage title/description, LocalBusiness
  // schema, metadata and internal-link fixes).
  const modified20261109 = new Date("2026-11-09");
  // Data files last committed on 2026-10-10 (blog posts, project details).
  const modified20261010 = new Date("2026-10-10");

  const staticRoutes: {
    path: string;
    lastModified: Date;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }[] = [
    { path: "", lastModified: modified20261109, changeFrequency: "weekly", priority: 1 },
    { path: "/about", lastModified: modified20261109, changeFrequency: "monthly", priority: 0.7 },
    { path: "/services", lastModified: modified20261109, changeFrequency: "monthly", priority: 0.8 },
    { path: "/process", lastModified: new Date("2026-11-09"), changeFrequency: "monthly", priority: 0.7 },
    { path: "/work", lastModified: modified20261109, changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", lastModified: modified20261010, changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", lastModified: modified20261109, changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", lastModified: modified20261109, changeFrequency: "yearly", priority: 0.2 },
    { path: "/terms", lastModified: modified20261109, changeFrequency: "yearly", priority: 0.2 },
    { path: "/disclaimer", lastModified: modified20261109, changeFrequency: "yearly", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path || "/"}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Service pages: last edited 2026-11-09 with the service-details data.
  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}`,
      lastModified: modified20261109,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Work pages: project details were last committed on 2026-10-10.
  for (const p of projects) {
    entries.push({
      url: `${base}/work/${p.slug}`,
      lastModified: modified20261010,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Blog posts: each post's own published/updated date. Monthly while the
  // post is fresh, then yearly once it is older than 90 days.
  for (const slug of getPostSlugs()) {
    const post = getPostBySlug(slug);
    const published = post?.publishedAt
      ? new Date(post.publishedAt)
      : siteLastModified;
    const lastModified = post?.updatedAt
      ? new Date(post.updatedAt)
      : published;
    const ageMs = Date.now() - published.getTime();
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: ageMs > 90 * 86_400_000 ? "yearly" : "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
