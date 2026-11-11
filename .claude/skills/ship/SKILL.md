---
name: ship
description: Propose the commit(s), and once approved commit, push the branch and open a prefilled PR in the browser for the user to review and create.
disable-model-invocation: true
---

1. **Branch.** Get the branch name with `git branch --show-current`. If it is `main`, stop. The issue number is the number after the type prefix (`feat/12-home` → `12`).
2. **Checks.** If `/verify` passed in this session and no files changed since, skip this step. Otherwise read `.claude/skills/verify/SKILL.md` and follow it. Do not continue if any check fails. (CI re-runs the checks on the PR and blocks the merge if they fail.)
3. **Propose the commit.** Review `git status` and `git diff`. Only files related to the issue — never `.env`, `.dev.vars` or secrets. Show the user:
   - the files to stage,
   - the commit message in Conventional Commits, English (`<type>(<optional scope>): <summary>`, imperative, ≤ 72 chars, optional short body),
   - the exact commands (`git add …` and `git commit -m …`).

   If the changes are clearer as several commits, propose each one. **Wait for approval** before running anything.

   Never add AI attribution (`Co-Authored-By`, "Generated with…", any mention of Claude/AI) to commits or the PR.
4. **Commit and push.** Run the approved commands, then `git push -u origin HEAD`.
5. **PR.** Open it prefilled in the browser so the user reviews it before creating it:
   `gh pr create --web --base main --title "<conventional title>" --body "<body>"`
   - Title: Conventional Commits format. It becomes the squash commit on `main`.
   - Body: follow `.github/pull_request_template.md` (Summary, Changes, How to test). Concise, no filler. Last line: `Closes #<number>`, which closes the issue on merge.
6. Tell the user the PR is open in the browser to review and create, and that the Cloudflare preview will show up in its checks.
