---
layout: layouts/entry/index.njk
title: Intro to Terminal
date: 2021-01-16
tags:
  - terminal
  - basic
---

Most of the time, we interact with computers through graphical interfaces. We can also use the terminal to interface with them through text-based commands. Since writing code is text based, and doesn't depend on a particular program, the terminal is our tool of choice for working on websites.

## How it Works

Operating systems are programs, and we can use code to interface with them. MacOS lets you use [`shell scripts`](https://en.wikipedia.org/wiki/Shell_script) to give it instructions through the terminal. When we issue commands in the terminal, we are creating and executing tiny scripts for the operating system to run in real time.

Open up terminal (if you can't find it, hit ⌘ + SPACE, then type in 'terminal'). You should see a black window with text that reads something like this:

```bash
Your-MacBook-Pro:Your-Username ~ $ _
```

This is your computer's interactive shell. There are multiple kinds of shells, and they come with slightly different sets of features. Your system likely uses either `bash` or `zsh` by default.

> To check your shell, type `echo $0`.

## Navigating the Filesystem

In terminal, we're always positioned somewhere within our computer's filesystem. We call that current position the "working directory." The command for changing your working directory is `cd` (for change directory), followed by a path. Here are the ingredients for constructing paths:

#### `.`

A period refers to the current directory.

#### `../`

Two periods followed by a slash refers to the enclosing folder of your current directory.

#### `/`

A slash **preceeded by nothing** is a shortcut to your system root (Machintosh HD).

#### `~`

A tilde **preceeded by nothing** is a shortcut for your home folder (usually named for your account username).

#### `/folder/`, `/folder`, `/file.ext`

Use text within or at the end of a path to refer to folders and files by name.

#### Examples

Use slashes after folder names to navigate within the preceeding folder.

```bash
~/ $ cd Sites/an-awesome-website
~/Sites/an-awesome-website $ _
```

No matter where you are, you can start a path with a shortcut character to make it absolute.

```bash
~/Downloads/Some/Folder $ cd ~/Sites/an-awesome-website
~/Sites/an-awesome-website $ _
```

You can chain ../ to go up multiple times.

```bash
~/Sites/an-awesome-website $ cd ../../Documents
~/Documents $ _
```

## Basic Commands

#### `cd <folder>`

Change your current directory to the given path.

#### `ls`

Show a list of all the folders in the current directory.

#### `open <folder>`

Open a folder in Finder.

#### `open Path/To/File.abc`

Open a file with the default program (same as double clicking).

#### `<app name> <folder or file>`

Open a folder or file with a specific app.

#### `mkdir <folder or file>`

Creates a directory at the specified location, using the name at the end of the path.

#### `touch <filename>`

Creates a new file at the specified location, using the name and extension at the end of the path.

#### `cp <folder or file> <folder or file>`

Copy and paste the first argument to the second argument.

#### `echo anything`

Repeats the input back to you.

#### `command & command`

Do both commands simultaneously.

#### `command && command`

Do the first command, then immediately do the second once complete.

#### `command ><folder or file>`

Redirect the output of a command to a given path.

---

These are the basics. There are myriad commands that come with your shell, and you can easily create complex scripts by chaining them together. In addition, you can install command line interfaces (CLI) to add more commands, and increase the amount you can accomplish within terminal.

[Git](/references/#git) is one such CLI that is a core part of contributing to websites and other shared codebases.
