class Print {
  constructor(printEl) {
    this.printEl = printEl;

    // Split text string into an array of lines
    this.lines = printEl.getAttribute('data-print').split('/n/');

    // Parse animation config options from data attributes
    this.initialDelay = parseInt(printEl.getAttribute('data-initial-delay')) || 0;
    this.visibleFor = parseInt(printEl.getAttribute('data-visible-for')) || 5000;
    this.invisibleFor = parseInt(printEl.getAttribute('data-invisible-for')) || 2000;
    this.targetLoopCount = parseInt(printEl.getAttribute('data-loops')) || 'infinite';
    this.fillMode = printEl.getAttribute('data-fill-mode') || 'forwards';

    // Store the number of times a loop has occured
    this.loopCounter = 0;

    // Set static animation config options
    this.pauseMin = 60;
    this.pauseMax = 120;

    // Create clone-able progenitors for DOM elements we'll be adding later
    this.baseLineEl = document.createElement('p');
    this.baseLineEl.classList.add('js-print-line');

    this.baseCharEl = document.createElement('span');
    this.baseCharEl.classList.add('js-print-char');
    this.baseCharEl.style.opacity = 0;

    // Initialize empty arrays that will contain DOM elements for future reference
    this.lineEls = [];
    this.charEls = [];

    this.init();
  }

  init() {
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

      this.lineEls.push(lineEl);
    });

    // Attach lines contianing characters to the instantiating DOM element
    this.lineEls.forEach(lineEl => this.printEl.appendChild(lineEl));

    // Begin the animation
    this.loop(this.initialDelay);
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
      window.requestAnimationFrame(() => (this.charEls[i].style.opacity = 1));
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
      this.loop(this.invisibleFor);
    }

    setTimeout(() => {
      window.requestAnimationFrame(() => (this.charEls[i].style.opacity = 0));
      this.hideCharacter(i + 1);
    }, this.pauseMin);
  }

  loop(timeout) {
    if (this.targetLoopCount === 'infinite' || this.loopCounter < this.targetLoopCount) {
      setTimeout(() => {
        this.loopCounter++;
        this.showCharacter(0);

        // End the loop with visible text if fill mode is set to 'forwards'
        if (this.fillMode === 'forwards' && this.targetLoopCount === this.loopCounter) {
          return;
        }

        setTimeout(() => {
          this.hideCharacter(0);
        }, this.visibleFor);
      }, timeout);
    }
  }
}

export default Print;
