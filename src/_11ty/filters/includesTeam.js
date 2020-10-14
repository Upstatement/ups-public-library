// Returns an array of team filtered by page slug
module.exports = (arr, slug) => {
  const filtered = arr.filter(c => c.data.team && c.data.team.includes(slug));
  return filtered;
};
