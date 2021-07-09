// We're using 11ty's "tag" attribute in the frontmatter of files to get
// collections for each topic created automatically. For users, we want
// to present our tags as topics, so the API endpoint and front end URL
// will be "topics" / "topic" respectively, instead.

// Defines the metadata for this page
exports.data = () => ({
  pagination: {
    data: 'collections.tagList', // Fetch data from the tagList collection
    size: 1, // Fetch only one tag
    alias: 'tag', // Set to the `tag` key
  },
  permalink: ({ tag }) => `api/topics/${tag}.json`, // Create one JSON file per tag
});

// Serialize a tag to JSON data
exports.serialize = (tag, siteUrl = '', hideFileExtensions = false) => ({
  title: tag,
  url: `${siteUrl}/topic/${tag}`,
  api_url: `${siteUrl}/api/topics/${tag}${hideFileExtensions ? '' : '.json'}`,
  tags: ['tags'], // Add tags as a "tag" for search purposes
});

exports.render = ({ tag, env }) => {
  // Serialize the tag data
  const data = exports.serialize(tag, env.siteUrl, env.netlify);
  // Render as JSON for the API
  return this.renderApi(data);
};
