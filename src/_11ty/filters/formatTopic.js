// Returns the formatted version of camelCased topic tags

// Handle capitalization with a custom filter that only
// edits the first letter (nunjucks lowercases subsequent chars)
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

module.exports = (topic, capitalized = true) => {
  const formattedTopics = {
    css: 'CSS',
    scss: 'SCSS',
    html: 'HTML',
    js: 'JS',
    javaScript: 'JavaScript',
    git: 'git',
    terminal: 'terminal',
  };

  const formatted = formattedTopics[topic] || topic;

  return capitalized ? capitalize(formatted) : formatted;
};
