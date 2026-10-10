import { cn } from "@/lib/utils";

type BadgeTone = "mint" | "aqua" | "lav" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  mint: "bg-mint/60 text-pine-deep border-mint",
  aqua: "bg-aqua/50 text-pine-deep border-aqua",
  lav: "bg-lav/50 text-pine-deep border-lav",
  outline: "bg-transparent text-muted border-line",
};

export function Badge({ children, tone = "mint", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-bold tracking-wide uppercase",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
