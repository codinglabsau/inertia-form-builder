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

# Attributes you can pass
For each form attribute you can pass extra attributes to help improve the look and functionality of your form.

## Pre-filled with Grid
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
```

<FormBuilder :schema="gridSchema" />

::: info Form
  <pre class="border bg-gray-200 p-4">{{ gridSchema.form.data() }}</pre>
:::
