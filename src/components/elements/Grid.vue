<script setup lang="ts">
import { type Form, mapElements, type SchemaOptions } from '../../composables/useSchema'
import Element from '../Element.vue'

const props = defineProps<{
  // specifying the correct type leads to a circular reference
  schema: any
  form: Form
  schemaOptions: SchemaOptions
}>()

const elements = mapElements(props.schema)
</script>

<template>
  <div class="grid gap-x-4 gap-y-6 md:grid-flow-col" :class="'md:grid-cols-' + elements.length">
    <Element
      v-for="(element, index) in elements"
      :key="index"
      :element="element"
      :form="form"
      :schema-options="schemaOptions"
      v-bind="$attrs"
    />
  </div>
</template>
