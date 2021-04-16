module.exports = collection => {
  const topicSet = new Set();
  collection.getAll().forEach(item => {
    if ('topic' in item.data) {
      let topics = [item.data.topic];

      topics = topics.filter(item => {
        switch (item) {
          // this list should match the `filter` list in topics.njk
          case 'all':
          case 'html':
          case 'css':
          case 'scss':
          case 'git':
          case 'terminal':
            return false;
        }

        return true;
      });

      for (const topic of topics) {
        topicSet.add(topic);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  const topicList = [...Set];
  return topicList;
};
