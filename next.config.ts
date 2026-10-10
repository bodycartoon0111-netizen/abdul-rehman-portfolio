import type { NextConfig } from "next";

// Project domains are LINKED (outbound), never hotlinked — but allow them
// here (with unoptimized images) so nothing breaks if an agent later
// references a remote screenshot.
const projectDomains = [
  "avexent.com",
  "calculadoramatematica.com",
  "ecofoldpackaging.com",
  "digitalclause.net",
  "thekedar.com.pk",
  "zproperty.pk",
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: projectDomains.map((hostname) => ({
      protocol: "https",
      hostname,
      pathname: "/**",
    })),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
