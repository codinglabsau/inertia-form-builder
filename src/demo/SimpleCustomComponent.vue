<script setup lang="ts">
import {computed} from "vue"

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value?: typeof props.modelValue): void
}>()

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="h-16 w-16 rounded-full bg-green-400" :class="{ 'ring offset-2 ring-blue-300 drop-shadow shadow-lg': inputVal === 'green' }" @click="inputVal = 'green'"/>

    <div class="h-16 w-16 rounded-full bg-orange-400" :class="{ 'ring offset-2 ring-blue-300 drop-shadow shadow-lg': inputVal === 'orange' }" @click="inputVal = 'orange'"/>

    <div class="h-16 w-16 rounded-full bg-red-400" :class="{ 'ring offset-2 ring-blue-300 drop-shadow shadow-lg': inputVal === 'red' }" @click="inputVal = 'red'"/>
  </div>
</template>
