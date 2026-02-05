<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

const updateDepsCode = `npm uninstall @codinglabsau/ui

npm install @codinglabsau/gooey@^2.0.0
npm install @codinglabsau/inertia-form-builder@^2.0.0
npm install @inertiajs/vue3@^2.2.0

# Optional: install precognition if you use it
npm install laravel-precognition-vue-inertia@^0.7.2`

const importsBefore = `import { Input, Select, Textarea } from '@codinglabsau/ui'`
const importsAfter = `import { Input, Select, Textarea } from '@codinglabsau/gooey'`

const checkboxGroupCode = `// In schema definition:
tags: {
  component: CheckboxGroup,
  checked: ['initial', 'values'],
  items: ['option-a', 'option-b', 'option-c'],
}`

const reactiveSchemasBefore = `const schema = useSchema({
  name: Input,
  email: showEmail ? Input : undefined,
})`

const reactiveSchemasAfter = `const schema = useSchema(() => ({
  name: Input,
  ...(showEmail.value ? { email: Input } : {}),
}))`

const labelBefore = `showLabel: false,`
const labelAfter = `label: false,`

const labelWithTextBefore = `full_time: {
  component: Checkbox,
  showLabel: false,
  label: 'Full Time',
},`

const labelWithTextAfter = `full_time: {
  component: Checkbox,
  label: false,
  props: { label: 'Full Time' },
},`

const precognitionBefore = `const schema = useSchema(elements, {
  precognition: true,
  method: 'post',
  url: '/users',
})`

const precognitionAfter = `const schema = useSchema('post', '/users', elements)`

const eventsBefore = `name: {
  component: Input,
  precognitive: true,
  precognitiveEvent: 'blur',
}`

const eventsAfter = `name: {
  component: Input,
  events: {
    blur: (form, name) => form.validate(name),
  },
}`

const helperCode = `const precog = (event = 'change') => ({
  events: { [event]: (form, name) => form.validate(name) },
})

const schema = useSchema('post', '/users', {
  name: { component: Input, ...precog('blur') },
  email: { component: Input, ...precog() },
})`
</script>

<template>
  <div class="space-y-12 py-8">
    <section class="space-y-6">
      <Heading>Upgrading to 2.0 from 1.x</Heading>

      <p class="text-muted-foreground">
        Version 2.0 brings reactive schemas, Gooey UI integration, a generic events config, and
        modernised build tooling. This guide covers all the breaking changes you'll need to
        address.
      </p>
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">1. Update dependencies</Heading>

      <CodeBlock :code="updateDepsCode" lang="bash" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">2. Update component imports</Heading>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="importsBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="importsAfter" lang="ts" />

      <p class="text-muted-foreground">Component renames in Gooey v2:</p>
      <ul class="list-inside list-disc space-y-1 text-muted-foreground">
        <li>
          <code class="rounded bg-muted px-1">PrimaryButton</code> &rarr;
          <code class="rounded bg-muted px-1">Button</code>
        </li>
        <li>
          <code class="rounded bg-muted px-1">Error</code> &rarr;
          <code class="rounded bg-muted px-1">FieldError</code>
        </li>
        <li>
          <code class="rounded bg-muted px-1">WarningAlert</code> &rarr;
          <code class="rounded bg-muted px-1">Alert</code> (with
          <code class="rounded bg-muted px-1">variant="warning"</code>)
        </li>
      </ul>
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">3. Update CheckboxGroup usage</Heading>

      <CodeBlock :code="checkboxGroupCode" lang="ts" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">4. Adopt reactive schemas (optional)</Heading>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="reactiveSchemasBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="reactiveSchemasAfter" lang="ts" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">5. Update showLabel to label</Heading>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="labelBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="labelAfter" lang="ts" />

      <p class="text-muted-foreground">
        If using both
        <code class="rounded bg-muted px-1">showLabel: false</code> and
        <code class="rounded bg-muted px-1">label: 'Text'</code>, move the display label to
        <code class="rounded bg-muted px-1">props</code>:
      </p>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="labelWithTextBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="labelWithTextAfter" lang="ts" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">6. Update precognition usage</Heading>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="precognitionBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="precognitionAfter" lang="ts" />

      <p class="text-muted-foreground">
        Replace <code class="rounded bg-muted px-1">precognitive</code>/<code
          class="rounded bg-muted px-1"
          >precognitiveEvent</code
        >
        with <code class="rounded bg-muted px-1">events</code>:
      </p>

      <p class="text-muted-foreground">Before:</p>
      <CodeBlock :code="eventsBefore" lang="ts" />

      <p class="text-muted-foreground">After:</p>
      <CodeBlock :code="eventsAfter" lang="ts" />

      <p class="text-muted-foreground">Reusable helper for repeated patterns:</p>
      <CodeBlock :code="helperCode" lang="ts" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Breaking changes summary</Heading>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="border-b">
            <tr>
              <th class="px-4 py-2 font-medium">v1</th>
              <th class="px-4 py-2 font-medium">v2</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="px-4 py-2"><code>@codinglabsau/ui</code></td>
              <td class="px-4 py-2"><code>@codinglabsau/gooey ^2.0.0</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>@inertiajs/vue3 ^1.0</code></td>
              <td class="px-4 py-2"><code>@inertiajs/vue3 ^2.2.0</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>PrimaryButton</code></td>
              <td class="px-4 py-2"><code>Button</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>Error</code></td>
              <td class="px-4 py-2"><code>FieldError</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>WarningAlert</code></td>
              <td class="px-4 py-2"><code>Alert</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>useSchema(els, { precognition, method, url })</code></td>
              <td class="px-4 py-2"><code>useSchema(method, url, els)</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>precognitive</code> / <code>precognitiveEvent</code></td>
              <td class="px-4 py-2"><code>events: { blur: (form, name) => ... }</code></td>
            </tr>
            <tr>
              <td class="px-4 py-2">Static schemas only</td>
              <td class="px-4 py-2">Static + reactive (function/ref)</td>
            </tr>
            <tr>
              <td class="px-4 py-2"><code>showLabel: false</code></td>
              <td class="px-4 py-2"><code>label: false</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
