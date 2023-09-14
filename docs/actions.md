<script setup>
import { Text, PrimaryButton, SecondaryButton } from '@codinglabsau/ui';
import { FormBuilder, useSchema } from '../src/index';

const actionsSchema = useSchema({
  address: Text,
  suburb: Text,
  country: Text,
})
</script>

# Custom Form Actions
By default, we have a `PrimaryButton` to submit our form, but we have given you the option to add to this. In this
case we have defined a reset form action.

```vue
<script setup>
import { Text, PrimaryButton, SecondaryButton } from '@codinglabsau/ui';
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
          <PrimaryButton as="button" type="submit" :loading="form.processing">
            Save
          </PrimaryButton>

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

  <PrimaryButton as="button" type="submit" :loading="form.processing">
        Save
      </PrimaryButton>
      <SecondaryButton as="button" type="button" @click="form.reset()">
        Reset
      </SecondaryButton>
  </div>
  </template>
</FormBuilder>

<pre class="border bg-gray-200 mt-2 p-4">{{ actionsSchema.form.data() }}</pre>
