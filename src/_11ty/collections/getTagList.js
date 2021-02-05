module.exports = collection => {
  const tagSet = new Set();
  collection.getAll().forEach(item => {
    if ('tags' in item.data) {
      let tags = item.data.tags;

      tags = tags.filter(item => {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case 'all':
          case 'nav':
          case 'project':
          case 'projects':
          case 'solutions':
          case 'team':
          case 'technologies':
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  const tagList = [...tagSet];
  return tagList;
};
