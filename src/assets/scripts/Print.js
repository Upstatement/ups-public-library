class Print {
  constructor() {
    this.init();
  }

  init() {
    const printEls = Array.from(document.querySelectorAll('[data-print]'));

    const baseCharEl = document.createElement('span');
    baseCharEl.style.opacity = 0;

    printEls.forEach(printEl => {
      const printStrings = printEl.getAttribute('data-print').split('/n/');
      const printDelay = parseInt(printEl.getAttribute('data-delay'));
      const printDuration = parseInt(printEl.getAttribute('data-duration'));
      const printPauseMin = parseInt(JSON.parse(printEl.getAttribute('data-pause-range'))[0]) || 0;
      const printPauseMax = parseInt(JSON.parse(printEl.getAttribute('data-pause-range'))[1]) || 0;

      printStrings.map((string, stringIndex) => {
        const line = document.createElement('p');
        line.classList.add('js-print-line');

        const allCharEls = [...string].map(char => {
          const charEl = baseCharEl.cloneNode();
          charEl.appendChild(document.createTextNode(char));
          return charEl;
        });

        allCharEls.forEach((el, i) => {
          line.appendChild(el);
          this.createTimeline(
            el,
            i + stringIndex * printStrings[0].length,
            printDelay,
            printPauseMin,
            printPauseMax,
            printDuration,
          );
        });

        printEl.appendChild(line);
      });
    });
  }

  createTimeline(el, i, delay, pauseMin, pauseMax, duration) {
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

    // setTimeout(() => {
    //   el.style.opacity = 1;
    //   setTimeout(() => {
    //     el.style.opacity = 0;
    //   }, duration);
    // }, charDelay);
  }
}

export default Print;
