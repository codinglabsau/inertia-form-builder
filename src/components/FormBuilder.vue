<script setup lang="ts">
// @ts-expect-error - gooey types use unresolved path aliases
import { Button } from '@codinglabsau/gooey'
import type { Schema } from '../composables/useSchema'
import Element from './Element.vue'
import { provide } from 'vue'

const props = withDefaults(
  defineProps<{
    schema: Schema
    submit?: string
  }>(),
  {
    submit: 'Save',
  },
)

provide('schemaOptions', props.schema.options)
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <slot>
      <Element
        v-for="(element, index) in schema.elements"
        :key="index"
        :element="element"
        :form="schema.form"
      />
    </slot>

    <slot name="actions-wrapper" :form="schema.form">
      <div class="flex justify-end gap-2">
        <slot name="actions" :form="schema.form">
          <Button type="submit" :loading="schema.form.processing">
            {{ submit }}
          </Button>
        </slot>
      </div>
    </slot>
  </div>
</template>
