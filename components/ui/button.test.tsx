import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import React from "react";

afterEach(() => {
  cleanup();
});

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  } & Record<string, unknown>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { Button } from "./button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Start a Project</Button>);
    expect(screen.getByText("Start a Project")).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/contact">Contact</Button>);
    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("renders as a button element without href", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("applies an accessible label when ariaLabel is set", () => {
    render(<Button ariaLabel="Start your project">Go</Button>);
    expect(screen.getByLabelText("Start your project")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const { fireEvent } = await import("@testing-library/react");
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Click me" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
