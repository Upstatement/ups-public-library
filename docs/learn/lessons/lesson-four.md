# HTML Elements

## Types of Elements

There are tons of HTML elements &mdash; you don't have to know all of them by heart. A handful of them will become your go-tos for writing markup, and for the rest, Google and MDN are your friend. A good approach to writing markup is to always ask, "is this the right element to use for this content?" If the answer is no, there's a good chance you can find one that is.

You can head here for a list of all of them: [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### Element Display Types

HTML elements are typically categorized as either "block-level" or "inline". By default, a block-level element occupies the entire width of its parent element (container), thereby creating a "block."

Browsers typically display the block-level element with a newline both before and after the element. You can visualize them as a stack of boxes.

Block level elements contain inline elements as well as other blocks, whereas inline elements should usually only contain other inline elements, or text and image content.

Components may also be "inline-blocks", which means they may be used inside of blocks to add inline content that behaves like block level content. We'll talk more about the distinctions between block, inline, and inline-block when we get to CSS.

### Commonly Used Elements

| Tag       | Use                                                                                                                                                                                                | Display      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `section` | Represents a standalone section &mdash; which doesn't have a more specific semantic element to represent it — contained within an HTML document.                                                   | Block        |
| `article` | Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).                         | Block        |
| `div`     | The division element is a generic container for flow content.                                                                                                                                      | Block        |
| `p`       | Represents a single paragraph.                                                                                                                                                                     | Block        |
| `img`     | Embeds an image into the document.                                                                                                                                                                 | Inline-block |
| `a`       | The anchor element, with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address                              | Inline       |
| `span`    | A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes.                                              | Inline       |
| `ul`      | Represents an unordered list of items, typically rendered as a bulleted list.                                                                                                                      | Block        |
| `li`      | Used to represent an item in a list.                                                                                                                                                               | Inline       |
| `nav`     | Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples are menus, tables of contents, and indexes. | Block        |
| `header`  | Represents introductory content, typically a group of introductory or navigational aids.                                                                                                           | Block        |
| `footer`  | Represents a footer for its nearest sectioning content or sectioning root element. Typically contains information about the author, copyright data, or related links.                              | Block        |
| `input`   | Used to create interactive controls for web-based forms in order to accept data from the user.                                                                                                     | Inline-block |
| `button`  | Represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.                                                                       | Inline-block |

## Elements and Displaying Content

Some elements have a standard set of styles attached to them by the browser. Ultimately, the way anything looks by default is up to the browser, and for the most part, things are the same across the commonly used ones. There are differences, but we usually override them anyway, since we don't pick elements based on the way they look, but what they mean semantically.

As you probably know, default unstyled links are blue with underlines, and browsers will try to use Times New Roman by default most times. There are other default displays for more complex elements as well, like the `details` element:

<details>
  Surprise!
</details>

Which just requires:

```HTML
<details>
  Surprise!
</details>
```

Some other examples are:

1. The `strong` tag, for bold text:

   <strong>Bold</strong>

   ```HTML
   <strong>Bold</strong>
   ```

1. The `em` tag, for emphasized text:

   <em>Brash</em>

   ```HTML
   <em>Brash</em>
   ```

1. The `sup` tag, for superscript text:

   r<sup>2</sup>

   ```HTML
   r<sup>2</sup>
   ```

and more.

As mentioned, we typically opt-out of or override these default styles. But they are good indicators of whether the element you're using is the correct choice for the content it houses.
