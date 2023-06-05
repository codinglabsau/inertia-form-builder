<script setup lang="ts">
import { computed } from 'vue'
import { Error, Label } from '@codinglabsau/ui'
import type { Element, Fieldset, Form } from './useSchema'

const props = defineProps<{
  element: Element
  form: Form
}>()

// configure component model(s)
const models = computed(() => {
  const fieldset = props.element.definition?.fieldset as Fieldset

  if (fieldset) {
    // fieldsets have a getter foreach component model
    return Object.entries(fieldset).reduce((carry, [key, value]) => {
      if (value?.model) {
        carry[value.model] = props.form[value.model]
      } else {
        carry[key] = props.form[key]
      }

      return carry
    }, {})
  }

  // a single model component binds modelValue to the prop value
  return {
    modelValue: props.form[props.element.name],
  }
})

// configure component listener(s)
const listeners = computed(() => {
  const fieldset = props.element.definition?.fieldset as Fieldset

  if (fieldset) {
    // fieldsets update each component model seperately
    return Object.entries(fieldset).reduce((carry, [key, value]) => {
      if (value?.model) {
        carry[`update:${value.model}`] = (newVal) => (props.form[value.model] = newVal)
      } else {
        carry[`update:${key}`] = (newVal) => (props.form[key] = newVal)
      }

      return carry
    }, {})
  }

  // a single model component updates the value on the underlying form
  return { 'update:model-value': (value) => (props.form[props.element.name] = value) }
})

const getProps = () => {
  let componentProps = Object.entries({
    ...props.element.definition,
    ...props.element.definition.props,
    ...models.value,
    schema: props.element.definition.schema,
    form: props.form,
    id: props.element.name,
  })

  let expectedProps = props.element.definition.component.props

  return Object.fromEntries(componentProps.filter(([key]) => expectedProps.hasOwnProperty(key)))
}

const getLabel = () => {
  const value = props.element.definition.label ?? props.element.name

  return value.replaceAll('_id', '').replaceAll('_', ' ')
}

const isNested = !!props.element.definition.schema

const showLabel = props.element.definition.showLabel ?? !isNested
</script>

<template>
  <div>
    <Label v-if="showLabel" :for="element.name">
      {{ getLabel() }}
    </Label>

    <component
      :is="element.definition.component"
      :key="element.name"
      v-bind="getProps()"
      v-on="listeners"
    />

    <Error :error="form.errors[element.name]" />
  </div>
</template>
