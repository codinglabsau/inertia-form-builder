<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Button } from '@codinglabsau/gooey'
import type { Schema, Element as ElementType } from '../composables/useSchema'
import Element from './Element.vue'
import { provide, computed } from 'vue'

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

// Extract elements for template - handles both computed ref (v2) and array (legacy)
const elements = computed<ElementType[]>(() => {
  const els = props.schema.elements
  // Handle both ComputedRef and plain array for BC
  return 'value' in els ? els.value : els
})
</script>

<template>
  <div class="mx-auto mt-6 max-w-md space-y-6">
    <slot>
      <Element
        v-for="element in elements"
        :key="element.name"
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
