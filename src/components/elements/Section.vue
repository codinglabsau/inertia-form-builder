<script setup lang="ts">
import { mapElements, type Form } from '@/components/useSchema'
import Element from '@/components/Element.vue'

const props = defineProps<{
  schema: any
  form: Form
  heading: string
}>()

const elements = mapElements(props.schema)
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <label>{{ heading }}</label>

    <Element v-for="(element, index) in elements" :key="index" :element="element" :form="form" />
  </div>
</template>
