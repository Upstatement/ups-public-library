import { throttle } from './utils';

class Print {
  constructor(printEl) {
    this.printEl = printEl;

    // Split text string into an array of lines
    this.lines = printEl.getAttribute('data-print').split('/n/');

    // Parse animation config options from data attributes
    this.initialDelay = parseInt(printEl.getAttribute('data-initial-delay')) || 0;
    this.visibleFor = parseInt(printEl.getAttribute('data-visible-for')) || 10000;
    this.invisibleFor = parseInt(printEl.getAttribute('data-invisible-for')) || 2000;
    this.targetLoopCount = parseInt(printEl.getAttribute('data-loops')) || 'infinite';
    this.fillMode = printEl.getAttribute('data-fill-mode') || 'forwards';

    // Set static animation config options
    this.pauseMin = 60;
    this.pauseMax = 120;

    // Create clone-able progenitors for DOM elements we'll be adding later
    this.baseLineEl = document.createElement('span');
    this.baseLineEl.classList.add('js-print-line');
    this.lineElsFragment = new DocumentFragment();

    this.baseCharEl = document.createElement('span');
    this.baseCharEl.classList.add('js-print-char');

    // Create empty array to store char DOM elements
    this.charEls = [];

    this.loopCounter = 0;

    this.isIdling = false;
    this.idleTimeout = 60000;

    this.init();
  }

  init() {
    // Setup initial idle timeouts and reset listeners
    document.addEventListener(
      'mousemove',
      throttle(() => this.resetIdle(), 10000),
    );
    document.addEventListener(
      'keyup',
      throttle(() => this.resetIdle(), 10000),
    );
    setTimeout(() => {
      this.isIdling = true;
    }, this.idleTimeout);

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

    // Begin the animation
    this.loop();
  }

  get shouldLoop() {
    return (
      !this.isIdling &&
      (this.targetLoopCount === 'infinite' || this.loopCounter < this.targetLoopCount)
    );
  }

  showCharacter(i) {
    /**
     * 1. Shows the character at charEls[i] after a timeout
     * 2. Then calls this function with i + 1
     */

    // If no corresponding element exists, do nothing
    if (!this.charEls[i]) {
      return;
    }

    // Don't add a pause before showing the first character
    const pauseDur =
      i === 0 ? 0 : this.pauseMin + Math.floor(Math.random() * (this.pauseMax - this.pauseMin));

    setTimeout(() => {
      window.requestAnimationFrame(() => this.charEls[i].classList.add('js-print-shown'));
      this.showCharacter(i + 1);
    }, pauseDur);
  }

  hideCharacter(i) {
    /**
     * 1. Hides the character at charEls[i] after a timeout
     * 2. Then calls this function with i + 1
     */

    // If no corresponding element exists, do nothing
    if (!this.charEls[i]) {
      return;
    }

    if (i === 0) {
      this.loop();
    }

    setTimeout(() => {
      window.requestAnimationFrame(() => this.charEls[i].classList.remove('js-print-shown'));
      this.hideCharacter(i + 1);
    }, this.pauseMin);
  }

  loop() {
    if (this.shouldLoop || this.fillMode === 'forwards') {
      const timeout = this.loopCounter === 0 ? this.initialDelay : this.invisibleFor;

      setTimeout(() => {
        this.loopCounter++;
        this.showCharacter(0);

        // End the loop with visible text if fill mode is set to 'forwards'
        if (!this.shouldLoop && this.fillMode === 'forwards') {
          return;
        }

        setTimeout(() => {
          this.hideCharacter(0);
        }, this.visibleFor);
      }, timeout);
    }
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
}

export default Print;
