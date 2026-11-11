# High Level HVAC — website

Marketing site for an HVAC company in South Carolina (USA). Astro, bilingual EN/ES, light/dark themes, deployed on Cloudflare.

> Minimal version. Stack, structure and commands get filled in as issues land (see issue #5).

## Language
- Everything in the repo is in **English**: code, comments, docs, commit messages, PR titles and bodies, new issues.
- Existing issues are in Spanish; leave them as they are.
- Talk to the user in **Spanish**.

## Workflow
- Source of truth: GitHub issues + project board #5. One issue = one branch = one PR.
- Skills: `/start-issue <n>` → implement → `/verify` → `/ship` (opens the PR prefilled in the browser; the user creates it) → user reviews preview and squash-merges → `/finish-issue`. `/new-issue` adds work.
- Branches: `<type>/<issue>-<slug>` off `main`. Never commit or push to `main` directly. Never merge PRs — the user does.
- **No AI attribution anywhere**: no `Co-Authored-By` trailers, "Generated with…" lines or any mention of Claude/AI in commits, PRs, issues, code or docs.
- Never commit without first proposing the message, the files and the exact commands, then waiting for approval (`/ship` does this).
- Commits and PR titles: Conventional Commits (`feat`, `fix`, `chore`, `ci`, `docs`, `content`, `refactor`).
- PRs are minimal: use `.github/pull_request_template.md` and end with `Closes #<n>`.
- Edit **one file at a time**: after changing a file, show the change and wait for the user's approval before touching the next one.
- Quality scripts come in check/fix pairs: `typecheck`, `lint:check` / `lint:fix` (ESLint + Stylelint), `format:check` / `format:fix`, plus `check` (format → lint → typecheck) and `build`.

## Tooling conventions
- **Node:** version pinned in `.nvmrc`; package manager pnpm.
- **Prettier:** `printWidth: 100`, `singleQuote: true`, `trailingComma: "none"`, plus `prettier-plugin-astro`.
- **ESLint** (flat config): `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`, `eslint-plugin-simple-import-sort` (imports and exports as errors), `eslint-config-prettier` last.
- **Stylelint:** `stylelint-config-standard` + `stylelint-config-recess-order` (property order). Class names in kebab-case.
- **TypeScript:** extends `astro/tsconfigs/strict`, plus `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `verbatimModuleSyntax`.
- **VS Code:** format on save with Prettier; ESLint and Stylelint fix-all on save (`editor.codeActionsOnSave`).
