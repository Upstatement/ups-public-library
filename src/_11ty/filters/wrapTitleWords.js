const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = (content, className) => {
  const {
    window: { document },
  } = new JSDOM(content);

  const h1 = document.querySelector('h1');
  const wordCount = h1.childNodes[0].textContent.split(' ').length - 1;
  const wordsArr = h1.childNodes[0].textContent.split(' ').slice(0, wordCount);
  h1.childNodes[0].remove();
  wordsArr.reverse().forEach(word => {
    const wordSpan = document.createElement('span');
    if (className) {
      wordSpan.classList.add(className);
    }
    wordSpan.textContent = `${word} `;
    h1.prepend(wordSpan);
  });

  return document.documentElement.outerHTML;
};
