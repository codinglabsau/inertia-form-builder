<script setup lang="ts">
import { computed } from 'vue'
import { Checkbox } from '@codinglabsau/ui'
import type { Form } from '../../composables/useSchema'

const props = defineProps<{
  form: Form
  modelValue: any[]
  items: any[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const internalValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <Checkbox
    v-for="(item, index) in items"
    :id="`${props.form._prefix}-${item.label ?? item}`"
    :key="index"
    v-model="internalValue"
    :value="item.value ?? item"
    :label="item.label ?? item"
  />
</template>
