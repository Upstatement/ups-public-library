---
layout: layouts/entry/index.njk
title: Nesting Selectors
date: 2021-04-23
tags:
  - scss
nextEntryTitle: Mixins
---

One of the most obvious changes SCSS brings to writing styles is the ability to nest them. In CSS, selectors can only contain rules. In SCSS, selectors can contain other selectors, which is called nesting.

<div class="two-up-code">

```html
<ul class="list">
  <li>
    item
  </li>
  ...
  <li>
    item
  </li>
</ul>
```

```scss
.list {
  li {
    margin-bottom: 0.5em;
  }
}
```

</div>

At the most basic level, nesting rules is a shorthand for adding combinators ([read more](/entries/what-is-css/#descendant-combinator%3A-%5Bspace%5D)) to multiple selectors at once, without having to rewrite the first ingredient. In a more abstract sense, nesting rules allows us to declaratively match the structure of styles to the structure of markup. It also helps reduce repetition when writing code, enables some clever options for composition, and when used smartly, can make styles highly readable and structured.

## Nesting & Specificity

Before we get into it, let's talk about what not to do. It's tempting to nest deeply, and match styles to markup exactly. Doing so can get you into trouble very quickly, as every additional selector adds specificity to a rule. In general, when writing styles (SCSS and CSS), your goal should be to **maintain the minimum level of specificity at all times.**

Here's an inadvisable example of nesting:

<p style="text-align: center;"><i>☹</i></p>

<div class="two-up-code">

```html
<footer>
  <section>
    <h1>
      Home
    </h1>
  </section>
</footer>
```

```scss
footer {
  section {
    padding: 10px;

    h1 {
      font-size: 28px;
    }
  }
}
```

</div>

<p style="text-align: center;"><i>☹</i></p>

Let's look at what the above SCSS compiles to:

```css
footer section {
  padding: 10px;
}

footer section h1 {
  font-size: 28px;
}
```

The pro here is that we were quickly and easily able to scope our styles to the `footer` <i>☺</i>. The cons are that we've increased the minimum level of specificity required to overwrite them in the cascade <i>☹</i>, and our SCSS is becoming hard to read <i>☹</i>.

Given that in most cases at Upstatement, we will have complete control over styles and markup, its often better to opt for adding a class name to enforce scope, rather than nesting. The specificity stays low, they are free, and the styles more clearly describe which elements they apply to:

```scss
.footer__section {
  padding: 10px;
}

.footer__heading {
  font-size: 28px;
}
```

Much better. Nesting was not the solution, here. The takeaways are:

1. Try to maintain the minimum level of specificity at all times
1. To do so, when you want to enforce scope, consider using class selectors first
1. Only nest styles in SCSS when you would have done so in CSS anyway

## Using Combinators

By default, SCSS adds a [descendant combinator](/entries/what-is-css/#descendant-combinator%3A-%5Bspace%5D) between each nested selector. We can change that by specifying the combinator we want to use ahead of the nested selector, just like in CSS:

<div class="two-up-code">

```scss
.list-item {
  + .list-item {
    margin-top: 0.5em;
  }
}
```

```css
.list-item + .list-item {
  margin-top: 0.5em;
}
```

</div>

<div class="two-up-code">

```scss
.rich-text {
  > p {
    margin-top: 0.5em;
  }
}
```

```css
.rich-text > p {
  margin-top: 0.5em;
}
```

</div>

## The '`&`' Operator

When nesting, it's often useful to refer back to the current selector, in order to modify or combine it with others. The `&` character references the current scope, allowing for powerful composition. Let's take another look at the above example:

```scss
.list-item {
  + .list-item {
    margin-top: 0.5em;
  }
}
```

Notice how the outer selector and the nested selector are the same. We can tidy this up by using the `&` character to refer back to the outer selector:

```scss
.list-item {
  & + & {
    margin-top: 0.5em;
  }
}
```

Which gives us the same output. As you nest, the `&` operator will continue to act as a reference to the current selector's scope.

### Adding Modifiers

Adding selectors to the `&` operator lets you nest modifiers to your current selector. It's particularly useful for selecting states, or more specific versions of the current selector:

<div class="two-up-code">

```scss
.nav-link {
  color: $color-text;

  &.is-current,
  &:hover,
  &:focus {
    color: $color-spot;
  }
}
```

```css
.nav-link {
  color: #262626;
}

.nav-link.is-current,
.nav-link:hover,
.nav-link:focus {
  color: #2175ff;
}
```

</div>

### Qualifying Scope

The `&` operator doesn't have to be used at the beginning of a nested selector. When placed at the end, it modifies the outer scope of the current selector, from within it:

<div class="two-up-code">

```scss
main {
  background: $color-bg;
  color: $color-text;

  .dark-theme & {
    background: $color-text;
    color: $color-bg;
  }
}
```

```css
main {
  background: $color-bg;
  color: $color-text;
}

.dark-theme main {
  background: $color-text;
  color: $color-bg;
}
```

</div>

At first, this looks counterintuitive &mdash; nesting creates a naturally top-down structure, and using it to ascend feels wrong. The rationale, however, is that SCSS is a vehicle for organizing our styles, and reducing repetition. So it stands to reason that styles related to a certain element should stay in the same selector wherever possible, and overrides in specificity or scope should be introduced as modifiers to that selector, rather than as new selectors.
