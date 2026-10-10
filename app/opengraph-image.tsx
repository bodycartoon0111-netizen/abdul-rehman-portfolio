import { ImageResponse } from "next/og";
import { BRAND_NAME } from "@/lib/seo";

/** Branded Open Graph image — 1200×630, light theme. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f8f5",
          padding: "72px 88px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top row: monogram + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#284a3d",
              borderRadius: "22px",
              color: "#f7f8f5",
              fontWeight: 800,
              fontSize: "32px",
            }}
          >
            AR
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#17211d" }}>
            {BRAND_NAME}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "78px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#17211d",
            }}
          >
            SEO, Web Development
            <span style={{ color: "#284a3d" }}>&amp; Digital Growth</span>
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "26px",
              fontWeight: 600,
              color: "#66736d",
            }}
          >
            Growth systems for businesses worldwide
          </div>
        </div>

        {/* Bottom accent bar */}
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: "120px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#284a3d",
            }}
          />
          <div
            style={{
              width: "64px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#bfe8d3",
            }}
          />
          <div
            style={{
              width: "64px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#bfdde8",
            }}
          />
          <div
            style={{
              width: "64px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#ddd8f1",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
