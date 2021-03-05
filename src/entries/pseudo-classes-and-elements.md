---
layout: layouts/entry/index.njk
title: Pseudo Classes & Elements
date: 2021-02-01
topic:
  - CSS
---

By adding pseudo- CSS keywords to the end of a selector, we can style states and nodes that aren’t present in HTML. Pseudo-classes specify states, like `:hover`. Pseudo-elements reference visual aspects or parts of elements, like `::first-line`.

## Pseudo-Classes: `:`

Pseudo-classes allow for the selection of elements based on state information that is not contained in the document tree. They’re denoted by a single colon `:` between the base selector and the keyword.

For a full list of pseudo-class selectors and their functionality, [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

```css
a:hover {
  color: blue;
}

.checkbox:checked {
  font-weight: bold;
}

button:disabled {
  opacity: 0.5;
}
```

## Pseudo-Elements: `::`

Pseudo-elements represent entities or aspects of entities that are not described in HTML. They’re denoted by two colons `::` between the base selector and the keyword.

For a full list of pseudo-element selectors and their functionality, [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

```css
li::first-child {
  margin-top: 0;
}

input::placeholder {
  opacity: 0.8;
}
```

Two commonly used pseudo-elements are `::before` and `::after`. Unlike most pseudo-elements, which target content that is already present, these two elements don’t exist at all until we target them. They are injected into the DOM as either the first (`::before`) or last (`::after`) child of the parent selector.

<p style="text-align: center;"><i>⚠</i></p>

In order for the browser to render a `::before` or `::after`, you must include a `content:` declaration in its ruleset. You can leave it empty (`""`), but it must be there.

<p style="text-align: center;"><i>⚠</i></p>

```css
footer::before {
  content: 'I’m now the first child of the footer.';
}

footer::after {
  content: 'And I’m the last.';
}
```
