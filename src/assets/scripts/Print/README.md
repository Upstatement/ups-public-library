# Print.js

Print is a small JS-based animation that makes text appear and disappear per-letter. It preserves text position, can render on multiple lines, accepts timing and looping options as `data-` attributes, and is highly customizable with CSS.

## Quick start

1. Create a base element that will get picked up on `DOMcontentLoaded`. Use any tag that accepts `span` tags. Don't add any text content to the element.

1. Set the text you want to print as a string within the element's `data-print` attribute, like so:

   ```html
   <p data-print="Some text"></p>
   ```

1. Reload the page, and watch your text loop indefinitely.

---

## Customization

Print animations are customizable through `data-` attributes on your instantiating element. They are:

### `data-print="[string]"`

Inside the attached element, creates 1 or more top level `span.js-print-line` nodes, which will contain your text _verbatim_ with each character wrapped inside its own `span.js-print-char` node

```html
<p data-print="First line/n/Second line"></p>
```

**Default**:
None — required

**Notes**:

1. You can split your text across multiple lines by passing a special string sequence, `/n/`, where you'd like the first line to terminate. Each line will be wrapped in a `span.js-print-line` tag.
1. Value is treated as plain-text, meaning HTML tags or entities will not work.
1. Whitespace is preserved, and spaces (`" "`) will get rendered and wrapped.

### `data-use-hover="[boolean]"`

When enabled, hovering the instantiating element will trigger a single loop.

```html
<a data-print="Go home" data-use-hover="true" href="/"></a>
```

**Default**:
`false`

**Notes**:

1. The text's initial state is visible, and loops are performed out/in.
1. `data-initial-delay`, `data-loops`, and `data-fill-mode` have no effect when this option is enabled.
1. Event listeners used are `mouseenter`, `touchstart`, and `focus`.

### `data-initial-delay="[integer(ms)]"`

The amount of time after `DOMcontentLoaded`, in ms, to wait before beginning the first loop.

```html
<p data-initial-delay="1000" data-print="1 second delay"></p>
```

**Default**:
`0`

**Notes**:
The wait is only added prior to the first loop and _will not_ be used between subsequent loops, unless Print.js stops and restarts after detecting the user has idled.

### `data-visible-for="[integer(ms)]"`

The amount of time per loop that each letter will be visible on screen.

```html
<p data-visible-for="1000" data-print="1 second of visibility per character"></p>
```

**Default**:
`10000`

### `data-invisible-for="[integer(ms)]"`

The amount of time per loop that each letter will be invisible.

```html
<p data-invisible-for="100" data-print="Use a small number for a 'banding' effect"></p>
```

**Default**:
`2000`

**Notes**:

The scrolling entrance animation is achieved by staggering each character's entrance by `70ms`. As a result, each character's invisible phase will actually be `70ms` greater than the given value.

### `data-loops="['infinite'|integer]"`

The amount of times that text should loop.

```html
<p data-loops="1" data-print="I will only have one invisible cycle"></p>
```

**Default**:
`infinite`

**Notes**:

1. If Print.js stops and restarts after detecting that a user has idled _and before the target # of loops has been reached_, the loop counter is reset to `0`.
1. If the target number of loops is reached, Print.js will stop checking for user idle and remove all event listeners. The text will become entirely and indefinitely static (unless the page reloads).

### `data-fill-mode="['forwards'|any]"`

If a number of loops has been given, you can use this option to control whether you want the last loop to end on a visible or invisible cycle. `forwards` will end with text visible indefinitely, anything else will end with text hidden indefinitely.

```html
<p data-loops="1" data-fill-mode="backwards" data-print="You'll only see me once. Don't blink!"></p>
```

**Default**:
`forwards`

**Notes**:

1. This option has no effect unless `data-loops` has been set to an integer.
1. _Any_ value other than `forwards` will end on an invisible cycle.
