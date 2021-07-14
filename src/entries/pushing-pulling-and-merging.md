---
layout: layouts/entry/index.njk
title: Pushing, Pulling, & Merging
date: 2021-07-09
tags:
  - git
---

Local changes are synced to remote repositories (in GitHub) using actions called pulling, pushing, and merging.

## Pushing

Changes you’ve made locally can be added to the remote repo by `push`ing. After making a commit(s), invoke the command to upload and apply your local changes, making them available to everyone else.

```shell
git push
```

#### Pushing A Branch For The First Time

If the branch you’re on does not exist in GitHub yet, git will prompt you to set up a remote version with an ominous message:

```shell
fatal: The current branch <branch-name> has no upstream branch.
To push the current branch and set the remote as upstream, use

git push --set-upstream origin <branch-name>
```

Just copy and paste the last line.

## Pulling

If a branch on your local machine is out of date, you can update it with the `pull` command. Doing so will download and apply any commits that you don’t have locally.

```shell
git pull
```

## Merging

Branches are combined by merging them together. The process is carried out automatically by git. You specify a source and a destination, and git will algorithmically combine all of the commits from both branches. The source branch will remain unchanged, and the destination branch will be updated. You can safely delete a source branch after it’s been merged.

Merging can be done in GitHub, or from the terminal. At Upstatement, we usually do it in GitHub.

### Merge Conflicts

Sometimes two branches contain conflicting changes that git can’t automatically resolve, causing a merge conflict. We try to mitigate them by planning, isolating, and keeping branches small, but they’re ultimately unavoidable.

When GitHub encounters a merge conflict, it will prevent merging until you update the source branch to remove the conflict, or make a resolution in GitHub’s web editor.
