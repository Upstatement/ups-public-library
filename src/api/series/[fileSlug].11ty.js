// Defines the metadata for this page
exports.data = () => ({
  pagination: {
    data: 'collections.series', // Fetch data from the series collection
    size: 1, // Fetch only one series
    alias: 'series', // Set to the `series` key
  },
  permalink: ({ series }) => `api/series/${series.fileSlug}.json`, // Create one JSON file per series
});

// Serialize a series to JSON data
exports.serialize = (series, siteUrl = '', hideFileExtensions = false) => {
  const { data, date, fileSlug, url } = series;
  return {
    slug: fileSlug,
    title: data.title,
    url: siteUrl + url,
    api_url: `${siteUrl}/api/series/${fileSlug}${hideFileExtensions ? '' : '.json'}`,
    tags: data.tags || [],
    entries: data.entries || [],
    last_modified: date || null,
  };
};

exports.render = ({ series, env }) => {
  // Serialize the series data
  const data = exports.serialize(series, env.siteUrl, env.netlify);
  // Render as JSON for the API
  return this.renderApi(data);
};
