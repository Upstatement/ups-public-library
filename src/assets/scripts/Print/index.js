import { throttle } from '../utils';

class Print {
  constructor(printEl) {
    this.printEl = printEl;

    // Split text string into an array of lines
    this.lines = printEl.getAttribute('data-print').split('/n/');

    // Parse animation config options from data attributes
    this.fillMode = printEl.getAttribute('data-fill-mode') || 'forwards';
    this.initialDelay = parseInt(printEl.getAttribute('data-initial-delay')) || 0;
    this.invisibleFor = parseInt(printEl.getAttribute('data-invisible-for')) || 2000;
    this.visibleFor = parseInt(printEl.getAttribute('data-visible-for')) || 10000;
    this.useHover = printEl.getAttribute('data-use-hover') === ('true' || '1');
    this.targetLoopCount = this.useHover
      ? 'infinite'
      : parseInt(printEl.getAttribute('data-loops')) || 'infinite';

    // Delay between characters — "typing" speed
    this.pause = 70;

    // Create clone-able progenitors for DOM elements we'll be adding later
    this.baseLineEl = document.createElement('span');
    this.baseLineEl.classList.add('js-print-line');
    this.lineElsFragment = new DocumentFragment();

    this.baseCharEl = document.createElement('span');
    this.baseCharEl.classList.add('js-print-char');
    this.useHover && this.baseCharEl.classList.add('js-print-shown');

    // Create empty array to store char DOM elements
    this.charEls = [];

    this.loopCounter = 0;

    this.isIdling = false;
    this.idleTimeout = 60000;
    this.throttledResetIdle = throttle(() => this.resetIdle(), 10000);

    this.hoverEvents = ['mouseenter', 'touchstart', 'focus'];

    this.init();
  }

  init() {
    this.setupDOM();

    if (this.useHover) {
      this.setupHover();
    } else {
      this.setupIdle();
      this.loop();
    }
  }

  /**
   * DOM logic
   *****************************************/

  setupDOM() {
    // Render markup for each line
    this.lines.forEach(line => {
      const lineEl = this.baseLineEl.cloneNode();

      // Render markup for each character
      [...line].forEach(char => {
        const charEl = this.baseCharEl.cloneNode();
        charEl.appendChild(document.createTextNode(char));
        this.charEls.push(charEl);
        lineEl.appendChild(charEl);
      });

      this.lineElsFragment.appendChild(lineEl);
    });

    // Attach lines contianing characters to the instantiating DOM element
    this.printEl.appendChild(this.lineElsFragment);
  }

  /**
   * Hover logic
   *****************************************/

  setupHover() {
    this.hoverEvents.forEach(event => {
      this.printEl.addEventListener(
        event,
        throttle(() => {
          this.hideCharacter(0);

          setTimeout(() => {
            this.showCharacter(0);
          }, this.invisibleFor);
        }, this.invisibleFor * 1.5),
      );
    });
  }

  /**
   * Animation logic
   *****************************************/

  get allLoopsComplete() {
    return this.targetLoopCount === 'infinite' ? false : this.loopCounter === this.targetLoopCount;
  }

  showCharacter(i) {
    if (!this.charEls[i]) {
      return;
    }

    // Don't add a pause before showing the first character
    const timeout = i === 0 ? 0 : this.pause;

    setTimeout(() => {
      // Show the character at charEls[i] after a timeout
      window.requestAnimationFrame(() => this.charEls[i].classList.add('js-print-shown'));

      // Call this function with i + 1
      this.showCharacter(i + 1);
    }, timeout);
  }

  hideCharacter(i) {
    if (!this.charEls[i]) {
      return;
    }

    // Enable automatic looping
    if (i === 0 && !this.useHover) {
      this.loop();
    }

    setTimeout(() => {
      // Hide the character at charEls[i] after a timeout
      window.requestAnimationFrame(() => {
        this.charEls[i].classList.remove('js-print-shown');
      });

      // Call this function with i + 1
      this.hideCharacter(i + 1);
    }, this.pause);
  }

  loop() {
    if (!this.isIdling && !this.allLoopsComplete) {
      const timeout = this.loopCounter === 0 ? this.initialDelay : this.invisibleFor;

      setTimeout(() => {
        this.loopCounter++;
        this.showCharacter(0);

        if (this.isIdling || (this.allLoopsComplete && this.fillMode === 'forwards')) {
          this.cleanupIdle();
          return;
        }

        setTimeout(() => {
          this.hideCharacter(0);
        }, this.visibleFor);
      }, timeout);
    } else {
      this.cleanupIdle();
    }
  }

  /**
   * Idle logic
   *****************************************/

  setupIdle() {
    this.windowIdleTimeout = () =>
      window.setTimeout(() => {
        this.isIdling = true;
      }, this.idleTimeout);

    document.addEventListener('mousemove', this.throttledResetIdle);
    document.addEventListener('keyup', this.throttledResetIdle);
    this.windowIdleTimeout();
  }

  resetIdle() {
    if (this.isIdling) {
      this.loopCounter = 0;
      this.isIdling = false;

      // first, hide everthing for a blank slate, to preserve timing
      // hideCharacter will then restart the loop from the beginning
      this.hideCharacter(0);
      setTimeout(() => {
        this.isIdling = true;
      }, this.idleTimeout);
    } else {
      this.isIdling = false;
    }
  }

  cleanupIdle() {
    document.removeEventListener('mousemove', this.throttledResetIdle);
    document.removeEventListener('keyup', this.throttledResetIdle);
    window.clearTimeout(this.windowIdleTimeout);
  }
}

export default Print;
