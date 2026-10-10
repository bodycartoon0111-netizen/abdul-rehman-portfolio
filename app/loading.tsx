/**
 * Route-level loading state — on-brand light shimmer placeholder.
 */
export default function Loading() {
  return (
    <main className="container-x section-pad" aria-busy="true" aria-label="Loading">
      <div className="mx-auto max-w-3xl">
        <div className="h-4 w-40 animate-pulse rounded-pill bg-line" />
        <div className="mt-6 h-12 w-3/4 animate-pulse rounded-lg bg-line" />
        <div className="mt-3 h-12 w-1/2 animate-pulse rounded-lg bg-line" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-44 animate-pulse rounded-lg border border-line bg-surface"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
