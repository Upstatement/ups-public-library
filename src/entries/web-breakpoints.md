---
layout: layouts/entry/index.njk
title: Media Query Mixin
date: 2021-04-23
tags:
  - scss
---

Breakpoints are used to specify styles targeting different device sizes (most commonly browser widths). We use the [mq mixin](mq-mixin) to define styles for different. This is a set of breakpoints we commonly employ on projects. Although, depending on your design and site you may require more or less.

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

Each setup mixin is useful in its own right, and the final invocation of the `link` mixin is simple, clean, and highly legible.
