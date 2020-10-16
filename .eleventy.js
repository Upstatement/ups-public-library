const fs = require('fs');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const {
  // getSlugMap,
  getSortedCollection,
  // getTagList
} = require('./src/_11ty/collections');
const {
  htmlDateString,
  // includesSolution,
  // includesTeam,
  // includesTechnology,
  readableDate,
  // sortCollectionByTitle,
} = require('./src/_11ty/filters');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// https://www.11ty.dev/docs/config/
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setUseGitIgnore(false);

  // For rendering JSON API routes
  eleventyConfig.addJavaScriptFunction('renderApi', data => JSON.stringify(data, null, '\t'));

  /**
   * Add custom collections
   *
   * @see https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting
   */
  eleventyConfig.addCollection('sortedEntries', collectionApi =>
    getSortedCollection(collectionApi, 'entries'),
  );
  eleventyConfig.addCollection('indexItems', collectionApi => {
    const allItems = collectionApi.getFilteredByGlob([
      'src/entries/*.md',
      'src/collections/*.md',
      'src/series/*.md',
    ]);

    // Get arrays of the entries that belong to collections and series
    // (use a Set to prevent duplicate values)
    const entriesThatBelongToCollections = [
      ...new Set(
        collectionApi
          .getFilteredByGlob('src/collections/*.md')
          .map(collection => collection.data.entries)
          .flat(),
      ),
    ];
    const entriesThatBelongToSeries = [
      ...new Set(
        collectionApi
          .getFilteredByGlob('src/series/*.md')
          .map(collection => collection.data.entries)
          .flat(),
      ),
    ];

    // Filter out entries that belong to a collection or series
    const indexItems = allItems
      .filter(item => !entriesThatBelongToCollections.includes(item.data.title))
      .filter(item => !entriesThatBelongToSeries.includes(item.data.title));

    // Sort items alphabetically by title
    indexItems.sort((a, b) => {
      const aTitle = a.data.title;
      const bTitle = b.data.title;
      return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
    });

    return indexItems;
  });

  /**
   * Add custom filters
   *
   * @see https://www.11ty.dev/docs/filters/
   */
  eleventyConfig.addFilter('htmlDateString', htmlDateString);
  eleventyConfig.addFilter('readableDate', readableDate);
  // eleventyConfig.addFilter('includesSolution', includesSolution);
  // eleventyConfig.addFilter('includesTeam', includesTeam);
  // eleventyConfig.addFilter('includesTechnology', includesTechnology);
  // eleventyConfig.addFilter('sortCollectionByTitle', sortCollectionByTitle);

  /**
   * Add custom watch targets
   *
   * @see https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./bundle/');
  eleventyConfig.addWatchTarget('./src/assets/styles/');
  eleventyConfig.addWatchTarget('./src/pages/');

  /**
   * Copy directories to _site
   *
   * @see https://www.11ty.dev/docs/copy/#passthrough-file-copy
   */
  eleventyConfig.addPassthroughCopy('src/static/img');
  eleventyConfig.addPassthroughCopy('src/static/fonts');
  eleventyConfig.addPassthroughCopy({ bundle: 'assets/scripts' });

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid', '11ty.js'],

    // These are all optional, defaults are shown:
    dir: {
      input: 'src',
    },
  };
};
