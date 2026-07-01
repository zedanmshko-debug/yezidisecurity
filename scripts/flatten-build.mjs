import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'fs';
import { join } from 'path';

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  const stats = statSync(src);
  if (stats.isDirectory()) {
    if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
      copyRecursive(join(src, entry), join(dest, entry));
    }
  } else {
    copyFileSync(src, dest);
  }
}

const clientDir = join(process.cwd(), 'build', 'client');
const buildDir = join(process.cwd(), 'build');
const publicDir = join(process.cwd(), 'public');

if (!existsSync(clientDir)) {
  console.error('No client build found at', clientDir);
  process.exit(1);
}

console.log('Flattening', clientDir, '->', buildDir);
copyRecursive(clientDir, buildDir);
console.log('Flatten client complete.');

if (existsSync(publicDir)) {
  console.log('Copying public assets', publicDir, '->', buildDir);
  copyRecursive(publicDir, buildDir);
  console.log('Public assets copy complete.');
} else {
  console.log('No public/ folder found; skipping public asset copy.');
}

// For Vercel's Build Output API, also write static files to /vercel/output/static
// so the platform picks up index.html and assets reliably.
const vercelOutputStatic = '/vercel/output/static';
try {
  if (existsSync(buildDir)) {
    console.log('Copying flattened build to', vercelOutputStatic);
    copyRecursive(buildDir, vercelOutputStatic);
    console.log('Vercel output static copy complete.');
  }
} catch (err) {
  // Non-fatal: on local dev this path may not be writable/available.
  console.warn('Could not copy to Vercel output path (this is OK locally):', err?.message || err);
}
