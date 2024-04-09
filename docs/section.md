<script setup>
import { Text, Email, Image } from '@codinglabsau/ui';
import { FormBuilder, useSchema, Section } from '../src/index';

const gridSchema = useSchema({
  avatar: {
    component: Image,
    props: {
      currentImage: 'https://avatars.githubusercontent.com/u/1127412?v=4',
    },
  },
  name: {
    component: Section,
    heading: 'Details',
    description: 'Please enter your details',
    schema: {
      firstname: {
        component: Text,
        value: 'Harry',
      },
      surname: {
        component: Text,
        value: 'Highpants',
      },
     email: {
        component: Email,
        value: 'harry@highpants.com',
      },
    },
  },
})
</script>

# Using the Section
It is very common to have different section on the form, especially long ones. By defining our parent `component` as `Section` then defining our schema as an object with our attributes,
we can separate elements by section. `Section` elements take `heading` and an optional `description` prop.

```vue
<script setup>
import { Text, Email } from '@codinglabsau/ui'
import { FormBuilder, useSchema, Grid } from '@codinglabsau/inertia-form-builder'

const sectionSchema = useSchema({
  avatar: {
    component: Image,
    props: {
      currentImage: 'https://avatars.githubusercontent.com/u/1127412?v=4',
    },
  },
  name: {
    component: Grid,
    schema: {
      firstname: {
        component: Text,
        value: 'Harry',
      },
      surname: {
        component: Text,
        value: 'Highpants',
      },
      email: {
        component: Email,
        value: 'harry@highpants.com',
      },
    },
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="sectionSchema" />
  </form>
</template>
```

<FormBuilder :schema="sectionSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ sectionSchema.form.data() }}</pre>
