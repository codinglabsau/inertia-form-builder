<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
// @ts-ignore - gooey types use unresolved path aliases
import { FieldError, Label, Alert, AlertDescription, Button } from '@codinglabsau/gooey'
import type { Alert as AlertType, Element, Fieldset, Form } from '@/composables/useSchema'

type EventHandler = (form: Form, name: string) => void

const props = defineProps<{
  element: Element
  form: Form
}>()

// Parse fieldset once and reuse across models, listeners, and errorBag
const parsedFieldset = computed(() => {
  const fieldset = props.element.definition?.fieldset as Fieldset
  if (!fieldset) return null

  const fields: Array<{ key: string; formKey: string }> = []
  for (const [key, value] of Object.entries(fieldset)) {
    const formKey = value && typeof value === 'object' && value.model ? value.model : key
    fields.push({ key, formKey })
  }
  return fields
})

// Configure component model(s)
const models = computed(() => {
  const fieldset = parsedFieldset.value
  if (fieldset) {
    const result: Record<string, any> = {}
    for (const { key, formKey } of fieldset) {
      result[formKey] = props.form[formKey]
    }
    return result
  }

  // Single model component
  return { modelValue: props.form[props.element.name] }
})

// Configure component props
const computedProps = computed(() => {
  const definition = props.element.definition
  const expectedProps = definition.component?.props
  const result: Record<string, any> = {}

  // Only add if component declares the prop — used for internal props that conflict
  // with HTML attributes (e.g. `form` is a real HTML attr on <input>)
  const addIfExpected = (key: string, value: any) => {
    if (expectedProps?.hasOwnProperty(key)) {
      result[key] = value
    }
  }

  // id — always set, falls through as HTML attribute via Vue inheritance
  result['id'] = `${props.form._prefix}-${props.element.name}`

  // Internal props — guarded because `form` is a real HTML attribute on <input>
  addIfExpected('form', props.form)
  addIfExpected('schema', definition.schema)
  addIfExpected('error', errorBag.value[0] ?? null)

  // User-specified props — always forward (HTML attrs like disabled, readonly fall through)
  if (definition.props) {
    for (const [key, value] of Object.entries(definition.props)) {
      result[key] = value
    }
  }

  // Element-level props (label, items, checked, etc.)
  for (const key of Object.keys(definition)) {
    if (
      key !== 'component' &&
      key !== 'props' &&
      key !== 'visible' &&
      key !== 'alert' &&
      key !== 'fieldset' &&
      key !== 'schema' &&
      key !== 'events'
    ) {
      const val = definition[key]
      if (key === 'label' && (val === false || val === null || val === '')) continue
      addIfExpected(key, val)
    }
  }

  // Model values — always forward
  for (const [key, value] of Object.entries(models.value)) {
    result[key] = value
  }

  return result
})

// Configure component listener(s)
const listeners = computed(() => {
  const fieldset = parsedFieldset.value
  const events = props.element.definition.events as Record<string, EventHandler> | undefined

  const createListeners = (formKey: string, modelKey: string = 'modelValue') => {
    const result: Record<string, any> = {
      [`update:${modelKey}`]: (newVal: any) => {
        props.form[formKey] = newVal
        if (events?.update) {
          events.update(props.form, formKey)
        }
      },
    }

    if (events) {
      for (const [event, handler] of Object.entries(events)) {
        if (event !== 'update') {
          result[event] = () => handler(props.form, formKey)
        }
      }
    }

    return result
  }

  if (fieldset) {
    const result: Record<string, any> = {}
    for (const { formKey } of fieldset) {
      Object.assign(result, createListeners(formKey, formKey))
    }
    return result
  }

  return createListeners(props.element.name)
})

// Calculate errors for the component
const errorBag = computed(() => {
  const fieldset = parsedFieldset.value
  if (fieldset) {
    return fieldset.map(({ formKey }) => props.form.errors[formKey]).filter((error) => error)
  }
  return [props.form.errors[props.element.name]]
})

const errors = computed(() => errorBag.value.filter(Boolean).map((error) => ({ message: error })))

const label = computed(() => {
  const value = props.element.definition.label || props.element.name
  return value.replaceAll('_id', '').replaceAll('_', ' ')
})

const isNested = computed(() => !!props.element.definition.schema)

const showLabel = computed(() => {
  const labelValue = props.element.definition.label
  if (labelValue === false || labelValue === null || labelValue === '') {
    return false
  }
  if (props.element.definition.props?.type === 'hidden') {
    return false
  }
  return !isNested.value
})

const alert = computed<AlertType | null>(() => {
  if (props.element.definition.alert !== undefined) {
    const alertDef = props.element.definition.alert as AlertType
    return {
      ...alertDef,
      visible: typeof alertDef.visible === 'function' ? alertDef.visible : () => true,
    }
  }
  return null
})

// Visibility: store the visibility function and compute visibility reactively
const visibilityFn = props.element.definition.visible
const visible = ref(typeof visibilityFn === 'function' ? visibilityFn(props.form) : true)

// Use watchEffect for targeted reactivity - only re-runs when accessed form properties change
if (typeof visibilityFn === 'function') {
  watchEffect(() => {
    visible.value = visibilityFn(props.form)
  })
}
</script>

<template>
  <div v-if="visible">
    <Label v-if="showLabel" :for="computedProps.id as string" class="mb-1 block capitalize">
      {{ label }}
    </Label>

    <component
      :is="element.definition.component"
      :key="element.name"
      v-bind="computedProps"
      v-on="listeners"
    />

    <Alert v-if="alert && alert.visible()" variant="warning" class="mt-2">
      <AlertDescription class="flex items-center justify-between">
        {{ alert.text }}
        <Button
          v-if="alert.actionHref && alert.actionText"
          as="a"
          :href="alert.actionHref"
          :target="alert.externalAction ? '_blank' : undefined"
          variant="outline"
          size="sm"
        >
          {{ alert.actionText }}
        </Button>
      </AlertDescription>
    </Alert>

    <FieldError
      v-if="!computedProps.hasOwnProperty('error') && errors.length > 0"
      :errors="errors"
    />
  </div>
</template>
