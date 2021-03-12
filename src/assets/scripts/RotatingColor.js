class RotatingColor {
  constructor() {
    this.document = document.documentElement;
    this.red = 0;
    this.green = 125;
    this.blue = 255;

    // 1 = forwards, -1 = backwards
    this.redDirection = 1;
    this.greenDirection = 1;
    this.blueDirection = 1;

    setInterval(() => {
      this.document.style.setProperty('--spectrum', `rgb(${this.red} ${this.green} ${this.blue})`);

      if (this.red <= 0) {
        this.redDirection = 1;
      } else if (this.red >= 125) {
        this.redDirection = -1;
      }

      if (this.green <= 30) {
        this.greenDirection = 1;
      } else if (this.green >= 200) {
        this.greenDirection = -1;
      }

      if (this.blue <= 80) {
        this.blueDirection = 1;
      } else if (this.blue >= 255) {
        this.blueDirection = -1;
      }

      this.red += 5 * this.redDirection;
      this.green += 20 * this.greenDirection;
      this.blue += 10 * this.blueDirection;
    }, 1000); // Timeout needs to match the transition duration specified in src/assets/styles/mixins/_spectrum.scss
    // The less often this timeout runs with JS, the more performant the script is. Letting CSS handle transitions is ideal.
  }
}

export default RotatingColor;
