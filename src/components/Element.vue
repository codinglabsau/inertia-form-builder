<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Error, Label } from '@codinglabsau/ui'
import type { Element, Fieldset, Form } from '../composables/useSchema'

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

// configure component props, discarding props that are unexpected
const computedProps = computed(() => {
  let componentProps = Object.entries({
    id: `${props.form._prefix}-${props.element.name}`,
    ...props.element.definition,
    ...props.element.definition.props,
    ...models.value,
    schema: props.element.definition.schema,
    form: props.form,
    error: errorBag.value[0] ?? null,
  })

  let expectedProps = props.element.definition.component.props

  return Object.fromEntries(componentProps.filter(([key]) => expectedProps.hasOwnProperty(key)))
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
  return { 'update:modelValue': (value) => (props.form[props.element.name] = value) }
})

// calculate all the errors that apply to the component
const errorBag = computed(() => {
  const fieldset = props.element.definition?.fieldset as Fieldset

  if (fieldset) {
    // fieldsets could have 1 error per field
    return Object.keys(fieldset)
      .map((element) => props.form.errors[element])
      .filter((error) => error)
  }

  // normal fields can only have 1 error
  return [props.form.errors[props.element.name]]
})

const label = computed(() => {
  const value = props.element.definition.label ?? props.element.name

  return value.replaceAll('_id', '').replaceAll('_', ' ')
})

const isNested = !!props.element.definition.schema

const showLabel = computed(() => {
  if (props.element.definition.showLabel !== undefined) {
    return props.element.definition.showLabel
  }

  if (props.element.definition.component.name === 'Hidden') {
    return false
  }

  return !isNested
})

const visibleFunc = ref(
  typeof props.element.definition.visible === 'function'
    ? props.element.definition.visible
    : () => true
)

const visible = ref(
  typeof props.element.definition.visible === 'function'
    ? props.element.definition.visible(props.form)
    : () => true
)

watch(props.form, (newForm) => {
  if (typeof visibleFunc.value === 'function') {
    visible.value = visibleFunc.value(newForm)
  }
})
</script>

<template>
  <div v-if="visible">
    <Label v-if="showLabel" :for="computedProps.id as string">
      {{ label }}
    </Label>

    <component
      :is="element.definition.component"
      :key="element.name"
      v-bind="computedProps"
      v-on="listeners"
    />

    <template v-if="!computedProps.hasOwnProperty('error')">
      <Error v-for="(error, index) in errorBag" :key="index" :error="error" />
    </template>
  </div>
</template>
