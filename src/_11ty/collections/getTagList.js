module.exports = collection => {
  // Use a Set to filter out duplicate values
  const tagSet = new Set();

  // Loop through all entries and crawl all tag values
  collection.getAll().forEach(item => {
    if ('tags' in item.data) {
      const tags = item.data.tags.filter(item => !['entries', 'series', 'featured'].includes(item));

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  const tagList = [...tagSet];
  return tagList;
};
