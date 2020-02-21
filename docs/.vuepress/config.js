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
          { text: 'Intro to Terminal', link: '/learn/lessons/lesson-one' },
          { text: 'Intro to Git', link: '/learn/lessons/lesson-two' },
        ],
      },
      {
        text: 'Exercises',
        ariaLabel: 'Exercises Menu',
        items: [{ text: 'Setting Up a Repo', link: '/make/exercises/exercise-one' }],
        items: [{ text: 'Working in Branches', link: '/make/exercises/exercise-two' }],
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
          '/learn/lessons/lesson-one',
          '/learn/lessons/lesson-two',
        ],
      },
      {
        title: 'Make',
        path: '/make/',
        children: [
          '/make/exercises/exercise-one',
          '/make/exercises/exercise-two',
        ],
      },
      {
        title: 'References',
        path: '/references',
      },
    ],
  },
};
