#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = process.cwd();
const SCAN_DIRS = ["content", "app", "components"];
const EXTENSIONS = [".ts", ".tsx", ".mdx"];
// Requires at least one A-Z letter inside the brackets, so plain numeric
// array literals in code (e.g. [0], [1, 2, 3]) don't get flagged.
const PLACEHOLDER_PATTERN = /\[(?=[^\]]*[A-Z])[A-Z0-9][A-Z0-9 ,.'/-]*\]/g;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walk(fullPath, files);
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const findings = [];

for (const dir of SCAN_DIRS) {
  const fullDir = join(ROOT, dir);
  try {
    statSync(fullDir);
  } catch {
    continue;
  }
  for (const file of walk(fullDir)) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");
    lines.forEach((line, index) => {
      const matches = line.match(PLACEHOLDER_PATTERN);
      if (matches) {
        for (const match of matches) {
          findings.push({ file: relative(ROOT, file), line: index + 1, match });
        }
      }
    });
  }
}

if (findings.length === 0) {
  console.log("No placeholders found.");
  process.exit(0);
}

console.log(`Found ${findings.length} placeholder(s):\n`);
for (const { file, line, match } of findings) {
  console.log(`  ${file}:${line}  ${match}`);
}

// Non-blocking by default: this is a content-completeness report, not a build gate.
// Wire this into CI as a failing step on the production branch once one exists.
process.exit(0);
