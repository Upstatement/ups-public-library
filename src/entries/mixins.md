---
layout: layouts/entry/index.njk
title: Mixins
date: 2021-02-19
tags:
  - scss
---

Oftentimes, we need to apply the same groups of styles in numerous instances throughout a site. Mixins allow us to define a group of rules and insert them into selectors. We can even pass them parameters to adjust the output as needed in different contexts. Mixins are defined using the `@mixin` keyword, and invoked using the `@include` keyword.

```scss
@mixin link {
  text-decoration: none;
  color: $c-link;
}

a {
  @include link;
}
```

## Adding Parameters

Mixin parameters are just locally scoped variables. You can set a default for a parameter to make it optional when using the mixin, or leave it undefined to require it.

```scss
@mixin link($color: $c-link) {
  text-decoration: none;
  color: $color;
}

a {
  @include link($color: $c-spot-alt);
}
```

Mixins can have as many parameters as you want. If, when invoking the mixin, you're passing parameters in the order they appear, you can skip the definition, like so:

```scss
@mixin link($color: $c-link, $font: $display) {
  color: $color;
  font-family: $font;
  text-decoration: none;
}

a {
  @include link($c-spot-alt, $sans);
}
```

## Nesting

Nesting in mixins behaves exactly like in selectors. Modifiers, nesting, and qualification are all functional.

```scss
@mixin link($color-base: $c-link, $color-active: $c-link-active) {
  color: $color-base;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $color-active;
  }
}
```

### `@content` Directive

You can even write mixins that act as selectors themselves by passing their contents through with the `@content` directive. Such mixins are useful for shorthanding selectors, scope modifications, and composition:

```scss
@mixin on-focus {
  &:hover,
  &:focus {
    @content;
  }
}

a {
  @include on-focus {
    outline: none;
  }
}
```

## Composition

Composing mixins is a powerful way to reduce repetition and increase the modularity of styles. It gives us all the same benefits of [composing variables](/entries/scss-variables/#variable-composition), and more.

Here's an extremely common use case that builds upon what we've seen so far in this entry, and is a staple at Upstatement:

```scss
@mixin on-focus {
  &:hover,
  &:focus {
    @content;
  }
}

@mixin focus-reset {
  @include on-focus {
    outline: none;
  }
}

@mixin link($color-base: $c-link, $color-active: $c-link-active) {
  color: $color-base;
  text-decoration: none;

  @include on-focus {
    color: $color-active;
  }
}

a {
  @include link;
}
```

Each setup mixin is useful in its own right, and the final invocation of the `link` mixin is simple, clean, and highly legible.
