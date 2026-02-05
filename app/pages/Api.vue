<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

const useSchemaCode = `import { useSchema } from '@codinglabsau/inertia-form-builder'

// Static element map
const schema = useSchema({
  name: Input,
  email: {
    component: Input,
    value: '',
  },
})

// Function (reactive — re-evaluates when dependencies change)
const schema = useSchema(() => ({
  name: Input,
  role: {
    component: Select,
    props: {
      options: roles.value,
    },
  },
}))

// Ref (reactive)
const elements = ref({
  name: Input,
})
const schema = useSchema(elements)`

const schemaReturnCode = `const schema = useSchema(elements)

schema.elements  // ComputedRef<Element[]> — mapped element definitions
schema.form      // InertiaForm — form instance with auto-generated _prefix`

const componentShorthandCode = `// Just a component — value defaults to null, label auto-humanised from key
const schema = useSchema({
  first_name: Input,       // label: "first name", value: null
  email: Input,            // label: "email", value: null
})`

const componentConfigCode = `{
  component: Input,                      // Required — the Vue component to render
  value: '',                             // Initial value (default: null)
  label: 'Full Name',                    // Custom label (default: humanised key)
  props: {                               // Forwarded to component
    type: 'email',
    placeholder: 'you@example.com',
  },
  visible: (form) => form.show_name,     // Conditional visibility
  events: {                              // Event handlers — (form, name) => void
    blur: (form, name) => form.validate(name),
  },
}`

const valueCode = `const schema = useSchema({
  // null (default)
  name: Input,

  // Explicit value
  country: {
    component: Input,
    value: 'Australia',
  },
})

// Function form lets you use reactive values
const schema = useSchema(() => ({
  name: {
    component: Input,
    value: props.user.name,
  },
}))`

const labelCode = `const schema = useSchema({
  // Auto-humanised: "first name" (underscores replaced, _id stripped)
  first_name: Input,

  // Auto-humanised: "role" (_id suffix stripped)
  role_id: {
    component: Select,
    props: { options },
  },

  // Custom label
  email: {
    component: Input,
    label: 'Email Address',
  },

  // Hide label — falsey value (false, null, '') hides it
  is_active: {
    component: Checkbox,
    label: false,
  },

  // Automatically hidden for type="hidden"
  user_id: {
    component: Input,
    value: 42,
    props: { type: 'hidden' },
  },

  // Automatically hidden for nested schemas (Grid/Section)
  address: {
    component: Grid,
    schema: {
      city: Input,
      state: Input,
    },
  },
})`

const propsCode = `const schema = useSchema({
  // Props forwarded to the component
  role: {
    component: Select,
    props: {
      options: [
        { value: 1, label: 'Admin' },
        { value: 2, label: 'Editor' },
      ],
      placeholder: 'Choose a role',
    },
  },

  phone: {
    component: Input,
    props: {
      type: 'tel',
      autocomplete: 'tel',
    },
  },
})`

const visibleCode = `const schema = useSchema(() => ({
  role: {
    component: Select,
    value: 1,
    props: { options },
  },

  // Receives the form instance, returns boolean
  admin_notes: {
    component: Input,
    visible: (form) => form.role === 1,
  },
}))`

const alertCode = `const schema = useSchema({
  api_key: {
    component: Input,
    value: 'sk-123',
    alert: {
      text: 'Changing this will invalidate existing integrations.',
      actionText: 'View docs',          // Optional
      actionHref: '/docs/api-keys',     // Optional
      externalAction: true,             // Optional — opens in new tab
      visible: () => true,              // Optional — controls alert visibility
    },
  },
})`

const nestedSchemaCode = `import { Grid, Section } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  // Grid — renders children in responsive columns
  address: {
    component: Grid,
    schema: {
      city: {
        component: Input,
        value: 'Burleigh Heads',
      },
      state: {
        component: Input,
        value: 'QLD',
      },
      postcode: {
        component: Input,
        value: '4220',
      },
    },
  },

  // Section — renders children under a heading + description
  contact: {
    component: Section,
    props: {
      heading: 'Contact Details',
      description: 'How should we reach you?',
    },
    schema: {
      email: Input,
      phone: {
        component: Input,
        props: { type: 'tel' },
      },
    },
  },
})

// Nested fields are flattened into the form:
// schema.form.city, schema.form.state, schema.form.postcode
// schema.form.email, schema.form.phone`

const fieldsetCode = `const schema = useSchema({
  // Simple fieldset — keys match form field names
  car: {
    component: CarPicker,
    fieldset: {
      manufacturer: 'Toyota',     // form.manufacturer = 'Toyota'
      model: 'Camry',             // form.model = 'Camry'
    },
  },

  // Mapped fieldset — component prop name differs from form field name
  location: {
    component: LocationPicker,
    fieldset: {
      city: {                  // form.city_id = 5
        model: 'city_id',
        value: 5,
      },
      state: 'QLD',            // form.state = 'QLD'
    },
  },
})`

const precognitionCode = `// Wire up validation per-field using events
const schema = useSchema('post', '/api/users', {
  name: {
    component: Input,
    events: {
      blur: (form, name) => form.validate(name),
    },
  },
  email: {
    component: Input,
    events: {
      change: (form, name) => form.validate(name),
    },
  },
  notes: Input, // No events — no real-time validation
})

// Reusable helper for repeated patterns
const precog = (event = 'change') => ({
  events: { [event]: (form, name) => form.validate(name) },
})

const schema = useSchema('post', '/api/users', {
  name: { component: Input, ...precog('blur') },
  email: { component: Input, ...precog() },
})`

const checkboxGroupCode = `import { CheckboxGroup } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  notifications: {
    component: CheckboxGroup,
    label: 'Notification Preferences',
    items: [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Push', value: 'push' },
    ],
    checked: ['email', 'push'],   // Initial selection
  },
})

// schema.form.notifications = ['email', 'push']`

const gridCode = `import { Grid } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  address: {
    component: Grid,
    schema: {
      city: Input,
      state: Input,
      postcode: Input,
    },
  },
})

// Renders children in responsive columns (auto-sized based on count).
// Nested fields flatten into the parent form.`

const sectionCode = `import { Section } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  contact: {
    component: Section,
    props: {
      heading: 'Contact Details',
      description: 'How should we reach you?',
    },
    schema: {
      email: Input,
      phone: Input,
    },
  },
})`

const formBuilderCode = `<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="schema">
      <!-- Default slot — override element rendering entirely -->

      <!-- #actions slot — replace the submit button area -->
      <template #actions="{ form }">
        <Button type="submit" :loading="form.processing">Save</Button>
        <Button variant="outline" @click="form.reset()">Reset</Button>
      </template>

      <!-- #actions-wrapper slot — replace the entire actions container -->
      <template #actions-wrapper="{ form }">
        <div class="flex justify-between">
          <Button variant="destructive">Delete</Button>
          <Button type="submit" :loading="form.processing">Save</Button>
        </div>
      </template>
    </FormBuilder>
  </form>
</template>`

const formBuilderPropsCode = `// Props
{
  schema: Schema     // Required — the return value of useSchema()
  submit: string     // Submit button text (default: 'Save')
}

// Slots
#default                    // Override all element rendering
#actions="{ form }"         // Replace submit button (inside flex container)
#actions-wrapper="{ form }" // Replace entire actions container`

const formInstanceCode = `const { form } = useSchema({ name: Input })

// Submission
form.post('/users')
form.put('/users/1')
form.patch('/users/1')
form.delete('/users/1')
form.get('/users')

// State
form.processing          // true while submitting
form.errors              // { name: 'Name is required', ... }
form.hasErrors           // true if any errors
form.isDirty             // true if any field changed from initial
form.wasSuccessful       // true after last submit succeeded
form.recentlySuccessful  // true for 2s after success (for flash messages)

// Data & Reset
form.data()              // { name: 'John', ... } — current values
form.reset()             // Reset all fields to initial values
form.reset('name')       // Reset specific field
form.clearErrors()       // Clear all errors
form.clearErrors('name') // Clear specific error

// Auto-generated prefix for unique element IDs
form._prefix             // e.g. "xkqwmz" — used by Element.vue for id attrs`
</script>

<template>
  <div class="space-y-16 py-8">
    <section>
      <Heading>API Reference</Heading>

      <p class="mt-2 text-muted-foreground">
        Complete reference for every option at the schema and element level.
      </p>
    </section>

    <!-- §1 — useSchema -->
    <section class="space-y-4">
      <Heading as="h2" class="text-xl"
        >useSchema(elements) / useSchema(method, url, elements)</Heading
      >

      <p class="text-muted-foreground">
        Creates a reactive form schema. Accepts a static object, function, or ref as input.
        Functions and refs are reactive &mdash; the form auto-syncs when the element map changes.
      </p>

      <CodeBlock :code="useSchemaCode" />

      <Heading as="h3" class="text-lg">Return value</Heading>

      <CodeBlock :code="schemaReturnCode" />
    </section>

    <!-- §2 — Element Definition -->
    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Element Definition</Heading>

      <p class="text-muted-foreground">
        Each key in the element map is either a Vue component (shorthand) or a config object.
      </p>

      <Heading as="h3" class="text-lg">Component shorthand</Heading>

      <CodeBlock :code="componentShorthandCode" />

      <Heading as="h3" class="text-lg">Full config</Heading>

      <p class="text-muted-foreground">
        Core options shown below. Nesting (<code class="rounded bg-muted px-1">schema</code>
 ),
        multi-model (<code class="rounded bg-muted px-1">fieldset</code>

        ), and alerts (<code class="rounded bg-muted px-1">alert</code>) are documented in their own
        sections.
      </p>

      <CodeBlock :code="componentConfigCode" />
    </section>

    <!-- §3 — ElementConfig Options -->
    <section class="space-y-12">
      <Heading as="h2" class="text-xl">ElementConfig Options</Heading>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">value</Heading>

        <p class="text-muted-foreground">
          Initial value for the form field. Defaults to
          <code class="rounded bg-muted px-1">null</code>.
        </p>

        <CodeBlock :code="valueCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">label</Heading>

        <p class="text-muted-foreground">
          Custom label text. By default, the key is humanised: underscores become spaces,
          <code class="rounded bg-muted px-1">_id</code>

          suffix is stripped. A falsey value (<code class="rounded bg-muted px-1">false</code>

          , <code class="rounded bg-muted px-1">null</code>
          ,
          <code class="rounded bg-muted px-1">''</code>
          ) hides the label. Labels are also auto-hidden for
          <code class="rounded bg-muted px-1">type="hidden"</code> inputs and nested schemas.
        </p>

        <CodeBlock :code="labelCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">props</Heading>

        <p class="text-muted-foreground">
          Forwarded to the rendered component. Only props the component declares are passed through.
        </p>

        <CodeBlock :code="propsCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">visible</Heading>

        <p class="text-muted-foreground">
          A function that receives the form instance and returns a boolean. The element is hidden
          when it returns <code class="rounded bg-muted px-1">false</code>. Use a reactive schema
          (function form) so the element map re-evaluates when dependencies change.
        </p>

        <CodeBlock :code="visibleCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">alert</Heading>

        <p class="text-muted-foreground">
          Renders a warning banner below the field with an optional action button.
        </p>

        <CodeBlock :code="alertCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">schema (nested)</Heading>

        <p class="text-muted-foreground">
          Nests child elements inside a layout component. Child fields are flattened into the parent
          form. Used with <code class="rounded bg-muted px-1">Grid</code>
          and
          <code class="rounded bg-muted px-1">Section</code>.
        </p>

        <CodeBlock :code="nestedSchemaCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">fieldset</Heading>

        <p class="text-muted-foreground">
          Maps multiple form fields to a single component. Useful for custom components that manage
          several values (e.g. address pickers, date ranges). Keys can be direct values or objects
          with <code class="rounded bg-muted px-1">model</code>
          and
          <code class="rounded bg-muted px-1">value</code> when the component prop name differs from
          the form field name.
        </p>

        <CodeBlock :code="fieldsetCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">events</Heading>

        <p class="text-muted-foreground">
          Event handlers called with
          <code class="rounded bg-muted px-1">(form, name)</code>
. The
          <code class="rounded bg-muted px-1">update</code>
 key fires inside the
          <code class="rounded bg-muted px-1">update:modelValue</code> handler after model sync; all
          other keys become separate listeners. Commonly used to wire up precognition validation.
        </p>

        <CodeBlock :code="precognitionCode" />
      </div>
    </section>

    <!-- §4 — Components -->
    <section class="space-y-12">
      <Heading as="h2" class="text-xl">Components</Heading>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">Grid</Heading>

        <p class="text-muted-foreground">
          Renders nested schema elements in responsive columns, auto-sized based on child count.
        </p>

        <CodeBlock :code="gridCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">Section</Heading>

        <p class="text-muted-foreground">
          Groups nested schema elements under a heading and description.
        </p>

        <CodeBlock :code="sectionCode" />
      </div>

      <div class="space-y-4">
        <Heading as="h3" class="text-lg">CheckboxGroup</Heading>

        <p class="text-muted-foreground">
          Renders multiple checkboxes bound to an array value. Requires
          <code class="rounded bg-muted px-1">items</code>
          and
          <code class="rounded bg-muted px-1">checked</code> in the element config.
        </p>

        <CodeBlock :code="checkboxGroupCode" />
      </div>
    </section>

    <!-- §5 — FormBuilder -->
    <section class="space-y-4">
      <Heading as="h2" class="text-xl">FormBuilder</Heading>

      <p class="text-muted-foreground">
        The main wrapper component. Renders all elements and provides slot-based customisation for
        actions.
      </p>

      <CodeBlock :code="formBuilderPropsCode" />

      <CodeBlock :code="formBuilderCode" lang="vue" />
    </section>

    <!-- §6 — Form Instance -->
    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Form Instance</Heading>

      <p class="text-muted-foreground">
        The <code class="rounded bg-muted px-1">schema.form</code>
        object is a standard
        <a href="https://inertiajs.com/forms" target="_blank" class="underline">Inertia form</a>
        instance with all its methods and reactive properties.
      </p>

      <CodeBlock :code="formInstanceCode" />
    </section>
  </div>
</template>
