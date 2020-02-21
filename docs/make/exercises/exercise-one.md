# Exercise: Setting Up a Repo

Now that we've covered the basics of using terminal and how git works, we know all we need to get started on a project. Let's walk through the process now.

First, let's clone a project repo. We'll use the one for this site.

1. Head over to [https://github.com/Upstatement/ups-public-library](https://github.com/Upstatement/ups-public-library)
1. Click on the green button on the right that reads `Clone or download`, and use the clipboard button to copy the textbox's contents:
   ```sh
   git@github.com:Upstatement/ups-public-library.git
   ```
1. Open up your terminal, and navigate to whichever folder you keep your sites in
   ```sh
   cd ~/Sites
   ```
1. Use git to clone the repository to a new folder in your current directory
   ```sh
   git clone git@github.com:Upstatement/ups-public-library.git
   ```
1. Enter the folder we just cloned
   ```sh
   cd ups-public-library
   ```

All set! We're now set up and ready to start writing code. Next, let's create a branch, and write some commits.
