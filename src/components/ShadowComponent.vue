<script setup lang="ts">
import { ref, onMounted } from 'vue'
const embeddedWebview = ref(null);

onMounted(() => {
  const shadowRoot = embeddedWebview.value.attachShadow({ mode: 'open' })
  const slot = document.createElement('slot')

  shadowRoot.appendChild(slot)
})
</script>

<template>
  <div ref="embeddedWebview">
    <slot></slot>
  </div>
</template>
