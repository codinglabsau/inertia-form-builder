<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'

const inputStatesSchema = useSchema({
  error: {
    component: Input,
    value: 'bad value',
  },
  read_only: {
    component: Input,
    value: 'read only',
    props: {
      readonly: true,
    },
  },
  disabled: {
    component: Input,
    value: 'disabled',
    props: {
      disabled: true,
    },
  },
  warning: {
    component: Input,
    value: 'Warning',
    alert: {
      text: 'Show me the warning.',
      actionText: 'Click me',
      actionHref: '/action',
      externalAction: true,
      visible: () => true,
    },
  },
})

inputStatesSchema.form.errors = {
  error: 'This error field is invalid.',
}

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-6 py-8">
    <Heading>Input States</Heading>

    <p class="text-muted-foreground">
      Demonstrate error states, readonly, disabled, and alert messages.
    </p>

    <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm"><code>const schema = useSchema({
  error: {
    component: Input,
    value: 'bad value',
  },
  read_only: {
    component: Input,
    value: 'read only',
    props: { readonly: true },
  },
  disabled: {
    component: Input,
    value: 'disabled',
    props: { disabled: true },
  },
  warning: {
    component: Input,
    value: 'Warning',
    alert: {
      text: 'Show me the warning.',
      actionText: 'Click me',
      actionHref: '/action',
      visible: () => true,
    },
  },
})

// Set error manually
schema.form.errors = {
  error: 'This error field is invalid.',
}</code></pre>

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <Card>
        <CardContent class="pt-6">
          <form @submit.prevent="submit">
            <FormBuilder :schema="inputStatesSchema" />
          </form>
        </CardContent>
      </Card>

      <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
        inputStatesSchema.form.data()
      }}</pre>
    </div>
  </div>
</template>
