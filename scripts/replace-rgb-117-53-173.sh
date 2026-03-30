#!/usr/bin/env bash
# Replaces #7535AD, rgb(117,53,173) / rgb(117 53 173) (+ Tailwind opacity form), rgba(...), with #44ad98
# in tracked text files. Safe to re-run (idempotent if already replaced).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

while IFS= read -r -d '' f; do
  [ -f "$f" ] || continue
  perl -i -pe '
    s/#7535[Aa][Dd]/#44ad98/g;
    s/rgb\(\s*117\s+53\s+173\s*\/\s*var\(--tw-bg-opacity[^)]*\)\)/#44ad98/gi;
    s/rgba\(\s*117\s*,\s*53\s*,\s*173\s*,\s*[\d.]+\s*\)/#44ad98/gi;
    s/rgba\(\s*117\s+53\s+173\s*\/\s*[^)]+\)/#44ad98/gi;
    s/rgb\(\s*117\s*,\s*53\s*,\s*173\s*\)/#44ad98/gi;
    s/rgb\(\s*117\s+53\s+173\s*\)/#44ad98/gi;
  ' "$f"
done < <(git ls-files -z -- '*.css' '*.tsx' '*.ts' '*.html' '*.svg' '*.js' '*.jsx' '*.md' '*.json' 2>/dev/null || true)

echo "replace-rgb-117-53-173: finished"
