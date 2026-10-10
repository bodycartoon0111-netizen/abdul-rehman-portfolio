import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Standard section header: overline eyebrow + display title + optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow", centered && "justify-center")}>{eyebrow}</p>
      <h2 className="h2 mt-4 text-balance">{title}</h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-muted text-pretty",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
