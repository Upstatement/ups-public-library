import { throttle } from './utils';

class ProgressBar {
  constructor() {
    this.entryContentEl = document.getElementById('js-entry-content');
    this.navigationEl = document.getElementById('js-entry-nav');
    this.progressIndicator = document.getElementById('js-progress-indicator');
    this.percentCompleteTextWrapper = document.getElementById('js-percent-complete');

    this.animateThrottled = () => throttle(this.animate(), 16.66667); // 60fps

    this.init();
  }

  get entryScrollBottom() {
    return (
      this.entryContentEl.scrollHeight -
      window.innerHeight +
      this.navigationEl.getBoundingClientRect().height +
      (window.innerWidth < 768 ? this.progressIndicator.scrollHeight : 0) // below 768px, the progress bar and nav content are separated, so the heights of both must be added
    );
  }

  get percentComplete() {
    return Math.min(100 * (window.scrollY / this.entryScrollBottom), 100);
  }

  setProgressBarWidth() {
    this.progressIndicator.style.width = `${this.percentComplete}vw`;
  }

  updatePercentCompleteText() {
    this.percentCompleteTextWrapper.textContent = `${Math.ceil(this.percentComplete)}%`;
  }

  animate() {
    window.requestAnimationFrame(() => {
      this.setProgressBarWidth();
      this.updatePercentCompleteText();
    });
  }

  init() {
    document.addEventListener('scroll', () => this.animate(), { passive: true });
    window.addEventListener('resize', () => this.animate(), { passive: true });
  }
}

export default ProgressBar;
