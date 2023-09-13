<script setup>
import { Text, Email } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const simpleSchema = useSchema({
  firstname: {
    component: Text,
    value: 'John',
  },
  surname: {
    component: Text,
    value: 'Smith',
  }
});
</script>

# Attributes you can pass
For each form attribute you can pass extra attributes to help improve the look and functionality of your form.

## Pre-filled standard form
```vue
<script setup>
import { Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const simpleSchema = useSchema({
  firstname: {
    component: Text,
    value: 'John',
  },
  surname: {
    component: Text,
    value: 'Smith',
  }
})
</script>
```

<FormBuilder :schema="simpleSchema" />

::: info Form
  <pre class="border bg-gray-200 p-4">{{ simpleSchema.form.data() }}</pre>
:::
