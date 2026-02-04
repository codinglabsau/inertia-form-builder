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
import type { Fieldset } from '../../src/composables/useSchema'
import MultipleFieldsetCustomComponent from '../components/MultipleFieldsetCustomComponent.vue'
import CodeBlock from '../components/CodeBlock.vue'

const fullExampleCode = `const schema = useSchema(() => ({
  // Simple — component only, value defaults to null
  first_name: Input,

  // defineElement — type-safe factory
  last_name: defineElement(Input, { value: 'Thomas', label: 'Surname' }),

  // hidden — no label, type=hidden
  user_id: hidden(42),

  // showLabel: false — suppresses label but field is visible
  internal_ref: { component: Input, value: 'REF-001', showLabel: false },

  // Select with props forwarding
  role_id: {
    component: Select,
    value: 2,
    props: { options: [...] },
  },

  // Checkbox with its own label
  is_active: { component: Checkbox, value: true, label: 'Active', showLabel: false },

  // Grid — nested schema in columns
  location: {
    component: Grid,
    schema: {
      city: { component: Input, value: 'Burleigh Heads' },
      state: { component: Input, value: 'QLD' },
      postcode: { component: Input, value: '4220' },
    },
  },

  // Section — nested schema with heading/description
  contact: {
    component: Section,
    props: { heading: 'Contact Details', description: '...' },
    schema: { email: { component: Input }, phone: { component: Input } },
  },

  // visible — inline conditional function
  notes: { component: Input, visible: form => form.role_id !== 3 },

  // when — helper alternative to visible
  secondary_email: when(form => form.role_id === 1, Input, { label: 'Admin Email' }),

  // CheckboxGroup — multiple selections
  notifications: {
    component: CheckboxGroup,
    label: 'Notifications',
    items: [{ label: 'Email', value: 'email' }, ...],
    checked: ['email'],
  },

  // Alert with action link and visibility
  api_key: {
    component: Input,
    alert: {
      text: 'Changing this will invalidate existing integrations.',
      actionText: 'View docs',
      actionHref: '/installation',
      visible: () => true,
    },
  },

  // Fieldset — maps multiple form fields to one component
  car: {
    component: CarPicker,
    fieldset: { manufacturer: 'Lamborghini', model: 5 },
  },
}))`

const schema = useSchema(() => ({
  // 1. Simplest — just a component, value defaults to null, label auto-humanised
  first_name: Input,

  // 2. defineElement — type-safe factory with autocomplete
  last_name: defineElement(Input, {
    value: 'Thomas',
    label: 'Surname',
  }),

  // 3. hidden — no label, type=hidden, value set
  user_id: hidden(42),

  // 4. showLabel: false — label suppressed, field still visible
  internal_ref: {
    component: Input,
    value: 'REF-001',
    showLabel: false,
  },

  // 5. Select with options, default value, and props forwarding
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

  // 6. Checkbox — showLabel false so the checkbox renders its own label
  is_active: {
    component: Checkbox,
    value: true,
    label: 'Active',
    showLabel: false,
  },

  // 7. Grid — nested schema rendered in columns
  location: {
    component: Grid,
    schema: {
      city: { component: Input, value: 'Burleigh Heads' },
      state: { component: Input, value: 'QLD' },
      postcode: { component: Input, value: '4220' },
    },
  },

  // 8. Section — nested schema with heading and description
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

  // 9. visible — inline conditional visibility function
  notes: {
    component: Input,
    value: '',
    label: 'Notes (hidden for Viewers)',
    visible: (form) => form.role_id !== 3,
  },

  // 10. when helper — same as visible but as a factory function
  secondary_email: when((form) => form.role_id === 1, Input, {
    label: 'Admin Email',
    value: '',
  }),

  // 11. CheckboxGroup — multiple selections with checked defaults
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

  // 12. Alert — with action link and visibility function
  api_key: {
    component: Input,
    value: 'sk-123',
    alert: {
      text: 'Changing this will invalidate existing integrations.',
      actionText: 'View docs',
      actionHref: '/installation',
      visible: () => true,
    },
  },

  // 13. Fieldset — maps multiple form fields to one custom component
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      manufacturer: 'Lamborghini',
      model: 5,
    } as Fieldset,
  },
}))

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Full Example</Heading>

      <p class="mt-2 text-muted-foreground">
        A single reactive schema demonstrating every element config option. Change the role select
        to see conditional fields appear and disappear. Only
        <code class="rounded bg-muted px-1">precognitive</code>
 /
        <code class="rounded bg-muted px-1">precognitiveEvent</code>
        are omitted — they need a Laravel backend.
      </p>

      <CodeBlock :code="fullExampleCode" />
    </section>

    <section>
      <Heading as="h2" class="text-xl">Live Demo</Heading>

      <p class="mt-2 text-muted-foreground">
        Try changing <strong>Role</strong> — "Viewer" hides the notes field, only "Admin" shows the
        admin email. The car fieldset maps two form fields through one component.
      </p>

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
