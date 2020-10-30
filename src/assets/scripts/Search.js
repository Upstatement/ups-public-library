import Fuse from 'fuse.js';
import { getSearchableData } from './utils';

class Search {
  constructor() {
    // https://fusejs.io/
    this.fuse = null;

    // https://fusejs.io/api/options.html#basic-options
    this.fuseOptions = {
      includeScore: true,
      threshold: 0.4,
      keys: [{ name: 'title', weight: 2 }, 'entries', 'collections', 'series', 'tags'],
    };

    this.subscriptions = [];

    this.initFuse();
  }

  async initFuse() {
    this.searchableData = await getSearchableData();

    // const searchableData = await this.fetchSearchableData();
    this.fuse = new Fuse(this.searchableData, this.fuseOptions);

    // Once fuse is initialized, go through subscription queue
    this.subscriptions.forEach(callback => callback(this.fuse));
    // Reset subscription queue
    this.subscriptions = [];
  }

  onFuseLoad(callback) {
    if (this.fuse) {
      // If fuse already loaded, immediately callback
      callback(this.fuse);
    } else {
      // Otherwise, add to subscription queue
      this.subscriptions.push(callback);
    }
  }

  getSearchResults(query) {
    if (!this.fuse) {
      return;
    }

    const results = this.fuse.search(query);
    return results;
  }

  getResultType(result) {
    if (result.tags.includes('entries')) {
      return 'entry';
    } else if (result.tags.includes('collections')) {
      return 'collection';
    } else if (result.tags.includes('series')) {
      return 'series';
    } else if (result.tags.includes('tags')) {
      return 'tag';
    }
    return '';
  }
}

export default Search;
