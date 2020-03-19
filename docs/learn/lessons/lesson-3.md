# Intro to HTML

HTML, or Hypertext Markup Language, is what we use to add content to websites. It's a simple language with only a few rules, but it's also the backbone of a website.

## How HTML Works

Fundamentally, HTML is composed of three parts: Elements, Content, and Attributes.

![Anchor Element Anatomy](./img/anchor-element.png 'Anchor Element Anatomy')

### Elements

Every piece of content in HTML goes inside of an element. There are tons of elements to choose from, and each one carries semantic meaning regarding the purpose of the content in the page, or document's, outline. Elements are delinated using tags.

```HTML
<p>
  This is a paragraph element. It's delineated by the "tags" above and below the text.
</p>
```

### Content

This one is simple. It's the text, images, videos, or other media that get put inside elements, and surfaced directly to users.

```HTML
<p>
  Content goes in between tags.
</p>
<details>
  Different content calls for different tags.
</details>
```

### Attributes

HTML elements can be given attributes that allow us to alter or extend their functionality, as well as the amount of information browsers, developers, and users can obtain from the element. Attributes, unlike content, do not get shown to users. But they can have a direct effect on the way an element looks or behaves.

```HTML
<p id="unique-identifier" class="class-name">
  Different attributes do different things. Some are universal.
<p>
<p>
  Others are specific to elements, like the href on
  <a href="https://upstatement.com">
    this anchor tag,
  </a>
  which is used to create a hyperlink.
</p>

```

## HTML Documents

Another way of referring to webpages is as "HTML Documents". It's kind of a dated terminology, but it goes back to what the creators of the language had in mind when they designed it. Way back in the 1960s, before the Internet existed, the purpose of a network was to share and link to/from textual information. As such, HTML was designed as a way to display, mark-up, link, and organize text. We do that by choosing the right elements to display the right content. Crafting semantically correct web pages ensures that our sites are accessible, especially to users who access the web with screen readers.

### Content Structure

Every HTML Document has exactly one body tag, which is where all of the visible site on the content goes. Inside the body, most web pages start with a common content structure:

```HTML
<body>
  <header>
    <nav />
  </header>
  <main>
    Most content goes inside the main element, of which there is also one per document.
  </main>
  <footer />
</body>
```

The markup that composes an HTML Document is known as the web page's "DOM", for "Document Object Model".
