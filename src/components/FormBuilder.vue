<script setup lang="ts">
import { Actions, PrimaryButton } from '@codinglabsau/ui'
import type { Schema } from '../composables/useSchema'
import Element from './Element.vue'
import { provide, watch, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    schema: Schema
    submit?: string
  }>(),
  {
    submit: 'Save',
  }
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
      <Actions>
        <slot name="actions" :form="schema.form">
          <PrimaryButton as="button" type="submit" :loading="schema.form.processing">
            {{ submit }}
          </PrimaryButton>
        </slot>
      </Actions>
    </slot>
  </div>
</template>
