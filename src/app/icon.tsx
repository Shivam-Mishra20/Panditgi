import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 14,
          fontFamily: "Devanagari",
        }}
      >
        <span style={{ fontSize: 40, color: "#e8c98a", display: "flex" }}>
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
