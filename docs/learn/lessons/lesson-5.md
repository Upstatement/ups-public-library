# The CSS Box Model

All elements in HTML can be considered boxes. The CSS box model is basically a box that wraps around every HTML element. It is comprised of `margins`, `borders`, `padding`, and the `content` itself. We use the box model to define borders and spacing around elements.

## The Parts of an Element

**Content** - The content of the box, where text and images appear

**Padding** - Clears an area around the content. The padding is transparent

**Border** - A border that goes around the padding and content

**Margin** - Clears an area outside the border. The margin is transparent

## box-sizing

The CSS attribute `box-sizing` can either be `content-box` or `border-box`.

By default, the `box-sizing` of HTML elements is set to `content-box`, meaning that the width and height of an element are only inclusive of the content itself.

### **`content-box`**

The width and height properties **_are_** inclusive of the element's `content` and **_are not_** inclusive of the element's `padding`.

### **`border-box`**

The width and height properties **_are_** inclusive of the element's `content` and `padding`.
