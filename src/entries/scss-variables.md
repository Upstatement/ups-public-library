---
layout: layouts/entry/index.njk
title: SCSS Variables
date: 2021-02-19
tags:
  - scss
nextEntryTitle: Nesting Selectors
---

Variables are a simple yet fundamental component of writing SCSS. Creating and using variables means that tweaking a color, increasing a font size, or adjusting global spacing can be done by changing code in just one place, instead of everywhere that value is used.

> It's imperative to note that, after preprocessors had been around for some time, variables were added to vanilla CSS. Vanilla CSS variables are powerful, useful, and entirely compatible with SCSS variables. We'll be focusing on SCSS variables in this entry.

## Declaring Variables

Variable declarations look much like style declarations &mdash; the key difference is that variable names must begin with a `$`. To declare a variable, simply type the name, followed by the value, like so:

```scss
$purple: #8e4cf8;
```

After you declare a variable, you can use it as much as you want, as long as it is in scope.

```scss
$purple: #8e4cf8;

a {
  color: $purple;
}

button {
  background-color: $purple;
}

input {
  border: 1px solid $purple;
}
```

For an in-depth explanation on how SCSS variables work, see the [official documentation of Sass variables](https://sass-lang.com/documentation/variables).

## Variable Composition

Variables can reference other variables. Composition can help to isolate moving parts of your style architecture, and keep things from breaking when changes get made. Here's a real-world example:

<div class="two-up-code">

```scss
$fallback-sans: system-ui, Helvetica, sans-serif;
$fallback-serif: 'Times New Roman', Georgia, serif;

$everett: 'Everett', $fallback-sans;
$mondwest: 'Mondwest', $fallback-serif;

$sans: $everett;
$display: $mondwest;
```

```scss
body {
  font-family: $sans;
}

h1 {
  font-family: $display;
}
```

</div>

By creating a universal point of reference for our typefaces (`$display` and `$sans`), each part of the site's font stack can be changed in one place, without fear of breakages.

Take a look at another great use case:

<div class="two-up-code">

```scss
$border-width-thin: 1px;
$border-width-thick: 5px;

$border-thin-dark: $border-width-thin solid $color-border-dark;
$border-thick-dark: $border-width-thin solid $color-border-dark;

$button-border: $border-thin-dark;
$section-divider: $border-thick-dark;
```

```scss
button {
  border: $button-border;
}

.section {
  border-bottom: $section-divider;
}
```

</div>

As you can see, it's useful to scaffold variables with levels of meaning. We often separate value scales (`$border-width-thin`, `$border-width-thick`) from their application (`$button-border`, `$section-divider`) to keep our styles readable, relevant, and modular.

## Variables, Scope, & Cascade

Scope is inherited as SCSS nests. Declaring a variable outside of a selector places it in the global scope. Declaring a variable inside a selector scopes it to that selector, and all nested selectors.

If you declare multiple variables with the same name, the declaration that is most recent and in the nearest scope will be used:

```scss
$img-size: 200px;

article {
  img {
    width: $img-size; // 200px
    height: $img-size; // 200px
  }
}

.portrait-wrapper {
  $img-size: 10px;

  img {
    width: $img-size; // 10px
    height: $img-size; // 10px
  }
}
```

Reusing variable names should generally be avoided, unless you are intentionally updating a variable's value. The above is a good example of what not to do. At other times though, like in mixins, creating and overwriting variables can be useful.

For more on SCSS scope and compilation, check out the [official Sass docs](https://sass-lang.com/documentation/variables#scope).

## Variable Interpolation

You may need to use variables for things other than property values. By interpolating a variable, you can embed its value in other parts of your styles, use them as dynamic property names, inside `calc()` functions, and more.

#### In `calc()` functions

```scss
.two-up-image {
  display: flex;
  justify-content: space-between;

  img {
    flex: 0 1 calc((100% - #{$gutter-width}) / 2);
  }
}
```

#### As property names

```scss
@mixin site-spacing($property, $side) {
  #{$property}-#{$side}: $site-spacing;
}

.section {
  @include site-spacing(padding, top);
}
```

For more on interpolation, check out the [official Sass docs](https://sass-lang.com/documentation/interpolation).
