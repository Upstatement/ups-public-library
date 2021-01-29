import { throttle } from './utils';

class ProgressBar {
  constructor() {
    this.entryContentEl = document.getElementById('js-entry-content');
    this.navigationEl = document.getElementById('js-entry-nav');
    this.dingbatWrapper = document.getElementById('js-random-dingbat');
    this.progressIndicator = document.getElementById('js-progress-indicator');

    this.setProgressBarWidthThrottled = () => throttle(this.setProgressBarWidth(), 500);

    this.init();
  }

  get entryScrollBottom() {
    return (
      this.entryContentEl.scrollHeight -
      window.innerHeight +
      this.dingbatWrapper.scrollHeight +
      this.navigationEl.scrollHeight
    );
  }

  get percentComplete() {
    return Math.min(100 * (window.scrollY / this.entryScrollBottom), 100);
  }

  setProgressBarWidth() {
    window.requestAnimationFrame(() => {
      this.progressIndicator.style.width = `${this.percentComplete}vw`;
    });
  }

  init() {
    document.addEventListener('scroll', this.setProgressBarWidthThrottled, { passive: true });
    window.addEventListener('resize', this.setProgressBarWidthThrottled, { passive: true });
  }
}

export default ProgressBar;