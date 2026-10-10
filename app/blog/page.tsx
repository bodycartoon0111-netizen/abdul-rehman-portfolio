import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Blog — SEO, Marketing & Automation Notes | Abdul Rehman",
  },
  description:
    "Practical notes on SEO, paid marketing, web development, and AI automation — written from real project experience.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — SEO, Marketing & Automation Notes | Abdul Rehman",
    description:
      "Practical notes on SEO, paid marketing, web development, and AI automation — written from real project experience.",
    url: "/blog",
    type: "website",
  },
  keywords: [
    "SEO blog",
    "marketing tips",
    "web development articles",
    "AI automation guides",
  ],
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted">Blog</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Notes from the work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Practical write-ups on SEO, marketing, and automation — the checklists and mental
          models I actually use on client projects.
        </p>
      </header>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              {post.sample && (
                <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
                  Sample content
                </span>
              )}
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">
              <Link href={`/blog/${post.slug}`} className="transition group-hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink"
            >
              Read article <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <CtaBand
          title="Want this thinking applied to your business?"
          description="The blog is the theory — the work is the practice. Tell me what you're trying to grow."
        />
      </div>
    </main>
  );
}
