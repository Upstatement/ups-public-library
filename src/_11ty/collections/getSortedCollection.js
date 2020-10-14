module.exports = (collectionApi, tag) => {
  const collection = collectionApi.getFilteredByTag(tag);

  collection.sort((a, b) => {
    const aTitle = a.data.title;
    const bTitle = b.data.title;
    return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
  });

  return collection;
};
