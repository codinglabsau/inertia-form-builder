<script setup>
import { Error, Label } from '@codinglabsau/ui'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  element: {
    required: true,
  },
  form: {
    required: true,
  },
  showLabel: {
    default: true,
  },
})

const prepareForBinding = (element) => {
  const except = [
      'value',
  ]

  except.forEach((key) => {
    if (element.hasOwnProperty(key)) {
      delete element[key]
    }
  })

  return element
}
</script>

<template>
  <div>
    <Label v-if="showLabel" :for="id">
      {{ id.replaceAll('_id', '').replaceAll('_', ' ') }}
    </Label>
    <template v-if="element.component">
      <component :is="element.component" :key="id" :id="id" v-model="form[id]" v-bind="prepareForBinding(element)" />
    </template>
    <template v-else>
      <component :is="element" :key="id" :id="id" v-model="form[id]" v-bind="$attrs" />
    </template>
    <Error :error="form.errors[id]" />
  </div>
</template>
