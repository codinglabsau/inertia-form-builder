<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

/* eslint-disable no-useless-escape */
const basicUsageCode = `<script setup>
import { Text } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const schema = useSchema('post', '/users', {
  name: {
    component: Text,
    value: '',
    events: {
      change: (form, name) => form.validate(name),
    },
  },
  email: {
    component: Text,
    value: '',
    events: {
      blur: (form, name) => form.validate(name),
    },
  },
})

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

const helperCode = `// Reusable helper for repeated precognition patterns
const precog = (event = 'change') => ({
  events: { [event]: (form, name) => form.validate(name) },
})

const schema = useSchema('post', '/projects', {
  title: {
    component: Text,
    value: '',
    ...precog('blur'),    // Validate on blur
  },
  email: {
    component: Text,
    value: '',
    ...precog(),          // Validate on change (default)
  },
  description: {
    component: Textarea,
    value: '',
    // No events — no real-time validation for this field
  },
})`

const eventCode = `const schema = useSchema('post', '/users', {
  title: {
    component: Text,
    value: '',
    events: {
      blur: (form, name) => form.validate(name),
    },
  },
  email: {
    component: Text,
    value: '',
    events: {
      change: (form, name) => form.validate(name),
    },
  },
  summary: {
    component: Text,
    value: '',
    events: {
      update: (form, name) => form.validate(name),
    },
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
        requiring full form submission. This package supports precognition using Laravel's
        Precognition features via the generic
        <code class="rounded bg-muted px-1">events</code> config.
      </p>
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Basic Usage</Heading>

        <p class="mt-2 text-muted-foreground">
          Pass the HTTP method and URL as the first two arguments to
          <code class="rounded bg-muted px-1">useSchema</code>
          to create a precognition-aware form instance. Wire up validation using
          <code class="rounded bg-muted px-1">events</code>
 — each handler receives
          <code class="rounded bg-muted px-1">(form, name)</code>.
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
        <Heading as="h2" class="text-xl">Reusable Helper</Heading>

        <p class="mt-2 text-muted-foreground">
          For forms where most fields validate the same way, extract a helper to reduce repetition.
          Fields without <code class="rounded bg-muted px-1">events</code> won't validate in
          real-time.
        </p>
      </div>

      <CodeBlock :code="helperCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Validation Events</Heading>

        <p class="mt-2 text-muted-foreground">
          Control when validation triggers by choosing the event key in
          <code class="rounded bg-muted px-1">events</code>.
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
                Triggers when the value is committed (native DOM event).
              </td>
            </tr>

            <tr>
              <td class="px-4 py-3"><code class="rounded bg-muted px-1">update</code></td>

              <td class="px-4 py-3 text-muted-foreground">
                Fires inside the <code class="rounded bg-muted px-1">update:modelValue</code>
                handler, after the form value is synced. Use for per-keystroke validation.
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
          If your custom component doesn't emit the specified event, the handler will not run.
          Ensure custom components propagate the relevant DOM events.
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
        <Heading as="h3" class="text-lg">Element-level options</Heading>

        <div class="mt-4 overflow-x-auto rounded-lg border">
          <table class="w-full text-sm">
            <thead class="border-b bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium">Option</th>

                <th class="px-4 py-3 text-left font-medium">Type</th>

                <th class="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>

            <tbody class="divide-y">
              <tr>
                <td class="px-4 py-3">
                  <code class="rounded bg-muted px-1">events</code>
                </td>

                <td class="px-4 py-3 text-muted-foreground">
                  Record&lt;string, (form, name) =&gt; void&gt;
                </td>

                <td class="px-4 py-3 text-muted-foreground">
                  Event handlers called with
                  <code class="rounded bg-muted px-1">(form, name)</code>
. The
                  <code class="rounded bg-muted px-1">update</code> key fires after model sync; all
                  other keys become separate listeners.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
