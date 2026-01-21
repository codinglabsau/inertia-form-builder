<script setup lang="ts">
import { computed } from 'vue'
import { mapElements, type Form } from '../../composables/useSchema'
import Element from '../Element.vue'

const props = defineProps<{
  // specifying the correct type leads to a circular reference
  schema: any
  form: Form
}>()

// Make elements reactive
const elements = computed(() => mapElements(props.schema))

// Use static class mapping for Tailwind purge compatibility
const gridColsClass = computed(() => {
  const count = elements.value.length
  const classMap: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  }
  return classMap[count] ?? `md:grid-cols-${count}`
})
</script>

<template>
  <div class="grid gap-x-4 gap-y-6 md:grid-flow-col" :class="gridColsClass">
    <Element
      v-for="element in elements"
      :key="element.name"
      :element="element"
      :form="form"
      v-bind="$attrs"
    />
  </div>
</template>
