"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Index of the item open on first render. -1 = all closed. */
  defaultOpen?: number;
}

/**
 * Accessible accordion (FAQ). Keyboard-operable buttons with
 * aria-expanded / aria-controls, smooth height animation.
 * Expand/collapse is a CSS grid-template-rows transition
 * (.accordion-panel in globals.css) instead of framer-motion;
 * the panel stays mounted but is aria-hidden while closed.
 */
export function Accordion({ items, className, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line rounded-lg border border-line bg-surface", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={index}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-bold tracking-tight sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "accordion-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-pill border border-line text-xl leading-none text-pine",
                    open && "is-open",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              className={cn("accordion-panel", open && "is-open")}
              style={{
                opacity: open ? 1 : 0,
                transition:
                  "grid-template-rows 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div>
                <p className="px-6 pb-6 leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
