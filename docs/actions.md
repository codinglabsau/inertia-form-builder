<script setup>
import { Text, PrimaryButton, SecondaryButton } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const actionsSchema = useSchema({
  address: Text,
  suburb: Text,
  country: Text,
})
</script>

# Dynamically change the visibility of an attribute
One thing that is handy in forms is to hide certain attributes until others are filled or fulfill a certain condition. Here
we simply defined a `visible` handler and reference any attribute on the form.

## Pre-filled with Grid
```vue
<script setup>
import { Text } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const actionsSchema = useSchema({
  address: Text,
  suburb: Text,
  country: Text,
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="actionsSchema">
      <template #actions="{ form }">
        <div class="space-x-2">
          <SecondaryButton as="button" type="button" @click="form.reset()">
            Reset
          </SecondaryButton>
        </div>
      </template>
    </FormBuilder>
  </form>
</template>
```

<FormBuilder :schema="actionsSchema">
  <template #actions="{ form }">
    <div class="space-x-2">
      <SecondaryButton as="button" type="button" @click="form.reset()">
        Reset
      </SecondaryButton>
  </div>
  </template>
</FormBuilder>

<pre class="border bg-gray-200 mt-2 p-4">{{ actionsSchema.form.data() }}</pre>
