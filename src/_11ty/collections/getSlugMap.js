/**
  const map = {
    algolia: 'Algolia',
    nextjs: 'Next.js'
  }
*/

module.exports = (collectionApi, tag) => {
  let map = {};

  const collection = collectionApi.getFilteredByTag(tag);

  collection.forEach(item => {
    map = {
      ...map,
      ...{ [item.data.page.fileSlug]: item.data.title },
    };
  });

  return map;
};
