// Defines the metadata for this page
exports.data = () => ({
  pagination: {
    data: 'collections.collections', // Fetch data from the collections collection
    size: 1, // Fetch only one collection
    alias: 'collection', // Set to the `collection` key
  },
  permalink: ({ collection }) => `api/collections/${collection.fileSlug}.json`, // Create one JSON file per collection
});

// Serialize a collection to JSON data
exports.serialize = (collection, siteUrl = '', hideFileExtensions = false) => {
  const { data, date, fileSlug, url } = collection;
  return {
    slug: fileSlug,
    title: data.title,
    url: siteUrl + url,
    api_url: `${siteUrl}/api/collections/${fileSlug}${hideFileExtensions ? '' : '.json'}`,
    tags: data.tags || [],
    entries: data.entries || [],
    last_modified: date || null,
  };
};

exports.render = ({ collection, env }) => {
  // Serialize the collection data
  const data = exports.serialize(collection, env.siteUrl, env.netlify);
  // Render as JSON for the API
  return this.renderApi(data);
};
