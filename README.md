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
  './node_modules/@codinglabsau/inertia-form-builder/dist/*.js',
  // ...
]
```

## Usage
```vue
<script setup>
import { usePage } from '@inertiajs/vue3'
import { Container, Heading, Email, Text, Combobox, Select } from '@codinglabsau/ui'
import { FormBuilder, useSchema, CheckboxGroup, Grid } from '@codinglabsau/inertia-form-builder'

// example user prop to pre-fill the form
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const schema = useSchema({
  // image input with a preview
  avatar: {
    component: Image,
    props: {
      currentImage: usePage().props.value.auth.user.avatar,
    }
  },

  // basic email input
  email: {
    component: Email,
    value: props.user.email,
  },

  // 2-column grid with 2 inputs
  name: {
    type: Grid,
    schema: {
      firstname: {
        component: Text,
        value: props.user.firstname,
      },
      surname: {
        component: Text,
        value: props.user.surname,
      },
    },
  },
  team: {
    component: Select,
    value: 2,
    props: {
      options: [
        { id: 1, name: 'Blue Team' },
        { id: 2, name: 'Red Team' }
      ],
      disabled: true,
    }
  },
  colour: {
    component: Combobox,
    value: 'bg-blue-400',
    props: {
      options: [
        { id: 'bg-red-400', name: 'Red 400' },
        { id: 'bg-blue-400', name: 'Blue 400' }
      ],
    }
  },
  days: {
    component: CheckboxGroup,
    label: 'Available Days',
    items: [
      { label: 'Monday', value: 1 },
      { label: 'Tuesday', value: 2 },
      { label: 'Wednesday', value: 3 },
      { label: 'Thursday', value: 4 },
      { label: 'Friday', value: 5 },
    ],
    checked: props.user.days ?? [],
  },
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

### Customise Form Buttons
You may use the `actions` slot that provides the underlying inertia form as a prop to customise the forms submit buttons:
```vue
<form @submit.prevent="submit">
  <FormBuilder :schema="schema">
    <template #actions="{ form }">
      <div class="space-x-2">
        <PrimaryButton :loading="form.processing" type="submit">
          Save
        </PrimaryButton>
        <SecondaryButton type="button" @click="form.reset()">Reset</SecondaryButton>
      </div>
    </template>
  </FormBuilder>
</form>
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

## Changelog
See [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Security
If you discover any security related issues, create an issue on GitHub.

## Credits
- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License
Proprietary. Not for public release.

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
