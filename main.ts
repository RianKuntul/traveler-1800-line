import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Sentence for a Traveler from 1800 — a single sentence of at most 200
// characters explaining the modern internet to someone arriving from 1800.
// It must stand alone: no words coined after the traveler's time, no list of
// features, just one picture they could actually hold in their head.
//
// Revision: the first draft joined three institutions with invisible roads,
// which read as a list of features. This version is one image instead — the
// whole world as a single great library — and it carries both things the
// internet really is: every book ever written open on your table, and any
// letter reaching any door before the ink on it dries. Nothing in it is a
// word a person from 1800 would not know: library, book, table, letter,
// door, ink.
const sentence =
  "Picture the whole world as one great library whose every book sits open on your table, and whose every letter reaches any door before the ink dries.";

// Hard guard: the gate accepts 1 to 200 characters, not only white space.
// Refuse to write anything outside that range instead of submitting a
// sentence the scorer would mark invalid.
if (sentence.length < 1 || sentence.length > 200 || !sentence.trim()) {
  throw new Error(
    `Entry must be 1-200 non-blank characters, got ${sentence.length}: ${JSON.stringify(sentence)}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence + "\n", "utf8");
console.log(`Wrote entry.txt, ${sentence.length} characters.`);
