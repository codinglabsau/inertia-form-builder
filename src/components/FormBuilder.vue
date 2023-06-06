<script setup lang="ts">
import { Actions, PrimaryButton } from '@codinglabsau/ui'
import type { Schema } from './useSchema'
import Element from './Element.vue'

withDefaults(
  defineProps<{
    schema: Schema
    submit?: string
  }>(),
  {
    submit: 'Save',
  }
)
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <Element
      v-for="(element, index) in schema.elements"
      :key="index"
      :element="element"
      :form="schema.form"
    />

    <Actions>
      <slot name="actions" :form="schema.form">
        <PrimaryButton as="button" type="submit" :loading="schema.form.processing">
          {{ submit }}
        </PrimaryButton>
      </slot>
    </Actions>
  </div>
</template>
