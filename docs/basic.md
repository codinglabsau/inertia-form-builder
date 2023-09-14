<script setup>
import { Text, Email } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const simpleSchema = useSchema({
  firstname: Text,
  surname: {
    component: Text,
    label: 'Last name',
  },
})
</script>

# The Basics
This is how you can define the most basic form. Simply importing the components from our UI library and simply attach that to an attribute. If you
have a complex form name which isn't user-friendly, you simply define your attribute as an object, set the `component` and define the `label`

```vue
<script setup>
import { Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const simpleSchema = useSchema({
  firstname: Text,
  surname: {
    component: Text,
    label: 'Last name',
  },
})
</script>
```

<FormBuilder :schema="simpleSchema" />

## Form in real-time
As you can see, we still reference 'Last Name' as surname.
<pre class="border bg-gray-200 p-4">{{ simpleSchema.form.data() }}</pre>
