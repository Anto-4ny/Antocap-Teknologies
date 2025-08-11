// scripts/critical-css.js
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { generate as generateCritical } from 'critical';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function generateCriticalCSS() {
  const htmlPath = resolve(__dirname, '../dist/index.html');
  let html = readFileSync(htmlPath, 'utf8');

  try {
    const { css } = await generateCritical({
      base: 'dist/',
      html,
      inline: false, // we'll inline manually
      width: 1920,
      height: 1080
    });

    // Inline the generated CSS manually
    html = html.replace('</head>', `<style>${css}</style></head>`);
    writeFileSync(htmlPath, html);

    console.log('✅ Critical CSS successfully inlined!');
  } catch (error) {
    console.error('❌ Error generating critical CSS:', error);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateCriticalCSS();
}
