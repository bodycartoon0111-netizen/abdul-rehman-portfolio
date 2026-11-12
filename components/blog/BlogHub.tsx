"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface BlogHubProps {
  posts: BlogPost[];
}

/** Featured post, topic filter and article grid for the blog hub. */
export default function BlogHub({ posts }: BlogHubProps) {
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
    [posts]
  );
  const [featured, ...rest] = sorted;

  const topics = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? rest : rest.filter((post) => post.category === active);
  const topicCount =
    active === "All"
      ? posts.length
      : posts.filter((post) => post.category === active).length;

  if (!featured) {
    return null;
  }

  return (
    <div>
      <article className="group mt-12 overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:bg-pine hover:border-pine hover:shadow-xl">
        <div className="h-1.5 bg-gradient-to-r from-pine-bright via-pine to-gold" />
        <Image
          src={featured.image ?? "/images/og-default.jpg"}
          alt={featured.title}
          width={1200}
          height={630}
          className="h-auto w-full"
        />
        <div className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted group-hover:text-white/85">
            <span className="rounded-full bg-pine px-2.5 py-1 font-semibold text-white group-hover:bg-white group-hover:text-pine">
              Featured
            </span>
            <time dateTime={featured.publishedAt}>
              {formatDate(featured.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{featured.readingMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>{featured.category}</span>
            {featured.sample && (
              <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
                Sample content
              </span>
            )}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink group-hover:text-white sm:text-4xl">
            <Link
              href={`/blog/${featured.slug}`}
              className="transition group-hover:underline"
            >
              {featured.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted group-hover:text-white/85">
            {featured.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-muted group-hover:bg-white/15 group-hover:text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-white"
          >
            Read the latest article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>

      <div
        className="mt-12 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter articles by topic"
      >
        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActive(topic)}
            aria-pressed={active === topic}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === topic
                ? "border-pine bg-pine text-white"
                : "border-line bg-white text-muted hover:border-pine hover:text-ink"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {active === "All"
          ? `${posts.length} articles — newest first`
          : `${topicCount} ${topicCount === 1 ? "article" : "articles"} in ${active}`}
      </p>

      {visible.length === 0 ? (
        <p className="mt-8 text-muted">No articles in this topic yet.</p>
      ) : (
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {visible.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:bg-pine hover:border-pine hover:shadow-xl"
            >
              <Image
                src={post.image ?? "/images/og-default.jpg"}
                alt={post.title}
                width={1200}
                height={630}
                className="h-auto w-full"
              />
              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted group-hover:text-white/85">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                  {post.sample && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
                      Sample content
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink group-hover:text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition group-hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-muted group-hover:text-white/85">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-muted group-hover:bg-white/15 group-hover:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-white"
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
