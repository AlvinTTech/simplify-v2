import { ImageResponse } from "next/og";

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
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Arial",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            background: "rgba(124, 58, 237, 0.18)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 22,
            background: "#7c3aed",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 38,
            fontWeight: 900,
            marginBottom: 36,
          }}
        >
          S
        </div>

        <h1
          style={{
            fontSize: 76,
            lineHeight: 1,
            letterSpacing: "-0.06em",
            color: "#0f172a",
            margin: 0,
            maxWidth: 900,
          }}
        >
          Intelligent Business Systems
        </h1>

        <p
          style={{
            fontSize: 30,
            lineHeight: 1.35,
            color: "#64748b",
            marginTop: 28,
            maxWidth: 800,
          }}
        >
          AI-powered workflows that help businesses do more with less.
        </p>
      </div>
    ),
    { ...size }
  );
}