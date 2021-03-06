import 'babel-polyfill';

import { onDocumentReady } from './utils';
import ExternalLinks from './ExternalLinks';
import Search from './Search';
import SearchBar from './SearchBar';
import Print from './Print';
import ProgressBar from './ProgressBar';
import RandomDingbat from './RandomDingbat';
import Spectrum from './Spectrum';
import InteractiveTOC from './InteractiveTOC';
// import ThemeToggle from './ThemeToggle';

onDocumentReady(() => {
  new ExternalLinks();
  // new ThemeToggle();

  const search = new Search();
  if (document.querySelector('.js-search-input')) {
    new SearchBar(search);
  }

  [...document.querySelectorAll('[data-print]')].forEach(printEl => new Print(printEl));

  if (document.getElementById('js-entry-content')) {
    new Spectrum();
    new ProgressBar();
    new RandomDingbat();
    new InteractiveTOC();
  }
});
