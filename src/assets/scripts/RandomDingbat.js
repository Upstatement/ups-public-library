class RandomDingbat {
  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.dingbatWrapperEl = document.getElementById('js-random-dingbat');

    this.init();
  }

  init() {
    this.dingbatWrapperEl.textContent = this.generateRandomLetter();
  }

  generateRandomLetter() {
    return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
  }
}

export default RandomDingbat;
