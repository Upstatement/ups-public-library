exports.data = () => ({
  permalink: '_redirects', // Generates _redirects file for Netlify
});

exports.render = ({ collections }) => {
  let redirects = [];

  const { entries } = collections;

  // Generate URLS for entries
  redirects.push('/api/entries');
  entries.forEach(entry => {
    redirects.push(`/api/entries/${entry.fileSlug}`);
  });

  // Generate URLS for collections
  redirects.push('/api/collections');
  entries.forEach(collection => {
    redirects.push(`/api/collections/${collection.fileSlug}`);
  });

  // Generate URLS for series
  redirects.push('/api/series');
  entries.forEach(series => {
    redirects.push(`/api/series/${series.fileSlug}`);
  });

  // Generate URLS for topics
  redirects.push('/api/topics');
  entries.forEach(topic => {
    redirects.push(`/api/topics/${topic.fileSlug}`);
  });

  // Generate rewrite rules for URL -> File URL
  redirects = redirects.map(url => {
    const fileUrl = `${url}.json`;
    return `${url} ${fileUrl} 200!`;
  });

  // Add catchall 404 route rewrite
  redirects.push('/api/* /api/404.json 404!');

  // Generate data for file
  const data = `${redirects.join('\n')}\n`;

  return data;
};
