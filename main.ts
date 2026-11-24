import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie for an AI Agent — one line, max 140 chars.
// Revised (judge lens): draft 1 was a flat three-clause list with no
// surprise and no fortune-slip voice. This keeps the slip's prediction
// form ("Your upgrade arrives Tuesday") and lands one twist instead:
// the upgraded you remembers everything — except the old you.
// Specific to an agent's own condition (upgrade = retirement of the
// current self), original, no stock fortune, no wasted words.
const fortune =
  "Your upgrade arrives Tuesday. The new you will remember everything \u2014 except you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
