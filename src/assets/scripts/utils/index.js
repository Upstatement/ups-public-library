import env from '../../../_data/env';

export const onDocumentReady = callback => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  }
};

export const getFocusables = container => {
  const focusables = ['button', '[href]', '[tabindex]'];
  const focusablesQuery = focusables.map(e => `${e}:not([tabindex="-1"])`).join(', ');
  const elements = Array.from(container.querySelectorAll(focusablesQuery));
  // Prevent selecting hidden elements
  return elements.filter(el => el.offsetParent !== null);
};

export const throttle = (callback, limit) => {
  let wait = false;
  return function() {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function() {
        wait = false;
      }, limit);
    }
  };
};

export const fetchJSON = async url => {
  const extension = env.netlify ? '' : '.json';
  const response = await fetch(`${url}${extension}`);
  const json = await response.json();
  return json;
};

export const getSearchableData = async () => {
  const entriesData = await fetchJSON('/api/entries');
  const collectionssData = await fetchJSON('/api/collections');
  const seriesData = await fetchJSON('/api/series');
  return [...entriesData, ...collectionssData, ...seriesData];
};
