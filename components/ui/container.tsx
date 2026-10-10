import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

/** Centered max-width content column. */
export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return <Tag className={cn("container-x", className)}>{children}</Tag>;
}
