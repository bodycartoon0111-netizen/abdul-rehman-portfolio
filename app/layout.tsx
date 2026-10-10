import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SignalCursor } from "@/components/cursor/SignalCursor";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPersonJsonLd,
  buildWebsiteJsonLd,
  defaultMetadata,
} from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#edf0e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={cn("bg-paper font-sans text-ink", "min-h-screen")}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={buildWebsiteJsonLd()} />
        <JsonLd data={buildPersonJsonLd()} />
        <SignalCursor />
        <Header />
        <div id="main" className="pt-32 sm:pt-36">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
