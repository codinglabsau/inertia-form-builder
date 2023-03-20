<script setup lang="ts">
import { Checkbox } from '@codinglabsau/ui'
import { computed } from '@vue/reactivity'

const props = defineProps<{
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
    v-for="item in items"
    :value="item.value ?? item"
    :label="item.label ?? item"
    :id="item.label ?? item"
    v-model="internalValue"
  />
</template>
