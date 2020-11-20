import 'babel-polyfill';

import { onDocumentReady } from './utils';
import ExternalLinks from './ExternalLinks';
import Search from './Search';
import SearchBar from './SearchBar';
import IndexFilters from './IndexFilters';
// import ThemeToggle from './ThemeToggle';

onDocumentReady(() => {
  new ExternalLinks();
  // new ThemeToggle();

  const search = new Search();

  if (document.querySelector('.js-search-input')) {
    new SearchBar(search);
  }

  if (document.querySelector('.index .js-filter-bar')) {
    new IndexFilters();
  }
});
