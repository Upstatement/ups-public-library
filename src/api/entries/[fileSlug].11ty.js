// Defines the metadata for this page
exports.data = () => ({
  pagination: {
    data: 'collections.entries', // Fetch data from the entries collection
    size: 1, // Fetch only one entry
    alias: 'entry', // Set to the `entry` key
  },
  permalink: ({ entry }) => `api/entries/${entry.fileSlug}.json`, // Create one JSON file per entry
});

// Serialize a entry to JSON data
exports.serialize = (entry, siteUrl = '', hideFileExtensions = false) => {
  const { data, date, fileSlug, url } = entry;
  return {
    slug: fileSlug,
    title: data.title,
    url: siteUrl + url,
    api_url: `${siteUrl}/api/entries/${fileSlug}${hideFileExtensions ? '' : '.json'}`,
    link: data.link || '',
    tags: data.tags || [],
    collection: data.collection || [],
    series: data.series || [],
    last_modified: date || null,
  };
};

exports.render = ({ entry, env }) => {
  // Serialize the entry data
  const data = exports.serialize(entry, env.siteUrl, env.netlify);
  // Render as JSON for the API
  return this.renderApi(data);
};
