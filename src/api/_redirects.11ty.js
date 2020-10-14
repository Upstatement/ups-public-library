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
