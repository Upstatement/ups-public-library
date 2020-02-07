module.exports = {
  title: 'Upstatement Public Library',
  description: 'Always Be Learning',
  themeConfig: {
    nav: [
      {
        text: 'About',
        link: '/',
      },
      {
        text: 'Lessons',
        ariaLabel: 'Lessons Menu',
        items: [
          { text: 'Lesson One', link: '/learn/lessons/lesson-one' },
          { text: 'Lesson Two', link: '/learn/lessons/lesson-two' },
        ],
      },
      {
        text: 'Exercises',
        ariaLabel: 'Exercises Menu',
        items: [{ text: 'Exercise One', link: '/make/exercises/exercise-one' }],
      },
      {
        text: 'References',
        link: '/references',
      },
    ],
    sidebar: [
      {
        title: 'Information',
        path: '/',
        sidebarDepth: 0,
        children: ['/', '/preface'],
      },
      {
        title: 'Learn',
        path: '/learn/',
        children: [
          '/learn/',
          '/learn/lessons/lesson-one',
          '/make/exercises/exercise-one',
          '/learn/lessons/lesson-two',
        ],
      },
      {
        title: 'References',
        path: '/references',
      },
    ],
  },
};
