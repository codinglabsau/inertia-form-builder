<script setup lang="ts">
import { computed } from 'vue'
import { mapElements, type Form } from '../../composables/useSchema'
import Element from '../Element.vue'

const props = defineProps<{
  schema: any
  form: Form
  heading: string
  description?: string
}>()

// Make elements reactive
const elements = computed(() => mapElements(props.schema))
</script>

<template>
  <div class="mt-10">
    <label>{{ heading }}</label>

    <p v-if="description" class="mt-1 whitespace-pre-line text-sm leading-6 text-gray-500">
      {{ description }}
    </p>

    <div class="mt-4 space-y-6">
      <Element v-for="element in elements" :key="element.name" :element="element" :form="form" />
    </div>
  </div>
</template>
