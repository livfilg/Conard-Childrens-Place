#!/usr/bin/env bash
# Render a carousel slide to a 2160 × 2700 PNG (1080 × 1350 at 2×).
#
#   ./render.sh slide-04-layout-study.html
#
# Chromium under-paints when the viewport exactly matches the page height,
# so we render tall and crop back to the real slide box.

set -euo pipefail
cd "$(dirname "$0")"

SRC="${1:-slide-04-layout-study.html}"
OUT="${SRC%.html}.png"

CHROME="${CHROME:-/opt/pw-browsers/chromium-1194/chrome-linux/chrome}"
[ -x "$CHROME" ] || CHROME="$(command -v chromium || command -v google-chrome)"

"$CHROME" --headless --no-sandbox --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1080,1700 \
  --virtual-time-budget=8000 \
  --screenshot=".raw.png" "file://$PWD/$SRC" 2>/dev/null

python3 - "$OUT" <<'PY'
import sys
from PIL import Image
Image.open('.raw.png').convert('RGB').crop((0, 0, 2160, 2700)).save(sys.argv[1])
PY

rm -f .raw.png
echo "wrote $OUT (2160×2700)"
