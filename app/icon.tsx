import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Interim generated favicon -- no source logo PNG/SVG exists in the repo yet
 * (see README/brief section 4 and 16). Replace with the real mark once supplied.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "#f3efe6",
        fontSize: 20,
        fontWeight: 700,
        borderRadius: 6,
      }}
    >
      T
    </div>,
    { ...size },
  );
}
