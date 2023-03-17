<script setup lang="ts">
import { Checkbox, Label } from '@codinglabsau/ui'
import type { SchemaType, Field, UiField } from './useSchema'
import ElementGroup from './ElementGroup.vue'
import Schema from './Schema.vue'

defineProps<{
  element: Record<string, Field> | Field
  schema: SchemaType
  label: string
}>()
</script>

<template>
  <div v-if="Array.isArray(element)">
    <Schema
      v-for="(_element, _label) in element"
      :element="_element"
      :label="_label.toString()"
      :schema="schema"
    />
  </div>

  <div v-else-if="element.type === 'grid'" class="grid grid-flow-col gap-x-4 gap-y-6">
    <ElementGroup
      v-for="(gridElement, gridKey) in element.schema"
      :key="gridKey"
      :id="gridKey"
      :element="gridElement"
      :form="schema.form"
      v-bind="gridElement"
    />
  </div>

  <template v-else-if="element.type === 'checkboxes'">
    <Label>{{ (element.label ?? label).replaceAll('_id', '').replaceAll('_', ' ') }} </Label>

    <ElementGroup
      v-for="item in (element as UiField).items"
      :id="item.label ?? item"
      :element="Checkbox"
      v-model="schema.form[label]"
      :form="schema.form"
      :label="item.label ?? item"
      :value="item.value ?? item"
      :show-label="false"
    />
  </template>

  <ElementGroup
    v-else
    :key="label"
    :id="label"
    :element="(element as UiField)"
    :form="schema.form"
    v-bind="element"
  />
</template>
