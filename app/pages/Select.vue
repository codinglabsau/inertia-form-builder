<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Checkbox, Input, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, CheckboxGroup } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'
import SimpleSelect from '../components/SimpleSelect.vue'

const selectAndCheckboxSchema = useSchema({
  position_id: {
    component: SimpleSelect,
    value: '2',
    props: {
      options: [
        { value: '1', label: 'Developer' },
        { value: '2', label: 'Designer' },
        { value: '3', label: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    label: false,
    value: true,
    props: { label: 'Full Time' },
  },
  starts_at: {
    component: Input,
    value: '2022-04-10',
    props: {
      type: 'date',
    },
  },
  days: {
    component: CheckboxGroup,
    label: 'Available Days',
    items: [
      { label: 'Monday', value: 1 },
      { label: 'Tuesday', value: 2 },
      { label: 'Wednesday', value: 3 },
      { label: 'Thursday', value: 4 },
      { label: 'Friday', value: 5 },
    ],
    checked: [2, 3, 5],
  },
})

const selectCode = `import { Select, Checkbox, Input } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, CheckboxGroup } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  position_id: {
    component: Select,
    value: 2,
    props: {
      options: [
        { value: 1, label: 'Developer' },
        { value: 2, label: 'Designer' },
        { value: 3, label: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    label: false,
    value: true,
    props: { label: 'Full Time' },
  },
  days: {
    component: CheckboxGroup,
    label: 'Available Days',
    items: [
      { label: 'Monday', value: 1 },
      { label: 'Tuesday', value: 2 },
    ],
    checked: [2],
  },
})`

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-6 py-8">
    <Heading>Select & Checkboxes</Heading>

    <p class="text-muted-foreground">
      Various input types including select dropdowns and checkbox groups.
    </p>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardContent class="pt-6">
          <form @submit.prevent="submit">
            <FormBuilder :schema="selectAndCheckboxSchema" />
          </form>
        </CardContent>
      </Card>

      <CodeBlock
        :code="JSON.stringify(selectAndCheckboxSchema.form.data(), null, 2)"
        lang="json"
        :copyable="false"
      />
    </div>

    <CodeBlock :code="selectCode" />
  </div>
</template>
