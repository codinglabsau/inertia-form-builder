<script setup>
import { Text, Email } from '@codinglabsau/ui';
import { FormBuilder, useSchema, Section } from '../src/index';

const sectionSchema = useSchema({
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
import { FormBuilder, useSchema, Section } from '@codinglabsau/inertia-form-builder'

const sectionSchema = useSchema({
  name: {
    component: Section,
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

## Preview
<pre class="border bg-gray-200 p-4">{{ sectionSchema.form.data() }}</pre>
