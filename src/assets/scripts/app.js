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

onDocumentReady(() => {
  new ExternalLinks();
  new Spectrum();

  if (document.getElementById('js-random-dingbat')) {
    new RandomDingbat();
  }

  if (document.querySelector('.js-search-input')) {
    const search = new Search();
    new SearchBar(search);
  }

  [...document.querySelectorAll('[data-print]')].forEach(printEl => new Print(printEl));

  if (document.getElementById('js-entry-content')) {
    new ProgressBar();
    new InteractiveTOC();
  }
});
