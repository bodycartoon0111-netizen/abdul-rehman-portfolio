import { describe, expect, it } from "vitest";
import { absoluteUrl, buildBreadcrumbJsonLd } from "./seo";

describe("absoluteUrl", () => {
  it("joins the site URL and path without double slashes", () => {
    const url = absoluteUrl("/services/seo");
    expect(url).toMatch(/^https?:\/\//);
    expect(url.endsWith("/services/seo")).toBe(true);
    expect(url).not.toContain("//services");
  });
});

describe("buildBreadcrumbJsonLd", () => {
  it("produces a valid BreadcrumbList structure", () => {
    const jsonLd = buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "SEO", path: "/services/seo" },
    ]);
    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@type"]).toBe("BreadcrumbList");
    const items = jsonLd["itemListElement"] as Array<{
      position: number;
      name: string;
    }>;
    expect(items).toHaveLength(3);
    expect(items[0]?.position).toBe(1);
    expect(items[2]?.name).toBe("SEO");
  });
});
