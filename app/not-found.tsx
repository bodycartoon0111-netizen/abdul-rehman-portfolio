import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * 404 — on-brand light treatment with clear next steps.
 */
export default function NotFound() {
  return (
    <main className="container-x section-pad">
      <div className="mx-auto max-w-xl text-center">
        <p className="display-1 text-pine/20" aria-hidden="true">
          404
        </p>
        <p className="eyebrow mt-2 justify-center">Page not found</p>
        <h1 className="h1 mt-4">This path leads nowhere</h1>
        <p className="mt-4 leading-relaxed text-muted">
          The page you&apos;re looking for was moved, renamed, or never
          existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" magnetic>
            Back to home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact me
          </Button>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
            <li>
              <Link href="/about" className="transition-colors hover:text-pine">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-pine">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="transition-colors hover:text-pine">
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-pine">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
