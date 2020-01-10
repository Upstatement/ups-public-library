module.exports = {
  title: 'Hyper Hi',
  description: 'Learning.',
  themeConfig: {
    nav: [
      {
        text: 'Welcome',
        link: '/'
      },
      {
        text: 'Lessons',
        ariaLabel: 'Lessons Menu',
        items: [
          { text: 'Lesson One', link: '/learn/lessons/lesson-one/' },
          { text: 'Lesson Two', link: '/learn/lessons/lesson-two/' },
        ]
      },
      {
        text: 'References',
        link: '/references/',
      },
    ],
    sidebar: {
      '/learn/': [
        '',
        'lessons/lesson-one',
        'lessons/lesson-two'
      ],
      '/references/': [
        '',
      ],
      '/': [
        '',
      ],
    },
  }
}