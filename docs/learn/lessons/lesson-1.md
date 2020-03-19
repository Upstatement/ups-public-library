# Intro to Terminal

## What is the terminal?

Most of the time, we interact with programs and apps through graphical interfaces. We can also use the terminal to interface with them through text-based commands, and to navigate through folders and files. Since writing code is text based, and doesn't depend on a particular program, the terminal is our tool of choice for creating and working with websites.

## How does it work?

Operating systems are big glorified programs, and we can use code to interface with them. MacOS lets you use [`shell scripts`](https://en.wikipedia.org/wiki/Shell_script) to give it instructions through the terminal. When we issue commands in the terminal, we are creating and executing tiny scripts for the operating system to run in real time.

Go ahead and open up terminal now (if you can't find it, hit `CMD + SPACE`, then type in 'terminal'). You should see a black window with text that reads something like this:

```sh
Your-MacBook-Pro:Your-Username ~ $ _
```

This is your computer's interactive shell. Congratulations: you are now a hacker. :tada:

> There are multiple kinds of shells, and they come with slightly different sets of features. Your system likely uses either `bash` or `zsh` by default. To check your current shell, type `echo $0`.

In the next section, we'll cover the basics of navigating our filesystem and issuing commands.

## Navigating the Filesystem

In terminal, we're always positioned somewhere within our computer's filesystem. We call that current position the "working directory." The command for changing your working directory is `cd` (for change directory), followed by a path. Here are the ingredients for constructing paths:

| Shortcut                           | Meaning                                                                                                        |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `.`                                | A period refers to the current directory.                                                                      |
| `../`                              | Two periods followed by a slash refers to the enclosing folder of your current directory.                      |
| `/`                                | A slash **preceeded by nothing** is a shortcut to your system root (Machintosh HD).                            |
| `~`                                | A tilde **preceeded by nothing** is a shortcut for your home folder (usually named for your account username). |
| `/Folder/`, `/Folder`, `/File.abc` | Use text within or at the end of a path to refer to folders and files by name.                                 |

And here are some examples:

```sh
# Use slashes after folder names to navigate
# within the preceeding folder.
~/ $ cd Sites/an-awesome-website
~/Sites/an-awesome-website $ _
```

```sh
# No matter where you are, you can start a path
# with a shortcut character to make it absolute.
~/Downloads/Some/Random/Ass/Folder $ cd ~/Sites/an-awesome-website
~/Sites/an-awesome-website $ _
```

```sh
# You can chain ../ to go up multiple times.
~/Sites/an-awesome-website $ cd ../../Documents
~/Documents $ _
```

## Some Basic Commands

| <div style="min-width: 18em">Command</div> | Action                                                                                             |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `cd Path/To/Folder`                        | Change your current directory to the given path.                                                   |
| `ls`                                       | Show a list of all the folders in the current directory.                                           |
| `open Path/To/Folder`                      | Open a folder in Finder.                                                                           |
| `open Path/To/File.abc`                    | Open a file with the default program (same as double clicking).                                    |
| `[app name] Path/To/FolderOrFile`          | Open a folder or file with a specific app.                                                         |
| `mkdir Path/To/NewFolderName`              | Creates a directory at the specified location, using the name at the end of the path.              |
| `touch Path/To/NewFileName.abc`            | Creates a new file at the specified location, using the name and extension at the end of the path. |
| `echo anything`                            | Repeats the input back to you.                                                                     |
| `command && command`                       | Do the first command, then immediately do the second.                                              |
| `command >Path/To/FolderOrFile`            | Redirect the output of a command to a given path.                                                  |

These are just the basics. There are myriad commands that come with your shell, and you can easily create complex scripts by chaining them together. In addition, you can install command line interfaces (CLI) to add more commands, and increase the amount you can accomplish within terminal.

[Git](/references/#git) is one such CLI that is a core part of contributing to websites and other shared codebases. We'll learn about it in the next section.
