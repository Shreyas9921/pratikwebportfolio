import { ImageResponse } from "next/og";

export const alt = "Pratik Gade — Software Development Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#141417",
          color: "#F0ECE3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Pratik Gade
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#E8B84A",
          }}
        >
          Java · Spring Boot · Agentic AI · Microservices
        </div>
      </div>
    ),
    { ...size },
  );
}
