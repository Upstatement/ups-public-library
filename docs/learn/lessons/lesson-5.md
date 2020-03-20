# The CSS Box Model

All elements in HTML can be considered boxes. The CSS box model is a box that wraps around every HTML element. It is comprised of `margins`, `borders`, `padding`, and the `content` itself. We use the box model to define borders and spacing around elements.

## The Parts

![CSS Box Model](./img/box-model.png 'CSS Box Model')

### `content`

The content, where text and images appear

### `padding`

The area cleared around the content

### `border`

A border that goes around the padding and content

### `margin`

The area cleared outside the border

## Box Sizing

The CSS attribute `box-sizing` can either be set to `content-box` or `border-box`.

By default, the `box-sizing` of HTML elements is `content-box`, meaning that the width and height of an element are inclusive only of the content itself.

### **`content-box`**

The width and height properties **_are_** inclusive of the element's `content` and **_are not_** inclusive of the element's `padding`.

### **`border-box`**

The width and height properties **_are_** inclusive of the element's `content` **_and_** `padding`.
