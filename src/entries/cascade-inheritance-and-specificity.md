---
layout: layouts/entry/index.njk
title: Cascade, Inheritance, & Specificity
date: 2021-01-17
tags:
  - css
nextEntryTitle: The Box Model
---

Cascade, inheritance, and specificity control how CSS is evaluated and applied to HTML. They are the governing principals of CSS. Understanding them is fundamental to masterfully and effectively writing styles.

## Cascade

In CSS, styles are evaluated in the order they are introduced, with the most recent taking precedent. This top-down principal is called the cascade. In practice, it means two things:

1. Rulesets of overlapping scope will converge, like so:
<div class="two-up-code">

```css
a {
  text-decoration: none;
}

.nav-link {
  color: cyan;
}
```

```html
<a class="nav-link">
  Cyan, no underline
</a>
```

</div>

2. When two declarations are written with an equal level of specificity, the one that comes last will be applied:

<div class="two-up-code">

```css
.heading {
  font-size: 36px;
}

.hero {
  font-size: 72px;
}
```

```html
<h1 class="heading hero">
  72px Title
</h1>
```

</div>

## Inheritance

Some (but not all) CSS property values set on parent elements are applied to their children as well. Understanding inheritance in CSS will make your style sheets less verbose, and make troubleshooting easier.

### Inherited Properties

For example, if you set a `color` and `font-family` on an element, every element inside it will also be styled with that color and font-family.

### Non-Inherited Properties

Some properties do not inherit &mdash; for example, if you set `width: 50%` on an element, the widths of its children will remain unspecified.

You can check whether a CSS property is inherited on by finding it in [MDN's index of CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## Specificity

Specificity is the metric browsers use to decide which declarations to apply when rulesets overlap. Every type of selector has a specificity score: browsers apply declarations in the ruleset with the highest score.

Here is the ranking of selectors, from lowest to highest specificity:

1. Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`)

1. Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`)

1. ID selectors (e.g., `#example`)

Universal selector (`*`), combinators (`+`, `>`, `~`, `' '`) and negation pseudo-class `:not()` have no effect on specificity. (The selectors declared inside `:not()` do, however.)

Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

---

These three concepts can be powerful tools or introduce complications, depending on how your styles are managed. For more information on how they work, [check out MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).
