<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'
import type { Fieldset } from '../../src/composables/useSchema'
import SimpleCustomComponent from '../components/SimpleCustomComponent.vue'
import MultipleFieldsetCustomComponent from '../components/MultipleFieldsetCustomComponent.vue'
import CodeBlock from '../components/CodeBlock.vue'

const customUsageCode = `import SimpleCustomComponent from './SimpleCustomComponent.vue'

const schema = useSchema({
  colour: {
    component: SimpleCustomComponent,
    value: 'green',
  },
})`

const customComponentCode = `<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void
}>()

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
<` + `/script>`

const fieldsetCode = `const schema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      manufacturer: 'Lamborghini',
      model: 5,
    } as Fieldset,
  },
})`

const mappedFieldsetCode = `const schema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      proxy_manufacturer: {
        model: 'manufacturer',  // Maps to 'manufacturer' prop
        value: 'Ferrari',
      },
      proxy_model: {
        model: 'model',
        value: 3,
      },
    } as Fieldset,
  },
})`

const customComponentSchema = useSchema({
  colour: {
    component: SimpleCustomComponent,
    value: 'green',
  },
})

const customComponentWithFieldsetSchema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      manufacturer: 'Lamborghini',
      model: 5,
    } as Fieldset,
  },
})

customComponentWithFieldsetSchema.form.errors = {
  manufacturer: 'The manufacturer field handles errors internally',
  model: 'The model field handles errors internally',
}

const customComponentWithMappedFieldsetSchema = useSchema({
  car: {
    component: MultipleFieldsetCustomComponent,
    fieldset: {
      proxy_manufacturer: {
        model: 'manufacturer',
        value: 'Ferrari',
      },
      proxy_model: {
        model: 'model',
        value: 3,
      },
    } as Fieldset,
  },
})

customComponentWithMappedFieldsetSchema.form.errors = {
  proxy_manufacturer: 'The proxy manufacturer field handles errors internally.',
}

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Custom Components</Heading>

      <p class="mt-2 text-muted-foreground">Use your own Vue components within the form schema.</p>

      <CodeBlock :code="customUsageCode" />

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentSchema" />
            </form>
          </CardContent>
        </Card>

        <pre>{{ customComponentSchema.form.data() }}</pre>
      </div>

      <div class="mt-6 rounded-lg border bg-muted p-4">
        <p class="font-medium">Creating a Custom Component</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Custom components must accept
          <code class="rounded bg-background px-1">modelValue</code>
          and emit
          <code class="rounded bg-background px-1">update:modelValue</code>:
        </p>

        <CodeBlock :code="customComponentCode" lang="vue" />
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Fieldsets</Heading>

      <p class="mt-2 text-muted-foreground">
        Components that manage multiple form fields using fieldsets.
      </p>

      <CodeBlock :code="fieldsetCode" />

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentWithFieldsetSchema" />
            </form>
          </CardContent>
        </Card>

        <pre>{{ customComponentWithFieldsetSchema.form.data() }}</pre>
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Mapped Fieldsets</Heading>

      <p class="mt-2 text-muted-foreground">Map fieldset keys to different form model names.</p>

      <CodeBlock :code="mappedFieldsetCode" />

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentWithMappedFieldsetSchema" />
            </form>
          </CardContent>
        </Card>

        <pre>{{ customComponentWithMappedFieldsetSchema.form.data() }}</pre>
      </div>
    </section>
  </div>
</template>
