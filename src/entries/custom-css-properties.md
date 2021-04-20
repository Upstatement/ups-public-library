---
layout: layouts/entry/index.njk
title: Custom CSS Properties
date: 2021-04-20
topic: css
---

In addition to the many [properties](/entries/what-is-css) that are included in CSS (`color`, `font-size`, etc), we can create custom properties to use as variables. Here's an example:

```css
:root {
  --link-color: #516cff;
}

a {
  color: var(--link-color);
}
```

They are highly useful and flexible, if a bit verbose. Let's dive in.

## Basic Rules

For the most part, custom properties behave like normal ones. Here are their basic rules:

- Custom property names must always begin with a `--`, otherwise, they will be ignored
- All of the same [cascade, inheritance, and specificity](/entries/cascade-inheritance-and-specificity) rules of setting and updating regular properties apply to custom ones
- They can be assigned to any type of CSS value or function, or to another custom property
- They can only be referenced using `var()` function
- To reference them in a declaration, they must be in scope. If they aren't, that declaration will be ignored

## Scoping Properties

The selector that you define a custom property in determines its scope. Let's take another look at the example above:

```css
:root {
  --link-color: #516cff;
}

a {
  color: var(--link-color);
}
```

Here, the property `--link-color` is defined in the `:root` selector. Simply put, `:root` is a shortcut to the topmost scope of a CSS context (more on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)). Defining custom properties here makes them accessible from anywhere in the stylesheet.

Doing so is a safe default choice. Defining them in a more specific scope is perfectly acceptable as well:

```css
.thumbnail {
  --thumbnail-width: 64px;

  width: var(--thumbnail-width);
}
```

In this case, the current value of the `--thumbnail-width` property at `64px` will only be accessible to elements with the `.thumbnail` class, and their children. That may be useful if you have multiple thumbnails throughout your site at different sizes, or if you want to overwrite a value for the property that was defined in a parent scope.

Ultimately, where you define a custom property should depend on context.

## Context-Based Variables

One of the benefits of defining custom properties at the `:root` is the ability to use them in any context, and update them as context changes.

This approach allows a property to retain the same semantic meaning throughout your design system, but change its value situationally. For example, we may set a width for grid gutters globally:

<div class="two-up-code">

```css
:root {
  --gutter: 20px;
}

.grid-item {
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}
```

```html
<div class="grid">
  <div class="grid-item" />
  <div class="grid-item" />
</div>
```

</div>

...and update it in subgrids, whose children use the same styles:

<div class="two-up-code">

```css
.subgrid {
  --gutter: 10px;
}
```

```html
<div class="grid">
  <div class="grid-item" />

  <div class="subgrid">
    <div class="grid-item" />
    <div class="grid-item" />
  </div>
</div>
```

</div>

With this method, we're able to take a semantic approach to styling by using creating custom properties to use as variables in class styles, and updating the variables as context changes, leaving the original class styles alone.

We try to employ the same methodology with [SCSS variables](/entries/scss-variables) by scaffolding variables into separate assignments for values and application.

## Real-Time Updates

Unlike pre-processed variables, custom properties are evaluated in the browser, in real-time. That gives two benefits:

1. They can have multiple values at once across contexts, thanks to scope
1. They can be updated as the site responds to user interaction, media changes, etc.

A use case that illustrates this, and where custom properties really shine, is for light/dark modes. Consider a setup like so:

```css
:root {
  --c-black: #000000;
  --c-white: #ffffff;

  --c-fg: var(--c-black);
  --c-bg: var(--c-white);
}

html {
  color: var(--c-fg);
  background-color: var(--c-bg);
}

.dark-mode {
  --c-fg: var(--c-white);
  --c-bg: var(--c-black);
}
```

In this case, toggling the `dark-mode` class on any element will change it to dark mode. Doing so is simple enough with JavaScript, but let's go a step further and imagine a pure CSS implementation of a dark mode switch:

<div class="two-up-code">

```css
:root {
  --c-black: #000000;
  --c-white: #ffffff;

  --c-fg: var(--c-black);
  --c-bg: var(--c-white);
}

main {
  color: var(--c-fg);
  background-color: var(--c-bg);
}

#darkModeToggle:checked + main {
  --c-fg: var(--c-white);
  --c-bg: var(--c-black);
}
```

```html
<html>
  <body>
    <input type="checkbox" id="darkModeToggle" />
    <main>
      All site content will go here
    </main>
  </body>
</html>
```

</div>

In this example, everything we discussed comes together:

1. Our `--c-black` and `--c-white` variable values are scaffolded into our `--c-fg` and `--c-bg` (foreground and background) variable applications
1. We only set the `color` and `background-color` properties once
1. We update the foreground and background colors based on context, leveraging scope
1. Our styles change in response to user interaction

---

For more on what you can do with custom properties, check out these examples:

- [Rainbow color effect on library.upstatement.com](https://github.com/Upstatement/ups-public-library/blob/main/src/assets/scripts/Spectrum.js#L33)
- [Light/dark theme on playbook.upstatement.com](https://github.com/Upstatement/playbook/blob/860a2d21455c485ecf9029824c3f3d7c5e901bfc/src/assets/styles/base/_variables.scss#L45)
- [Animated 3D text ring parameters](https://github.com/Upstatement/experiment-japan-cloud-css/blob/1220b85b37a282694a28c8021b59a9dbee172857/src/styles.css#L19)
