<script setup lang="ts">
import type { Element, Form } from './useSchema'
import { Error, Label } from '@codinglabsau/ui'

const props = defineProps<{
  element: Element
  form: Form
}>()

const getProps = () => {
  let componentProps = Object.entries({
    ...props.element.definition,
    ...props.element.definition.props,
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
      v-model="form[element.name]"
      v-bind="getProps()"
    />

    <Error :error="form.errors[element.name]" />
  </div>
</template>
