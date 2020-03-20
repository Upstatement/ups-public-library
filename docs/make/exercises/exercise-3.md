# Exercise: Style Stuff!

Below is a live demo of a new header for Upstatement Public Library scaffolded in HTML:

::: demo

<template>

  <main class="exercise-3">
    <header>
      <nav>
        <ul>
          <li><a href="https://github.com/Upstatement/ups-public-library">GitHub</a></li>
          <li><a href="https://upstatement.com">Upstatement</a></li>
          <li><a href="/information">Information</a></li>
        </ul>
      </nav>
      <div>
        <h1>Upstatement Public Library</h1>
        <input type="text" placeholder="_">
      </div>
      <nav>
        <ul>
          <li><a href="/exercises">Lessons</a></li>
          <li><a href="/lessons">Exercises</a></li>
          <li><a href="/reference">Reference</a></li>
        </ul>
      </nav>
    </header>
  </main>

</template>

<style>
/* Starting Styles */

body {
  margin: 0;
}

.exercise-3 header {
  display: flex;
  align-items: baseline;
}

.exercise-3 nav,
.exercise-3 div {
  flex: 1;
}
</style>

:::

Go ahead and click on one of the links in the top right to open the code in a web editor (we recommend JSFiddle), where we'll write some styles to make this:

![UPL Header](./img/header.png 'New UPL Header')

We are going to walk through a set of specific tasks to demonstrate some of the concepts in [Lesson 5](/learn/lessons/lesson-5) and [Lesson 6](/learn/lessons/lesson-6).

**Note: We're going to try this without using classes, to get a good handle on how powerful selectors can be with just basic HTML.**

## Step 1

![Exercise 3 Step 1](./img/exercise-3-steps/step-1.png 'Exercise 3 Step 1')

Let's start by one of the more obvious requirements: making the nav link lists horizontally arranged, instead of vertically.

## Step 2

![Exercise 3 Step 2](./img/exercise-3-steps/step-2.png 'Exercise 3 Step 2')

Now, let's correct the text alignment and positioning on each of the three sections.

- Align the first nav's text to the `left`
- Align the heading section's text `center`
- Align the last nav's text `right`

## Step 3

![Exercise 3 Step 3](./img/exercise-3-steps/step-3.png 'Exercise 3 Step 3')

Next, add the space between each nav link, and on the outsides of the header.

- Add `1em` of space between links
- Add `4em` of space between the navs and either side of the screen

## Step 4

![Exercise 3 Step 4](./img/exercise-3-steps/step-4.png 'Exercise 3 Step 4')

Let's do the typesetting next.

- Change the font family and sizes to something more suitable &mdash; we can use the system's default sans serif typeface with the `sans` keyword
- Set the smaller type at `18px`
- Set the heading at `26px`
- Remove the text underline from the links, and ensure they're the same color as the rest of the text

## Step 5

![Exercise 3 Step 5](./img/exercise-3-steps/step-5.png 'Exercise 3 Step 5')

Add the missing prefix text to the search interface: `$ find`, and style the text to look like the mockup.

## Step 6

![Exercise 3 Step 6](./img/exercise-3-steps/step-6.png 'Exercise 3 Step 6')

Finally, let's make this whole thing properly interactive.

- Add hover states to the links
- Add a focus state to the search input
