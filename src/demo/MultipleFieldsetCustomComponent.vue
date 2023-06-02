<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  manufacturer?: string,
  model?: string
}>()

const emit = defineEmits<{
  (e: "update:manufacturer", value?: typeof props.manufacturer): void,
  (e: "update:model", value?: typeof props.model): void,
}>()

const manufacturer = computed({
  get: () => props.manufacturer,
  set: (value) => emit("update:manufacturer", value),
})

const model = computed({
  get: () => props.model,
  set: (value) => emit("update:model", value),
})

const ferraris = [
  'LaFerrari',
  '488 Pista',
  'Enzo',
]

const lamborghinis = [
  'Aventador SVJ',
  'Huracan Performante',
  'Sian',
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
    <select v-model="manufacturer">
      <option value="Ferrari">Ferrari</option>
      <option value="Lamborghini">Lamborghini</option>
    </select>

    <select v-model="model">
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>
