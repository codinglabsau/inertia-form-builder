<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

const basicUsageCode = `<script setup>
import { Text } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const schema = useSchema(
  {
    name: {
      component: Text,
      value: '',
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/users',
  },
)

const submit = () => {
  schema.form.submit({
    onSuccess() {
      schema.form.reset()
    },
  })
}
<\/script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="schema" />
  </form>
</template>`

const optInCode = `const schema = useSchema(
  {
    email: {
      component: Text,
      value: '',
      precognitive: true, // Explicitly opt-in
    },
    notes: {
      component: Textarea,
      value: '', // Excluded by default
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/contacts',
    optInPrecognition: true, // Only precognitive: true fields validate
  },
)`

const optOutCode = `const schema = useSchema(
  {
    description: {
      component: Textarea,
      value: '',
      precognitive: false, // Opt out this specific field
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/projects',
  },
)`

const eventCode = `const schema = useSchema({
  title: {
    component: Text,
    value: '',
    precognitiveEvent: 'blur', // Validate on focus loss
  },
  email: {
    component: Text,
    value: '',
    precognitiveEvent: 'change', // Validate on change event (default)
  },
  description: {
    component: Textarea,
    value: '',
    precognitiveEvent: 'focus', // Validate on focus
  },
  summary: {
    component: Text,
    value: '',
    precognitiveEvent: 'update', // Validate on v-model update
  },
})`

const customBlurCode = `<!-- Emitting a blur event in a custom input -->
<script setup>
const model = defineModel()
const emit = defineEmits(['blur'])
<\/script>

<input v-model="model" @blur="emit('blur', $event)" />`

const debounceCode = `schema.form.setValidationTimeout(1000) // 1 second delay`
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Precognition</Heading>

      <p class="mt-2 text-muted-foreground">
        Precognition validates form inputs in real-time as the user types or interacts, without
        requiring full form submission. This package supports precognition out of the box using
        Laravel's Precognition features.
      </p>
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Basic Usage</Heading>

        <p class="mt-2 text-muted-foreground">
          The only required options are
          <code class="rounded bg-muted px-1">precognition</code>
          ,
          <code class="rounded bg-muted px-1">method</code>
          , and
          <code class="rounded bg-muted px-1">url</code>
          . Once enabled,
          <code class="rounded bg-muted px-1">schema.form</code> is a precognition-aware form
          instance. All interaction including submission should be done through
          <code class="rounded bg-muted px-1">schema.form.submit()</code>.
        </p>
      </div>

      <CodeBlock :code="basicUsageCode" lang="vue" />

      <div class="rounded-lg border bg-muted p-4">
        <p class="text-sm text-muted-foreground">
          Read the
          <a
            href="https://laravel.com/docs/11.x/precognition#using-vue"
            target="_blank"
            class="font-medium underline"
          >
            Laravel Precognition docs
          </a>
          to understand how the precognition form instance differs from Inertia's form helper.
        </p>
      </div>
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Opt-In Mode</Heading>

        <p class="mt-2 text-muted-foreground">
          By default, all fields are precognitive. Set
          <code class="rounded bg-muted px-1">optInPrecognition: true</code>
          to invert this &mdash; only fields marked
          <code class="rounded bg-muted px-1">precognitive: true</code> will trigger real-time
          validation.
        </p>
      </div>

      <CodeBlock :code="optInCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Per-Field Opt-Out</Heading>

        <p class="mt-2 text-muted-foreground">
          Selectively disable precognition for individual fields without changing the global
          default.
        </p>
      </div>

      <CodeBlock :code="optOutCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Validation Events</Heading>

        <p class="mt-2 text-muted-foreground">
          Control when validation triggers using
          <code class="rounded bg-muted px-1">precognitiveEvent</code>
          . Defaults to
          <code class="rounded bg-muted px-1">change</code>.
        </p>
      </div>

      <CodeBlock :code="eventCode" />

      <div class="overflow-x-auto rounded-lg border">
        <table class="w-full text-sm">
          <thead class="border-b bg-muted">
            <tr>
              <th class="px-4 py-3 text-left font-medium">Event</th>

              <th class="px-4 py-3 text-left font-medium">Description</th>
            </tr>
          </thead>

          <tbody class="divide-y">
            <tr>
              <td class="px-4 py-3"><code class="rounded bg-muted px-1">change</code></td>

              <td class="px-4 py-3 text-muted-foreground">
                Default. Triggers when the value is committed (native DOM event).
              </td>
            </tr>

            <tr>
              <td class="px-4 py-3"><code class="rounded bg-muted px-1">update</code></td>

              <td class="px-4 py-3 text-muted-foreground">
                Triggers on <code class="rounded bg-muted px-1">update:modelValue</code>.
              </td>
            </tr>

            <tr>
              <td class="px-4 py-3"><code class="rounded bg-muted px-1">blur</code></td>

              <td class="px-4 py-3 text-muted-foreground">
                Triggers when the input loses focus (native DOM event).
              </td>
            </tr>

            <tr>
              <td class="px-4 py-3"><code class="rounded bg-muted px-1">focus</code></td>

              <td class="px-4 py-3 text-muted-foreground">
                Triggers when the input gains focus (native DOM event).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg border bg-muted p-4">
        <p class="text-sm text-muted-foreground">
          If your custom component doesn't emit the specified event, validation will not run. Ensure
          custom components propagate the relevant DOM events.
        </p>
      </div>

      <CodeBlock :code="customBlurCode" lang="vue" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Debounce Delay</Heading>

        <p class="mt-2 text-muted-foreground">Customise the debounce timeout globally:</p>
      </div>

      <CodeBlock :code="debounceCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Options Reference</Heading>
      </div>

      <div>
        <Heading as="h3" class="text-lg">Schema-level options</Heading>

        <div class="mt-4 overflow-x-auto rounded-lg border">
          <table class="w-full text-sm">
            <thead class="border-b bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium">Option</th>

                <th class="px-4 py-3 text-left font-medium">Type</th>

                <th class="px-4 py-3 text-left font-medium">Default</th>

                <th class="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>

            <tbody class="divide-y">
              <tr>
                <td class="px-4 py-3"><code class="rounded bg-muted px-1">precognition</code></td>

                <td class="px-4 py-3 text-muted-foreground">boolean</td>

                <td class="px-4 py-3 text-muted-foreground">false</td>

                <td class="px-4 py-3 text-muted-foreground">
                  Enables precognition support for the form.
                </td>
              </tr>

              <tr>
                <td class="px-4 py-3"><code class="rounded bg-muted px-1">method</code></td>

                <td class="px-4 py-3 text-muted-foreground">string</td>

                <td class="px-4 py-3 text-muted-foreground">null</td>

                <td class="px-4 py-3 text-muted-foreground">
                  HTTP method for precognitive requests.
                </td>
              </tr>

              <tr>
                <td class="px-4 py-3"><code class="rounded bg-muted px-1">url</code></td>

                <td class="px-4 py-3 text-muted-foreground">string</td>

                <td class="px-4 py-3 text-muted-foreground">null</td>

                <td class="px-4 py-3 text-muted-foreground">
                  The endpoint the form validates against.
                </td>
              </tr>

              <tr>
                <td class="px-4 py-3">
                  <code class="rounded bg-muted px-1">optInPrecognition</code>
                </td>

                <td class="px-4 py-3 text-muted-foreground">boolean</td>

                <td class="px-4 py-3 text-muted-foreground">false</td>

                <td class="px-4 py-3 text-muted-foreground">
                  When true, fields must opt-in via
                  <code class="rounded bg-muted px-1">precognitive: true</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <Heading as="h3" class="text-lg">Element-level options</Heading>

        <div class="mt-4 overflow-x-auto rounded-lg border">
          <table class="w-full text-sm">
            <thead class="border-b bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium">Option</th>

                <th class="px-4 py-3 text-left font-medium">Type</th>

                <th class="px-4 py-3 text-left font-medium">Default</th>

                <th class="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>

            <tbody class="divide-y">
              <tr>
                <td class="px-4 py-3">
                  <code class="rounded bg-muted px-1">precognitive</code>
                </td>

                <td class="px-4 py-3 text-muted-foreground">boolean</td>

                <td class="px-4 py-3 text-muted-foreground">true</td>

                <td class="px-4 py-3 text-muted-foreground">
                  Enables/disables precognition for a specific field.
                </td>
              </tr>

              <tr>
                <td class="px-4 py-3">
                  <code class="rounded bg-muted px-1">precognitiveEvent</code>
                </td>

                <td class="px-4 py-3 text-muted-foreground">string</td>

                <td class="px-4 py-3 text-muted-foreground">'change'</td>

                <td class="px-4 py-3 text-muted-foreground">
                  The event that triggers validation:
                  <code class="rounded bg-muted px-1">change</code>
                  ,
                  <code class="rounded bg-muted px-1">update</code>
                  ,
                  <code class="rounded bg-muted px-1">blur</code>
                  ,
                  <code class="rounded bg-muted px-1">focus</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
