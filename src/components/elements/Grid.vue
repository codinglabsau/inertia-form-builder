<script setup lang="ts">
import { mapElements, type Form } from '@/components/useSchema'
import Element from '@/components/Element.vue'

const props = defineProps<{
  // specifying the correct type leads to a circular reference
  schema: any
  form: Form
}>()

const elements = mapElements(props.schema)
</script>

<template>
  <div class="grid grid-flow-col gap-x-4 gap-y-6">
    <Element v-for="element in elements" :element="element" :form="form" v-bind="$attrs" />
  </div>
</template>
