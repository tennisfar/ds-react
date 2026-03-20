// quick-style-imports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PATH } from '../../config.js';

// These are needed to replicate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Path to the folder containing your LESS files
const stylesDir = path.resolve(__dirname, PATH.DS.AVALONCOMPONENTS + '/Styles');

// 📄 Path to the output file (that you'll import into your React app)
const outputFile = path.resolve(__dirname, '../../src/styles/DanskeSpil/AvalonComponents.less');

// 🧾 Recursively read all `.less` files in the folder and subfolders
const files = fs.readdirSync(stylesDir, { recursive: true })
.filter((file) => file.toString().endsWith('.less'))
.map((file) => file.toString().replace(/\\/g, '/'));  // normalize Windows backslashes

// 🧵 Generate `@import` lines (file already includes relative subfolder path)
const imports = files
.map((file) => `@import "@PATH.DS.AVALONCOMPONENTS/Styles/${file}";`)
.join('\n');

// ✍️ Write them into the output file
fs.writeFileSync(outputFile, imports);

console.log(`✅ Generated ${outputFile} with ${files.length} LESS imports.`);
