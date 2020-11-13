class IndexFilters {
  constructor() {
    this.container = document.querySelector('.index .js-filter');
    this.filters = Array.from(this.container.querySelectorAll('input[type="checkbox"]'));
    this.indexListContainer = document.querySelector('.index .js-index-list');
    this.indexList = Array.from(this.indexListContainer.querySelectorAll('[data-tags]'));
    this.clearButton = this.container.querySelector('.clear');

    this.filterState = {};

    this.init();
  }

  init() {
    this.filters.forEach(filter => {
      this.filterState[filter.value] = false;
      filter.addEventListener('change', e => this.onCheckboxChange(e));
    });

    this.clearButton.addEventListener('click', () => this.onClearButtonClick());
  }

  onCheckboxChange(e) {
    const { value, checked } = e.target;
    this.filterState[value] = checked;
    const tagsToShow = Object.keys(this.filterState).filter(key => this.filterState[key] === true);

    // For each index item, check if it matches the filter(s)
    this.indexList.forEach(indexItem => {
      const itemTags = indexItem.dataset.tags.split(',');
      const shouldFilter = itemTags.some(tag => tagsToShow.includes(tag));
      indexItem.classList.toggle('hide', !shouldFilter);
    });
  }

  onClearButtonClick() {
    this.filters.forEach(filter => {
      filter.checked = false;
      this.filterState[filter.value] = false;
    });
    this.indexList.forEach(item => item.classList.remove('hide'));
  }
}

export default IndexFilters;
