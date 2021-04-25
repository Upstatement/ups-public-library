module.exports = (collectionApi, tag, sortBy = 'title') => {
  const collection = collectionApi.getFilteredByTag(tag);

  collection.sort((a, b) => {
    const aIdent = a.data[sortBy];
    const bIdent = b.data[sortBy];
    return aIdent < bIdent ? -1 : aIdent > bIdent ? 1 : 0;
  });

  return collection;
};
