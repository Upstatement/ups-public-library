---
layout: layouts/entry/index.njk
title: What is HTML?
date: 2021-03-26
topic: html
nextEntryTitle: HTML Documents
---

HTML, or HyperText Markup Language, is what we use to add content to websites. It’s a simple language with only a few rules, but it’s also the backbone of a website.

## How HTML Works

Fundamentally, HTML is composed of three parts: elements, content, and attributes.

### Elements

Every piece of content in HTML goes inside of an element. There are many to choose from, and each one conveys semantic meaning about the content within it, and its purpose in the page. Elements are delineated using tags.

```html
<p>
  This is a paragraph element. It’s delineated by the opening and closing character sequences above
  and below the text.
</p>
```

### Content

Content is the text, images, videos, or other media that go inside elements, and get surfaced directly to users.

```html
<p>
  Content goes in between tags.
</p>
<details>
  Different content calls for different tags.
</details>
```

### Attributes

Elements can be given attributes that alter or extend their functionality, as well as the amount of information browsers, developers, and users can obtain from the element. Attributes, unlike content, do not get shown to users. They can, however, have a direct effect on the way an element looks or behaves.

```html
<p id="unique-identifier" class="class-name">
  Different attributes do different things. Some are universal.
</p>
<p>
  Others are specific to elements, like the href on
  <a href="https://upstatement.com">
    this anchor tag,
  </a>
  which is used to create a hyperlink.
</p>
```
