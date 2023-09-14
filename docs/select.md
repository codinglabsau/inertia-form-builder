<script setup>
import { Select, Checkbox, Date } from '@codinglabsau/ui';
import { FormBuilder, useSchema, CheckboxGroup } from '../src/index';

const selectAndCheckboxSchema = useSchema({
  position_id: {
    component: Select,
    value: 2,
    props: {
      options: [
        { id: 1, name: 'Developer' },
        { id: 2, name: 'Designer' },
        { id: 3, name: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    showLabel: false,
    value: true,
    props: {
      label: 'Full Time',
      modelValue: true,
    },
  },
  starts_at: {
    component: Date,
    value: '2022-04-10',
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
    checked: [2, 3, 5],
  },
})
</script>

# Using multiple choice inputs
For each form attribute you can pass extra attributes to help improve the look and functionality of your form. If you are using our UI components
check the documentation for specifics on how the options should be passed in terms of structure.

```vue
<script setup>
import { Select, Checkbox, Date } from '@codinglabsau/ui';
import { FormBuilder, useSchema, CheckboxGroup } from '@codinglabsau/inertia-form-builder'

const selectAndCheckboxSchema = useSchema({
  position_id: {
    component: Select,
    value: 2,
    props: {
      options: [
        { id: 1, name: 'Developer' },
        { id: 2, name: 'Designer' },
        { id: 3, name: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    showLabel: false,
    value: true,
    props: {
      label: 'Full Time',
      modelValue: true,
    },
  },
  starts_at: {
    component: Date,
    value: '2022-04-10',
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
    checked: [2, 3, 5],
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="selectAndCheckboxSchema" />
  </form>
</template>
```

<FormBuilder :schema="selectAndCheckboxSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ selectAndCheckboxSchema.form.data() }}</pre>
