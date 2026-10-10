"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
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
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill border border-line text-xl leading-none text-pine"
                >
                  +
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
