import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — परंपरा, संस्कार और श्रद्धा के साथ`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "src/assets/fonts/Lohit-Devanagari.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5e1a1f 0%, #3d1114 100%)",
          position: "relative",
          fontFamily: "Devanagari",
        }}
      >
        {/* corner motif */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "2px solid rgba(207,174,125,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -140,
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "2px solid rgba(217,123,31,0.3)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 90,
            color: "#e8c98a",
            display: "flex",
            marginBottom: 8,
          }}
        >
          ॐ
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fbf6ec",
            display: "flex",
            letterSpacing: -1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#e8c98a",
            marginTop: 18,
            display: "flex",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(251,246,236,0.75)",
            marginTop: 28,
            display: "flex",
          }}
        >
          पूजा · संस्कार · विवाह · हवन · कथा · ज्योतिष
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Devanagari",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
