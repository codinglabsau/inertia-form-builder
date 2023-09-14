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

# Dynamically change the visibility of an attribute
One thing that is handy in forms is to hide certain attributes until others are filled or fulfill a certain condition. Here
we simply defined a `visible` handler and reference any attribute on the form.

## Pre-filled with Grid
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
```

<FormBuilder :schema="visibleSchema" />

<pre class="border bg-gray-200 p-4">{{ visibleSchema.form.data() }}</pre>
