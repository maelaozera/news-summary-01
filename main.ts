// News summary entry (Node, standard library only): the summary lives in
// summary.txt beside this file, and the program copies it unchanged to the
// output file the grader reads.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./summary.txt', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'),
);
