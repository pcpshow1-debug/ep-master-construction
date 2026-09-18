#!/usr/bin/env python3
"""Burn 3–5 word brand lines onto EP Master post clips."""

from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/workspace")
OUT = ROOT / "artifacts" / "posts"
PUB = ROOT / "public" / "posts"
TMP = Path("/tmp/ep-posts")
FONT_DISPLAY = Path("/tmp/fonts/PlayfairDisplay-Medium.ttf")
FONT_SANS = Path("/tmp/fonts/DMSans-Medium.ttf")
FFMPEG = "/usr/local/bin/ffmpeg"

W, H = 1904, 1072
BONE = (242, 242, 242, 255)
INK = (7, 7, 7, 0)

CLIPS = [
    {
        "id": "01-ilya",
        "src": ROOT
        / "attachments/_users_8a3abfc4-ca06-41ef-a158-3cf71f4e9558_generated_adc1a825-be5e-4d78-bcd9-97e4686397d8_generated_video_1080_hd.mp4",
        "kind": "video",
        "line": "Built for the Northwest.",
        "align": "left",
    },
    {
        "id": "02-bones",
        "src": ROOT
        / "attachments/_users_8a3abfc4-ca06-41ef-a158-3cf71f4e9558_generated_99644543-9716-443f-8392-4f9130d1ce51_generated_video_1080_hd.mp4",
        "kind": "video",
        "line": "The bones first.",
        "align": "right",
    },
    {
        "id": "03-craft",
        "src": ROOT / "attachments/E4599E90-CF1D-4C12-BE81-A60305BDEDD3.jpg",
        "kind": "image",
        "line": "Every nail counts.",
        "align": "left",
    },
    {
        "id": "04-truck",
        "src": ROOT / "attachments/29A5FA64-56E4-4524-A511-33DF7F325E31.jpg",
        "kind": "image",
        "line": "Oregon. Washington.",
        "align": "left",
    },
    {
        "id": "05-estimator",
        "src": ROOT
        / "attachments/_users_8a3abfc4-ca06-41ef-a158-3cf71f4e9558_generated_e1cd0220-329b-4479-bf8e-4fa33ef56d84_generated_video_1080_hd.mp4",
        "kind": "video",
        "line": None,
        "align": "left",
    },
]


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "...")
    subprocess.check_call(cmd)


def draw_line(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, x: int, y: int, tracking: float = 0.0) -> int:
    cx = x
    for ch in text:
        draw.text((cx, y), ch, font=font, fill=BONE)
        box = font.getbbox(ch)
        cx += (box[2] - box[0]) + tracking
    return cx - x


def text_width(text: str, font: ImageFont.FreeTypeFont, tracking: float = 0.0) -> int:
    w = 0
    for ch in text:
        box = font.getbbox(ch)
        w += (box[2] - box[0]) + tracking
    return int(w)


def make_card(line: str, align: str) -> Path:
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    # bottom veil so type holds on bright mist
    veil = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    vdraw = ImageDraw.Draw(veil)
    for i in range(280):
        a = int(150 * (i / 279) ** 1.35)
        y = H - 280 + i
        vdraw.line([(0, y), (W, y)], fill=(7, 7, 7, a))
    img = Image.alpha_composite(img, veil)
    draw = ImageDraw.Draw(img)

    display = ImageFont.truetype(str(FONT_DISPLAY), 78)
    tracking = -1.2
    tw = text_width(line, display, tracking)
    margin = 92
    x = margin if align == "left" else W - margin - tw
    y = H - 168

    # hairline
    hx = x
    draw.rectangle([hx, y - 28, hx + 46, y - 27], fill=BONE)

    draw_line(draw, line, display, x, y, tracking)

    path = TMP / f"card-{align}-{abs(hash(line)) % 10_000}.png"
    img.save(path)
    return path


def encode_video(src: Path, card: Path | None, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if card is None:
        run(
            [
                FFMPEG,
                "-y",
                "-i",
                str(src),
                "-c:v",
                "libx264",
                "-pix_fmt",
                "yuv420p",
                "-crf",
                "16",
                "-preset",
                "medium",
                "-c:a",
                "aac",
                "-b:a",
                "128k",
                "-movflags",
                "+faststart",
                str(dest),
            ]
        )
        return

    filt = (
        "[1:v]format=rgba,fade=t=in:st=0.55:d=0.85:alpha=1,fade=t=out:st=5.15:d=0.65:alpha=1[txt];"
        "[0:v][txt]overlay=0:'12*(1-min(1\\,t/0.95))':format=auto"
    )
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            str(src),
            "-i",
            str(card),
            "-filter_complex",
            filt,
            "-map",
            "0:a?",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-crf",
            "16",
            "-preset",
            "medium",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-shortest",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def encode_image(src: Path, card: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    # slow push-in, then title fade
    filt = (
        "[0:v]scale=2200:-1,zoompan=z='min(1.10\\,1+0.00055*on)':x='iw/2-(iw/zoom/2)':"
        "y='ih/2-(ih/zoom/2)':d=145:s=1904x1072:fps=24,format=yuv420p[base];"
        "[1:v]format=rgba,fade=t=in:st=0.7:d=0.9:alpha=1,fade=t=out:st=5.15:d=0.65:alpha=1[txt];"
        "[base][txt]overlay=0:'10*(1-min(1\\,t/1.0))':format=auto"
    )
    run(
        [
            FFMPEG,
            "-y",
            "-loop",
            "1",
            "-i",
            str(src),
            "-i",
            str(card),
            "-filter_complex",
            filt,
            "-t",
            "6.04",
            "-r",
            "24",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-crf",
            "16",
            "-preset",
            "medium",
            "-an",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def main() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    PUB.mkdir(parents=True, exist_ok=True)

    for clip in CLIPS:
        dest = OUT / f"{clip['id']}.mp4"
        print("===", clip["id"], clip["line"])
        if clip["line"]:
            card = make_card(clip["line"], clip["align"])
        else:
            card = None
        if clip["kind"] == "video":
            encode_video(clip["src"], card, dest)
        else:
            encode_image(clip["src"], card, dest)
        pub = PUB / dest.name
        pub.write_bytes(dest.read_bytes())
        print("wrote", dest, dest.stat().st_size)


if __name__ == "__main__":
    main()
