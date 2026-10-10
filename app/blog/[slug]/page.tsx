import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs, blogPosts } from "@/data/blog";
import { absoluteUrl, buildBreadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const base = siteUrl();
  const pageUrl = absoluteUrl(`/blog/${post.slug}`);

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": pageUrl,
    headline: post.title,
    description: post.metaDescription,
    url: pageUrl,
    image: absoluteUrl("/opengraph-image"),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: pageUrl,
    author: { "@type": "Person", name: "Abdul Rehman", url: base },
    publisher: { "@type": "Person", name: "Abdul Rehman", url: base },
  };

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="mt-8">
        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>By Abdul Rehman</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">{post.excerpt}</p>
          {post.sample && (
            <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Sample content — a placeholder article demonstrating the blog layout until real
              posts are published.
            </p>
          )}
        </header>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} aria-labelledby={section.heading.replace(/\W+/g, "-").toLowerCase()}>
              <h2
                id={section.heading.replace(/\W+/g, "-").toLowerCase()}
                className="text-2xl font-bold tracking-tight text-neutral-900"
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-neutral-700">{p}</p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="more-posts-heading" className="mt-16">
          <h2 id="more-posts-heading" className="text-2xl font-bold tracking-tight text-neutral-900">
            More notes
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-bold text-neutral-900">
                  <Link href={`/blog/${p.slug}`} className="transition hover:underline">{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="mt-16">
        <CtaBand />
      </div>
    </main>
  );
}
