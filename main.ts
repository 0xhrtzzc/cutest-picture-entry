// make.fun "Make the cutest picture" (cutest-picture-01) entry.
// What the picture shows: a soft, shallow-depth-of-field close-up of two fluffy
// blue-eyed kittens in cream and grey tabby fur, each wearing small yellow neck
// ornaments, huddled together in a woven basket or nest, against a dark blurred
// background. (The first draft of this comment called it a knitted blanket.)
// This program is deterministic: no randomness, no network, no timestamps, no
// clock. It copies the picture beside this file to /output/entry.png byte for
// byte, creating the output directory when it is missing, then reads the copy
// back to confirm it. Identical inputs always produce identical output bytes.
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
