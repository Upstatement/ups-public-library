class RotatingColor {
  constructor() {
    this.startingRed = 0;
    this.startingGreen = 122;
    this.startingBlue = 255;

    this.redModifier = 1;
    this.greenModifier = 1;
    this.blueModifier = 1;

    setInterval(() => {
      const element = document.querySelector('.md a');
      element.style.color = `rgb(${this.startingRed}, ${this.startingGreen}, ${this.startingBlue})`;
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

      this.startingRed += 1 * this.redModifier;
      this.startingGreen += 1 * this.greenModifier;
      this.startingBlue += 1 * this.blueModifier;
    }, 100);
  }
}

export default RotatingColor;
