<script setup lang="ts">
const colour = defineModel<string>()
</script>

<template>
  <div class="flex items-center space-x-2">
    <div
      class="size-16 rounded-full bg-green-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': colour === 'green',
      }"
      @click="colour = 'green'"
    />

    <div
      class="size-16 rounded-full bg-orange-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': colour === 'orange',
      }"
      @click="colour = 'orange'"
    />

    <div
      class="size-16 rounded-full bg-red-400 hover:cursor-pointer"
      :class="{
        'shadow-lg ring ring-blue-300 drop-shadow': colour === 'red',
      }"
      @click="colour = 'red'"
    />
  </div>
</template>
