import { getFocusables, throttle, toSlug } from './utils';
import { DateTime } from 'luxon';

const KEYCODES = {
  tab: 'Tab',
  enter: 'Enter',
  escape: 'Escape',
  up: 'ArrowUp',
  down: 'ArrowDown',
  slash: '/',
};

class SearchBar {
  constructor(search) {
    this.search = search;

    this.searchWrapper = document.querySelector('.js-search-wrapper');
    this.searchInput = document.querySelector('.js-search-input');
    this.indexList = document.querySelector('.js-index-list');
    this.searchResults = document.querySelector('.js-search-results');

    this.query = '';
    this.resultsShown = false;
    this.focusIndex = -1;

    this.init();
  }

  get focusables() {
    return getFocusables(this.searchWrapper);
  }

  get firstFocusable() {
    return this.focusables[0];
  }

  get lastFocusable() {
    return this.focusables[this.focusables.length - 1];
  }

  init() {
    document.addEventListener('keydown', e => this.onDocumentKeydown(e));
    this.searchInput.addEventListener('keydown', e => this.onSearchInputKeydown(e));
    this.searchInput.addEventListener('input', e => this.onSearchInputChange(e));
  }

  onDocumentKeydown(e) {
    switch (e.key) {
      // Press "/" to focus search
      case KEYCODES.slash: {
        if (document.activeElement === this.searchInput) {
          return;
        }
        e.preventDefault();
        this.searchInput.focus();
        break;
      }

      // Press escape to hide results
      case KEYCODES.escape: {
        this.hideResults();
        break;
      }

      case KEYCODES.tab: {
        // Bail early if the search results are hidden
        if (!this.resultsShown) {
          return;
        }
        // Hide results if tabbing out of search
        if (document.activeElement === this.lastFocusable) {
          this.hideResults();
        }
        break;
      }

      case KEYCODES.up: {
        // Bail early if the search results are hidden
        if (!this.resultsShown) {
          return;
        }

        e.preventDefault();

        // If focused is on search input, focus on the last element
        if (document.activeElement === this.searchInput) {
          this.lastFocusable.focus();
          this.focusIndex = this.focusables.length - 1;
          return;
        }

        // If focused on the first search result, focus on the search input
        if (document.activeElement === this.firstFocusable) {
          this.searchInput.focus();
          this.focusIndex = -1;
          return;
        }

        // Focus on the previous focusable element
        this.focusIndex--;
        if (this.focusables[this.focusIndex]) {
          this.focusables[this.focusIndex].focus();
        }
        break;
      }

      case KEYCODES.down: {
        // Bail early if the search results are hidden
        if (!this.resultsShown || document.activeElement === this.searchInput) {
          return;
        }

        e.preventDefault();

        // If focused on the last element, focus on the search input
        if (document.activeElement === this.lastFocusable) {
          this.searchInput.focus();
          this.focusIndex = -1;
          return;
        }

        // Focus on the next focusable element
        this.focusIndex++;
        if (this.focusables[this.focusIndex]) {
          this.focusables[this.focusIndex].focus();
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  onSearchInputKeydown(e) {
    switch (e.key) {
      // Press escape to blur search
      case KEYCODES.escape: {
        this.searchInput.blur();
        this.hideResults();
        break;
      }

      // Focus the first search result
      case KEYCODES.down: {
        // Bail early if the search results are hidden
        if (!this.resultsShown) {
          return;
        }
        this.firstFocusable.focus();
        break;
      }

      default: {
        break;
      }
    }
  }

  onSearchInputChange(e) {
    this.query = e.target.value;

    if (!this.query) {
      this.hideResults();
      return;
    }

    const results = this.search.getSearchResults(this.query);

    // Don't display nav search results on the search page
    if (document.querySelector('.search')) {
      return;
    }

    throttle(this.displayResults(results));
  }

  showResults() {
    this.resultsShown = true;
    this.searchResults.classList.add('show');
    this.indexList.classList.add('hide');
  }

  hideResults() {
    this.resultsShown = false;
    this.searchResults.classList.remove('show');
    this.indexList.classList.remove('hide');
  }

  displayResults(results) {
    this.showResults();
    this.searchResults.innerHTML = '';

    if (!results.length) {
      const noResultsEl = document.createElement('p');
      noResultsEl.classList.add('no-results');
      noResultsEl.textContent = `No results for `;

      const queryEl = document.createElement('span');
      queryEl.textContent = `“${this.query}”`;

      noResultsEl.appendChild(queryEl);

      this.searchResults.appendChild(noResultsEl);
      return;
    }

    results.forEach(result => {
      const { title, url, entries, last_modified } = result.item;
      const date = DateTime.fromISO(last_modified, { zone: 'utc' }).toFormat('LLL dd, yyyy');

      const resultType = this.search.getResultType(result.item);

      const resultDesc = document.createElement('li');
      resultDesc.classList.add('index__item');

      if (resultType === 'entry') {
        const entryLink = document.createElement('a');
        entryLink.classList.add('index__link');
        entryLink.setAttribute('href', url);
        entryLink.innerHTML = `
          <h1 class="index__title">
            <svg class="index__icon index__icon--arrow">
              <use xlink:href="#arrow"></use>
            </svg>
            ${title}
          </h1>
          <span class="index__type">Entry</span>
          <span class="index__date">${date}</span>
        `.trim();

        resultDesc.appendChild(entryLink);
        this.searchResults.appendChild(resultDesc);
      } else {
        // Input
        const expandInput = document.createElement('input');
        expandInput.classList.add('index__expand-input');
        expandInput.setAttribute('type', 'checkbox');
        const inputName = `expand-${toSlug(title)}`;
        expandInput.setAttribute('name', inputName);
        expandInput.setAttribute('id', inputName);
        resultDesc.appendChild(expandInput);

        // Label
        const expandLabel = document.createElement('label');
        expandLabel.classList.add('index__expand-label');
        expandLabel.setAttribute('for', inputName);
        expandLabel.innerHTML = `
          <h1 class="index__title">
            <svg class="index__icon index__icon--plus">
              <use xlink:href="#plus"></use>
            </svg>
            <svg class="index__icon index__icon--minus">
              <use xlink:href="#minus"></use>
            </svg>
            ${title}
          </h1>
          <span class="index__type">
            ${resultType}
          </span>
          <span class="index__count">${entries.length} entries</span>
        `.trim();
        resultDesc.appendChild(expandLabel);

        // List
        const nestList = document.createElement('ol');
        nestList.classList.add('index__nest');

        if (entries.length) {
          entries.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.classList.add('index__nest__item');
            const entryUrl = `/entries/${toSlug(entry)}`;

            listItem.innerHTML = `
              <a href="${entryUrl}" class="index__link">
                <h2 class="index__title">
                  <span class="index__title__text">
                    <svg class="index__icon index__icon--arrow">
                      <use xlink:href="#arrow"></use>
                    </svg>
                    ${entry}
                  </span>
                  <span class="index__type">Entry</span>
                  <span class="index__date">${date}</span>
                </h2>
              </a>
            `.trim();

            nestList.appendChild(listItem);
          });
        }

        resultDesc.appendChild(nestList);

        this.searchResults.appendChild(resultDesc);
      }
    });
  }
}

export default SearchBar;
