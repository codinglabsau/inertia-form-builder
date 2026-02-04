<script setup lang="ts">
import { ArrowRight, Layers, Eye, Zap, Puzzle } from 'lucide-vue-next'

// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Button, Card, CardHeader, CardTitle, CardDescription } from '@codinglabsau/gooey'

import Logo from '../components/Logo.vue'
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="text-center">
      <Logo alt="Inertia Form Builder" class="mx-auto mb-10 w-[36rem]" />

      <p class="mt-6 text-lg leading-8 text-muted-foreground">
        Inertia Form Builder is a schema-based form library for Inertia.js. Define fields
        declaratively, get model binding, validation, error display, and form state for free.
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-4">
        <Button as-child>
          <RouterLink to="/installation">
            Get Started
            <ArrowRight class="ml-2 size-4" />
          </RouterLink>
        </Button>

        <Button variant="outline" as-child>
          <RouterLink to="/api">API Reference</RouterLink>
        </Button>
      </div>
    </div>

    <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <Layers class="size-8 text-primary" />

          <CardTitle class="mt-4">Schema-driven</CardTitle>

          <CardDescription>
            Define forms as plain objects. No template boilerplate.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Zap class="size-8 text-primary" />

          <CardTitle class="mt-4">Reactive</CardTitle>

          <CardDescription>
            Dynamic fields that respond to state changes automatically.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Eye class="size-8 text-primary" />

          <CardTitle class="mt-4">Precognition</CardTitle>

          <CardDescription> Real-time Laravel validation as users type. </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Puzzle class="size-8 text-primary" />

          <CardTitle class="mt-4">Extensible</CardTitle>

          <CardDescription>
            Drop in custom components, grids, sections, and fieldsets.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>

    <div class="mt-16">
      <Heading as="h2" class="text-2xl font-bold">Quick Links</Heading>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <RouterLink
          to="/installation"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Installation</div>

            <div class="text-sm text-muted-foreground">
              Set up Inertia Form Builder in your project
            </div>
          </div>

          <ArrowRight
            class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/basics"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">The Basics</div>

            <div class="text-sm text-muted-foreground">
              Learn schemas, labels, props, and element config
            </div>
          </div>

          <ArrowRight
            class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/api"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">API Reference</div>

            <div class="text-sm text-muted-foreground">
              Complete reference for every schema and element option
            </div>
          </div>

          <ArrowRight
            class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>

        <RouterLink
          to="/contribution-guide"
          class="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
        >
          <div>
            <div class="font-medium">Contributing</div>

            <div class="text-sm text-muted-foreground">Learn how to contribute to the library</div>
          </div>

          <ArrowRight
            class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
