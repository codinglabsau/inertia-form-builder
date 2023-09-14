<script setup>
import SimpleCustomComponent from "../src/demo/SimpleCustomComponent.vue";
import { FormBuilder, useSchema } from '../src/index';

const customComponentSchema = useSchema({
  colour: {
    component: SimpleCustomComponent,
    value: 'green',
  },
})
</script>

# Custom Components
Custom components is something very powerful to use in instances where our UI package does not provide an option for
(In that case you should look to add that to UI) or in a very specific instance to the project at hand.

```vue
<script setup>
import SimpleCustomComponent from "../src/yourcustomcomponent.vue";
import { FormBuilder, useSchema } from '../src/index';

const customComponentSchema = useSchema({
  colour: {
    component: SimpleCustomComponent,
    value: 'green',
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="customComponentSchema" />
  </form>
</template>
```

<FormBuilder :schema="customComponentSchema" />

## Form in real-time
<pre class="border bg-gray-200 p-4">{{ customComponentSchema.form.data() }}</pre>

## Creating your own component
A custom component is fairly straight forward, the important part is that it takes a `modelValue` and when that is updated in the
component you need to emit that event
```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
(e: 'update:modelValue', value?: typeof props.modelValue): void
}>()

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
```
