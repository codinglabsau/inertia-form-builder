<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@codinglabsau/ui'

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
  { id: 'Ferrari', name: 'Ferrari' },
  { id: 'Lamborghini', name: 'Lamborghini' },
]

const ferraris = [
  { id: 1, name: 'LaFerrari' },
  { id: 2, name: '488 Pista' },
  { id: 3, name: 'Enzo' },
]

const lamborghinis = [
  { id: 4, name: 'Aventador SVJ' },
  { id: 5, name: 'Huracan Performante' },
  { id: 6, name: 'Sian' },
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
      <Select v-model="manufacturer" :options="manufacturers" class="!w-48" />

      <Select v-model="model" :options="options" class="!w-48" />
    </div>

    <div class="mt-4 rounded bg-red-600/75 px-4 py-2 text-red-100 shadow-inner">{{ error }}</div>
  </div>
</template>
