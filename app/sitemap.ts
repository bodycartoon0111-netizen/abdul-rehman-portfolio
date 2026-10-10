import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getPostSlugs, getPostBySlug } from "@/data/blog";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  // Use a fixed last-modified date (site launch). "new Date()" on every
  // build makes lastmod useless for crawlers.
  const siteLastModified = new Date("2026-10-08");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: siteLastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const p of projects) {
    entries.push({
      url: `${base}/work/${p.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const slug of getPostSlugs()) {
    const post = getPostBySlug(slug);
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: post?.updatedAt
        ? new Date(post.updatedAt)
        : post?.publishedAt
          ? new Date(post.publishedAt)
          : siteLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
