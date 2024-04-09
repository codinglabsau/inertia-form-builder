<script setup lang="ts">
import { mapElements, type Form } from '../useSchema'
import Element from '../Element.vue'

const props = defineProps<{
  schema: any
  form: Form
  heading: string
  description?: string
}>()

const elements = mapElements(props.schema)
</script>

<template>
  <div class="mt-10">
    <label>{{ heading }}</label>

    <p v-if="description" class="mt-1 text-gray-500">{{ description }}</p>

    <div class="mt-4 space-y-6">
      <Element v-for="(element, index) in elements" :key="index" :element="element" :form="form" />
    </div>
  </div>
</template>
