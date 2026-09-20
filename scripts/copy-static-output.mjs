// Copies the prerendered static site from .output/public into dist/client,
// which is where static hosts expect the built site. Idempotent.
import { cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, ".output/public");
const target = resolve(root, "dist/client");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

if (source === target) {
  console.log("[copy-static-output] source and target are identical; nothing to do.");
  process.exit(0);
}

if (!(await exists(source))) {
  if (await exists(target)) {
    console.log("[copy-static-output] .output/public missing but dist/client exists; skipping.");
    process.exit(0);
  }
  console.error("[copy-static-output] No build output found at .output/public.");
  process.exit(1);
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
console.log("[copy-static-output] Copied .output/public -> dist/client");
