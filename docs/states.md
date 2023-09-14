<script setup>
import { Text } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const inputStatesSchema = useSchema({
  error: {
    component: Text,
    value: 'bad value',
  },
  read_only: {
    component: Text,
    value: 'read only',
    props: {
      readonly: true,
    },
  },
  disabled: {
    component: Text,
    value: 'disabled',
    props: {
      disabled: true,
    },
  },
})

inputStatesSchema.form.errors = {
  error: 'This error field is invalid.',
}
</script>

# States of attributes
This is a showcase of what different states look like when an error occurs, we choose an attribute to be read only or an attribute is disabled.

```vue
<script setup>
import { Text } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const inputStatesSchema = useSchema({
  error: {
    component: Text,
    value: 'bad value',
  },
  read_only: {
    component: Text,
    value: 'read only',
    props: {
      readonly: true,
    },
  },
  disabled: {
    component: Text,
    value: 'disabled',
    props: {
      disabled: true,
    },
  },
})

inputStatesSchema.form.errors = {
  error: 'This error field is invalid.',
}
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="inputStatesSchema" />
  </form>
</template>
```

<FormBuilder :schema="inputStatesSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ inputStatesSchema.form.data() }}</pre>
