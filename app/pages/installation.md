# Installation Instructions

## Install with NPM
`npm install @codinglabsau/inertia-form-builder`

Include the path to the library in your project's tailwind.config.js purge configuration:

```js
content: [
  './node_modules/@codinglabsau/inertia-form-builder/dist/*.js',
  // ...
]
```

> **Warning:** This also requires the Coding Labs gooey package (theme and components)

Include the ui plugin theme in your tailwind.config.js plugin configuration:

```js
import { theme } from '@codinglabsau/gooey'

export default {
  // ...
  plugins: [
    theme()
  ]
}
```

See the [codinglabsau/gooey](https://github.com/codinglabsau/gooey) documentation on how to customise the theme.
