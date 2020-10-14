// Returns an array of solutions filtered by page slug
module.exports = (arr, slug) => {
  const filtered = arr.filter(c => c.data.solutions && c.data.solutions.includes(slug));
  return filtered;
};
