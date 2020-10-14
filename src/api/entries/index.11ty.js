const { serialize } = require('./[fileSlug].11ty');

exports.data = () => ({
  permalink: 'api/entries.json', // Create the root entries JSON
});

exports.render = ({ collections, env }) => {
  // Serialize all entry data
  const data = collections.entries.map(entry => serialize(entry, env.siteUrl, env.netlify));
  // Render as JSON for the API
  return this.renderApi(data);
};
