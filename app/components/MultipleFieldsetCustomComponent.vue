<script setup lang="ts">
import { computed } from 'vue'
// @ts-ignore - gooey types use unresolved path aliases
import { Select } from '@codinglabsau/gooey'

const props = defineProps<{
  manufacturer?: string
  model?: any
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:manufacturer', value?: typeof props.manufacturer): void
  (e: 'update:model', value?: typeof props.model): void
}>()

const manufacturer = computed({
  get: () => props.manufacturer,
  set: (value) => emit('update:manufacturer', value),
})

const model = computed({
  get: () => props.model,
  set: (value) => emit('update:model', value),
})

const manufacturers = [
  { value: 'Ferrari', label: 'Ferrari' },
  { value: 'Lamborghini', label: 'Lamborghini' },
]

const ferraris = [
  { value: 1, label: 'LaFerrari' },
  { value: 2, label: '488 Pista' },
  { value: 3, label: 'Enzo' },
]

const lamborghinis = [
  { value: 4, label: 'Aventador SVJ' },
  { value: 5, label: 'Huracan Performante' },
  { value: 6, label: 'Sian' },
]

const options = computed(() => {
  switch (manufacturer.value) {
    case 'Ferrari':
      return ferraris
    case 'Lamborghini':
      return lamborghinis
    default:
      return []
  }
})
</script>

<template>
  <div>
    <div class="flex items-center space-x-2">
      <Select v-model="manufacturer" :options="manufacturers" class="w-48" />

      <Select v-model="model" :options="options" class="w-48" />
    </div>

    <div class="mt-4 rounded bg-red-600/75 px-4 py-2 text-red-100 shadow-inner">{{ error }}</div>
  </div>
</template>
