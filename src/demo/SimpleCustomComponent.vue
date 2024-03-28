<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: typeof props.modelValue): void
}>()

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <div
      class="size-16 rounded-full bg-green-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': inputVal === 'green',
      }"
      @click="inputVal = 'green'"
    />

    <div
      class="size-16 rounded-full bg-orange-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': inputVal === 'orange',
      }"
      @click="inputVal = 'orange'"
    />

    <div
      class="size-16 rounded-full bg-red-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': inputVal === 'red',
      }"
      @click="inputVal = 'red'"
    />
  </div>
</template>
