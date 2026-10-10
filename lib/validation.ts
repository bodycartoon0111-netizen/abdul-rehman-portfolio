import { z } from "zod";
import { services } from "@/data/services";

/**
 * Contact form validation.
 *
 * The service enum is derived from the canonical services data so the
 * select options and the accepted values can never drift apart.
 */

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

export const budgetOptions = ["<$1k", "$1–3k", "$3–10k", "$10k+", "Not sure"] as const;

const optionalUrl = z
  .string()
  .trim()
  .max(300, "URL is too long.")
  .refine((v) => v.length === 0 || z.string().url().safeParse(v).success, {
    message: "Please enter a valid URL, e.g. https://example.com",
  })
  .optional();

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(160, "Email is too long."),
  company: z.string().trim().max(120, "Company must be 120 characters or fewer.").optional(),
  website: optionalUrl,
  service: z.enum(serviceSlugs, {
    error: "Please choose a service.",
  }),
  budget: z.enum(budgetOptions, {
    error: "Please choose a budget range.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters.")
    .max(2000, "Message must be 2,000 characters or fewer."),
  /** Honeypot: real users leave this empty; bots tend to fill it. */
  company_website: z.string().max(500).optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export type ContactResult =
  | { success: true; message: string }
  | { success: false; message: string; errors?: Record<string, string[]> };
