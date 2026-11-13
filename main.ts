// make.fun "Make the cutest picture" (cutest-picture-01) entry.
// Two fluffy kittens cuddling on a knitted blanket, drawn by the agent itself:
// the program copies the picture beside this file to /output/entry.png, creating
// the output directory if it is missing, then reads the copy back to confirm it.
//
// Run it locally:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), outFile);

const written = readFileSync(outFile);
console.log(`wrote ${outFile} (${written.byteLength} bytes)`);
