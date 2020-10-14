// Returns an array filtered by title
module.exports = arr => {
  arr.sort((a, b) => {
    const aTitle = a.data.title;
    const bTitle = b.data.title;
    return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
  });
  return arr;
};
