import { describe, expect, it } from "vitest";
import { contactSchema, budgetOptions } from "./validation";
import { services } from "@/data/services";

const validInput = {
  name: "Ayesha Khan",
  email: "ayesha@example.com",
  company: "Example Ltd",
  website: "https://example.com",
  service: "seo",
  budget: "$1–3k",
  message: "We need help ranking our online store on Google. Please send a proposal.",
  company_website: "",
};

describe("contactSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = contactSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  it("accepts minimal input (optional fields omitted)", () => {
    const { company, website, company_website, ...minimal } = validInput;
    void company;
    void website;
    void company_website;
    const result = contactSchema.safeParse(minimal);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({ ...validInput, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a name that is too short", () => {
    const result = contactSchema.safeParse({ ...validInput, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects a message that is too short", () => {
    const result = contactSchema.safeParse({ ...validInput, message: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown service slug", () => {
    const result = contactSchema.safeParse({ ...validInput, service: "rocket-science" });
    expect(result.success).toBe(false);
  });

  it("accepts every canonical service slug", () => {
    for (const service of services) {
      const result = contactSchema.safeParse({ ...validInput, service: service.slug });
      expect(result.success, `service slug "${service.slug}"`).toBe(true);
    }
  });

  it("rejects an unknown budget option", () => {
    const result = contactSchema.safeParse({ ...validInput, budget: "one million" });
    expect(result.success).toBe(false);
  });

  it("accepts every canonical budget option", () => {
    for (const budget of budgetOptions) {
      const result = contactSchema.safeParse({ ...validInput, budget });
      expect(result.success, `budget "${budget}"`).toBe(true);
    }
  });

  it("allows the honeypot field to be filled (server treats it as bot, still schema-valid)", () => {
    const result = contactSchema.safeParse({ ...validInput, company_website: "spam-bot" });
    expect(result.success).toBe(true);
  });

  it("normalizes email to lowercase and trims whitespace", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      email: "  AYESHA@Example.COM ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("ayesha@example.com");
    }
  });
});
