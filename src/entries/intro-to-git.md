---
layout: layouts/entry/index.njk
title: Intro to Git
date: 2021-01-17
tags:
  - git
  - basic
---

Git is a program for versioning and iterating code. It's often referred to as "version control." The way it works can seem complex or daunting at first. Don't be too put off &mdash; once you get the hang of its core concepts, it becomes intuitive and helpful.

## The Problem Git Solves

When one person is writing code, there's no problem with them changing, adding, and deleting things whenever they feel. When people start working on the same product, that becomes an issue: they both might change one file in different ways, creating two conflicting versions. Or they might change different files, and fall out of sync. Git solves those issues by tracking, comparing, and merging changes algorithmically. Services like GitHub move this functionality into the cloud, and add features of their own.

## Repositories

Codebases being tracked with git are called repositories, and are usually stored in the cloud. At Upstatement, we use GitHub to host our repos. The code on GitHub is known as the "single source of truth": we can all clone it and make changes independently, but those copies are inconsequential until they've been uploaded back into the source of truth. The act of downloading a repo from the cloud onto your machine is called **cloning,** since you're not just downloading one set of files, but information on the entire history of the repo.

#### Cloning a repository

Repositories can be cloned using the terminal. GitHub has a handy button for copying the command, so you'll almost never have to type the whole thing out. It is written like so:

```shell
git clone <repository-url>
```

You'll notice that all git related commands start with `git`. Easy to remember!

## Commits

Git is called version control because it marks points in the code's evolution as commits. Commits are like batch-saves. Once a developer completes and saves an incremental change to a project, they can bundle and mark all of the file changes that comprise it into a single commit.

Commits, and the changes that they contain, are made and grouped by you. You must also add a short message describing what the changes do. Git stores every commit indefinitely, changes can be traced all the way back to when they were introduced. Git also stores who made them, when, and other useful metadata. Terminal and GitHub can be used to view all of that information.

## Creating a Commit

Once you have made and saved changes, the first thing to do is use git's `add` command to add them to the next commit. This is called "staging". The command accepts a path to a file or folder. You can use it more than once to specify multiple changes in different files or folders.

```shell
git add [path]
```

Alternatively, you can type a `.` to stage every changed file at once (only do so if you're confident you're aware of everything that's been changed).

```shell
git add .
```

Now your changes are ready to be finalized into a commit. Do so by invoking the `commit` command and adding a short message:

```shell
git commit -m "commit message describing changes"
```

Commits are a catalog of a project's history, so they should be meaningful milestones. Ideally, every commit should represent an incremental change that can be safely reverted to, in which everything works. Commits can be as small as you like, even down to fixing a typo, but be wary of letting them get large.

### Writing commit messages

#### Wording

Commit messages should be written in the imperative mood, like you're giving an order in the present tense. They should read like "When merged, this commit will [commit message]".

💯 `remove link underlines sitewide`

🆗 `removes link underlines sitewide`

❌ `removing link underlines sitewide`

🤮 `removed link underlines sitewide`

#### Long commit messages

If you need to write a long commit message, you can split it into a title and a body by omitting the `-m` from the `commit` command. Your terminal's built-in text editor will then open, and you'll write the message there.

```shell
git commit
```

Now you can write a short title (must be less than 72 characters) and a long body. To separate the two, simply add an empty line between them.

## Branches

Repos contain numerous instances of the codebase, called branches. Branches are isolated, chronologically ordered commits. Each one can contain incrementally or entirely different versions of the codebase, depending on what's been committed to it. When a developer wants to make changes to a codebase, they create a new branch from an existing one, give it a relevant name, and start committing changes to it.

Repos will always have at least one branch that represents the latest stable iteration of the codebase, usually named `develop`, `master`, or `main`. Most often, you will branch off of the default to implement changes, but in some cases, you will branch off the work of somebody else instead.

### Switching branches with `checkout`

Switching branches is called "checking out". When you checkout to a branch, the contents of all of the files in your local repository are immediately modified to match their versions in that branch. **You cannot checkout to another branch if you have un-committed or unsaved changes.** That keeps you from accidentally losing work.

To checkout to an existing branch, invoke the `checkout` command followed by the branch name:

```shell
git checkout <branch-name>
```

To create a new branch based on the one you're currently on, add the `-b` flag before the branch name:

```shell
git checkout -b <new-branch-name>
```

When creating a new branch with `-b`, you will also immediately be switched from the old branch to the new one.

## Pushing, Pulling, & Merging

Local changes are synced to the remote repository (the one in GitHub) using actions called pulling, pushing, and merging.

### Pushing

Changes you've made locally can be uploaded to the repo by pushing. Doing so will upload and apply your local changes to the remote version.

```shell
git push
```

#### Pushing a branch for the first time

If the branch you're on does not exist in GitHub yet, git will prompt you to set up a remote version with an ominous message:

```shell
fatal: The current branch <branch-name> has no upstream branch.
To push the current branch and set the remote as upstream, use

git push --set-upstream origin <branch-name>
```

Just copy and paste the last line.

### Pulling

If a branch on your local machine is out of date, you can update it with the pull command. Doing so will download and apply any commits that you don't have to your local branch.

```shell
git pull
```

### Merging

Branches are combined by merging them together. The process is carried out automatically by git. You specify a source and a destination, and git will algorithmically interleave all of the commits from both branches. The source branch will remain unchanged, and the destination branch will be updated. You can safely delete a source branch after it's been merged.

Merging can be done in GitHub, or from the terminal. At Upstatement, we usually do it in GitHub.

#### Merge conflicts

Sometimes two branches contain conflicting changes that git can't automatically resolve, causing a merge conflict. We try to mitigate them by planning, isolating, and keeping branches small, but they're ultimately unavoidable.

When GitHub encounters a merge conflict, it will prevent merging until you update the source branch to remove the conflict, or make the resolution in GitHub's web editor.

---

For more information, see the official [git documentation](https://git-scm.com/docs).
