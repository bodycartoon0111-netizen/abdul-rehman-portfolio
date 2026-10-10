import { ImageResponse } from "next/og";

/** Apple touch icon — same "AR" monogram at 180×180. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#284a3d",
          borderRadius: "40px",
          color: "#f7f8f5",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "88px",
          letterSpacing: "-2px",
        }}
      >
        AR
      </div>
    ),
    { ...size },
  );
}
