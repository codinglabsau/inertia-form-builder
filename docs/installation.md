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

::: warning
This also requires the UI package (Theme and components)
:::

Include the ui plugin theme in your tailwind.config.js plugin configuration:

```js
import { theme } from '@codinglabsau/ui'

export default{
  // ...
  plugins: [
    theme()
  ]
}
```
