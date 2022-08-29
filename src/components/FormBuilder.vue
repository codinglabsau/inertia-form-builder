<script setup>
import { Actions, PrimaryButton } from '@codinglabsau/ui'
import Schema from './Schema.vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  submit: {
    type: String,
    default: 'Save',
  },
})
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <Schema
      v-for="(element, key) in schema.schema"
      :element="element"
      :label="key"
      :schema="schema"
    />

    <actions>
      <PrimaryButton :loading="schema.form.processing" type="submit">{{ submit }}</PrimaryButton>
    </actions>
  </div>
</template>
