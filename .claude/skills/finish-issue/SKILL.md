---
name: finish-issue
description: Clean up after a PR is merged — back to an up-to-date main, delete the branch, confirm the issue closed and suggest the next one.
disable-model-invocation: true
---

1. Get the current branch and its PR: `gh pr view --json number,state,url,closingIssuesReferences`.
   - If the state is not `MERGED`, stop and say so (the user merges PRs, not Claude).
2. `git switch main && git pull --ff-only && git branch -D <branch> && git fetch --prune`.
3. Check that the linked issue is closed (`gh issue view <n> --json state`). If it is still open, say so; usually the PR is missing `Closes #<n>`.
4. **Next issue.** List the open issues in the same milestone (`gh issue list --milestone "<milestone>" --state open --json number,title,labels`). Suggest the lowest-numbered one without `blocked`. If the milestone is finished, suggest the first issue of the next milestone.
