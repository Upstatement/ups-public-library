# Exercise: Working in Branches

You should have a fresh copy of this site's repository cloned onto your machine, and the directory open in your terminal. If not, navigate there now:

```sh
cd ~/Sites/ups-public-library
```

1. First, let's create a brand new branch for our changes. You'll be adding your signature to a register of Upstatmenters. With that in mind, let's choose a fitting name for our branch:
   ```sh
   # The -b flag tells git that we want to checkout to a new branch
   git checkout -b [your-name]-add-signature
   # Your branch name should look something like "alec-add-signature"
   ```
1. With `checkout -b`, the act of creating and switching to a new branch are the same. Now we can make changes!

   > We're going to assume you've got an editor of choice set up already. For our tutorials, we use VS Code, but if you use another editor like Atom or Sublime, you can swap out `code` for that editor's name.

   ```sh
   # Open the signatures wall in VS Code
   code docs/signatures.md
   ```

   Once the file's open, go ahead and add your name. You can close the editor after saving.

1. Now commit your changes

   ```sh
   git add . && git commit -m "add my name to the wall"
   ```

1. We've saved and committed our changes. Now we can push them up to become tracked by remote version of the branch

   ```sh
   # The first time you push a new branch, you have to tell git
   # that it needs to make a new upstream to track your local version against
   git push --set-upstream origin [your-name]-add-signature

   # Subsequent pushes will work with a simple "git push"
   ```
