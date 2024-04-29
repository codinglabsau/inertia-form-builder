export default {
  title: 'Coding Labs | Inertia Form Builder',
  description:
    'A private package by Coding Labs to reduce form markup and increase complexity of form building ability',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/codinglabsau/inertia-form-builder' }],
    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Installation', link: '/installation' }],
      },
      {
        text: 'Usage',
        items: [
          { text: 'The Basics', link: '/basics' },
          { text: 'Using the Grid', link: '/grid' },
          { text: 'Using the Section', link: '/section' },
          { text: 'Select and Checkboxes', link: '/select' },
          { text: 'Visibility of Attributes', link: '/visibility' },
          { text: 'Custom Form Actions', link: '/actions' },
          { text: 'States', link: '/states' },
          { text: 'Custom Components', link: '/custom' },
        ],
      },
    ],
    footer: {
      message: 'Proprietary License.',
      copyright: 'Copyright © 2022-present Coding Labs Pty Ltd',
    },
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true,
    },
  },
}
