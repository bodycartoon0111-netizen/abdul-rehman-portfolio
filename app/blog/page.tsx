import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "SEO & Digital Marketing Blog Pakistan | Abdul Rehman",
  },
  description:
    "Practical notes on SEO, paid marketing, web development and AI automation from real project experience in Pakistan — checklists and mental models that work.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "SEO & Digital Marketing Blog Pakistan | Abdul Rehman",
    description:
      "Practical notes on SEO, paid marketing, web development and AI automation from real project experience in Pakistan — checklists and mental models that work.",
    url: "/blog",
    type: "website",
  },
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
          Digital Marketing Blog Pakistan — Notes from the Work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Notes from the work — practical write-ups on SEO, marketing, and automation from
          real project experience in Pakistan. These are the checklists and mental models I
          actually use on client projects, written for business owners who want to understand
          the work, not just buy it. Start with the{" "}
          <Link
            href="/blog/technical-seo-checklist-2026"
            className="font-semibold text-ink underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            technical SEO checklist
          </Link>
          , or see the{" "}
          <Link
            href="/services"
            className="font-semibold text-ink underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            digital marketing services
          </Link>{" "}
          behind the notes.
        </p>
      </header>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink">Start Here</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          New here? Start with the{" "}
          <Link
            href="/blog/technical-seo-checklist-2026"
            className="font-semibold text-ink underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            technical SEO checklist
          </Link>{" "}
          — the fundamentals that still decide rankings.
        </p>
      </section>

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
