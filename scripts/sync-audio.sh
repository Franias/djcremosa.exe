#!/usr/bin/env bash
#
# sync-audio.sh — copy SoundCloud tracks from the local backup into
# public/audio/ before a static-export build. Idempotent: only copies
# files that are new or changed. Source paths are absolute and
# machine-specific; if your backup lives somewhere else, override
# AUDIO_SRC below.
#
# Why this script exists:
#   - /public/audio/*.mp3 is .gitignored so the repo stays small
#   - But the static export needs the audio at build time
#   - Before `npm run build` (and before the deploy workflow), this
#     script restores the files from your local backup.
#
# Idempotency + non-fatal:
#   - Missing AUDIO_SRC: prints warning, exits 0 (build still proceeds,
#     `/musica` falls back to the CSS-idle visualizer)
#   - Missing individual track: skipped, no error
#   - rsync failure on a single file: warning, continues with the rest
#   - This way `npm run build` always succeeds; the audio is a nice-to-have
#
# Usage:
#   ./scripts/sync-audio.sh                          # default source
#   AUDIO_SRC=/path/to/other ./scripts/sync-audio.sh   # override
#

set -uo pipefail

# ──────────────── config ────────────────

AUDIO_SRC="${AUDIO_SRC:-$HOME/Music/Downloaded by MediaHuman/soundcloudtracks}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DEST="$PROJECT_DIR/public/audio"

# Each entry: "source filename|destination slug"
# Add new tracks here as you download them.
TRACKS=(
  "20 minutinhos na maldade.mp3|20-minutinhos"
  "Baguncinha #1.mp3|baguncinha-1"
  "Baguncinha [frita] #2.mp3|baguncinha-frita-2"
  "baguncinha #3 tranquila em casa.mp3|baguncinha-tranquila-em-casa"
  "bora dançar estilo cachorro.mp3|bora-dancar-estilo-cachorro"
  "dance potranca dance com emoção.mp3|dance-potranca-dance-com-emocao"
  "Destination Of Tamborzao.mp3|destination-of-tamborzao"
)

# ──────────────── guards (non-fatal) ────────────────

mkdir -p "$DEST"
touch "$DEST/.gitkeep"

if [[ ! -d "$AUDIO_SRC" ]]; then
  echo "⚠  AUDIO_SRC not found: $AUDIO_SRC" >&2
  echo "   Deploying without local audio. Set AUDIO_SRC=/path/to/backup to enable." >&2
  echo "   (/musica visualizer will run in idle CSS mode.)" >&2
  echo "0 copied, 0 up to date, 0 missing — 0 in $DEST" >&2
  exit 0
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "⚠  rsync not found in PATH. Install with: brew install rsync" >&2
  echo "   Skipping audio sync." >&2
  exit 0
fi

# ──────────────── sync ────────────────

echo "🎵 syncing audio: $AUDIO_SRC → $DEST"
echo ""

copied=0
skipped=0
missing=0
rsync_failed=0

for entry in "${TRACKS[@]}"; do
  IFS='|' read -r src_name dst_slug <<< "$entry"
  src_path="$AUDIO_SRC/$src_name"
  dst_path="$DEST/${dst_slug}.mp3"

  if [[ ! -f "$src_path" ]]; then
    printf "  ⏭  %-40s (not in source, skipped)\n" "$src_name"
    missing=$((missing + 1))
    continue
  fi

  # Skip if destination is already up to date (mtime + size match).
  if [[ -f "$dst_path" ]] && \
     [[ "$(stat -f %m "$src_path" 2>/dev/null || stat -c %Y "$src_path")" \
        -le "$(stat -f %m "$dst_path" 2>/dev/null || stat -c %Y "$dst_path")" ]] && \
     [[ "$(stat -f %z "$src_path" 2>/dev/null || stat -c %s "$src_path")" \
        -eq "$(stat -f %z "$dst_path" 2>/dev/null || stat -c %s "$dst_path")" ]]; then
    printf "  = %-40s → %s.mp3 [up to date]\n" "$src_name" "$dst_slug"
    skipped=$((skipped + 1))
    continue
  fi

  # rsync with --update; capture failure but don't abort the script.
  if rsync -a --no-perms --chmod=u+rw "$src_path" "$dst_path" 2>/dev/null; then
    size=$(du -h "$dst_path" | awk '{print $1}')
    printf "  ✓ %-40s → %s.mp3 (%s)\n" "$src_name" "$dst_slug" "$size"
    copied=$((copied + 1))
  else
    printf "  ✗ %-40s (rsync failed, skipped)\n" "$src_name"
    rsync_failed=$((rsync_failed + 1))
  fi
done

echo ""
total=$(du -sh "$DEST" 2>/dev/null | awk '{print $1}')
echo "✅ $copied copied, $skipped up to date, $missing missing, $rsync_failed failed — $total total in $DEST"

# Non-fatal: always exit 0 so `npm run build` continues even if
# every track failed to sync.
exit 0
