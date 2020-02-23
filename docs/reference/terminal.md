# Terminal

## Commands

### `man`

If you ever want to learn more about a command, you can read its manual right in the terminal using the `man` command.

```sh
# eg:
man cd
```

To exit the documentation, simply press `q` (for quit)

### `cd`

```sh
cd Path/To/Folder
```

Change your current directory to the given path.

### `ls`

Show a list of all the folders and files in the current directory.

### `open`

```sh
# Open a folder in Finder.
open Path/To/Folder

# Open a file with the default program (same as double clicking).
open Path/To/File.abc

# Open a folder or file with a specific app.
[app name] Path/To/FolderOrFile
```

### `mkdir`

```sh
# Creates a directory at the specified location, using the name at the end of the path.
mkdir Path/To/NewFolderName
```

### `touch`

```sh
# Creates a new file at the specified location, using the name and extension at the end of the path.
touch Path/To/NewFileName.abc
```

### `echo`

```sh
# Repeats the input back to you.
echo a few words

# Immeditely add input to the end of a target file.
# Creates one if there is none at the specified destination.
echo "this is the end of the file" > /Path/To/File.txt
```

### `&&`

```sh
# Do the first command, then immediately do the second.
mkdir /newFolder && cd /newFolder
```

### `>`

```sh
# Redirect the output of a command to a given path.
echo anything > /Path/To/File.txt
```

### `rm`

```sh
# Delete something. Forever. IRREVERSIBLE. Will ask for confirmation.
rm -i /file-you-will-never-see-again.txt

# Immediately, permanently delete a folder and everything in it
rm -rf /FolderToObliterate
```

## Shortcuts
