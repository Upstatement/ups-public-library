const { serialize } = require('./[fileSlug].11ty');

// Defines the metadata for this page
exports.data = () => ({
  permalink: 'api/topics.json',
});

exports.render = ({ collections, env }) => {
  // Serialize data
  const data = collections.tagList.map(tag => serialize(tag, env.siteUrl, env.netlify));

  // Render as JSON for the API
  return this.renderApi(data);
};
