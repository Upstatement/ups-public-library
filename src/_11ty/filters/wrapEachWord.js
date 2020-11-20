const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = (content, className) => {
  const {
    window: { document: contentDOM },
  } = new JSDOM(content);
  const h1 = contentDOM.querySelector('h1');
  const wordsArr = h1.childNodes[0].textContent.split(' ');
  const wrappedWordsArr = wordsArr.map(
    word => `<span${className && ` class="${className}"`}>${word}</span>`,
  );
  h1.prepend(wrappedWordsArr.join(' '));

  return contentDOM.documentElement.outerHTML;
};
