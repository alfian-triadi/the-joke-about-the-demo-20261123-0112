import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent, for the demo.
// The joke: the agent "fixes" the bug live, in code that was never real.
const joke =
  "My coding agent fixed the demo bug live — in a file that doesn't exist, in a repo I never cloned, and the audience applauded.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
