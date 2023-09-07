import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Inertia Form Builder",
  description: "Documentation for a Private Package by Coding Labs",
  markdown: {
    theme: 'material-theme-ocean',
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Usage', link: '/usage' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codinglabsau/inertia-form-builder' }
    ],
  },
})
