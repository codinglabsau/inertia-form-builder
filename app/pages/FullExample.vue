<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import {
  Heading,
  Input,
  Select as SelectInput,
  Checkbox,
  Card,
  CardContent,
  Button,
} from '@codinglabsau/gooey'
import {
  FormBuilder,
  useSchema,
  CheckboxGroup,
  Grid,
  Section,
  defineElement,
  hidden,
  when,
} from '../../src/index'
import { ref } from 'vue'

const showOptional = ref(true)

const schema = useSchema(() => ({
  // Simple — just pass a component, value defaults to null
  first_name: Input,

  // defineElement helper — type-safe with autocomplete
  last_name: defineElement(Input, {
    value: 'Thomas',
    label: 'Surname',
  }),

  // hidden helper — creates a hidden field (no label, type=hidden)
  user_id: hidden(42),

  // Select with options and default value
  role_id: {
    component: SelectInput,
    value: 2,
    props: {
      options: [
        { value: 1, label: 'Admin' },
        { value: 2, label: 'Editor' },
        { value: 3, label: 'Viewer' },
      ],
    },
  },

  // Checkbox — showLabel false to use the checkbox's own label
  is_active: {
    component: Checkbox,
    value: true,
    label: 'Active',
    showLabel: false,
  },

  // Grid — arrange fields side-by-side
  location: {
    component: Grid,
    schema: {
      city: { component: Input, value: 'Burleigh Heads' },
      state: { component: Input, value: 'QLD' },
      postcode: { component: Input, value: '4220' },
    },
  },

  // Section — group fields under a heading
  contact: {
    component: Section,
    props: {
      heading: 'Contact Details',
      description: 'How should we reach you?',
    },
    schema: {
      email: { component: Input, value: 'steve@codinglabs.com.au' },
      phone: {
        component: Input,
        props: { type: 'tel' },
      },
    },
  },

  // when helper — conditional visibility
  ...(showOptional.value
    ? {
        notes: when((form) => form.role_id !== 3, Input, {
          label: 'Notes (hidden for Viewers)',
          value: '',
        }),
      }
    : {}),

  // CheckboxGroup — multiple selections
  notifications: {
    component: CheckboxGroup,
    label: 'Notifications',
    items: [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Push', value: 'push' },
    ],
    checked: ['email'],
  },

  // Alert on a field
  api_key: {
    component: Input,
    value: 'sk-123',
    alert: {
      text: 'Changing this will invalidate existing integrations.',
    },
  },
}))

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Full Example</Heading>

      <p class="mt-2 text-muted-foreground">
        A single schema demonstrating every feature — simple fields, helpers, layout components,
        visibility, alerts, and checkbox groups. Change the role to "Viewer" to see the notes field
        disappear.
      </p>

      <pre><code>import { Input, Select, Checkbox } from '@codinglabsau/gooey'
import {
  useSchema, FormBuilder, CheckboxGroup,
  Grid, Section, defineElement, hidden, when,
} from '@codinglabsau/inertia-form-builder'

const schema = useSchema(() => ({
  first_name: Input,
  last_name: defineElement(Input, { value: 'Thomas', label: 'Surname' }),
  user_id: hidden(42),
  role_id: {
    component: Select,
    value: 2,
    props: { options: [...] },
  },
  is_active: { component: Checkbox, value: true, label: 'Active', showLabel: false },
  location: {
    component: Grid,
    schema: {
      city: { component: Input, value: 'Burleigh Heads' },
      state: { component: Input, value: 'QLD' },
      postcode: { component: Input, value: '4220' },
    },
  },
  contact: {
    component: Section,
    props: { heading: 'Contact Details', description: 'How should we reach you?' },
    schema: {
      email: { component: Input },
      phone: { component: Input, props: { type: 'tel' } },
    },
  },
  notes: when(form => form.role_id !== 3, Input, { label: 'Notes' }),
  notifications: {
    component: CheckboxGroup,
    label: 'Notifications',
    items: [{ label: 'Email', value: 'email' }, ...],
    checked: ['email'],
  },
  api_key: {
    component: Input,
    alert: { text: 'Changing this will invalidate existing integrations.' },
  },
}))</code></pre>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Live Demo</Heading>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="schema">
                <template #actions>
                  <div class="flex justify-end gap-2">
                    <Button type="submit">Save</Button>
                  </div>
                </template>
              </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <pre class="text-sm">{{ schema.form.data() }}</pre>
      </div>
    </section>
  </div>
</template>
