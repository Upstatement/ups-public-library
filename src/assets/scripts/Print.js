class Print {
  constructor() {
    this.init();
  }

  init() {
    // Initialize only for elements with all required options
    const printEls = Array.from(
      document.querySelectorAll('[data-print][data-delay][data-pause-range][data-duration]'),
    );

    // Create clone-able progenitors for elements we'll be creating later
    const baseCharEl = document.createElement('span');
    baseCharEl.classList.add('js-print-char');
    baseCharEl.style.opacity = 0;

    const baseLineEl = document.createElement('p');
    baseLineEl.classList.add('js-print-line');

    printEls.forEach(printEl => {
      // Create an array of lines to print
      const lines = printEl.getAttribute('data-print').split('/n/');

      // Parse config options from data attributes
      const delay = parseInt(printEl.getAttribute('data-delay'));
      const pauseMin = parseInt(printEl.getAttribute('data-pause-range').split(', ')[0]);
      const pauseMax = parseInt(printEl.getAttribute('data-pause-range').split(', ')[1]);
      const duration = parseInt(printEl.getAttribute('data-duration'));

      // Render markup for each line
      lines.map((line, lineIndex) => {
        const lineEl = baseLineEl.cloneNode();

        // Render markup for each character
        const allCharEls = [...line].map(char => {
          const charEl = baseCharEl.cloneNode();
          charEl.appendChild(document.createTextNode(char));
          return charEl;
        });

        // Attach lines contianing animated characters to the provided DOM element
        printEl.appendChild(lineEl);

        // Finally, initiate animation timelines for each character
        allCharEls.forEach((charEl, i) => {
          lineEl.appendChild(charEl);
          this.startTimeline(
            charEl,
            i + lineIndex * lines[0].length,
            delay,
            pauseMin,
            pauseMax,
            duration,
          );
        });
      });
    });
  }

  startTimeline(el, i, delay, pauseMin, pauseMax, duration) {
    const pauseDur = pauseMin + Math.floor(Math.random() * pauseMax);
    const charDelay = (i + 1) * delay + pauseDur;

    setTimeout(() => {
      window.requestAnimationFrame(() => (el.style.opacity = 1));

      setInterval(() => {
        window.requestAnimationFrame(() => (el.style.opacity = 0));

        setTimeout(() => {
          window.requestAnimationFrame(() => (el.style.opacity = 1));
        }, duration + delay);
      }, duration + duration + delay);
    }, charDelay);

    // Timing is correct, but doesn't loop
    // setTimeout(() => {
    //   el.style.opacity = 1;
    //   setTimeout(() => {
    //     el.style.opacity = 0;
    //   }, duration);
    // }, charDelay);
  }
}

export default Print;
