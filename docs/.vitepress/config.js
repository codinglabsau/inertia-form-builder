export default {
  title: "Coding Labs | Inertia Form Builder",
  description:
    "A private package by Coding Labs to reduce form markup and increase complexity of form building ability",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    // Navbar Link
    nav: [{ text: "Docs", link: "/guide" }],
    // Social Icons
    socialLinks: [{ icon: "github", link: "https://github.com/codinglabsau/ui" }],
    // Sidebar
    sidebar: [
      {
        text: "Introduction",
        collapsible: true,
        items: [
          { text: "Installation", link: "/introduction/installation" },
          { text: "Final note", link: "/introduction/note" },
        ],
      },
      {
        text: "Usages",
        collapsible: true,
        items: [
          { text: "The Basics", link: "/basic" },
          { text: "Using the Grid", link: "/grid" },
          { text: "Select and Checkboxes", link: "/select" },
          { text: "Visibility of attributes", link: "/visibility" },
          { text: "Custom Form Actions", link: "/actions" },
          { text: "States", link: "/states" },
          { text: "Custom components", link: "/custom" },
        ],
      },
    ],
    footer: {
      message: "Proprietary License.",
      copyright: "Copyright © 2022-present Coding Labs Pty Ltd",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
}
