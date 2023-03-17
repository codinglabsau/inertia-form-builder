<script setup lang="ts">
import type { UiField } from './useSchema'
import type { InertiaForm } from '@inertiajs/vue3'
import { Error, Label } from '@codinglabsau/ui'

withDefaults(
  defineProps<{
    id: string
    element: UiField
    form: InertiaForm<any>
    showLabel?: boolean
  }>(),
  {
    showLabel: true,
  }
)
</script>

<template>
  <div>
    <Label v-if="showLabel" :for="id">
      {{ id.replaceAll('_id', '').replaceAll('_', ' ') }}
    </Label>
    <template v-if="element.type">
      <component
        :is="element.type"
        :key="id"
        :id="id"
        v-model="form[id]"
        v-bind="element.props ?? null"
      />
    </template>
    <template v-else>
      <component :is="element" :key="id" :id="id" v-model="form[id]" v-bind="$attrs" />
    </template>
    <Error :error="form.errors[id]" />
  </div>
</template>
