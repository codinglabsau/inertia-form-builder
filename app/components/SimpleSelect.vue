<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@codinglabsau/gooey'

defineProps<{
  id?: string
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
}>()

const modelValue = defineModel<string | number | null>()
</script>

<template>
  <Select :model-value="String(modelValue)" @update:model-value="modelValue = $event">
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
