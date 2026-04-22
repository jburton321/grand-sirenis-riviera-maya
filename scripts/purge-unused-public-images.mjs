/**
 * Deletes raster/SVG assets under public/images/ that are not referenced by the app.
 *
 * Strategy: scan every text source (src/**, index.html, scripts/**, public/*.json/.webmanifest)
 * for any substring matching `images/<path>.<ext>`. Use a single regex that:
 *   - Tolerates an optional leading slash (`/images/...`)
 *   - Tolerates an optional `?query` cache-buster (e.g. `PHH-LOGO.svg?v=2`)
 *   - Handles subfolder paths (`images/home/foo.png`, `images/sliding-gallery-hero/bar.png`)
 *   - Covers png, jpg/jpeg, webp, gif, svg, avif, ico
 *
 * Usage:
 *   node scripts/purge-unused-public-images.mjs            # dry-run (list only)
 *   node scripts/purge-unused-public-images.mjs --apply    # actually delete
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');
const apply = process.argv.includes('--apply');

const IMAGE_EXT_RE = /\.(?:png|jpe?g|webp|gif|svg|avif|ico)$/i;
const IMAGE_EXT_INLINE = 'png|jpe?g|webp|gif|svg|avif|ico';

const used = new Set();

function add(rel) {
  if (!rel || typeof rel !== 'string') return;
  const n = rel
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/\?.*$/, '') // strip cache-buster query string
    .replace(/#.*$/, ''); // strip hash
  if (!IMAGE_EXT_RE.test(n)) return;
  if (!n.startsWith('images/')) return;
  used.add(n);
}

// 1. Catch anything that looks like images/foo.ext inside any text file
const GLOBAL_IMAGE_REF_RE = new RegExp(
  String.raw`(?<![A-Za-z0-9_./-])` +
    String.raw`(?:\.?/)?` +
    String.raw`(images\/[A-Za-z0-9_./\- ]+?\.(?:${IMAGE_EXT_INLINE}))` +
    String.raw`(?:\?[^\s'"\x60)]*)?`,
  'gi',
);

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  GLOBAL_IMAGE_REF_RE.lastIndex = 0;
  let m;
  while ((m = GLOBAL_IMAGE_REF_RE.exec(text)) !== null) {
    add(m[1]);
  }
}

const SOURCE_FILE_RE = /\.(?:tsx?|jsx?|css|scss|html|json|webmanifest|svg|md|mjs|cjs)$/i;

function walk(dir, opts = {}) {
  const { skip = new Set() } = opts;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, opts);
    else if (SOURCE_FILE_RE.test(ent.name)) scanFile(full);
  }
}

// Source tree
walk(path.join(root, 'src'));
// Build / meta
for (const rel of ['index.html']) {
  const p = path.join(root, rel);
  if (fs.existsSync(p)) scanFile(p);
}
// Scripts (covers any codegen that references image paths)
if (fs.existsSync(path.join(root, 'scripts'))) {
  walk(path.join(root, 'scripts'));
}
// Public config files (site.webmanifest, etc.) — do NOT walk into images/
for (const ent of fs.readdirSync(publicDir, { withFileTypes: true })) {
  if (ent.isDirectory()) continue;
  const full = path.join(publicDir, ent.name);
  if (SOURCE_FILE_RE.test(ent.name)) scanFile(full);
}

// 2. Walk images/ on disk and diff against `used`
function listImageFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) listImageFiles(full, acc);
    else if (IMAGE_EXT_RE.test(ent.name)) acc.push(full);
  }
  return acc;
}

const allFiles = listImageFiles(imagesDir);
const unused = allFiles
  .map((abs) => ({
    abs,
    rel: `images/${path.relative(imagesDir, abs).replace(/\\/g, '/')}`,
  }))
  .filter(({ rel }) => !used.has(rel));

console.log(`Referenced image paths: ${used.size}`);
console.log(`Image files on disk:    ${allFiles.length}`);
console.log(`Unused (candidates):    ${unused.length}\n`);

for (const { rel } of unused) console.log(`  ${rel}`);

if (!apply) {
  console.log('\nDry-run only. Re-run with --apply to delete these files.');
  process.exit(0);
}

for (const { abs } of unused) {
  fs.unlinkSync(abs);
  console.log(`deleted ${path.relative(root, abs)}`);
}

function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) removeEmptyDirs(full);
  }
  if (dir === imagesDir) return;
  try {
    if (fs.readdirSync(dir).length === 0) {
      fs.rmdirSync(dir);
      console.log(`removed empty dir ${path.relative(publicDir, dir)}`);
      removeEmptyDirs(path.dirname(dir));
    }
  } catch {
    /* ignore */
  }
}

removeEmptyDirs(imagesDir);
console.log('\nDone.');
