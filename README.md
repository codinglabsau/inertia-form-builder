# Coding Labs Inertia Form Builder
A private library to build complex Inertia compatible forms without the boilerplate.

## Installation
### Install with npm
```bash
$ npm install @codinglabsau/inertia-form-builder
```

Include the path to the library in your project's `tailwind.config.js` purge configuration:

```js
content: [
  './node_modules/@codinglabsau/inertia-form-builder/src/**/*.{js,vue}',
  // ...
]
```

## Usage
```vue
<script setup>
import { Container, Heading, Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  firstname: Text,
  surname: Text,
})

const submit = () => schema.form.post('/')
</script>

<template>
  <Container>
    <Heading>Create User</Heading>
    <form @submit.prevent="submit">
      <FormBuilder :schema="schema" />
    </form>
  </Container>
</template>
```

## Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo of all the components.

To publish a new build, run:
```bash
vite build
```

## Security
If you discover any security related issues, create an issue on GitHub.

## Credits
- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License
Proprietary. Not for public release.

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
