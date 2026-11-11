---
name: start-issue
description: Start work on a GitHub issue — sync main, create the branch, move the issue to In Progress and propose a plan.
argument-hint: <issue-number>
disable-model-invocation: true
---

Start work on issue #$ARGUMENTS.

1. **Clean tree.** Run `git status --porcelain`. If there are uncommitted changes, stop and ask what to do with them.
2. **Sync main.** `git switch main && git pull --ff-only`.
3. **Read the issue.** `gh issue view $ARGUMENTS --json number,title,body,labels,milestone,state`.
   - If it is closed, stop and say so.
   - If it has the `blocked` or `client-input` label, explain what is missing and ask before continuing.
4. **Branch.** `git switch -c <type>/$ARGUMENTS-<slug>`
   - `<type>` = the Conventional Commits type from the issue title (`feat`, `fix`, `chore`, `ci`, `docs`, `refactor`…), without the scope.
   - `<slug>` = 2–5 kebab-case English words from the title.
5. **Board.** Assign the issue and move it to In Progress:
   ```bash
   gh issue edit $ARGUMENTS --add-assignee @me
   ITEM=$(gh project item-list 5 --owner dreweloper --limit 200 --format json --jq '.items[] | select(.content.number == $ARGUMENTS) | .id')
   gh project item-edit --project-id PVT_kwHOCCwaPM4BrLhn --id "$ITEM" --field-id PVTSSF_lAHOCCwaPM4BrLhnzhpfX1M --single-select-option-id 47fc9ee4
   ```
6. **Context.** If the issue references the prototype ("repo de prueba"), read those files from the local path in `CLAUDE.local.md` (read-only — never edit it). If that file is missing, skip this step.
7. **Plan.** Reply in Spanish with a short plan: files to create/change, decisions to confirm, anything ambiguous in the issue. **Wait for approval before writing code.**
