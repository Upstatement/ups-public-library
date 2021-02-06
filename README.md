# Upstatement Public Library

[![Netlify Status](https://api.netlify.com/api/v1/badges/bee8b1d9-081e-4ca7-8482-95831f48f177/deploy-status)](https://app.netlify.com/sites/ups-public-library/deploys)

A site dedicated to helping web designers learn to code. Compiled by the people of Upstatement. Built with [Eleventy](https://www.11ty.dev/)

> Forked from [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) ([Eleventy Docs](https://www.11ty.dev/docs/))

## Environment Setup

This project uses `nvm` and `npm`.

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

## Contributing Guidelines

You can teach about whatever you like. We ask that you keep your scope moderate. You can go as in-depth as you like, though. We don’t prescribe a voice or homogeny throughout the library. Embrace your own style and allow your own understanding to direct the lesson.

What we ask of you:
- Scaffold your lesson. Doing so will make it easier to follow and retain.
- Attend theory, principals, and best-practices when they present themselves. You don’t need to go into detail — just acknowledge them and their relevance to the lesson. A contrived example would be:
> We’ll extract this operation into a function so that we don’t need to repeat our code each time we use it with different parameters.
- If your lesson has knowledge prerequisites not captured in the Library, please add an epigraph with links to people can reference to attain that knowledge (somewhere like MDN is ideal).
- If your lesson is paired with visuals or functional examples, please include them.

### Creating a new entry via CLI:

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
│   ├── assets              # SCSS and JS
│   ├── collections         # Non-serialized, topically related groups entries
│   ├── entries             # All entries (markdown files)
│   ├── pages               # Pages of the site
│   ├── series              # Serialized groups of entries that build toward a specific outome
│   └── static              # Fonts and images
├── .eleventy.js            # Eleventy config
└── package.json            # You know what it is
```
