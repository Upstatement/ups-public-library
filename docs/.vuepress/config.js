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
          { text: 'Intro to HTML', link: '/learn/lessons/lesson-three' },
          { text: 'HTML Elements', link: '/learn/lessons/lesson-four' },
        ],
      },
      {
        text: 'Exercises',
        ariaLabel: 'Exercises Menu',
        items: [
          { text: 'Setting Up a Repo', link: '/make/exercises/exercise-one' },
          { text: 'Working in Branches', link: '/make/exercises/exercise-two' },
        ],
      },
      {
        text: 'References',
        ariaLabel: 'Reference Menu',
        items: [
          { text: 'Glossary', link: '/reference/glossary' },
          { text: 'Terminal', link: '/reference/terminal' },
          { text: 'Git', link: '/reference/git' },
        ],
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
          {
            title: 'Project Setup',
            children: [
              '/learn/lessons/lesson-one',
              '/learn/lessons/lesson-two',
              '/make/exercises/exercise-one',
              '/make/exercises/exercise-two',
            ],
          },
          {
            title: 'HTML',
            children: ['/learn/lessons/lesson-three', '/learn/lessons/lesson-four'],
          },
        ],
      },
      {
        title: 'References',
        children: ['/reference/glossary', '/reference/terminal', '/reference/git'],
      },
    ],
  },
};
