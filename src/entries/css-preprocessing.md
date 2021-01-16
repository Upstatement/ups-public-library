---
layout: layouts/entry/index.njk
title: CSS Preprocessing
date: 2021-01-16
tags:
  - css
---

#### What it is

CSS preprocessing adds features for writing CSS, but not for what CSS does in the browser. Each language is a superset of CSS that shares some of the same fundamental syntax and typographical notations, but adds features that are specific to that processor. They let us simplify and consolidate the way CSS is written by making programming features like variables, functions, mixins, and more available to us.

> There are several languages for CSS preprocessing. At Upstatement we use SCSS, so we'll focus on it in the Library.

#### How It Works

When you write SCSS, you are writing code in a different language than CSS, that will eventually become CSS. Before the website is deployed and served to browsers, the files are and executed like instructions, and CSS files are generated based on them. CSS is ultimately still what gets sent to the browser. **Because preprocessed CSS compiles to regular CSS, it can’t perform anything in browsers that regular CSS can’t. It just makes writing it more powerful.**

## Why Not Just CSS?

Preprocessing is a roundabout approach. You may wonder, why not just keep using CSS? Or improve the CSS language, instead of making offshoots?

For one, you can just use CSS. In large codebases, however, teams reach for preprocessors because they make writing CSS faster, easier, less repetitive, and most importantly, more maintainable.

As for changing CSS itself, the answer is less simple. Improvements are being made to the language, but slowly. The need for consistency across all Internet technologies means that changes can’t be made to them easily or quickly. But the commercial and programming worlds move at a breakneck pace, and when the shortcomings of CSS became apparent, developers decided address them by contextualizing the problems as related to the task of writing CSS, and not the language itself. It’s not a perfect solution, but still quite clever.
