---
layout: layouts/entry/index.njk
title: Committing Code
date: 2021-02-01
topic:
  - Git
nextEntryTitle: Pushing, Pulling, & Merging
---

Git is called version control because it marks points in the code’s evolution as commits. Commits are like batch-save; each one marks a significant point in a repo’s history. Once a developer completes and saves an incremental change to a project, they can bundle and mark all of the file changes that comprise it into a single commit that marks the change.

## Creating a Commit

Commits, and the changes that they contain, are defined by you. You must also add a short message describing what the changes do. Git stores every commit indefinitely, so changes can be traced all the way back to when they were introduced. Git also stores who made them, when, and other useful metadata. Terminal and GitHub can be used to view all of that information.

Once you have made and saved changes, the first thing to do is use git’s `add` command to add them to the next commit. This is called “staging.” The command accepts a path to a file or folder. You can use it more than once to specify multiple changes in different files or folders.

```shell
git add [path]
```

Alternatively, you can type a `.` to stage every changed file at once (only do so if you’re confident you’re aware of everything that’s been changed).

```shell
git add .
```

Now your changes are ready to be finalized into a commit. Do so by invoking the `commit` command and adding a short message:

```shell
git commit -m "commit message describing changes"
```

Commits are a catalog of a project’s history, so they should be meaningful milestones. Ideally, every commit should represent an incremental change that can be safely reverted to, in which everything works. Commits can be as small as you like, even down to fixing a typo, but be wary of letting them get large.

## Writing Commit Messages

Commit messages should be written in the imperative mood, like you’re giving an order in the present tense. They should read like “When merged, this commit will [commit message].”

💯 `remove link underlines sitewide`

🆗 `removes link underlines sitewide`

❌ `removing link underlines sitewide`

🤮 `removed link underlines sitewide`

### Long Commit Messages

If you need to write a long commit message, you can split it into a title and a body by omitting the `-m` from the `commit` command.

```shell
git commit
```

Your terminal’s built-in text editor will open in response. Now you can write a short title (must be less than 72 characters) and a long body. To separate the two, simply use an empty line.
