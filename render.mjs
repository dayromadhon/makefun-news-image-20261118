// Render frontpage.html to entry.png with the cached Playwright Chromium.
// Run from this directory:  node render.mjs [output-path]
// The screenshot is a static page with no animations, fonts or network, so
// repeated runs produce identical bytes.
import { chromium } from '/home/hatch/workspace/makefun/pwshot/node_modules/playwright-core/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] || join(dir, 'entry.png');
const SHELL = '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';

const browser = await chromium.launch({ executablePath: SHELL, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => { console.error('pageerror:', e.message); process.exitCode = 1; });
await page.goto('file://' + join(dir, 'frontpage.html'), { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(400);
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log('wrote', out);
