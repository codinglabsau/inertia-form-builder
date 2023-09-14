<script setup>
import { Text, Email, Image } from '@codinglabsau/ui';
import { FormBuilder, useSchema, Grid } from '../src/index';

const gridSchema = useSchema({
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
    },
  },
  email: {
    component: Email,
    value: 'harry@highpants.com',
  },
})
</script>

# Grouping elements together
One thing that we hate is a really long form, we love the ability to group related elements together to reduce this size but also help the
user relate certain elements together. By defining our parent `component` as `Grid` then defining our schema as an object with our attributes,
we can customise which elements are on a grid together.

```vue
<script setup>
import { Text, Email } from '@codinglabsau/ui'
import { FormBuilder, useSchema, Grid } from '@codinglabsau/inertia-form-builder'

const gridSchema = useSchema({
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
    },
  },
  email: {
    component: Email,
    value: 'harry@highpants.com',
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="gridSchema" />
  </form>
</template>
```

<FormBuilder :schema="gridSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ gridSchema.form.data() }}</pre>
