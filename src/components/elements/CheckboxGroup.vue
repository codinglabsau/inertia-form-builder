<script setup lang="ts">
import { Checkbox } from '@codinglabsau/ui'
import { computed } from 'vue'

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
    v-for="(item, index) in items"
    :id="item.label ?? item"
    :key="index"
    v-model="internalValue"
    :value="item.value ?? item"
    :label="item.label ?? item"
  />
</template>
