class SearchPage {
  constructor(search) {
    this.search = search;

    this.searchResultsTable = document.querySelector('.js-search-results-table');
    this.searchTitle = document.querySelector('.js-search-results-title');
    this.searchInput = document.querySelector('.js-search-input');

    const url = new URL(window.location.href);
    this.query = url.searchParams.get('q') || '';

    this.search.onFuseLoad(this.init.bind(this));
  }

  init() {
    this.searchInput.value = this.query;

    if (this.query) {
      const results = this.search.getSearchResults(this.query);
      this.displayResults(results);
    }
  }

  displayResults(results) {
    // Indicate query in page title
    const numResults = results.length;
    this.searchTitle.textContent = `${numResults > 0 ? numResults : 'No'} result${
      numResults === 1 ? '' : 's'
    } for “${this.query}”`;

    this.searchResultsTable.innerHTML = '';

    // Inject list of results in search results table
    results.forEach(result => {
      const { title, url } = result.item;

      // Create table row
      const row = document.createElement('tr');
      this.searchResultsTable.appendChild(row);

      // Append result title link
      const resultTitleCell = document.createElement('td');
      resultTitleCell.classList.add('result-title');

      const resultLink = document.createElement('a');
      resultLink.textContent = title;
      resultLink.setAttribute('href', url);

      resultTitleCell.appendChild(resultLink);
      row.appendChild(resultTitleCell);

      // Append result type label
      const resultTypeCell = document.createElement('td');
      resultTypeCell.classList.add('result-type');

      const resultLabel = document.createElement('p');
      const resultType = this.search.getResultType(result.item);
      resultLabel.textContent = resultType;
      resultLabel.classList.add('result-type-label', resultType);

      resultTypeCell.append(resultLabel);
      row.appendChild(resultTypeCell);
    });
  }
}

export default SearchPage;
