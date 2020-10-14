---
layout: layouts/entry/index.njk
title: CSS Preprocessing
date: 2020-10-14
link:
tags:
  - entry
  - css
---

# CSS Preprocessing

So you’ve grasped the fundamentals of CSS. You can change your links from blue to green, add fancy transitions and hover states, and even translate a complex grid to flexbox.

Are you starting to notice anything?

…This is insanely tedious, isn’t it?

How many different times have you used that shade of green for links across the site, and how many different times have you made it imperceptibly lighter, darker, bluer, yellower, and then had to find and update every single instance of it, by hand? There’s got to be a better way.

We have good news: there is. It’s called CSS pre-processing.

## What is pre-processing?

CSS pre-processors (like SASS) are supersets of CSS. They usually share the same fundamental syntax and typographical notations, but add features that are specific to that processor. They let us simplify and consolidate the way CSS is written by making programming features like variables, functions, mixins, and more available to us.

When you write SASS, you are writing code in a different language than CSS. Before the website is deployed and served to browsers, however, the SASS files are processed, all the code you wrote is executed like instructions, and CSS files are generated based on them. **Because pre-processed CSS _always_ compiles to regular CSS, it can’t perform anything in browsers that regular CSS can’t. It just makes writing it more powerful.**

## Why not just CSS?

That seems a little convoluted, and it is. You might be asking, why not just keep using CSS? Or improve the CSS language, instead of making offshoots?

For one, you can! In large codebases, however, programming teams choose to use pre-processors because they make writing CSS faster, easier, and less repetitive. And less code is almost always more maintainable.

For two, the answer is less simple. Improvements are being made to CSS, but slowly. The need for consistency across all Internet technologies means that changes can’t be made to them overnight. But the commercial and programming worlds move at a breakneck pace, and when the shortcomings of CSS became apparent, developers decided address them by contextualizing the problems as related to the task of writing CSS, and not the language itself. It’s not a perfect solution, but still a pretty good one.

---

That’s a lot of theory. If you take one thing away though, it should be this: **CSS pre-processing is a powerful tool, but you won’t be able to take full advantage of it without a deep understanding of CSS. Because at the end of the day, you’re still writing CSS.**

Now, let’s get SASSy.
