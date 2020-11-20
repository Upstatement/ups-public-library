class IndexFilters {
  constructor() {
    this.container = document.querySelector('.index .js-filter-bar');
    this.checkboxFilters = Array.from(this.container.querySelectorAll('input[type="checkbox"]'));
    this.selectFilters = Array.from(this.container.querySelectorAll('select'));
    this.clearButton = this.container.querySelector('.js-clear-button');

    this.indexItems = Array.from(document.querySelectorAll('[data-tags]'));

    this.searchInput = document.querySelector('.js-search-input');

    this.filterState = {};

    this.tagsToShow = [];

    this.init();
  }

  init() {
    this.checkboxFilters.forEach(filter => {
      this.filterState[filter.value] = false;
      filter.addEventListener('change', e => this.onCheckboxChange(e));
    });

    this.selectFilters.forEach(filter => {
      filter.addEventListener('change', e => this.onSelectChange(e));
    });

    this.searchInput.addEventListener('input', () => {
      this.indexItems = Array.from(document.querySelectorAll('[data-tags]'));
      this.updateIndexListItems();
    });

    this.clearButton.addEventListener('click', () => this.onClearButtonClick());
  }

  onCheckboxChange(e) {
    const { value, checked } = e.target;
    this.filterState[value] = checked;
    this.tagsToShow = Object.keys(this.filterState).filter(key => this.filterState[key] === true);

    this.updateIndexListItems();
  }

  onSelectChange(e) {
    const { value, options } = e.target;
    [...options].forEach(option => (this.filterState[option.value] = false));

    if (value !== 'js-clear') {
      this.filterState[value] = true;
    }

    this.tagsToShow = Object.keys(this.filterState).filter(key => this.filterState[key] === true);

    this.updateIndexListItems();
  }

  updateIndexListItems() {
    // For each index item, check if it matches the filter(s)
    // Have to select all every time we filter in case the user has made a search
    this.indexItems.forEach(indexItem => {
      const itemTags = [...indexItem.dataset.tags.split(','), indexItem.dataset.level];
      const shouldFilter = this.tagsToShow.every(tag => itemTags.includes(tag));
      indexItem.classList.toggle('hide', !shouldFilter);
    });
  }

  onClearButtonClick() {
    this.checkboxFilters.forEach(filter => {
      filter.checked = false;
      this.filterState[filter.value] = false;
    });

    this.selectFilters.forEach(filter => {
      filter.value = 'js-clear';
      [...filter.options].forEach(option => (this.filterState[option.value] = false));
    });

    // Have to select all every time we filter in case the user has made a search
    this.indexItems.forEach(item => item.classList.remove('hide'));
  }
}

export default IndexFilters;
