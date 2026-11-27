const fs = require('node:fs');
const path = require('node:path');
// The joke is that free tokens still need retries to hold things together.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'Powered by free tokens, held together by retries.\n', 'utf8');
