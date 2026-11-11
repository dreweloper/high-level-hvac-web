---
name: new-issue
description: Create a new GitHub issue with the project's format, labels and milestone, and add it to the board.
argument-hint: <short description of the task>
disable-model-invocation: true
---

Create an issue for: $ARGUMENTS

1. List the available labels and milestones (`gh label list`, `gh api repos/dreweloper/high-level-hvac-web/milestones --jq '.[].title'`). Choose the ones that fit.
2. Draft it in English:
   - Title: Conventional Commits format, `<type>(<optional scope>): <summary>` (`feat`, `fix`, `chore`, `ci`, `docs`, `refactor`…; content work → `feat(content)` / `fix(content)`).
   - Body: `## Tasks` as a checklist and, when useful, `## Acceptance criteria`. Keep it short.
3. Show the draft (title, labels, milestone, body) and **wait for confirmation**.
4. `gh issue create --title ... --label ... --milestone ... --body ...`, then `gh project item-add 5 --owner dreweloper --url <issue-url>`.
5. Reply with the issue URL.
