<script setup lang="ts">
import { Actions, PrimaryButton } from '@codinglabsau/ui'
import type { SchemaType } from './useSchema'
import Schema from './Schema.vue'

withDefaults(
  defineProps<{
    schema: SchemaType
    submit: string
  }>(),
  {
    submit: 'Save',
  }
)
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <Schema
      v-for="(element, key) in schema.schema"
      :element="element"
      :label="key as string"
      :schema="schema"
    />

    <actions>
      <slot name="actions" :form="schema.form">
        <PrimaryButton :loading="schema.form.processing" type="submit">{{ submit }}</PrimaryButton>
      </slot>
    </actions>
  </div>
</template>
