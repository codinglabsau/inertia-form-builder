# Precognition
To use precognition you will need to import a different composable:

```vue
<script setup>
import { Text, Textarea } from '@codinglabsau/ui';
import { FormBuilder, useSchemaWithPrecognition as useSchema } from '@codinglabsau/inertia-form-builder';

const schema = useSchema('post', '/posts', {
  title: {
    component: Text,
    value: '',
  },
  content: {
    component: Textarea,
    value: '',
  }
})

const submit = () => {
  schema.form.submit({
    preserveScroll: true,
    onSuccess() {
      schema.form.reset()
    }
  })
}
</script>

<template>
  <template>
    <form @submit.prevent="submit">
      <FormBuilder :schema="schema" />
    </form>
  </template>
</template>
```

<FormBuilder :schema="schema" />

See laravel docs for more information on precognition and how it works here:

https://laravel.com/docs/11.x/precognition#using-vue-and-inertia
