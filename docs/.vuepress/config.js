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
          { text: 'Intro to Terminal', link: '/learn/lessons/lesson-1' },
          { text: 'Intro to Git', link: '/learn/lessons/lesson-2' },
          { text: 'Intro to HTML', link: '/learn/lessons/lesson-3' },
          { text: 'HTML Elements', link: '/learn/lessons/lesson-4' },
          { text: 'CSS: The Box Model', link: '/learn/lessons/lesson-5' },
          { text: 'CSS: In Practice', link: '/learn/lessons/lesson-6' },
        ],
      },
      {
        text: 'Exercises',
        ariaLabel: 'Exercises Menu',
        items: [
          { text: 'Setting Up a Repo', link: '/make/exercises/exercise-1' },
          { text: 'Working in Branches', link: '/make/exercises/exercise-2' },
          { text: 'Style Stuff', link: '/make/exercises/exercise-3' },
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
            children: ['/learn/lessons/lesson-1', '/learn/lessons/lesson-2'],
          },
          {
            title: 'HTML',
            children: ['/learn/lessons/lesson-3', '/learn/lessons/lesson-4'],
          },
          {
            title: 'CSS',
            children: ['/learn/lessons/lesson-5', '/learn/lessons/lesson-6'],
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
