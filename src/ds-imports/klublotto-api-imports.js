import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PATHS } from '../../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, PATHS.KlubLotto + '/Scripts/Api');
const destDir = path.resolve(__dirname, '../DanskeSpil/KlubLotto/Scripts/Api');

function copyTsFiles(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`❌ Source directory does not exist: ${src}`);
    return 0;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  let count = 0;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      count += copyTsFiles(srcPath, destPath);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }

  return count;
}

const fileCount = copyTsFiles(sourceDir, destDir);
console.log(`✅ Copied ${fileCount} .ts/.tsx files to ${destDir}`);
