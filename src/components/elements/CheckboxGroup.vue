<script setup lang="ts">
import { computed } from 'vue'
// @ts-expect-error - gooey types use unresolved path aliases
import { Checkbox, Label } from '@codinglabsau/gooey'
import type { Form } from '../../composables/useSchema'

const props = defineProps<{
  form: Form
  modelValue: any[]
  items: any[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const isChecked = (itemValue: any) => {
  return props.modelValue.includes(itemValue)
}

const toggleValue = (itemValue: any, checked: boolean) => {
  const newValue = checked
    ? [...props.modelValue, itemValue]
    : props.modelValue.filter((v) => v !== itemValue)
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="space-y-2">
    <div v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
      <Checkbox
        :id="`${props.form._prefix}-${item.label ?? item}`"
        :checked="isChecked(item.value ?? item)"
        @update:checked="toggleValue(item.value ?? item, $event)"
      />

      <Label :for="`${props.form._prefix}-${item.label ?? item}`" class="cursor-pointer">
        {{ item.label ?? item }}
      </Label>
    </div>
  </div>
</template>
