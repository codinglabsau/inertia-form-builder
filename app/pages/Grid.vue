<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, Grid as GridLayout } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const gridSchema = useSchema({
  name: {
    component: GridLayout,
    schema: {
      firstname: {
        component: Input,
        value: 'Harry',
      },
      surname: {
        component: Input,
        value: 'Highpants',
      },
    },
  },
  email: {
    component: Input,
    value: 'harry@highpants.com',
    props: {
      type: 'email',
    },
  },
})

const gridCode = `import { FormBuilder, useSchema, Grid } from '@codinglabsau/inertia-form-builder'

const gridSchema = useSchema({
  name: {
    component: Grid,
    schema: {
      firstname: {
        component: Input,
        value: 'Harry',
      },
      surname: {
        component: Input,
        value: 'Highpants',
      },
    },
  },
  email: {
    component: Input,
    value: 'harry@highpants.com',
  },
})`

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-6 py-8">
    <Heading>Grid Layout</Heading>

    <p class="text-muted-foreground">Use the Grid component to arrange fields in columns.</p>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardContent class="pt-6">
          <form @submit.prevent="submit">
            <FormBuilder :schema="gridSchema" />
          </form>
        </CardContent>
      </Card>

      <CodeBlock
        :code="JSON.stringify(gridSchema.form.data(), null, 2)"
        lang="json"
        :copyable="false"
      />
    </div>

    <CodeBlock :code="gridCode" />
  </div>
</template>
