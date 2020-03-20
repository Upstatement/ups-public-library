# Cascade, Inheritance, and Specificity

The cascade, inheritance, and specificity are among the most fundamental concepts of CSS and control how CSS is applied to HTML.

## Cascade

Stylesheets cascade, meaning that **the order of CSS rules matter.** When two rules apply that have equal specificity, the one that comes **last** will be applied.

```CSS
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

Inheritance also plays an important role in how CSS rules are applied. Inheritance is the concept that some CSS property values set on parent elements are applied to their children as well, and some aren't.

### Inherited properties

For example, if you set a `color` and `font-family` on an element, every element inside it **_will also_** be styled with that color and font, unless you've applied different color and font values directly to them.

### Non-inherited properties

Some properties do not inherit &mdash; for example, if you set `width: 50%` on an element, all of its descendants **_do not_** get a `width` of `50%` of their parent's `width`.

You can look up whether a specific CSS property is inherited here: [CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

These are very simple examples, but you can imagine that when building more complex websites and layouts, the specificity of selectors can get more and more complicated. Hopefully having a strong understanding of these fundamentals will help you more firmly grasp the CSS you are writing and how they are being applied to your page.

For more information on how the cascade, specificity, and inheritance work visit: [Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## Specificity

Specificity is the metric browsers use to decide which rules to apply. Every type of selector has a specificity score. If a property's value has been set on an element in more than one rule, browsers will use the value in the selector with the highest score. For example, a **class selector** (`.paragraph`, `.nav-link`, `.page-header`) is more specific than an **element or type selector** (`p`, `a`, `div`), and therefore will have a higher score.

### Element Selector

An element selector is less specific — it will select all elements of that type that appear on a page — so will get a lower score.

### Class Selector

A class selector is more specific — it will select only the elements on a page that have a specific class attribute value — so will get a higher score.

## Basic Selectors

### Universal selector

Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.

```CSS
* {
  display: block;
}
```

> Generally, usage of the universal selector is discouraged, since it can slow things down: it forces the browser to look through every single element it could possible style on the page, and apply the rule you wrote to it. Use with intent!

### Type selector

Selects all elements that have the given tag name.

```CSS
p {
  font-size: 17px;
}
```

### Class selector

Selects all elements that have the given class attribute.

```CSS
.nav-link {
  text-decoration: underline;
}
```

### ID selector

Selects an element based on the value of its id attribute. There should be only one element with a given ID in a document.

```CSS
#menu {
  background: black;
}
```

## Grouping Selectors

You can group selectors by using a `,`.

```CSS
h1, h2, h3, h4 {
  font-weight: 700;
}
```

## Combinators

### Descendant Combinator: `[space]`

The **descendant combinator** is used by simply adding a space between selectors. It selects nodes that are descendants of the first ingredient of the selector.

```CSS
li a {
  color: black;
}
```

> Descendant combinators will select every matching descendant, all the way down the document tree.

### Child Combinator: `>`

The **child combinator** selects nodes that are direct children of the first element.

```CSS
.content > p {
  color: black;
}
```

> Differs from the descendant combinator in that it will only select direct children of the first ingredient.

### General Sibling Combinator: `~`

The **general sibling combinator** selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.

```CSS
.story-tease ~ img  {
  display: inline-block;
}
```

### Adjacent Sibling Combinator: `+`

The **adjacent sibling combinator** selects adjacent siblings. This means that the second element directly follows the first, and both share the same parent.

```CSS
h3 ~ p  {
  margin-top: 1.5rem;
}
```

## Pseudo Selectors

Pseudo-CSS lets us access functionality and nodes that aren't directly exposed by the HTML that we write. States triggered by user interaction and user-agent styles/elements are some of the main things we use pseudo selectors to target. We can also create pseudo-elements that don't exist in our HTML by writing selectors for them.

### Pseudo Classes: `:`

**Pseudo classes** allow the selection of elements based on state information that is not contained in the document tree.

For a full list of pseudo class selectors and their functionality, [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

```CSS
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

```CSS
li::first-child {
  margin-top: 0;
}

input::placeholder {
  opacity: 0.8;
}
```

We can create pseudo elements by writing selectors for them. There are two kinds we can make: `after` and `before` elements. They are injected into the DOM as either the first or last child of the parent selector.

**In order for the browser to render a `before` or `after`, you must include the `content:` attribute. You can leave it blank (`""`), but it must be there.**

```CSS
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
