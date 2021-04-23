---
layout: layouts/entry/index.njk
title: Intro to Git
date: 2021-04-23
tags:
  - git
nextEntryTitle: Committing Code
---

Git is a program for versioning and iterating code. It’s often referred to as “version control.” The way it works can seem complex or daunting at first. Don’t be too put off &mdash; once you get the hang of its core concepts, it becomes intuitive and helpful.

## The Problem Git Solves

When one person is writing code, there’s no problem with them changing, adding, and deleting things whenever they feel. When people start working on the same product, that becomes an issue: they both might change one file in different ways, creating two conflicting versions. Or they might change different files, and fall out of sync. Git solves those issues by tracking, comparing, and merging changes algorithmically. Services like GitHub move this functionality into the cloud, and add features of their own.

## Repositories

Codebases being tracked with git are called repositories, and are usually stored in the cloud. At Upstatement, we use GitHub to host our repos. The code on GitHub is known as the “single source of truth”: we can all clone it and make changes independently, but those copies are inconsequential until they’ve been uploaded back into the source of truth.

### Cloning a Repository

The act of copying a repo from the cloud to your machine is called cloning, since you’re not only downloading files, but creating a new entity based on an original, that will grow in a new way. Cloning is usually done in terminal. GitHub has a handy button for copying the command, so you’ll almost never have to type the whole thing out. It is written like so:

```shell
git clone <repository-url>
```

> You’ll notice that all git related commands start with `git`.

## Branches

Repos contain numerous instances of the codebase, called branches. Branches are isolated groups of chronologically ordered commits. A commit marks a significant change in a repo’s history. Each branch can contain incrementally or entirely different versions of the codebase, depending on what’s been committed to it. When a developer wants to make changes to a codebase, they create a new branch from an existing one, give it a relevant name, and start committing changes to it.

Repos will always have at least one branch that represents the latest stable iteration of the codebase, usually named `develop`, `master`, or `main`. Most often, you will branch off of the default to implement changes, but in some cases, you will branch off the work of somebody else instead.

### Switching Branches With `checkout`

Switching branches is called “checking out.” When you checkout to a branch, the contents of all of the files in your local repository are immediately modified to match their versions in that branch. **You cannot checkout to another branch if you have un-committed or unsaved changes.** That keeps you from accidentally losing work.

To checkout to an existing branch, invoke the `checkout` command followed by the branch name:

```shell
git checkout <branch-name>
```

To create a new branch based on the one you’re currently on, add the `-b` flag before the branch name:

```shell
git checkout -b <new-branch-name>
```

When creating a new branch with `-b`, you will also immediately be switched from the old branch to the new one.
