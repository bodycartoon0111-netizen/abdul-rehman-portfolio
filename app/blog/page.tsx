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
    absolute: "SEO for Beginners | Digital Marketing Blog Pakistan",
  },
  description:
    "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog Pakistan — learn SEO from scratch, free.",
  alternates: { canonical: "/blog" },
  openGraph: {
    siteName: BRAND_NAME,
    title: "SEO for Beginners | Digital Marketing Blog Pakistan",
    description:
      "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog Pakistan — learn SEO from scratch, free.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abdul Rehman - Freelance SEO Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Beginners | Digital Marketing Blog Pakistan",
    description: "SEO for Beginners: practical SEO tips and digital marketing notes from my digital marketing blog Pakistan — learn SEO from scratch, free.",
    images: [
      {
        url: absoluteUrl("/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "Abdul Rehman - Freelance SEO Consultant",
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
          <span className="bg-gradient-to-r from-pine-bright via-pine to-gold bg-clip-text text-transparent">SEO for Beginners | Digital Marketing Blog Pakistan</span> — Notes from the Work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Notes from the work — practical write-ups on SEO, marketing, and automation from real project experience in Pakistan. These are the checklists and mental models I actually use on client projects, written for business owners who want to understand the work, not just buy it. Start with the{" "}
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
          </Link>
          {" "}behind the notes.
        </p>
      <p className="mt-5 text-lg leading-relaxed text-muted">I write this as SEO for beginners, in the plainest way I can: if you are wondering how to learn digital marketing, or how to start learning SEO, start here. These are my SEO tips for beginners and my digital marketing tips for beginners — digital marketing for beginners, written in plain English — so you can learn SEO for free from real client work: the SEO basics for beginners, and how to learn SEO from scratch, one check at a time.</p> <p className="mt-5 text-lg leading-relaxed text-muted">For a small business, the same notes work as SEO tips for small business and digital marketing tips for small business: this is an SEO blog for small business and an SEO for small business blog, with SEO tips for new websites and SEO tips for new bloggers, plus content marketing tips for beginners for the pages you actually publish.</p> <p className="mt-5 text-lg leading-relaxed text-muted">I also keep SEO notes and digital marketing notes here, alongside AI automation notes, so this is an SEO and AI automation blog and an AI automation blog in one place — an SEO and digital marketing blog with SEO case studies blog entries, AI automation tips for beginners, and notes from my freelance SEO blog work. If you are looking for the best SEO blog to read, or the best digital marketing blogs to follow, start with the case studies and see whether the work matches the claim.</p> <p className="mt-5 text-lg leading-relaxed text-muted">If you want to know how to start a digital marketing blog of your own, I have written about that too: this is an SEO blog for beginners and a digital marketing blog for beginners, built the same way I would build one for a client — one useful post at a time, with the notes I wish I had read first.</p> </header>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink">Start Here</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          New here? Start with the{" "}
          <Link
            href="/blog/technical-seo-checklist-2026"
            className="font-semibold text-ink underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-900"
          >
            technical SEO checklist
          </Link>
          {" "}— the fundamentals that still decide rankings.
        </p>
      <p className="mt-5 text-lg leading-relaxed text-muted">This is a digital marketing blog Pakistan readers can use straight away, and an SEO blog Pakistan owners can follow without jargon: my SEO notes Pakistan, digital marketing notes Pakistan and AI automation notes Pakistan sit alongside SEO tips Pakistan and digital marketing tips Pakistan, written from Lahore for Pakistani websites. If you want to learn SEO from Pakistan blog posts that use local examples, or learn how to learn digital marketing in Pakistan, start with the SEO blog Lahore posts and the SEO tips for Pakistani websites in them.</p> <p className="mt-5 text-lg leading-relaxed text-muted">For small businesses here, this is an SEO blog for small business Pakistan readers, an AI automation blog Pakistan owners can follow, and a freelance SEO blog Pakistan writers can learn from: the SEO case studies blog Pakistan entries show real work, and the digital marketing blog for beginners Pakistan posts keep it simple. I will not call it the best digital marketing blog Pakistan has, or the best SEO blog in Pakistan — read the work and decide — but it is a marketing blog Pakistan Abdul Rehman writes himself, and an SEO blog for beginners Pakistan readers can start with today.</p> </section>

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
