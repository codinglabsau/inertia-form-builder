<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@codinglabsau/gooey'

defineProps<{
  id?: string
  modelValue?: string | number | null
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <Select :model-value="String(modelValue)" @update:model-value="emit('update:modelValue', $event)">
    <SelectTrigger>
      <SelectValue :placeholder="placeholder ?? 'Select...'" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem v-for="option in options" :key="option.value" :value="String(option.value)">
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
