class InteractiveTOC {
  constructor() {
    this.headings = [...document.querySelectorAll('h2[id], h3[id], h4[id]')];
    this.anchors = this.headings.map(({ id }) =>
      document.querySelector(`a[href="#${this.escapeStringForCSS(id)}"]`),
    );

    this.eyeLevel = 25; // percentage of viewport, from the top

    const observerOptions = {
      rootMargin: `0% 0% -${100 - this.eyeLevel}% 0%`,
      threshold: 0, // trigger intersection at the top of the element
    };

    this.observer = new IntersectionObserver(entries => this.onIntersect(entries), observerOptions);

    this.init();
  }

  escapeStringForCSS(string) {
    // escapes: * + ? ^ % ~ @ ` $ - & : = < > { } ( ) | [ ] \
    return string.replace(/[.*+?^%~@`$-&:=<>{}()|[\]\\]/g, '\\$&');
  }

  useSmoothScroll() {
    this.anchors.forEach(anchor => {
      const headingID = this.escapeStringForCSS(anchor.getAttribute('href'));

      anchor.addEventListener('click', e => {
        const headingTop = document.querySelector(headingID).getBoundingClientRect().top;
        const viewportTargetPercent = window.innerHeight * ((this.eyeLevel - 5) / 100);
        const scrollDestination = headingTop + window.pageYOffset - viewportTargetPercent;

        e.preventDefault();
        window.scrollTo({ top: scrollDestination, behavior: 'smooth' });
        e.target.blur();
      });
    });
  }

  setActiveAnchor(headingID) {
    this.anchors.forEach(anchor => {
      if (headingID === anchor.href.split('#')[1]) {
        anchor.classList.add('current');
      } else {
        anchor.classList.remove('current');
      }
    });
  }

  onIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setActiveAnchor(entry.target.id);
      }
    });
  }

  init() {
    this.useSmoothScroll();
    this.headings.forEach(heading => this.observer.observe(heading));
  }
}

export default InteractiveTOC;
