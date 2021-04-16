---
layout: layouts/entry/index.njk
title: HTML Elements
date: 2021-03-26
topic: html
---

There are nearly 90 different HTML elements &mdash; you’ll only end up using about 10 &ndash; 20 of them regularly. Of those, an even smaller subset will cover most use cases for marking up content, and should be memorized. For the rest, turning to Google and MDN is the best way to make a decision. A good approach to writing markup is to always ask, “does this element accurately describe its content?” If the answer is no or a weak yes, there’s a good chance you can pick a better one.

You can read the [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for a full, detailed list.

## Commonly Used Elements

> You’ll notice each element in this list has a “default level.” It’s explained [at the end of this entry](#element-display-levels).

#### `section`

Represents a standalone section &mdash; which doesn’t have a more specific semantic element to represent it &mdash; contained within an HTML document.

> Default level: Block

#### `article`

Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).

> Default level: Block

#### `div`

The division element is a generic container for flow content.

> Default level: Block

#### `h1` ... `h6`

Denotes a heading that begins a new section in the document outline.

> Default level: Block

#### `p`

Represents a single paragraph.

> Default level: Block

#### `img`

Embeds an image into the document.

> Default level: Inline-block

#### `a`

The anchor element, with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address

> Default level: Inline

#### `span`

A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes.

> Default level: Inline

#### `ul`

Represents an unordered list of items, typically rendered as a bulleted list.

> Default level: Block

#### `li`

Used to represent an item in a list.

> Default level: Inline

#### `nav`

Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples are menus, tables of contents, and indexes.

> Default level: Block

#### `header`

Represents introductory content, typically a group of introductory or navigational aids.

> Default level: Block

#### `footer`

Represents a footer for its nearest sectioning content or sectioning root element. Typically contains information about the author, copyright data, or related links.

> Default level: Block

#### `input`

Used to create interactive controls for web-based forms in order to accept data from the user.

> Default level: Inline-block

#### `button`

Represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

> Default level: Inline-block

## Semantics vs Styles

Some elements have a standard set of styles attached to them by the browser. Ultimately, the way anything looks by default is up to the browser, and for the most part, things are the consistent between browsers. As we have come to expect, links are blue with underlines by default, and text is set in Times New Roman unless otherwise specified. There are other default styles for more complex elements, like the `details` element here:

<details>
  This element is for optional supporting information.
</details>

Which only requires:

```html
<details>
  This element is for optional supporting information.
</details>
```

Default styles may be useful at times, but they are ultimately secondary, and shouldn’t ever be your reason for choosing an element. What’s most important is that you use whichever element most accurately describes the content within it. For this reason, we often remove or override default styles.

## Element Display Levels

HTML elements are categorized as either “block”, “inline”, or “inline-block” level. Display level is another important factor when choosing elements, since it has semantic, visual, and structural implications (block-level elements can’t go inside inline elements). We’ll talk more about the design implications of display levels when we get to CSS.

#### Block

By default, a block-level element occupies the entire width of its parent element (container). Essentially, block level elements always form columns. They can contain other blocks, inline elements, or content.

#### Inline

Inline elements sit next to each other to form rows inside blocks, and can be used sequentially in bodies of text. By default, they will only be as wide as the content within them. They can only contain inline elements or content.

#### Inline-Block

Inline-blocks may be used inside of blocks to add semantically inline content that behaves like block-level content. The inline-block display mode has more to do with design and CSS than HTML.
