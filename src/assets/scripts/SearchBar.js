import { getFocusables, throttle } from './utils';

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

    this.searchWrapper = document.querySelector('.js-search-bar');
    this.searchInput = document.querySelector('.js-search-input');
    this.searchResults = document.querySelector('.js-search-bar-results');
    this.searchResultsList = this.searchResults.querySelector('ul');

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
    document.addEventListener('click', e => this.onDocumentClick(e));
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

  onDocumentClick(e) {
    // Bail early if the search results are hidden
    if (!this.resultsShown) {
      return;
    }
    const wrapperContainsTarget = this.searchWrapper.contains(e.target);
    // Hide search results when clicking off
    if (e.target !== this.searchWrapper && !wrapperContainsTarget) {
      this.hideResults();
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
    this.searchResults.classList.add('active');
    document.body.classList.add('unfocus');
  }

  hideResults() {
    this.resultsShown = false;
    this.searchResults.classList.remove('active');
    document.body.classList.remove('unfocus');
  }

  displayResults(results) {
    this.showResults();
    this.searchResultsList.innerHTML = '';

    if (!results.length) {
      const emptyItem = document.createElement('li');
      emptyItem.classList.add('search-results-empty');
      emptyItem.textContent = `No results for “${this.query}”`;

      this.searchResultsList.append(emptyItem);

      return;
    }

    // Only show first 7 results
    const limitedResults = results.slice(0, 7);

    limitedResults.forEach(result => {
      const { title, url } = result.item;

      // Create result link
      const resultLink = document.createElement('a');
      resultLink.setAttribute('href', url);

      // Create result title
      const resultTitle = document.createElement('span');
      resultTitle.classList.add('title');
      resultTitle.textContent = title;

      // Create result label
      const resultLabel = document.createElement('span');
      const resultType = this.search.getResultType(result.item);
      resultLabel.textContent = resultType;
      resultLabel.classList.add('label', resultType);

      // Append title and label to link
      resultLink.appendChild(resultTitle);
      resultLink.appendChild(resultLabel);

      // Append link to list item
      const resultListItem = document.createElement('li');
      resultListItem.appendChild(resultLink);

      // Append list item to list
      this.searchResultsList.append(resultListItem);
    });
  }
}

export default SearchBar;
