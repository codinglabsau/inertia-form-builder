<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading } from '@codinglabsau/gooey'
import CodeBlock from '../components/CodeBlock.vue'

const devCode = `npm run dev`

const publishSteps = `# 1. Increment the version in package.json
# 2. Update the lock file
npm update

# 3. Ensure all components are registered in src/index.ts
# 4. Build (formats, lints, type-checks, then vite build)
npm run build

# 5. Push to GitHub — the Action publishes to GitHub Packages`
</script>

<template>
  <div class="space-y-12 py-8">
    <section class="space-y-6">
      <Heading>Contribution Guide</Heading>

      <div class="space-y-4">
        <Heading as="h2" class="text-xl">Local Development</Heading>

        <p class="text-muted-foreground">
          Spin up the Vite dev server. The local server contains a demo of all the components and
          documentation.
        </p>

        <CodeBlock :code="devCode" lang="bash" />
      </div>
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Publishing Builds</Heading>

      <CodeBlock :code="publishSteps" lang="bash" />
    </section>

    <section class="space-y-4">
      <Heading as="h2" class="text-xl">Updating Documentation</Heading>

      <p class="text-muted-foreground">
        The documentation is part of the demo application. Anytime changes are made to the package
        and to the exposed API, the docs pages in
        <code class="rounded bg-muted px-1">app/pages/</code> should be updated accordingly.
      </p>
    </section>
  </div>
</template>
