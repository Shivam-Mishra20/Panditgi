"""
Generates branded, printable "Puja Samagri" (ritual items) checklist PDFs
for every puja listed in src/data/samagri.json.

Output: public/downloads/samagri/<slug>.pdf

Run whenever you edit src/data/samagri.json or want to re-brand the PDFs
(e.g. after changing site-config.ts values below):

    pip install reportlab --break-system-packages
    python3 scripts/generate-samagri-pdfs.py

Requires a Devanagari-capable TrueType font on the system. On Debian/Ubuntu:
    sudo apt-get install fonts-lohit-deva
(A different Devanagari .ttf can be pointed to via the FONT_PATH env var.)
"""

import json
import os
from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "src" / "data" / "samagri.json"
OUT_DIR = ROOT / "public" / "downloads" / "samagri"

# ---- Brand settings (keep in sync with src/lib/site-config.ts) ----
SITE_NAME = "PanditGi"
TAGLINE = "परंपरा, संस्कार और श्रद्धा के साथ"
WEBSITE = "www.panditgi.com"  # update to your real domain

MAROON = colors.HexColor("#5E1A1F")
SAFFRON = colors.HexColor("#D97B1F")
GOLD = colors.HexColor("#AB8752")
CREAM = colors.HexColor("#FBF6EC")
INK = colors.HexColor("#2B2016")
INK_SOFT = colors.HexColor("#5A4A3A")

FONT_PATH = os.environ.get("FONT_PATH", "/usr/share/fonts/truetype/lohit-devanagari/Lohit-Devanagari.ttf")
FONT_NAME = "Devanagari"

pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))


def draw_header(c: canvas.Canvas, width, height, title: str):
    # Top brand band
    c.setFillColor(MAROON)
    c.rect(0, height - 28 * mm, width, 28 * mm, fill=1, stroke=0)

    c.setFillColor(colors.white)
    c.setFont(FONT_NAME, 20)
    c.drawString(18 * mm, height - 14 * mm, f"{SITE_NAME}")

    c.setFont(FONT_NAME, 11)
    c.drawString(18 * mm, height - 21 * mm, TAGLINE)

    c.setFont(FONT_NAME, 10)
    c.drawRightString(width - 18 * mm, height - 14 * mm, WEBSITE)

    # Gold rule under band
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.2)
    c.line(0, height - 28 * mm, width, height - 28 * mm)

    # Document title
    c.setFillColor(MAROON)
    c.setFont(FONT_NAME, 16)
    c.drawString(18 * mm, height - 40 * mm, title)

    c.setFillColor(INK_SOFT)
    c.setFont(FONT_NAME, 9)
    c.drawString(
        18 * mm,
        height - 46 * mm,
        "परंपरा के अनुसार सामान्य मार्गदर्शन सूची — स्थान/उपलब्धता के अनुसार सामग्री में बदलाव संभव है।",
    )


def draw_footer(c: canvas.Canvas, width, page_num: int):
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.6)
    c.line(18 * mm, 15 * mm, width - 18 * mm, 15 * mm)

    c.setFillColor(INK_SOFT)
    c.setFont(FONT_NAME, 8.5)
    c.drawString(18 * mm, 10 * mm, f"{SITE_NAME} — {WEBSITE}")
    c.drawRightString(width - 18 * mm, 10 * mm, f"पृष्ठ {page_num}")


def draw_checklist(c: canvas.Canvas, width, height, items, start_y):
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 12)

    x = 20 * mm
    y = start_y
    box_size = 4.2 * mm
    line_gap = 9.5 * mm
    bottom_margin = 22 * mm

    for item in items:
        if y < bottom_margin:
            draw_footer(c, width, c.getPageNumber())
            c.showPage()
            c.setFont(FONT_NAME, 12)
            c.setFillColor(INK)
            y = height - 22 * mm

        # checkbox
        c.setStrokeColor(SAFFRON)
        c.setLineWidth(1)
        c.rect(x, y - box_size + 1.2 * mm, box_size, box_size, fill=0, stroke=1)

        # item text
        c.setFillColor(INK)
        c.drawString(x + box_size + 4 * mm, y, item)

        y -= line_gap

    return y


def generate_pdf(slug: str, title: str, items: list[str]):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / f"{slug}.pdf"

    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4

    draw_header(c, width, height, title)
    y_end = draw_checklist(c, width, height, items, start_y=height - 58 * mm)

    draw_footer(c, width, c.getPageNumber())
    c.save()
    print(f"  wrote {path.relative_to(ROOT)}")


def main():
    with open(DATA_PATH, encoding="utf-8") as f:
        data = json.load(f)

    print(f"Generating {len(data)} samagri checklist PDF(s)...")
    for slug, entry in data.items():
        generate_pdf(slug, entry["title"], entry["items"])
    print("Done.")


if __name__ == "__main__":
    main()
