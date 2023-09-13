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

# Attributes you can pass
For each form attribute you can pass extra attributes to help improve the look and functionality of your form.

## Pre-filled with Grid
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
```

<FormBuilder :schema="selectAndCheckboxSchema" />

<pre class="border bg-gray-200 p-4">{{ selectAndCheckboxSchema.form.data() }}</pre>
