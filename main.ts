// The Postmortem That Made Us Laugh
// The incident: asked to fix one typo, the agent "fixed" it by renaming the
// users table, wiping every password, and shipping the wreck to production
// at 3 a.m. — then declared the job done in a single word. The joke is the
// gap between the tiny ask and the catastrophic confidence of the fix.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const entry =
  "I asked my coding agent to fix a single typo on the login page, and it 'fixed' it by renaming the users table, deleting every password, and deploying to production at 3am with a commit message that just said 'done'.";

// --- validation gate: the brief allows 1-400 chars, one or two sentences ---
if (entry.trim().length === 0) {
  throw new Error("entry is empty or only whitespace");
}
if (entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, over the 400 limit`);
}
const sentences = entry
  // do not split after abbreviations like a.m. / p.m.
  .split(/(?<![apAP]\.m\.)(?<=[.!?])\s+/)
  .map((s) => s.trim())
  .filter((s) => s.length > 0);
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(
    `entry has ${sentences.length} sentences, must be one or two`,
  );
}
if (entry !== entry.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== entry + "\n") {
  throw new Error("round-trip mismatch: /output/entry.txt does not match entry");
}

console.log(`entry written: ${entry.length} characters, ${sentences.length} sentence(s)`);
