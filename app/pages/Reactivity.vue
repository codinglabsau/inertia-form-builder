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

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Toggle Fields</Heading>

        <p class="mt-2 text-muted-foreground">
          Conditionally include fields based on reactive state.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
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

        <div class="space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium">Form Data:</p>

            <CodeBlock
              :code="JSON.stringify(dynamicFieldsSchema.form.data(), null, 2)"
              lang="json"
              :copyable="false"
            />
          </div>

          <div>
            <p class="mb-2 text-sm font-medium">Elements:</p>

            <CodeBlock
              :code="
                JSON.stringify(
                  dynamicFieldsSchema.elements.value.map((e) => e.name),
                  null,
                  2,
                )
              "
              lang="json"
              :copyable="false"
            />
          </div>
        </div>
      </div>

      <CodeBlock :code="toggleFieldsCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Dynamic Field List</Heading>

        <p class="mt-2 text-muted-foreground">Add and remove fields dynamically from a list.</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
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

          <CodeBlock
            :code="JSON.stringify(dynamicListSchema.form.data(), null, 2)"
            lang="json"
            :copyable="false"
          />
        </div>
      </div>

      <CodeBlock :code="dynamicListCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Using Ref Directly</Heading>

        <p class="mt-2 text-muted-foreground">
          You can also pass a ref containing the element map directly.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
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

          <CodeBlock
            :code="JSON.stringify(refSchema.form.data(), null, 2)"
            lang="json"
            :copyable="false"
          />
        </div>
      </div>

      <CodeBlock :code="refDirectlyCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Supported Input Types</Heading>

        <p class="mt-2 text-muted-foreground">
          All three input patterns work with full reactivity:
        </p>
      </div>

      <CodeBlock :code="supportedInputTypesCode" />
    </section>
  </div>
</template>
