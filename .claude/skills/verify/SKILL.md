---
name: verify
description: Run the project's quality checks (format, lint, types, build) and fix what the current changes broke.
disable-model-invocation: true
---

1. `pnpm check` — runs, in order:
   - `format:check` (Prettier) → if it fails, `pnpm format:fix`
   - `lint:check` (ESLint + Stylelint) → if it fails, `pnpm lint:fix`, then fix by hand whatever remains
   - `typecheck` (`astro check`: TypeScript plus `.astro` diagnostics) → fix by hand
2. `pnpm build` — production build. It catches broken pages, content schema errors and missing assets.

After fixing, re-run until everything passes. If a failure is unrelated to the current changes, report it without fixing.

If a script does not exist yet (early issues), skip it and say so.

Finish with a one-line summary per check (✅ / ❌).
