<script setup>
import { Select, Number } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const visibleSchema = useSchema({
  limit_type: {
    component: Select,
    value: 1,
    props: {
      options: [
        { id: 1, name: 'None' },
        { id: 2, name: 'Limited' },
        { id: 3, name: 'Unlimited' },
      ],
    },
    label: 'Change to limited to show the limit input',
  },
  limit: {
    component: Number,
    visible: (form) => {
      return form.limit_type === 2
    },
  },
})
</script>

# Visibility of Attributes
One thing that is handy in forms is to hide certain attributes until others are filled or fulfill a certain condition. Here
we simply define a `visible` handler and reference a form element to meet a condition before showing to the user.

```vue
<script setup>
import { Select, Number } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const visibleSchema = useSchema({
  limit_type: {
    component: Select,
    value: 1,
    props: {
      options: [
        { id: 1, name: 'None' },
        { id: 2, name: 'Limited' },
        { id: 3, name: 'Unlimited' },
      ],
    },
    label: 'Change to limited to show the limit input',
  },
  limit: {
    component: Number,
    visible: (form) => {
      return form.limit_type === 2
    },
  },
})
</script>

<template>
  <template>
    <form @submit.prevent="submit">
      <FormBuilder :schema="visibleSchema" />
    </form>
  </template>
</template>
```

<FormBuilder :schema="visibleSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ visibleSchema.form.data() }}</pre>
