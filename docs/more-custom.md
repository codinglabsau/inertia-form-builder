<script setup lang="ts">
import MultipleFieldsetCustomComponent from "../src/demo/MultipleFieldsetCustomComponent.vue";
import { FormBuilder, useSchema } from '../src/index';

type Fieldset = {
  [key: string]: {
    model?: string
    value?: any
  }
};

const customComponentWithFieldsetSchema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      manufacturer: 'Lamborghini',
      model: 5,
    } as Fieldset,
  },
})
</script>

# Fieldset
A fieldset can be created and used to have specific values mapped to a specific selection of elements. In this case as
you can switch between sport car manufacturers and the model for that manufacturer. The FieldSet type is something you define as well, heres an example:

```js
type Fieldset = {
  [key: string]: {
    model?: string
    value?: any
  }
}
```

```vue
<script setup>
import SimpleCustomComponent from "../src/yourcustomcomponent.vue";
import { FormBuilder, useSchema } from '../src/index';

const customComponentWithFieldsetSchema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      manufacturer: 'Lamborghini',
      model: 5,
    } as Fieldset,
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="customComponentWithFieldsetSchema" />
  </form>
</template>
```

<FormBuilder :schema="customComponentWithFieldsetSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ customComponentWithFieldsetSchema.form.data() }}</pre>

## How to define this ourselves
This is something that you can define within your custom components. In this instance, we have a computed
property for manufacturer to then switch between models.

```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  manufacturer?: string
  model?: any
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:manufacturer', value?: typeof props.manufacturer): void
  (e: 'update:model', value?: typeof props.model): void
}>()

const manufacturer = computed({
  get: () => props.manufacturer,
  set: (value) => emit('update:manufacturer', value),
})

const model = computed({
  get: () => props.model,
  set: (value) => emit('update:model', value),
})

const manufacturers = [
  { id: 'Ferrari', name: 'Ferrari' },
  { id: 'Lamborghini', name: 'Lamborghini' },
]

const ferraris = [
  { id: 1, name: 'LaFerrari' },
  { id: 2, name: '488 Pista' },
  { id: 3, name: 'Enzo' },
]

const lamborghinis = [
  { id: 4, name: 'Aventador SVJ' },
  { id: 5, name: 'Huracan Performante' },
  { id: 6, name: 'Sian' },
]

const options = computed(() => {
  switch (manufacturer.value) {
    case 'Ferrari':
      return ferraris
    case 'Lamborghini':
      return lamborghinis
    default:
      return []
  }
})
</script>
```
