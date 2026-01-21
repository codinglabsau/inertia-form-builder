<script setup lang="ts">
import { computed, ref, watchEffect, inject } from 'vue'
// @ts-ignore - gooey types use unresolved path aliases
import { FieldError, Label, Alert, AlertDescription, Button } from '@codinglabsau/gooey'
import type {
  Alert as AlertType,
  Element,
  Fieldset,
  Form,
  SchemaOptions,
} from '@/composables/useSchema'

const props = defineProps<{
  element: Element
  form: Form
}>()

// Inject schema options
const schemaOptions = inject<SchemaOptions>('schemaOptions', {})

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

// Configure component props - build iteratively, only include expected props
const computedProps = computed(() => {
  const definition = props.element.definition
  const expectedProps = definition.component?.props
  if (!expectedProps) return {}

  const result: Record<string, any> = {}

  // Only add props that the component expects
  const addIfExpected = (key: string, value: any) => {
    if (expectedProps.hasOwnProperty(key)) {
      result[key] = value
    }
  }

  // Core props
  addIfExpected('id', `${props.form._prefix}-${props.element.name}`)
  addIfExpected('form', props.form)
  addIfExpected('schema', definition.schema)
  addIfExpected('error', errorBag.value[0] ?? null)

  // Props from definition
  if (definition.props) {
    for (const [key, value] of Object.entries(definition.props)) {
      addIfExpected(key, value)
    }
  }

  // Element-level props (label, items for CheckboxGroup, etc.)
  for (const key of Object.keys(definition)) {
    if (
      key !== 'component' &&
      key !== 'props' &&
      key !== 'visible' &&
      key !== 'alert' &&
      key !== 'fieldset' &&
      key !== 'schema' &&
      key !== 'showLabel' &&
      key !== 'precognitive' &&
      key !== 'precognitiveEvent'
    ) {
      addIfExpected(key, definition[key])
    }
  }

  // Model values
  for (const [key, value] of Object.entries(models.value)) {
    addIfExpected(key, value)
  }

  return result
})

// Configure component listener(s)
const listeners = computed(() => {
  const fieldset = parsedFieldset.value
  const precognitive =
    schemaOptions?.precognition === true &&
    (props.element.definition.precognitive ?? schemaOptions?.optInPrecognition !== true)
  const precognitiveEvent = props.element.definition.precognitiveEvent ?? 'change'

  const createListeners = (formKey: string, modelKey: string = 'modelValue') => {
    const result: Record<string, any> = {
      [`update:${modelKey}`]: (newVal: any) => {
        props.form[formKey] = newVal
        if (precognitive && precognitiveEvent === 'update') {
          props.form.validate(formKey)
        }
      },
    }

    if (precognitive && precognitiveEvent !== 'update') {
      result[precognitiveEvent] = () => props.form.validate(formKey)
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

const label = computed(() => {
  const value = props.element.definition.label ?? props.element.name
  return value.replaceAll('_id', '').replaceAll('_', ' ')
})

const isNested = computed(() => !!props.element.definition.schema)

const showLabel = computed(() => {
  if (props.element.definition.showLabel !== undefined) {
    return props.element.definition.showLabel
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

    <template v-if="!computedProps.hasOwnProperty('error')">
      <FieldError v-for="(error, index) in errorBag" :key="index" :error="error" />
    </template>
  </div>
</template>
