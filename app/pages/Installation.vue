<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

const installCode = `npm install @codinglabsau/inertia-form-builder`

const tailwindContentCode = `content: [
  './node_modules/@codinglabsau/inertia-form-builder/dist/*.js',
  // ...
]`

const tailwindPluginCode = `import { theme } from '@codinglabsau/gooey'

export default {
  // ...
  plugins: [
    theme()
  ]
}`
</script>

<template>
  <div class="space-y-12 py-8">
    <section class="space-y-6">
      <Heading>Installation</Heading>

      <div class="space-y-4">
        <Heading as="h2" class="text-xl">Install with NPM</Heading>

        <CodeBlock :code="installCode" lang="bash" />
      </div>
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Tailwind CSS</Heading>

      <p class="text-muted-foreground">
        Include the path to the library in your project's
        <code class="rounded bg-muted px-1">tailwind.config.js</code> purge configuration:
      </p>

      <CodeBlock :code="tailwindContentCode" lang="js" />

      <p class="text-muted-foreground">
        This also requires the
        <a
          href="https://github.com/codinglabsau/gooey"
          target="_blank"
          class="underline"
        >Coding Labs gooey</a>
        package for theme and components. Include the theme plugin in your Tailwind config:
      </p>

      <CodeBlock :code="tailwindPluginCode" lang="js" />

      <p class="text-muted-foreground">
        See the
        <a
          href="https://github.com/codinglabsau/gooey"
          target="_blank"
          class="underline"
        >gooey documentation</a>
        for theme customisation.
      </p>
    </section>
  </div>
</template>
