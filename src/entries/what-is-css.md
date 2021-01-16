---
layout: layouts/entry/index.njk
title: What is CSS?
date: 2021-01-16
tags:
  - css
  - basic
nextEntryTitle: Cascade, Inheritance, & Specificity
---

CSS (Cascading Style Sheets) is the language used to describe how HTML should look. CSS allows us to write **rules** (also known as **rulesets**) containing descriptions of how things should look (**style declarations**), and select which elements each ruleset should apply to. A ruleset looks like this:

```css
selector {
  property: value;
}
```

> `property: value;` pairs are reffered to as "declarations"

Selectors target which element(s) a ruleset should affect. A single selector can apply to anywhere from 0 to all elements on a page.

Properties specify which aspect of the element you want to style. Each HTML element has a vast number of properties available. Most are universal, but some properties are specific to certain elements.

Values set a property to one of its available options. Values can be numbers, keywords, functions, or a combination of each, depending on the property being set.

## Writing Selectors

The first step to writing CSS is to write a selector that specifies which element(s) you want to style. There are many types of selectors, each with their own use cases. The most common ways to select elements are by <a href="#type-selector">tag type</a> and by <a href="#class-selector">class name</a>.

Here are some of the most common selectors and their use cases. For a complete list, visit the [CSS selectors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

#### Universal selector

Selects all elements on a page.

```css
* {
  color: black;
}
```

The universal selector is good for creating opinionated default behaviors for all elements on your site (`box-sizing: border-box` is a common example).

#### Type selector

A type selector will apply to all elements with the given tag in the scope that its being used. After the universal selector, type selectors are the most general.

```css
p {
  margin-top: 1em;
  margin-bottom: 0;
}
```

Type selectors are best used to ensure consistency and apply the most basic aspects of a visual language to your site, like spacing around paragraphs (`p` tags) or the styling of links (`a` tags).

Like universal selectors, ther generality makes them best suited for defaults and resets, and ill-suited for situational styles.

#### Class selector

A class selector will apply to all elements in its scope that have a given class. They are denoted by a period `.` at the beginning of the selector.

```css
.hero {
  font-size: 120px;
}
```

Class selectors are by far the most common and useful selectors, since you have complete control over their application in both HTML and CSS. Furthermore, when named well, classes will help you and other developers navigate your styles quickly and easily.

## Combining Selectors

Combinators are characters and keywords that you can use to chain, modify, add conditions to a selector. They are extremely powerful, but can also be extremely confusing. Don't get too complex, and when in doubt, just add a class name.

#### Grouping

You can group selectors by using a comma: `,`. Think of the comma as an `and` operator.

```css
h1,
h2,
h3,
h4 {
  font-weight: 700;
}
```

#### Descendant combinator: `[space]`

Used by adding a space between two or more selectors. It selects nodes that are descendants of the first ingredient of the selector.

```css
.post .heading {
  font-weight: bold;
}
```

The above will select all `.heading` elements that appear inside `.post` elements. Descendant combinators will select every matching descendant, all the way down the document tree, meaning this selector will apply like so:

```html
<section class="post">
  <h1 class="heading">Styles are applied here...</h1>
  <article>
    <h2 class="heading">...as well as here.</h2>
  </article>
</section>
```

#### Child combinator: `>`

Selects nodes that are direct descendants of the first element. It does not apply to grandchildren, or any other elements further down the document tree.

```css
.post > .heading {
  font-size: 72px;
}
```

The child combinator differs from the descendant combinator in that it will only select direct children of the first ingredient, meaning this selector will apply like so:

```html
<section class="post">
  <h1 class="heading">Styles are applied here,</h1>
  <article>
    <h2 class="heading">but not here.</h2>
  </article>
</section>
```

#### General sibling combinator: `~`

Selects all matching siblings. This means that the second element comes after the first (though not necessarily immediately), and both share the same parent.

```css
.story-tease ~ img {
  display: inline-block;
}
```

#### Adjacent sibling combinator: `+`

Selects only adjacent matching siblings. This means that the second element immediate follows the first, both share the same parent.

```css
h3 + p {
  margin-top: 1.5rem;
}
```

---

At this point, you should have enough knowledge to write basic CSS. Learning property names and their corresponding values by heart is largely a memorization exercise that takes time. Don't hesitate to look up properties and their documentation on MDN or find advice about how to make something on Stack Overflow. Your editor's autocomplete feature will also likely be a big help.

#### Helpful links

- [CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()>)
- [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- Class naming conventions, such as [BEM](http://getbem.com/naming/)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

---
