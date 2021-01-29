import { throttle } from './utils';

class ProgressBar {
  constructor() {
    this.entryContentEl = document.getElementById('js-entry-content');
    this.navigationEl = document.getElementById('js-entry-nav');
    this.progressIndicator = document.getElementById('js-progress-indicator');
    this.initialY = this.entryContentEl.getBoundingClientRect().top;
    this.onScrollThrottled = () => throttle(this.onScroll(), 10000);

    this.init();
  }

  init() {
    document.addEventListener('scroll', this.onScrollThrottled, { passive: true });
  }

  onScroll() {
    window.requestAnimationFrame(() => {
      this.progressIndicator.style.width = `${
        (100 * window.scrollY) / (this.entryContentEl.scrollHeight - window.innerHeight)
      }vw`;
    });
  }
}

export default ProgressBar;
