---
layout: layouts/entry/index.njk
title: CSS Preprocessing
date: 2021-01-16
tags:
  - css
---

#### What it is

CSS pre-processors (like SASS) are supersets of CSS. They usually share the same fundamental syntax and typographical notations, but add features that are specific to that processor. They let us simplify and consolidate the way CSS is written by making programming features like variables, functions, mixins, and more available to us.

#### How it works

When you write SASS, you are writing code in a different language than CSS. Before the website is deployed and served to browsers, however, the SASS files are processed, all the code you wrote is executed like instructions, and CSS files are generated based on them. **Because pre-processed CSS _always_ compiles to regular CSS, it can’t perform anything in browsers that regular CSS can’t. It just makes writing it more powerful.**

## Why not just CSS?

If that sounds a little convoluted, it's because it is. You might be asking, why not just keep using CSS? Or improve the CSS language, instead of making offshoots?

For one, you can just use CSS! In large codebases, however, teams reach for pre-processors because they make writing CSS faster, easier, less repetitive, and most importantly, more maintainable.

As for changing CSS itself, the answer is less simple. Improvements are being made to the language, but slowly. The need for consistency across all Internet technologies means that changes can’t be made to them easily or quickly. But the commercial and programming worlds move at a breakneck pace, and when the shortcomings of CSS became apparent, developers decided address them by contextualizing the problems as related to the task of writing CSS, and not the language itself. It’s not a perfect solution, but still a pretty good one.
