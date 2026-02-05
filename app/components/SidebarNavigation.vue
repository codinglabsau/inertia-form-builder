<script setup lang="ts">
import { RouterLink } from 'vue-router'
// @ts-ignore - gooey types use unresolved path aliases
import { Button } from '@codinglabsau/gooey'

const introLinks = [
  { to: '/installation', label: 'Installation' },
  { to: '/upgrade-guide', label: 'Upgrade Guide' },
  { to: '/contribution-guide', label: 'Contribution Guide' },
]

const usageLinks = [
  { to: '/basics', label: 'The Basics' },
  { to: '/api', label: 'API' },
  { to: '/grid', label: 'Grid' },
  { to: '/section', label: 'Section' },
  { to: '/select', label: 'Select & Checkboxes' },
  { to: '/visibility', label: 'Visibility' },
  { to: '/reactivity', label: 'Reactivity' },
  { to: '/actions', label: 'Actions' },
  { to: '/states', label: 'States' },
  { to: '/custom', label: 'Custom Components' },
  { to: '/precognition', label: 'Precognition' },
]
</script>

<template>
  <nav class="space-y-1 py-4">
    <div class="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      Introduction
    </div>

    <Button
      v-for="link in introLinks"
      :key="link.to"
      variant="ghost"
      class="w-full justify-start"
      as-child
    >
      <RouterLink :to="link.to">
        {{ link.label }}
      </RouterLink>
    </Button>

    <div
      class="mt-4 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
    >
      Usage
    </div>

    <Button
      v-for="link in usageLinks"
      :key="link.to"
      variant="ghost"
      class="w-full justify-start"
      as-child
    >
      <RouterLink :to="link.to">
        {{ link.label }}
      </RouterLink>
    </Button>
  </nav>
</template>
