---
layout: layouts/entry/index.njk
title: HTML Documents
date: 2021-02-01
topic:
  - HTML
nextEntryTitle: HTML Elements
---

Web pages are also known as "HTML documents". Before the Internet as we know it existed, the purpose of most networks was to share and link to/from textual information. As such, HTML was designed as a way to describe, display, mark-up, link, and organize text. We do that by choosing the right elements to display content. Crafting semantically correct HTML documents ensures that our sites are accessible, SEO optimized, and functional &mdash; especially to those who access web pages via screen readers.

> The term "semantically correct" is often used when assessing HTML. It's determined by how accurately elements are being used to describe the content within them, and their place in the overall document structure.

## Basic Document Content Structure

Every HTML Document must have exactly one `body` tag, which houses all of the visible content on the site. Inside the body, you can structure the page however you need. The top-level anatomy below is roughly one of the most common ways to set up a page:

```html
<body>
  <header>
    <nav />
  </header>

  <main />

  <footer />
</body>
```

HTML is a straightforward language, that you can begin to understand just by reading it. The above is self-explanatory:

- There is a header atop the page, which contains the site's navigation links/menus/buttons, etc.

- The `main` tag will contain most of the page's content. Like the `body` tag, there can only be one per page. Unlike the `body` tag, use of a `main` element is not required (though it is highly suggested)

- The footer at the end of the page will likely contain more links and copyright information

Nothing about that structure is mandatory, though it tends to suit most websites &mdash; especially the ones we build at Upstatement. Even though it's only a small fraction of what goes into a page, you can envision how a site like that may be laid out visually, at a high level, just by looking at that code.
