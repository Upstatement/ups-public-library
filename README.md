# Upstatement Public Library

A knowledge base and learning tool for designers at Upstatement who want to write more code.

## Getting Started

1. Clone the repo
1. Ensure you're using the right node version
   ```sh
   nvm use
   ```
1. Install dependencies

   ```sh
   yarn install
   ```

1. Start the dev server

   ```sh
   yarn dev
   ```

   Or, to generate with static assets:

   ```sh
   yarn build
   ```

## Editing Pages

All files are formatted with [Markdown](https://github.github.com/gfm/) (GitHub flavored). You can use HTML as well, though you should try to avoid it unless necessary.

## Adding Pages

All site content lives in the `docs` directory, at the project root.

Within that folder, you can create new pages by creating a folder with your desired page name, and a `README.md` file, which will be served on that route in the application.

> For more info on making pages, see the [vuepress docs](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing).

Powered by [vuepress](https://vuepress.vuejs.org/)
