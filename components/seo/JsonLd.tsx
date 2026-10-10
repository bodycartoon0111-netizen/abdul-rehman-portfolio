interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD structured-data script tag.
 * Pass the output of the builders in `lib/seo.ts`.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
