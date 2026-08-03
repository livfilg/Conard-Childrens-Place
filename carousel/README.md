# Carousel — slide 04, layout study

A redesign of the "two directions" slide. Instead of two raw screenshots sitting
side by side, this slide compares **how each crest occupies the same cover
layout** — proportion, where the visual weight lands, and how much clearance is
left above the closing line.

| | file |
|---|---|
| Slide source | `slide-04-layout-study.html` |
| Rendered slide | `slide-04-layout-study.png` — 2160 × 2700 (1080 × 1350 at 2×, 4:5) |
| Cover images | `assets/cover-existing.jpg`, `assets/cover-new.jpg` |
| Fonts | `assets/fonts.css` — Instrument Serif, IBM Plex Mono, Inter, embedded as base64 (OFL / Apache-2.0) |

## Re-rendering

```bash
./render.sh                              # renders slide-04-layout-study.html
./render.sh some-other-slide.html        # any slide in this folder
```

Chromium under-paints the last ~100 px when the viewport height exactly equals
the page height, so `render.sh` renders at 1700 px tall and crops back to the
slide box. Keep that if you add more slides.

## Replacing the cover images

The two JPEGs were recovered from the phone screenshot, so they are soft — good
enough to read, not print quality. **Swap them for clean exports from the source
files and the slide gets noticeably sharper.** Both images must be prepared the
same way or the comparison stops being fair:

1. Export or photograph both covers square-on, no perspective.
2. Scale both so the **printed frame is the same pixel width** (these are 900 px
   wide, inside a 960 px canvas — a 30 px paper margin each side).
3. Crop both to the same box, **aligned on the top of the header block**
   (here: header top sits 30 px down, canvas is 960 × 1243).
4. Save over `assets/cover-existing.jpg` / `assets/cover-new.jpg`.

## Re-measuring the guides

The maroon boxes, the "widest point" rules and every number in the tables are
measured values, not eyeballed. If you swap the images, re-measure and update
the inline `style="left:… top:…"` percentages on the `.bbox`, `.gap` and
`.widest` divs, plus the two `<table>` blocks.

Measured from the current images (crest ink extents, page width = frame width):

| | existing crest | new crest |
|---|---|---|
| Width | 0.43 × page | 0.41 × page |
| Height | 0.77 × page | 0.88 × page |
| Proportion | 1 : 1.77 | 1 : 2.14 |
| Widest point | 44% down | 76% down |
| Gap to closing line | 3.6% page | 0.3% page |

Both crests are centred on the page axis to within 0.5% of page width, which is
why the slide treats horizontal placement as the constant and reads the
difference vertically.
