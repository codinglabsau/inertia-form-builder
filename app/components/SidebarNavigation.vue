<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Button } from '@codinglabsau/gooey'

const sections = [
  { id: 'basic-form', label: 'Basic Form' },
  { id: 'grid-layout', label: 'Grid Layout' },
  { id: 'select-checkboxes', label: 'Select & Checkboxes' },
  { id: 'conditional-fields', label: 'Conditional Fields' },
  { id: 'custom-actions', label: 'Custom Actions' },
  { id: 'input-states', label: 'Input States' },
  { id: 'custom-components', label: 'Custom Components' },
  { id: 'fieldsets', label: 'Fieldsets' },
  { id: 'sections', label: 'Form Sections' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="space-y-1 py-4">
    <div class="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      Examples
    </div>

    <Button
      v-for="section in sections"
      :key="section.id"
      variant="ghost"
      class="w-full justify-start"
      @click="scrollTo(section.id)"
    >
      {{ section.label }}
    </Button>
  </nav>
</template>
