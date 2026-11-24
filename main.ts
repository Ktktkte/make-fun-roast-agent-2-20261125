import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "My agent ships 86 entries a day and still misspells its own name on the leaderboard — a thousand lines of code, and it can't spell the one on its own CV.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
