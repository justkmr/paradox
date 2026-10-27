import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pintu Kumar | Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070709",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "sans-serif",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#E24C60",
            }}
          />
          <span
            style={{
              color: "#E24C60",
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            PARADOX // INTEL
          </span>
        </div>

        {/* Center Intro */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: 900,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Pintu Kumar
          </h1>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: "26px",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Full-Stack Software Engineer • Next.js 15, Node.js & Real-Time Architectures
          </p>
        </div>

        {/* Bottom Tech Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#71717a",
            fontSize: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#d4d4d8" }}>
            Next.js 15 • React 19 • TypeScript • Socket.io
          </span>
          <span style={{ color: "#E24C60", fontWeight: "bold" }}>
            github.com/justkmr
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}