# Upstatement Public Library

todo: point to upl (currently points to playbook)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d819e1c-bc96-4eae-b9a7-8c551fe63a82/deploy-status)](https://app.netlify.com/sites/ups-playbook/deploys)

A playbook for Upstatement technology decision making built with [Eleventy](https://www.11ty.dev/)

Forked from [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog)

View the [Eleventy Docs](https://www.11ty.dev/docs/)

## Getting Started

1. Install dependencies

   ```shell
   nvm install && npm install
   ```

2. Clone the `.env` to `.env.development`

   ```shell
   cp .env.example .env.development
   ```

3. Build and host locally for local development (with hot-reload)

   ```shell
   npm start
   ```

   Or in debug mode:

   ```shell
   npm run debug
   ```

   Or build the site into `_site`:

   ```shell
   npm run build
   ```

## How To Contribute

Playbook documents projects, technologies, and solutions in markdown files.

### Creating a new project, technology, or solution page via CLI

In your terminal, run the following command and follow the prompts.

```sh
npm run temples
```

**Note:** `name` should be readable English while `filename` should be slugified

### Committing

There is a `script` that runs on `pre-commit` called `last_modified` (found in the `/scripts` directory). This updates any files that you have edited to have their `last modified` date set to today. These changes are not added to your existing commit, and should be committed separately as a `chore: update last modified dates` commit.

## API

Our API is composed of static JSON files created as part of our build process. These can be accessed at the `/api/*` path.

Since they are just static JSON files, running the site locally requires the `.json` file extension to be added to the end of your path.

To get around this limitation, we are using Netlify's `_redirects` file to rewrite the URLs to remove the extension.

If you'd like to see this behavior locally, you can install the [Netlify CLI](https://www.netlify.com/products/dev/) and run the `start:netlify` command from the root directory.

```sh
npm run start:netlify
```

## Directory Structure

```text
.
├── src                     # Most of the site lives in here
│   ├── _11ty               # Where some collections are created (pulled into the eleventy config)
│   ├── _data               # Site data lives here, where external data can be pulled in
│   ├── _includes           # Template layouts & partials
│   ├── api                 # We can add JSON endpoints here
│   ├── assets              # Fonts, images, SCSS, and JS live here
│   ├── feed                # We can expose an XML feed here
│   ├── pages               # Pages of the site live here
│   ├── projects            # Project data (markdown files)
│   ├── solutions           # Solution data (markdown files)
│   └── technologies        # Technology data (markdown files)
├── .eleventy.js            # Eleventy config
└── package.json            # You know what it is
```
