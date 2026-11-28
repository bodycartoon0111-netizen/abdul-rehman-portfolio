import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { absoluteUrl, BRAND_NAME, buildBlogJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import CtaBand from "@/components/sections/CtaBand";
import BlogHub from "@/components/blog/BlogHub";

export const metadata: Metadata = {
  title: {
    absolute: "SEO for Beginners | Digital Marketing Blog",
  },
  description:
    "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog — learn SEO from scratch, free.",
  alternates: { canonical: "/blog" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "SEO for Beginners | Digital Marketing Blog",
    description:
      "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog — learn SEO from scratch, free.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abdul Rehman - Freelance SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Beginners | Digital Marketing Blog",
    description: "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog — learn SEO from scratch, free.",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Abdul Rehman - Freelance SEO Specialist",
      },
    ],
  },
};
export default function BlogPage() {
  return (

    <main className="mx-auto max-w-6xl px-6 py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={buildBlogJsonLd(blogPosts)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine">Blog</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-ink md:text-6xl">
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO for Beginners | Digital Marketing Blog</span> — Notes from the Work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Notes from the work — practical write-ups on SEO, marketing, and automation from real project experience. These are the checklists and mental models I actually use on client projects, written for business owners who want to understand the work, not just buy it. Start with the{" "}
          <Link
            href="/blog/technical-seo-checklist-for-websites"
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
          </Link>
          {" "}behind the notes.
          {" "}If you are learning how to grow a website from zero traffic, this is where I put what worked for me, including how to write blog posts that rank on Google and how to get your first 1000 website visitors without guessing.
          {" "}I learned most of this without a course, so if you want to know how to learn SEO without a course or how to improve Google rankings without ads, I share the SEO learning resources for beginners and the digital marketing learning roadmap I actually followed.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted">I write about the SEO and marketing work I actually do — mostly for small businesses, and mostly from what I have seen on real sites. Start with the checklist if you are new here, or pick the topic you are stuck on.
          {" "}You will find SEO tips that actually work for small websites and digital marketing ideas for small businesses here, the kind of thing I test on real sites before I write about it.
          {" "}That includes the SEO mistakes beginners make and how to fix them, content marketing ideas for small business blogs, and how to plan content that ranks and converts.
          {" "}I keep it plain: digital marketing explained simply for beginners, how to choose the right digital marketing channel, and how to rank a brand new website.
          {" "}I also cover the digital marketing skills to learn first, how to build an online presence from scratch, the SEO questions beginners ask, how to stay updated with SEO changes, and free ways to learn digital marketing online.
      </header>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink">Start Here</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          New here? Start with the{" "}
          <Link
            href="/blog/technical-seo-checklist-for-websites"
            className="font-semibold text-ink underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            technical SEO checklist
          </Link>
          {" "}— the fundamentals that still decide rankings.
        </p>
      </section>

      <BlogHub posts={blogPosts} />

      <div className="mt-20">
        <CtaBand
          title="Want this thinking applied to your business?"
          description="The blog is the theory — the work is the practice. Tell me what you're trying to grow."
        />
      </div>
    </main>
  );
}
