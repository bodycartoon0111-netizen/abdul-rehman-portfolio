import { ImageResponse } from "next/og";

/** "AR" monogram favicon — pine rounded square, ivory letters. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          color: "#f7f8f5",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "17px",
          letterSpacing: "-0.5px",
        }}
      >
        AR
      </div>
    ),
    { ...size },
  );
}
