<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Select, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const visibleSchema = useSchema({
  limit_type: {
    component: Select,
    value: 1,
    props: {
      options: [
        { value: 1, label: 'None' },
        { value: 2, label: 'Limited' },
        { value: 3, label: 'Unlimited' },
      ],
    },
    label: 'Change to "Limited" to show the limit input',
  },
  limit: {
    component: Input,
    props: {
      type: 'number',
    },
    visible: (form) => {
      return form.limit_type === 2
    },
  },
})

const visibilityCode = `const schema = useSchema({
  limit_type: {
    component: Select,
    value: 1,
    props: {
      options: [
        { value: 1, label: 'None' },
        { value: 2, label: 'Limited' },
        { value: 3, label: 'Unlimited' },
      ],
    },
  },
  limit: {
    component: Input,
    props: { type: 'number' },
    visible: (form) => form.limit_type === 2,
  },
})`

const emptySchema = useSchema()

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section class="space-y-6">
      <div>
        <Heading>Conditional Fields</Heading>

        <p class="mt-2 text-muted-foreground">
          Fields can be conditionally shown based on other field values.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="visibleSchema" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(visibleSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="visibilityCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Default Slot</Heading>

        <p class="mt-2 text-muted-foreground">
          When a schema has no visible elements, the default slot content is displayed.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="emptySchema"> This is the default slot </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(emptySchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>
    </section>
  </div>
</template>
