// Filters out entries that belong to a collection or series

module.exports = collectionApi => {
  const allItems = collectionApi.getFilteredByGlob([
    'src/entries/*.md',
    'src/collections/*.md',
    'src/series/*.md',
  ]);

  // Get arrays of the entries that belong to collections and series
  // (use a Set to prevent duplicate values)
  const entriesThatBelongToCollections = [
    ...new Set(
      collectionApi
        .getFilteredByGlob('src/collections/*.md')
        .map(collection => collection.data.entries)
        .flat(),
    ),
  ];
  const entriesThatBelongToSeries = [
    ...new Set(
      collectionApi
        .getFilteredByGlob('src/series/*.md')
        .map(collection => collection.data.entries)
        .flat(),
    ),
  ];

  // Filter out entries that belong to a collection or series
  const deDupedItems = allItems
    .filter(item => !entriesThatBelongToCollections.includes(item.data.title))
    .filter(item => !entriesThatBelongToSeries.includes(item.data.title));

  // Sort items alphabetically by title
  deDupedItems.sort((a, b) => {
    const aTitle = a.data.title;
    const bTitle = b.data.title;
    return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
  });

  return deDupedItems;
};
