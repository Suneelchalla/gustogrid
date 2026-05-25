#!/usr/bin/env python3
"""Generate GustoGrid PWA icons — sunset gradient with abstract knife+grid mark."""
from PIL import Image, ImageDraw, ImageFilter
import os

OUT_DIR = "/home/claude/gustogrid-pwa/icons"
os.makedirs(OUT_DIR, exist_ok=True)

# Brand colors
ORANGE = (255, 107, 53)  # #FF6B35
AMBER = (255, 194, 51)   # #FFC233
DARK = (26, 13, 5)       # #1a0d05


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def render_icon(size, maskable=False):
    """Render the icon at given size. Maskable adds safe-zone padding."""
    img = Image.new('RGB', (size, size), ORANGE)
    draw = ImageDraw.Draw(img)

    # Diagonal gradient (orange top-left → amber bottom-right)
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            color = lerp(ORANGE, AMBER, t)
            img.putpixel((x, y), color)

    # If maskable, content must fit in centered 80% safe zone
    safe_zone = 0.62 if maskable else 0.78
    content_size = int(size * safe_zone)
    offset = (size - content_size) // 2

    # Mark: three horizontal "checklist" lines on left + knife on right
    line_height = content_size // 10
    line_gap = content_size // 6
    line_left = offset + content_size // 8
    line_right = offset + int(content_size * 0.58)

    # Three checklist rows with check marks
    for i in range(3):
        y = offset + int(content_size * 0.22) + i * line_gap

        # Checkbox square
        box_size = int(line_height * 1.4)
        box_x = line_left
        draw.rounded_rectangle(
            [(box_x, y), (box_x + box_size, y + box_size)],
            radius=int(box_size * 0.22),
            outline=DARK,
            width=max(2, int(size * 0.012)),
        )
        # First two get a check mark inside
        if i < 2:
            cx, cy = box_x + box_size // 2, y + box_size // 2
            check_pts = [
                (cx - box_size * 0.25, cy),
                (cx - box_size * 0.05, cy + box_size * 0.22),
                (cx + box_size * 0.28, cy - box_size * 0.22),
            ]
            draw.line(check_pts, fill=DARK, width=max(2, int(size * 0.015)), joint='curve')

        # Line next to checkbox
        line_x_start = box_x + box_size + int(line_height * 0.6)
        draw.rounded_rectangle(
            [(line_x_start, y + box_size // 4),
             (line_right, y + box_size - box_size // 4)],
            radius=int(line_height * 0.3),
            fill=DARK,
        )

    # Knife on the right side — angled blade + handle
    knife_x = offset + int(content_size * 0.72)
    knife_top = offset + int(content_size * 0.15)
    knife_bottom = offset + int(content_size * 0.85)
    knife_width = int(content_size * 0.14)

    # Blade (triangle/wedge shape) - top wider, tapers to handle
    blade_points = [
        (knife_x, knife_top),                                    # top point
        (knife_x + knife_width, knife_top + content_size * 0.05),  # top-right
        (knife_x + knife_width * 0.85, knife_top + content_size * 0.45),  # bottom-right blade
        (knife_x + knife_width * 0.15, knife_top + content_size * 0.45),  # bottom-left blade
    ]
    draw.polygon(blade_points, fill=DARK)

    # Handle
    handle_top = knife_top + int(content_size * 0.45)
    handle_width = int(knife_width * 0.65)
    handle_x = knife_x + (knife_width - handle_width) // 2
    draw.rounded_rectangle(
        [(handle_x, handle_top),
         (handle_x + handle_width, knife_bottom)],
        radius=int(handle_width * 0.3),
        fill=DARK,
    )

    # Small highlight on blade for premium feel
    highlight_pts = [
        (knife_x + knife_width * 0.2, knife_top + content_size * 0.05),
        (knife_x + knife_width * 0.5, knife_top + content_size * 0.05),
        (knife_x + knife_width * 0.35, knife_top + content_size * 0.4),
    ]
    draw.polygon(highlight_pts, fill=(255, 255, 255, 60))

    return img


# Generate the icon set
for s in [192, 512]:
    img = render_icon(s, maskable=False)
    img.save(f"{OUT_DIR}/icon-{s}.png", "PNG", optimize=True)
    print(f"✓ icon-{s}.png ({s}x{s})")

    img_m = render_icon(s, maskable=True)
    img_m.save(f"{OUT_DIR}/icon-maskable-{s}.png", "PNG", optimize=True)
    print(f"✓ icon-maskable-{s}.png ({s}x{s})")

# Also a favicon (32x32)
fav = render_icon(64, maskable=False).resize((32, 32), Image.LANCZOS)
fav.save(f"{OUT_DIR}/favicon.png", "PNG", optimize=True)
print("✓ favicon.png (32x32)")

# Apple touch icon (180x180)
apple = render_icon(180, maskable=False)
apple.save(f"{OUT_DIR}/apple-touch-icon.png", "PNG", optimize=True)
print("✓ apple-touch-icon.png (180x180)")

print("\nAll icons generated.")
