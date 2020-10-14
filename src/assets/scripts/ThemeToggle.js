class ThemeToggle {
  constructor() {
    this.themeToggleBtn = document.querySelector('.js-theme-toggle');

    this.init();
  }

  /**
   * Get or set theme from local storage
   */
  init() {
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      return;
    }
    document.documentElement.dataset.theme = currentTheme;

    this.themeToggleBtn.addEventListener('click', () => this.onToggleClick());
  }

  /**
   * Theme toggle
   */
  onToggleClick() {
    const { theme } = document.documentElement.dataset;
    const themeTo = theme === 'light' ? 'dark' : 'light';
    const label = `Activate ${theme} mode`;

    document.documentElement.dataset.theme = themeTo;
    localStorage.setItem('theme', themeTo);

    this.themeToggleBtn.setAttribute('aria-label', label);
    this.themeToggleBtn.setAttribute('title', label);
  }
}

export default ThemeToggle;
