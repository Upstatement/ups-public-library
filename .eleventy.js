const fs = require('fs');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-nesting-toc');
const {
  getSlugMap,
  getSortedCollection,
  getTagList,
  indexItems,
} = require('./src/_11ty/collections');
const { htmlDateString, readableDate, split, formatTopic } = require('./src/_11ty/filters');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// https://www.11ty.dev/docs/config/
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPlugin(pluginTOC, {
    wrapperClass: 'entry__toc',
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor);
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
  eleventyConfig.addCollection('entriesMap', collectionApi => getSlugMap(collectionApi, 'entries'));
  eleventyConfig.addCollection('tagList', getTagList);
  eleventyConfig.addCollection('indexItems', indexItems);

  /**
   * Add custom filters
   *
   * @see https://www.11ty.dev/docs/filters/
   */
  eleventyConfig.addFilter('htmlDateString', htmlDateString);
  eleventyConfig.addFilter('readableDate', readableDate);
  eleventyConfig.addFilter('split', split);
  eleventyConfig.addFilter('formatTopic', formatTopic);

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
