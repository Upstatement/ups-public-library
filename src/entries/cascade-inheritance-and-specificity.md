---
layout: layouts/entry/index.njk
title: Cascade, Inheritance, & Specificity
date: 2020-12-11
tags:
  - css
nextEntryTitle: The Box Model
---

Cascade, inheritance, and specificity control how CSS is evaluated and applied to HTML. They are the governing principals of CSS. Understanding them is fundamental to masterfully and effectively writing styles.

## Cascade

In CSS, styles are evaluated in the order they are introduced, with the most recent taking precedent. This top-down principal is called the **cascade.**

In practice, this means two things:

1. Rulesets of overlapping scope will converge, like so:

```css
a {
  text-decoration: none;
}

.nav-link {
  color: cyan;
}
```

```html
<nav>
  <a class="nav-link" href="https://upstatement.com">Cyan, no underline</a>
</nav>
```

2. When two declarations are written with an equal level of specificity, the one that comes **last** will be applied:

```css
.heading {
  font-size: 36px;
}

.hero {
  font-size: 72px;
}
```

```html
<h1 class="heading hero">72px Title</h1>
```

## Inheritance

Some &mdash; but not all &mdash; CSS property values set on _parent_ elements are applied to their _children_ as well. Understanding inheritance in CSS will make your style sheets less verbose, and make troubleshooting easier.

### Inherited properties

For example, if you set a `color` and `font-family` on an element, every element inside it **_will also_** be styled with that color and font-family.

### Non-inherited properties

Some properties do not inherit &mdash; for example, if you set `width: 50%` on an element, all of its descendants **_do not_** get a `width` of `50%` of their parent's `width`.

You can check whether a CSS property is inherited here by finding it here: [CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

## Specificity

Specificity is the metric browsers use to decide which declarations to apply when rulesets overlap. Every type of selector has a specificity score: browsers apply declarations in the ruleset with the highest score.

Here is the ranking of selectors, from lowest to highest specificty:

1. Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`)
1. Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`)
1. ID selectors (e.g., `#example`)

Universal selector (`*`), combinators (`+`, `>`, `~`, `' '`) and negation pseudo-class `:not()` have no effect on specificity. (The selectors declared _inside_ `:not()` do, however.)

Inline styles added to an element (e.g., `style="font-weight: bold;"`) _always_ overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

Specificity and inheritance can be powerful tools or introduce complications, depending on how your styles are managed.

For more information on how they work, visit: [Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
