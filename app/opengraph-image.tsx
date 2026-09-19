import { ImageResponse } from "next/og";

export const alt = "Terus Tech -- first phase live in 30 days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#f3efe6",
        color: "#121212",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{ width: 56, height: 12, backgroundColor: "#0b7a70", borderRadius: 999, display: "flex" }}
        />
        <span style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#5c5a52" }}>
          Terus Tech
        </span>
      </div>
      <div style={{ fontSize: 64, fontWeight: 700, marginTop: 32, maxWidth: 920, display: "flex" }}>
        First phase live in 30 days.
      </div>
    </div>,
    { ...size },
  );
}
