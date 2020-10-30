---
layout: layouts/entry/index.njk
title: Cascade, Inheritance, & Specificity
date: 2020-10-30
tags:
  - css
  - basic
---

# Cascade, Inheritance, & Specificity

The cascade, inheritance, and specificity control how CSS is evaluated and applied to HTML. They are the governing principals of CSS, and fundamental to masterfully and effectively writing styles.

## Cascade

Stylesheets cascade, meaning that **the order of CSS rules matter.** When two rules are written with an equal level specificity, the one that comes **last** will be applied.

```css
/* Example CSS file*/

/* This rule will be ignored */
h1 {
  color: blue;
}

/* This rule will be applied */
h1 {
  color: red;
}
```

## Inheritance

Some &mdash; but not all &mdash; CSS property values set on _**parent**_ elements are applied to their _**children**_ as well. Understanding inheritance in CSS can be tricky, but will make your style sheets less verbose, and make troubleshooting easier.

### Inherited properties

For example, if you set a `color` and `font-family` on an element, every element inside it **_will also_** be styled with that color and font, unless you've applied different color and font values directly to them.

### Non-inherited properties

Some properties do not inherit &mdash; for example, if you set `width: 50%` on an element, all of its descendants **_do not_** get a `width` of `50%` of their parent's `width`.

You can look up whether a specific CSS property is inherited here: [CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

These are very simple examples, but you can imagine that when building more complex websites and layouts, the specificity of selectors can get more and more complicated. Hopefully having a strong understanding of these fundamentals will help you more firmly grasp the CSS you are writing and how they are being applied to your page.

For more information on how the cascade, specificity, and inheritance work visit: [Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## Specificity

Specificity is the metric browsers use to decide which rules to apply. Every type of selector has a specificity score. If a property's value has been set on an element in more than one rule, browsers will use the value in the selector with the highest score. For example, a **class selector** (`.paragraph`, `.nav-link`, `.page-header`) is more specific than an **element or type selector** (`p`, `a`, `div`), and therefore will have a higher score.

## Basic Selectors

### Universal selector

Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.

```css
* {
  display: block;
}
```

> Generally, usage of the universal selector is discouraged, since it can slow things down: it forces the browser to look through every single element it could possible style on the page, and apply the rule you wrote to it. Use with intent!

### Type selector

Type selectors are the most general, and therefore least specific/lowest scoring, types of selectors. A type selector will apply to all elements of a given type in the scope that its being used.

```css
p {
  font-size: 17px;
}
```

### Class selector

Class selectors are more specific than type selectors, and have a higher score. They're also generally the most commonly used type of selector. A class selector selects all elements in its scope that have a matching value for their class attribute.

```css
.nav-link {
  text-decoration: underline;
}
```

### ID selector

ID selectors are the most specific method of selection, and most highly scored. The HTML spec dictates that there should not be more than one element with the same ID in a document, so when we use the ID selector, we are referring to the single element in scope that has a matching value for its ID attribute.

```css
#menu {
  background: black;
}
```

## Grouping Selectors

You can group selectors by using a `,`. Think of the comma as an `and` operator.

```css
h1,
h2,
h3,
h4 {
  font-weight: 700;
}
```

## Combinators

### Descendant Combinator: `[space]`

The **descendant combinator** is used by simply adding a space between selectors. It selects nodes that are descendants of the first ingredient of the selector.

```css
li a {
  color: black;
}
```

> Descendant combinators will select every matching descendant, all the way down the document tree.

### Child Combinator: `>`

The **child combinator** selects nodes that are direct descendants of the first element. It does not apply to grandchildren, or any other elements further down the document tree.

```css
.content > p {
  color: black;
}
```

> Differs from the descendant combinator in that it will only select direct children of the first ingredient.

### General Sibling Combinator: `~`

The **general sibling combinator** selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.

```css
.story-tease ~ img {
  display: inline-block;
}
```

### Adjacent Sibling Combinator: `+`

The **adjacent sibling combinator** selects adjacent siblings. This means that the second element directly follows the first, and both share the same parent.

```css
h3 + p {
  margin-top: 1.5rem;
}
```

## Pseudo Selectors

Pseudo-CSS lets us access functionality and nodes that aren't directly exposed by the HTML that we write. States triggered by user interaction and user-agent styles/elements are some of the main things we use pseudo selectors to target. We can also create pseudo-elements that don't exist in our HTML by writing selectors for them.

### Pseudo Classes: `:`

**Pseudo classes** allow the selection of elements based on state information that is not contained in the document tree.

For a full list of pseudo class selectors and their functionality, [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

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

### Pseudo Elements: `::`

**Pseudo elements** represent entities that are not included or described in HTML.

For a full list of pseudo element selectors and their functionality, [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

```css
li::first-child {
  margin-top: 0;
}

input::placeholder {
  opacity: 0.8;
}
```

We can create pseudo elements by writing selectors for them. There are two kinds we can make: `after` and `before` elements. They are injected into the DOM as either the first or last child of the parent selector.

**In order for the browser to render a `before` or `after`, you must include the `content:` attribute. You can leave it empty (`""`), but it must be there.**

```css
footer::before {
  content: "I'm now the first child of the footer!";
}

footer::after {
  content: "And I'm the last.";
}
```

For the full documentation of CSS selectores visit: [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

## More CSS topics we can cover!

The topics in these two lessons are just the building blocks of CSS. They barely scratch the surface of what there is to know, but they are essential principles in understanding CSS as they are the fundamentals that everything we will learn and do builds upon.

A lot of learning around CSS comes from googling, working with others, and doing. **What else are you interested in learning more about?**

- CSS attributes
- CSS variables
- Upstatement CSS best practices
- BEM naming
- CSS animations
- SCSS, SASS, and LESS
- Mixins
- CSS modules
- Flex-box
- Pseudo elements
