// Returns an array of technologies filtered by page slug
module.exports = (arr, slug) => {
  const filtered = arr.filter(c => c.data.technologies && c.data.technologies.includes(slug));
  return filtered;
};
