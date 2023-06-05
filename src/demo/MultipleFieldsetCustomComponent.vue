<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@codinglabsau/ui'

const props = defineProps<{
  manufacturer?: string
  model?: Number
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
  <div class="flex items-center space-x-2">
    <Select v-model="manufacturer">
      <option value="Ferrari">Ferrari</option>
      <option value="Lamborghini">Lamborghini</option>
    </Select>

    <Select v-model="model" :options="options" />
  </div>
</template>
