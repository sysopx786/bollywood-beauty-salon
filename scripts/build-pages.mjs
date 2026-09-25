#!/usr/bin/env node
/**
 * Static GitHub Pages export.
 * Skips Nitro (Vercel) and prerenders a client SPA into dist/client.
 */
import { spawnSync } from "node:child_process";
import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const env = { ...process.env, GITHUB_PAGES: "1" };

const result = spawnSync(process.execPath, ["scripts/with-app-env.mjs", "vite", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
});

if (result.status !== 0) {
  process.exit(result.status || 1);
}

const candidates = [join(root, "dist", "client"), join(root, ".output", "public"), join(root, "dist")];

function findHtml(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((name) => name.endsWith(".html")).map((name) => join(dir, name));
}

let outDir = candidates.find((dir) => findHtml(dir).length > 0);
if (!outDir) {
  outDir = candidates.find((dir) => existsSync(join(dir, "assets")));
}

if (!outDir) {
  console.error("Pages build produced no client output directory.");
  process.exit(1);
}

const publishDir = join(root, "dist", "client");
if (outDir !== publishDir) {
  rmSync(publishDir, { recursive: true, force: true });
  mkdirSync(publishDir, { recursive: true });
  cpSync(outDir, publishDir, { recursive: true });
  outDir = publishDir;
}

const indexPath = join(outDir, "index.html");
const shellPath = join(outDir, "_shell.html");
if (!existsSync(indexPath) && existsSync(shellPath)) {
  copyFileSync(shellPath, indexPath);
}

if (!existsSync(indexPath) || readFileSync(indexPath).byteLength === 0) {
  console.error("Pages build did not emit index.html.");
  process.exit(1);
}

copyFileSync(indexPath, join(outDir, "404.html"));
writeFileSync(join(outDir, ".nojekyll"), "");
console.log(`GitHub Pages output: ${outDir}`);
