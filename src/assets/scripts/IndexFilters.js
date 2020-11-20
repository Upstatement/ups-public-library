class IndexFilters {
  constructor() {
    this.container = document.querySelector('.index .js-filter');
    this.checkboxFilters = Array.from(this.container.querySelectorAll('input[type="checkbox"]'));
    this.selectFilters = Array.from(this.container.querySelectorAll('select'));
    this.indexListContainer = document.querySelector('.index .js-index-list');
    this.indexList = Array.from(this.indexListContainer.querySelectorAll('[data-tags]'));
    this.clearButton = this.container.querySelector('.clear');

    this.filterState = {};

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

    this.clearButton.addEventListener('click', () => this.onClearButtonClick());
  }

  onCheckboxChange(e) {
    const { value, checked } = e.target;
    this.filterState[value] = checked;
    const tagsToShow = Object.keys(this.filterState).filter(key => this.filterState[key] === true);

    this.updateIndexListItems(tagsToShow);
  }

  onSelectChange(e) {
    const { value, options } = e.target;
    [...options].forEach(option => (this.filterState[option.value] = false));

    if (value !== 'js-clear') {
      this.filterState[value] = true;
    }

    const tagsToShow = Object.keys(this.filterState).filter(key => this.filterState[key] === true);

    this.updateIndexListItems(tagsToShow);
  }

  updateIndexListItems(tagsToShow) {
    // For each index item, check if it matches the filter(s)
    this.indexList.forEach(indexItem => {
      const itemTags = indexItem.dataset.tags.split(',');
      const shouldFilter = tagsToShow.every(tag => itemTags.includes(tag));
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

    this.indexList.forEach(item => item.classList.remove('hide'));
  }
}

export default IndexFilters;
