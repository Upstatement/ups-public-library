---
layout: layouts/entry/index.njk
title: The Box Model
date: 2021-04-23
tags:
  - css
nextEntryTitle: Pseudo Classes & Elements
---

All elements in HTML can be considered boxes. The CSS box model describes the rendered layout of an HTML element. It is comprised of margins, borders, padding, and the content itself. We use the box model to define borders and spacing around elements.

<img src="/static/img/box-model.png" alt="CSS Box Model" width="200" style="width: 350px; margin-left: auto; margin-right: auto; display: block;">

#### Content Box

The content, where text and images appear.

#### Padding Box

The area cleared around the content.

#### Border Box

A border that goes around the padding and content. An element’s background covers this area (up to the outer edge of the border box) by default. You can change this behavior by setting the `background-clip` property.

#### Margin Box

The area cleared outside the border. An element’s background will never show in its margin box.

## Box Sizing

The CSS attribute `box-sizing` can either be set to `content-box` or `border-box`. By default, the `box-sizing` of HTML elements is `content-box`, meaning that the width and height of an element are inclusive only of the content itself.

#### **`content-box`**

The width and height properties **are** inclusive of the element’s `content` and **are not** inclusive of the element’s `padding`.

#### **`border-box`**

The width and height properties **are** inclusive of the element’s `content` **and** `padding`.

## Margin Collapsing

You may ask “is there ever a reason I should use margin over padding to space elements, or vice versa?”

The answer is, yes.

When certain conditions are met, the top and bottom margins of blocks are combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing.

Margin collapsing occurs in three basic cases:

#### Adjacent Siblings

The margins of adjacent siblings are collapsed (except when the latter sibling needs to be cleared past floats).

```html
<div>
  Our margins...
</div>
<div>
  will collapse.
</div>
```

#### No Content Separating Parent & Descendants

If there is no border, padding, inline part, block formatting context created, or clearance to separate the margin-top of a block from the margin-top of one or more of its descendant blocks; or no border, padding, inline content, height, min-height, or max-height to separate the margin-bottom of a block from the margin-bottom of one or more of its descendant blocks, then those margins collapse. The collapsed margin ends up outside the parent.

```html
<section>
  <div>
    My margin will collapse into my parent’s.
  </div>
</section>

<section>
  I’m in the way...
  <div>
    so mine won’t.
  </div>
</section>
```

#### Empty Blocks

If there is no border, padding, inline content, height, or min-height to separate a block’s margin-top from its margin-bottom, then its top and bottom margins collapse.

```html
<div>
  <!-- Since I’m empty, my own margins will collapse. -->
</div>
```

#### Other Notes:

- Margins of floating and absolutely positioned elements never collapse.

- More complex margin collapsing (of more than two margins) occurs when the above cases are combined.

- These rules apply even to margins that are zero, so the margin of a descendant ends up outside its parent (according to the rules above) whether or not the parent’s margin is zero.

- When negative margins are involved, the size of the collapsed margin is the sum of the largest positive margin and the smallest (most negative) negative margin.

- When all margins are negative, the size of the collapsed margin is the smallest (most negative) margin. This applies to both adjacent elements and nested elements.

- Only margins can be negative. Negative values for padding will be ignored.
