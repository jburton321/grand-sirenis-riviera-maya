/**
 * Deletes raster/SVG assets under public/ that are not referenced by the app.
 * All static images live under public/images/ (see index.html, Vite public root).
 * Usage: node scripts/purge-unused-public-images.mjs        # dry-run (list only)
 *        node scripts/purge-unused-public-images.mjs --apply
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const apply = process.argv.includes('--apply');

const IMAGE_EXT = /\.(?:png|jpe?g|webp|gif|svg|avif|ico)$/i;

const used = new Set();

function add(rel) {
  if (!rel || typeof rel !== 'string') return;
  let n = rel.replace(/\\/g, '/').replace(/^\/+/, '');
  if (!IMAGE_EXT.test(n)) return;
  used.add(n);
}

// Meta images (index.html → public/images/)
for (const f of [
  'images/favicon.ico',
  'images/favicon-96x96.png',
  'images/apple-touch-icon.png',
  'images/og-image.png',
]) {
  add(f);
}

// site.webmanifest icons
const manifestPath = path.join(publicDir, 'site.webmanifest');
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  for (const icon of manifest.icons ?? []) {
    const s = icon.src?.replace(/^\.\//, '') ?? '';
    add(s);
  }
}

// Auto-synced hero gallery (basenames only in TS)
const heroPath = path.join(root, 'src/content/heroGalleryFilenames.ts');
if (fs.existsSync(heroPath)) {
  const text = fs.readFileSync(heroPath, 'utf8');
  for (const m of text.matchAll(/'([^']+\.webp)'/g)) {
    add(`images/${m[1]}`);
  }
}

const guestPath = path.join(root, 'src/content/guestReviewGalleryFilenames.ts');
if (fs.existsSync(guestPath)) {
  const text = fs.readFileSync(guestPath, 'utf8');
  for (const m of text.matchAll(/'(images\/juniorsuitedeluxesingle[^']+)'/g)) {
    add(m[1]);
  }
}

// Thank-you icons (some use template literals)
for (const f of [
  'warning0.svg',
  'luggage0.svg',
  'assignment-turned-in2.svg',
  'assignment-turned-in3.svg',
  'king-bed0.svg',
  'bedtime0.svg',
  'group1.svg',
  'calendar-month0.svg',
  'calendar-month1.svg',
  'credit-score0.svg',
  'concierge0.svg',
]) {
  add(`images/${f}`);
}

// constants.ts image paths (skip mp4)
const constantsPath = path.join(root, 'src/constants.ts');
if (fs.existsSync(constantsPath)) {
  const text = fs.readFileSync(constantsPath, 'utf8');
  for (const m of text.matchAll(/=\s*'([^']+\.(?:jpe?g|webp|png|gif|svg))'\s+as\s+const/g)) {
    add(m[1]);
  }
}

// String literals: paths under public/images/
const pathStringRe =
  /['"`](\/?images\/[^'"`\s>]+\.(?:png|jpe?g|webp|gif|svg|avif|ico))['"`]/gi;

function scanTextFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  let m;
  pathStringRe.lastIndex = 0;
  while ((m = pathStringRe.exec(text)) !== null) {
    add(m[1]);
  }
}

function walkSrc(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkSrc(full);
    else if (/\.(tsx?|jsx?|css)$/.test(ent.name)) scanTextFile(full);
  }
}

walkSrc(path.join(root, 'src'));

const indexHtml = path.join(root, 'index.html');
if (fs.existsSync(indexHtml)) {
  const html = fs.readFileSync(indexHtml, 'utf8');
  for (const m of html.matchAll(/href="\.\/(images\/[^"]+\.(?:ico|png))"/gi)) add(m[1]);
  for (const m of html.matchAll(
    /content="__SITE_BASE__\/(images\/[^"]+\.(?:png|jpe?g|webp|gif|svg))"/gi
  )) {
    add(m[1]);
  }
}

// url(images/...) in Hero inline styles
for (const rel of ['src/components/Hero.tsx']) {
  const fp = path.join(root, rel);
  if (fs.existsSync(fp)) {
    const text = fs.readFileSync(fp, 'utf8');
    for (const m of text.matchAll(
      /url\((['"]?)(images\/[^)'"]+\.(?:png|jpe?g|webp))\1\)/gi
    )) {
      add(m[2]);
    }
  }
}

// MapSection: homePublicImage('File.jpg') → images/File.jpg
const mapPath = path.join(root, 'src/components/MapSection.tsx');
if (fs.existsSync(mapPath)) {
  const text = fs.readFileSync(mapPath, 'utf8');
  for (const m of text.matchAll(/homePublicImage\('([^']+)'\)/g)) {
    add(`images/${m[1]}`);
  }
}

function listImageFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) listImageFiles(full, acc);
    else if (IMAGE_EXT.test(ent.name)) acc.push(full);
  }
  return acc;
}

const allFiles = listImageFiles(publicDir);
const unused = allFiles
  .map((abs) => ({
    abs,
    rel: path.relative(publicDir, abs).replace(/\\/g, '/'),
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
  if (dir === publicDir) return;
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

removeEmptyDirs(publicDir);
console.log('\nDone.');
