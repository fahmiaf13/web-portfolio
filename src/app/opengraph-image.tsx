import { ImageResponse } from "next/og";

export const alt =
  "Fahmi Achmad Fahrudin — Frontend Developer and Interface Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f4f0e8",
        color: "#20201d",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          borderBottom: "2px solid #20201d",
          display: "flex",
          fontSize: 24,
          fontWeight: 700,
          justifyContent: "space-between",
          paddingBottom: 24,
          textTransform: "uppercase",
        }}
      >
        <span>Portfolio / 2026</span>
        <span style={{ color: "#23745d" }}>Based in Indonesia</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 30, fontWeight: 700, marginBottom: 18 }}>
          FAHMI ACHMAD FAHRUDIN
        </span>
        <span
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-4px",
            lineHeight: 0.95,
          }}
        >
          FRONTEND DEVELOPER
          <br />
          <span style={{ color: "#dc3e32" }}>&amp; INTERFACE DESIGNER.</span>
        </span>
      </div>
      <div
        style={{
          borderTop: "2px solid #20201d",
          display: "flex",
          fontSize: 23,
          justifyContent: "space-between",
          paddingTop: 24,
        }}
      >
        <span>React · Next.js · TypeScript</span>
        <span>Design meets code.</span>
      </div>
    </div>,
    size,
  );
}
