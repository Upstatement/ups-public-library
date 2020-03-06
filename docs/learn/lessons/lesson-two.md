# Intro to Git

## What is git?

Git is a program for versioning and iterating code. It's often referred to as "version control." The way it works can seem complex at first, and it has with tons of features. But, once you get the hang of its core concepts, it becomes intuitive and helpful.

### Why do we need git?

When one person is writing code, there's no problem with them changing, updating, and deleting things whenever they feel. Being in complete control, and the only person who needs to understand what's going on, they can carry on however they please. But, when people start collaborating on code, that approach falls apart: two people might change one file in different ways, or they may both change different files, and therefore fall out of sync. Git makes code collaboration clean and maintainable.

## Repositories

Codebases in git are called **repositories** (or repos), and are stored in the cloud. At Upstatement, we use GitHub to host our repos. The code on GitHub is known as the "single source of truth": we can all clone it and make changes independently, but those copies are inconsequential until they've been uploaded back into the source of truth. The act of downloading a repo from the cloud onto your machine is called **cloning**, since you're not just downloading one set files, but information on the entire history of the repo.

GitHub has a handy button for copying the command to clone a repo, so you'll almost never have to type this one. It looks something like this:

```sh
# All git commands are prefaced with "git"
git clone [repo-url]
```

## Commits

Git is called version control because it uses commits to mark points in the code's evolution. Commits are like batch-saves. Once a developer completes an incremental change to an app or website, they bundle all of the file changes that comprise it into what's called a **commit.** Commits and the changes that they contain are made and grouped manually, and also contain a short message describing what they do. Git stores information on every commit that gets made, so we can trace changes all the way back to when they were introduced, who made them, and what the code was like before they were made. We use GitHub to view all of that information.

> Because git commits are a catalog of a project's history, they should be meaningful milestones. Ideally, every commit should represent an incremental change that can be safely reverted to, in which everything works. Commits can be as small as you like, even down to fixing a typo, but be wary of letting them get large.

```sh
# The add command accepts a path to a folder or file
# that has been changed, and stages it to be included
# in the next commit.
# You can use the command more than once to stage
# multiple folders or files.
git add [path]

# Or, you can stage everything that has been changed:
git add .

# Finally, to commit all staged changes:
git commit -m "commit message"
```

### How to word a commit message

Commit messages should be written with imperative language, like you're giving an order in the present tense. They should read like "When merged, this commit will [do xyz]".

:100: `remove link underlines sitewide`

:ok: `removes link underlines sitewide`

:x: `removing link underlines sitewide`

🤮 `removed link underlines sitewide`

> Commit messages can contain a title and a body. The title must be less than 72 characters. The title and body should be separated by an empty line.

```sh
# To write a commit message with a body, simply use the
# commit command with no options. This will open a text
# editor where you can type a longer message. Saving and
# closing the editor completes the commit.
git commit
```

## Branches

Repos contain numerous instances of the codebase. Each instance is called a **branch.** Branches are isolated from each other, and can contain incrementally or entirely different versions of files (though we don't ever want too much diversion). The default branch that new ones are based off of is usually named `develop` or `master`, and should always be a working, stable version of the codebase. When a developer wants to make changes, they create a new branch based off of an existing one, give it a relevant name, and carry on there.

### Switching branches with `checkout`

Switching branches is called "checking out". When you check out to a branch, the contents of all of the files in your local repository are updated to match their versions in that branch. **You cannot checkout to another branch if you have un-commited changes.** That keeps you from accidentally overriding work in progress.

```sh
# To download all branches on GitHub
git fetch

# To switch to an existing branch
git checkout [branch-name]

# To create and switch to a new branch,
# based on the one you're currently in
git checkout -b [branch-name]
```

## Pulling, Pushing, and Merging

Local changes are synced to GitHub using actions called pulling, pushing, and merging.

### Pulling

To download a remote branch from GitHub that you don't yet have, simply checkout to it, which pulls automatically. If you do have the branch, but you're missing updates that someone else has made, you can **pull,** which automatically downloads and applies the changes that you don't have.

```sh
# Update the local version of your current branch to match the remote
git pull
```

### Pushing

Changes you've made locally can be uploaded to the repo by **pushing.** If the branch you're in does not exist in GitHub yet, it will be automatically created. If it does exist, and you've just added some more commits, the local changes will get applied to the remote.

```sh
# Update the remote version of your current branch with your local changes
git push
```

Anyone can pull down a branch, make changes, and commit and push them. This is how we collaborate on code!

### Merging

When it's time, branches can be combined by **merging** them together. Merging is carried out automatically by git. You specify a source and a destination, and git intelligently adds up all of the commits from the source branch onto the end of the destination branch. The source branch remains unchanged, while the destination branch now contains all of the work done within it. You can delete a source branch once it's merged.

```sh
# Check out to the destination branch
git checkout [destination-branch]

# Bring changes from source into the destination branch
git merge [source-branch-name]
```

#### Merge conflicts

Git is smart, but sometimes two branches make conflicting changes that it doesn't know how to resolve. That's called a merge conflict. This might also happen if you make changes to a local version of a branch, someone else pushes conflicting changes to the remote version, and then you try to pull or push. We try to mitigate this by smartly separating work, and keeping branches small, but it's ultimately unavoidable. When GitHub encounters a merge conflict, it will either prevent merging altogether until you manually resolve it with GitHub's web editor. If you're using terminal to merge branches and git encounters a conflict, it will go as far as it can and then ask you to open your editor to resolve it.

### And much, much more

Those are just the basics. Git is extremely powerful, and its inner workings go quite deep. While the above is more than enough to get you going, you can do and learn even more by using the terminal. If you are ever curious or run into an issue, try asking someone, Googling, or checking out the official [Git documentation](https://git-scm.com/docs).
