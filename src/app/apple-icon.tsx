import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "#5e1a1f",
          fontFamily: "Devanagari",
        }}
      >
        <span style={{ fontSize: 110, color: "#e8c98a", display: "flex" }}>
          ॐ
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Devanagari", data: fontData, style: "normal", weight: 400 }],
    }
  );
}
