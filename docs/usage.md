<script setup>
import { Text } from '@codinglabsau/ui'

import { FormBuilder, useSchema } from '../src/index'

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
})
</script>

# Basic Example

## The schema
```vue
<script setup>
import { Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="simpleSchema" />
  </form>
</template>
```

::: info Form
  <pre class="border bg-gray-200 p-4">{{ simpleSchema.form.data() }}</pre>
:::
