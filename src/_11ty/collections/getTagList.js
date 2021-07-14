module.exports = collection => {
  // Use a Set to filter out duplicate values
  const tagSet = new Set();

  // Loop through all entries and crawl all tag values
  collection.getAll().forEach(item => {
    if ('tags' in item.data) {
      const tags = item.data.tags.filter(item => !['entries', 'series'].includes(item));

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // Convert the set into an alphabetized (descending) array
  const tagList = [...tagSet].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  return tagList;
};
