class RotatingColor {
  constructor() {
    this.startingRed = 0;
    this.startingGreen = 125;
    this.startingBlue = 255;

    this.redModifier = 1;
    this.greenModifier = 1;
    this.blueModifier = 1;

    setInterval(() => {
      const links = document.querySelectorAll('.md a');

      links.forEach(el => {
        el.style.color = `rgb(${this.startingRed}, ${this.startingGreen}, ${this.startingBlue})`;
      });

      if (this.startingRed <= 0) {
        this.redModifier = 1;
      } else if (this.startingRed >= 255) {
        this.redModifier = -1;
      }

      if (this.startingGreen <= 0) {
        this.greenModifier = 1;
      } else if (this.startingGreen >= 255) {
        this.greenModifier = -1;
      }

      if (this.startingBlue <= 0) {
        this.blueModifier = 1;
      } else if (this.startingBlue >= 255) {
        this.blueModifier = -1;
      }

      this.startingRed += 3 * this.redModifier;
      this.startingGreen += 5 * this.greenModifier;
      this.startingBlue += 10 * this.blueModifier;
    }, 150);
  }
}

export default RotatingColor;
