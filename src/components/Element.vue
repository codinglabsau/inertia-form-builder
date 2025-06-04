<script setup lang="ts">
import { computed, ref, watch, inject } from 'vue'
import { Error, Label, WarningAlert, WarningAlertButton } from '@codinglabsau/ui'
import type { Alert, Element, Fieldset, Form, SchemaOptions } from '@/composables/useSchema'

const props = defineProps<{
  element: Element
  form: Form
}>()

// Inject schema options
const schemaOptions = inject<SchemaOptions>('schemaOptions', {})

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

  const precognitive =
    props.element.definition.precognitive ??
    (!schemaOptions.optInPrecognition) ??
    true
  const precognitiveEvent = props.element.definition.precognitiveEvent ?? 'change'

  const dynamicListeners = (formKey: string, modelKey: string = 'modelValue') => {
    return {
      [`update:${modelKey}`]: (newVal) => {
        props.form[formKey] = newVal

        if (precognitive && precognitiveEvent === 'update') {
          props.form.validate(formKey)
        }
      },
      ...(precognitive && precognitiveEvent !== 'update'
        ? { [precognitiveEvent]: () => props.form.validate(formKey) }
        : {}),
    }
  }

  if (fieldset) {
    // fieldsets update each component model separately
    return Object.entries(fieldset).reduce((carry, [key, value]) => {
      const fieldKey = value?.model ?? key

      return {
        ...carry,
        ...dynamicListeners(fieldKey, fieldKey),
      }
    }, {})
  }

  // a single model component updates the value on the underlying form
  return dynamicListeners(props.element.name)
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

const alert = computed<Alert | null>(() => {
  if (props.element.definition.alert !== undefined) {
    const alert = props.element.definition.alert as Alert
    alert.visible = typeof alert.visible === 'function' ? alert.visible : () => true

    return alert
  }
  return null
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

    <WarningAlert v-if="alert && alert.visible()" without-icon>
      {{ alert.text }}
      <template v-if="alert.actionHref && alert.actionText" #actions>
        <WarningAlertButton :external="alert.externalAction" :href="alert.actionHref">
          {{ alert.actionText }}
        </WarningAlertButton>
      </template>
    </WarningAlert>

    <template v-if="!computedProps.hasOwnProperty('error')">
      <Error v-for="(error, index) in errorBag" :key="index" :error="error" />
    </template>
  </div>
</template>
