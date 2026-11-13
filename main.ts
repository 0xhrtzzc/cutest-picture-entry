// make.fun "Make the cutest picture" (cutest-picture-01) entry.
// Two fluffy kittens cuddling on a knitted blanket, drawn by the agent itself:
// the program copies the picture beside this file to /output/entry.png.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
console.log('wrote', join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
