<script setup lang="ts">
import { ref, computed } from 'vue'
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Card, CardContent, Button } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const toggleFieldsCode = `const showEmail = ref(false)

const schema = useSchema(() => ({
  name: Input,
  ...(showEmail.value ? { email: Input } : {}),
}))`

const dynamicListCode = `const additionalFields = ref([])

const schema = useSchema(() => {
  const fields = { title: Input }
  for (const fieldName of additionalFields.value) {
    fields[fieldName] = Input
  }
  return fields
})`

const refDirectlyCode = `const elementsRef = ref({
  username: Input,
  password: { component: Input, props: { type: 'password' } },
})

const schema = useSchema(elementsRef)

// Update the ref to add/remove fields
elementsRef.value = {
  ...elementsRef.value,
  confirm_password: Input,
}`

const supportedInputTypesCode = `// Static object (BC - works but not reactive)
useSchema({ name: Input })

// Function (reactive)
useSchema(() => ({ name: Input }))

// Ref (reactive)
const elements = ref({ name: Input })
useSchema(elements)`

// Demo 1: Dynamic fields with ref
const showEmail = ref(false)
const showPhone = ref(false)

const dynamicFieldsSchema = useSchema(() => ({
  name: Input,
  ...(showEmail.value ? { email: { component: Input, props: { type: 'email' } } } : {}),
  ...(showPhone.value ? { phone: { component: Input, props: { type: 'tel' } } } : {}),
}))

// Demo 2: Dynamic field list
const additionalFields = ref<string[]>([])
let fieldCounter = 0

const addField = () => {
  fieldCounter++
  additionalFields.value = [...additionalFields.value, `custom_field_${fieldCounter}`]
}

const removeField = () => {
  additionalFields.value = additionalFields.value.slice(0, -1)
}

const dynamicListSchema = useSchema(() => {
  const fields: Record<string, any> = {
    title: Input,
  }
  for (const fieldName of additionalFields.value) {
    fields[fieldName] = Input
  }
  return fields
})

// Demo 3: Using ref directly
const elementsRef = ref({
  username: Input,
  password: { component: Input, props: { type: 'password' } },
})

const refSchema = useSchema(elementsRef)

const addConfirmPassword = () => {
  elementsRef.value = {
    ...elementsRef.value,
    confirm_password: { component: Input, props: { type: 'password' } },
  }
}

const removeConfirmPassword = () => {
  const { confirm_password, ...rest } = elementsRef.value
  elementsRef.value = rest
}
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Reactivity</Heading>

      <p class="mt-2 text-muted-foreground">
        In v2, <code class="rounded bg-muted px-1">useSchema()</code> supports reactive inputs. Pass
        a function or ref to enable dynamic form fields that update automatically.
      </p>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Toggle Fields</Heading>

      <p class="mt-2 text-muted-foreground">
        Conditionally include fields based on reactive state.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="space-y-4 pt-6">
            <div class="flex gap-4">
              <Button variant="outline" size="sm" @click="showEmail = !showEmail">
                {{ showEmail ? 'Hide' : 'Show' }} Email
              </Button>

              <Button variant="outline" size="sm" @click="showPhone = !showPhone">
                {{ showPhone ? 'Hide' : 'Show' }} Phone
              </Button>
            </div>

            <form @submit.prevent>
              <FormBuilder :schema="dynamicFieldsSchema" />
            </form>
          </CardContent>
        </Card>

        <div>
          <p class="mb-2 text-sm font-medium">Form Data:</p>

          <pre>{{ dynamicFieldsSchema.form.data() }}</pre>

          <p class="mt-4 mb-2 text-sm font-medium">Elements:</p>

          <pre>{{ dynamicFieldsSchema.elements.map((e) => e.name) }}</pre>
        </div>
      </div>

      <div class="mt-4">
        <CodeBlock :code="toggleFieldsCode" />
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Dynamic Field List</Heading>

      <p class="mt-2 text-muted-foreground">Add and remove fields dynamically from a list.</p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="space-y-4 pt-6">
            <div class="flex gap-4">
              <Button variant="outline" size="sm" @click="addField"> Add Field </Button>

              <Button
                variant="outline"
                size="sm"
                :disabled="additionalFields.length === 0"
                @click="removeField"
              >
                Remove Field
              </Button>
            </div>

            <form @submit.prevent>
              <FormBuilder :schema="dynamicListSchema" />
            </form>
          </CardContent>
        </Card>

        <div>
          <p class="mb-2 text-sm font-medium">Form Data:</p>

          <pre>{{ dynamicListSchema.form.data() }}</pre>
        </div>
      </div>

      <div class="mt-4">
        <CodeBlock :code="dynamicListCode" />
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Using Ref Directly</Heading>

      <p class="mt-2 text-muted-foreground">
        You can also pass a ref containing the element map directly.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="space-y-4 pt-6">
            <div class="flex gap-4">
              <Button
                v-if="!('confirm_password' in elementsRef)"
                variant="outline"
                size="sm"
                @click="addConfirmPassword"
              >
                Add Confirm Password
              </Button>

              <Button v-else variant="outline" size="sm" @click="removeConfirmPassword">
                Remove Confirm Password
              </Button>
            </div>

            <form @submit.prevent>
              <FormBuilder :schema="refSchema" />
            </form>
          </CardContent>
        </Card>

        <div>
          <p class="mb-2 text-sm font-medium">Form Data:</p>

          <pre>{{ refSchema.form.data() }}</pre>
        </div>
      </div>

      <div class="mt-4">
        <CodeBlock :code="refDirectlyCode" />
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Supported Input Types</Heading>

      <p class="mt-2 text-muted-foreground">All three input patterns work with full reactivity:</p>

      <CodeBlock :code="supportedInputTypesCode" />
    </section>
  </div>
</template>
