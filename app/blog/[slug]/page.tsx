import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs, blogPosts } from "@/data/blog";
import { absoluteUrl, buildBreadcrumbJsonLd, buildPersonJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
const CtaBand = dynamic(() => import("@/components/sections/CtaBand"));
function renderRichText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    if (href.startsWith("/")) {
      return (
        <Link key={i} href={href}>
          {label}
        </Link>
      );
    }
    return (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  });
}

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
  const ogImage = absoluteUrl(post.image ?? "/images/og-default.jpg");
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt, authors: ["Abdul Rehman"],
      images: [
        {
            url: ogImage,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: "Abdul Rehman - Freelance SEO Consultant",
        },
    ],
    }, 
      twitter: {
          card: "summary_large_image",
        title: post.metaTitle,
        description: post.metaDescription,
        images: [
          {
              url: ogImage,
            width: 1200,
            height: 630,
            alt: "Abdul Rehman - Freelance SEO Consultant",
          },
      ],
      },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

    const pageUrl = absoluteUrl(`/blog/${post.slug}`);

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2); const serviceHref = post.category === "AI Automation" ? "/services/ai-automation" : "/services/seo"; const serviceLabel = post.category === "AI Automation" ? "AI automation services" : "SEO services in Lahore";

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
    author: buildPersonJsonLd(),
    publisher: buildPersonJsonLd(),
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
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Blog</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
            {post.titleHighlight
          ? post.title.split(post.titleHighlight).map((part, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">
                    {post.titleHighlight}
                  </span>
                )}
                {part}
              </Fragment>
            ))
          : post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">{post.excerpt}</p><p className="mt-4 text-sm leading-relaxed text-neutral-700">Related service: <Link href={serviceHref} className="font-semibold text-neutral-900 underline">{serviceLabel}</Link></p>
          {post.sample && (
            <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Sample content — a placeholder article demonstrating the blog layout until real
              posts are published.
            </p>
          )}
        </header>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 800px"
          className="mt-8 w-full rounded-2xl"
          priority
        />
      )}

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
                <p key={i} className="mt-4 leading-relaxed text-neutral-700">{renderRichText(p)}</p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{renderRichText(b)}</li>
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
      <aside className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6"><p className="leading-relaxed text-neutral-700">Want help with this? <Link href={serviceHref} className="font-semibold text-neutral-900 underline">{serviceLabel}</Link> — or <Link href="/contact" className="font-semibold text-neutral-900 underline">book a free SEO audit</Link>.</p></aside></article>

      <section aria-labelledby="author-heading" className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6"><h2 id="author-heading" className="text-2xl font-bold tracking-tight text-neutral-900">About the author</h2><p className="mt-3 text-lg font-semibold text-neutral-900">Abdul Rehman</p><p className="text-sm text-neutral-600">SEO Specialist &amp; Full-Stack Web Developer</p><p className="mt-3 leading-relaxed text-neutral-700">Abdul Rehman is an SEO and digital marketing consultant in Lahore, Pakistan. One person doing SEO, Google &amp; Meta Ads, websites and AI automation.</p><Link href="/about" className="mt-4 inline-flex items-center gap-1 font-semibold text-neutral-900 underline underline-offset-4">More about Abdul Rehman</Link></section> {related.length > 0 && (
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
