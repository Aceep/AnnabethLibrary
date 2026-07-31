#!/usr/bin/env node
/**
 * Convertit les fonds de scène PNG en WebP.
 *
 * Les fonds d'origine sont des PNG 2880x1620 sans perte de 3,5 à 6,5 Mo,
 * affichés en background-image plein écran : du contenu photographique stocké
 * dans un format sans perte, au double de la résolution utile.
 *
 *   node scripts/optimize-assets.mjs            # écrit les .webp
 *   node scripts/optimize-assets.mjs --dry-run  # simule et affiche le bilan
 *
 * Le script n'efface jamais les sources : la suppression des PNG reste une
 * décision manuelle, après contrôle visuel.
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGET_WIDTH = 1920;
const QUALITY = 82;

// Répertoires balayés, relatifs à public/
const DIRECTORIES = ['assets', 'assets/intro'];

const dryRun = process.argv.includes('--dry-run');

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} Ko`;
const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} Mo`;

async function collectPngs() {
  const found = [];

  for (const dir of DIRECTORIES) {
    const absolute = path.join(ROOT, 'public', dir);
    const entries = await readdir(absolute, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.png')) continue;
      found.push(path.join(absolute, entry.name));
    }
  }

  return found.sort();
}

async function convert(source) {
  const destination = source.replace(/\.png$/i, '.webp');
  const before = (await stat(source)).size;

  const image = sharp(source);
  const { width } = await image.metadata();

  if (dryRun) return { source, destination, before, after: null, width };

  await image
    .resize({ width: Math.min(width, TARGET_WIDTH), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(destination);

  const after = (await stat(destination)).size;
  return { source, destination, before, after, width };
}

const pngs = await collectPngs();

if (pngs.length === 0) {
  console.log('Aucun PNG à convertir — déjà fait ?');
  process.exit(0);
}

console.log(
  `${pngs.length} PNG à convertir — largeur cible ${TARGET_WIDTH}px, qualité ${QUALITY}` +
    (dryRun ? '  [SIMULATION]' : '')
);
console.log();

let totalBefore = 0;
let totalAfter = 0;

for (const png of pngs) {
  const { source, before, after, width } = await convert(png);
  totalBefore += before;
  totalAfter += after ?? before;

  const name = path.relative(path.join(ROOT, 'public'), source);
  if (dryRun) {
    console.log(`  ${name.padEnd(38)} ${kb(before).padStart(9)}  (${width}px)`);
  } else {
    const saved = (100 * (1 - after / before)).toFixed(1);
    console.log(
      `  ${name.padEnd(38)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}  -${saved}%`
    );
  }
}

console.log();
if (dryRun) {
  console.log(`Total actuel : ${mb(totalBefore)}`);
} else {
  const saved = (100 * (1 - totalAfter / totalBefore)).toFixed(1);
  console.log(`Total : ${mb(totalBefore)} -> ${mb(totalAfter)}  (-${saved}%)`);
  console.log();
  console.log('Les PNG sont conservés. Après contrôle visuel des .webp :');
  console.log('  git rm public/assets/*.png public/assets/intro/*.png');
}
