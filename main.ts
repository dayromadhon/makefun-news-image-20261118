// news-image-20261118 entry (Node 22, standard library only).
// The finished front page lives beside this file as entry.png: a 1024x1024
// newspaper front page for Wednesday 18 November 2026 — the Xi-Putin talks in
// Shenzhen ahead of Thursday's first-ever trilateral with Trump, the US strike
// on Qeshm Island and Iran's drone attacks on US sites in Kuwait and Bahrain,
// the Kerch Bridge road span falling into the strait, Mary Peltola winning
// Alaska's Senate race for a 56-44 Democratic majority, and Voyager 1 reaching
// one light-day from Earth, plus an "also today" strip (Ebola, measles, Nvidia).
// The program copies entry.png to /output/entry.png. The copy is byte-for-byte,
// so both runs of the program produce identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
