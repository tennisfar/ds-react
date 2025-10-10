// klublotto-style-imports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// These are needed to replicate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Path to the folder containing your LESS files
const stylesDir = path.resolve(
  __dirname,
  '../../../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto/Styles'
);

// 📄 Path to the output file (that you'll import into your React app)
const outputFile = path.resolve(__dirname, '../../src/styles/klublotto.less');

// 🧾 Read all `.less` files in the folder
const files = fs.readdirSync(stylesDir).filter((file) => file.endsWith('.less'));

// 🧵 Generate `@import` lines
const imports = files.map((file) => `@import "${path.join(stylesDir, file).replace(/\\/g, '/')}";`).join('\n');

// ✍️ Write them into the output file
fs.writeFileSync(outputFile, imports);

console.log(`✅ Generated ${outputFile} with ${files.length} LESS imports.`);
