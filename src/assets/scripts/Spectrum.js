class Spectrum {
  constructor() {
    // Needs to match the transition duration specified in
    // src/assets/styles/mixins/_spectrum.scss
    // The less often this timeout runs with JS, the more
    // performant the script is, and CSS can handle transitions.
    this.updateInterval = 100;

    this.red = {
      min: 100,
      max: 220,
      current: 80,
      interval: 1,
      direction: 1, // 1 = forwards, -1 = backwards
    };
    this.green = {
      min: 100,
      max: 240,
      current: 160,
      interval: 3,
      direction: 1,
    };
    this.blue = {
      min: 100,
      max: 255,
      current: 255,
      interval: 2,
      direction: 1,
    };

    setInterval(() => {
      document.documentElement.style.setProperty(
        '--spectrum',
        `rgb(${this.red.current} ${this.green.current} ${this.blue.current})`,
      );

      this.updateColor(this.red);
      this.updateColor(this.green);
      this.updateColor(this.blue);
    }, this.updateInterval);
  }

  updateColor(color) {
    if (color.current <= color.min) {
      color.direction = 1;
    } else if (color.current >= color.max) {
      color.direction = -1;
    }

    color.current += color.interval * color.direction;
  }
}

export default Spectrum;
