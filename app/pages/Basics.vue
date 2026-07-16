<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const simpleSchema = useSchema({
  firstname: Input,
  surname: Input,
  secret: {
    component: Input,
    value: 'security by obscurity',
    props: {
      type: 'hidden',
    },
    label: false,
  },
})

const simpleSchemaWithCustomId = useSchema({
  firstname: {
    component: Input,
    label: 'Firstname with custom ID',
    props: {
      id: 'custom_firstname',
    },
  },
})

// Native HTML attributes (`type`, `placeholder`, ...) go under `props` so they fall
// through to the underlying <input> — even though gooey's Input declares no `type` prop.
const propsSchema = useSchema({
  dob: {
    component: Input,
    label: 'Date of birth',
    props: {
      type: 'date',
    },
  },
  website: {
    component: Input,
    props: {
      type: 'url',
      placeholder: 'https://example.com',
    },
  },
})

const labelsSchema = useSchema({
  default_category_id: Input,
  first_name: Input,
  email: {
    component: Input,
    label: 'Custom Label Override',
  },
  hidden_field: {
    component: Input,
    value: 'invisible',
    label: false,
  },
})

const descriptionsSchema = useSchema({
  username: {
    component: Input,
    description: 'Public — visible on your profile.',
  },
  api_token: {
    component: Input,
    label: 'API token',
    description:
      'Store this somewhere safe. It grants full access to your account and is only shown once, so copy it now — you will not be able to see it again after leaving this page.',
  },
  nickname: {
    component: Input,
    // no description — renders with nothing extra
  },
})

/* eslint-disable no-useless-escape */
const simpleCode = `<script setup>
import { Input } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const schema = useSchema({
  firstname: Input,
  surname: Input,
  secret: {
    component: Input,
    value: 'security by obscurity',
    props: { type: 'hidden' },
    label: false,
  },
})

const submit = () => schema.form.post('/users')
<\/script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="schema" />
  </form>
</template>`

const customIdCode = `const schema = useSchema({
  firstname: {
    component: Input,
    label: 'Firstname with custom ID',
    props: {
      id: 'custom_firstname',
    },
  },
})`

const labelsCode = `const schema = useSchema({
  // "default category" — underscores replaced, _id stripped
  default_category_id: Input,

  // "first name" — underscores replaced
  first_name: Input,

  // Custom label override
  email: {
    component: Input,
    label: 'Custom Label Override',
  },

  // Label hidden entirely
  hidden_field: {
    component: Input,
    value: 'invisible',
    label: false,
  },
})`

const descriptionsCode = `const schema = useSchema({
  // Muted helper text rendered directly under the input
  username: {
    component: Input,
    description: 'Public — visible on your profile.',
  },

  // Long descriptions wrap; sits above any validation error
  api_token: {
    component: Input,
    label: 'API token',
    description: 'Store this somewhere safe. It grants full access ...',
  },

  // No description — renders with nothing extra
  nickname: Input,
})`

const propsCode = `const schema = useSchema({
  // Native HTML attributes fall through to the <input> via props —
  // even ones the component doesn't declare (gooey's Input has no \`type\` prop).
  dob: {
    component: Input,
    label: 'Date of birth',
    props: { type: 'date' },
  },
  website: {
    component: Input,
    props: { type: 'url', placeholder: 'https://example.com' },
  },
})

// ⚠️ A native attribute at the TOP LEVEL is dropped (dev build warns):
//    dob: { component: Input, type: 'date' }  ✗  renders a plain text input`

const reactivityCode = `const schema = useSchema(() => ({
  firstname: Input,
}))`

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section class="space-y-6">
      <div>
        <Heading>The Basics</Heading>

        <p class="mt-2 text-muted-foreground">
          Simple form with text inputs. The schema automatically generates form fields.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="simpleSchema" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(simpleSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="simpleCode" lang="vue" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Custom ID</Heading>

        <p class="mt-2 text-muted-foreground">
          By default, IDs are auto-generated. You can override with a custom ID via props.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="simpleSchemaWithCustomId" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(simpleSchemaWithCustomId.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="customIdCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Labels</Heading>

        <p class="mt-2 text-muted-foreground">
          Labels are automatically generated by humanising the element name. For example,
          <code class="rounded bg-muted px-1">default_category_id</code>
          displays as
          <code class="rounded bg-muted px-1">Default Category</code>.
        </p>

        <p class="mt-2 text-muted-foreground">
          Override with <code class="rounded bg-muted px-1">label</code>
          prop, or hide with
          <code class="rounded bg-muted px-1">label: false</code>.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="labelsSchema" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(labelsSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="labelsCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Descriptions</Heading>

        <p class="mt-2 text-muted-foreground">
          Add <code class="rounded bg-muted px-1">description</code> to render muted helper text
          directly under the input. It sits above any validation error, honours newlines, and is
          wired for <code class="rounded bg-muted px-1">aria-describedby</code>. Omit it and nothing
          extra renders.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="descriptionsSchema" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(descriptionsSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="descriptionsCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Props</Heading>

        <p class="mt-2 text-muted-foreground">
          Any props in the <code class="rounded bg-muted px-1">props</code> section are forwarded to
          the form element.
        </p>

        <p class="mt-2 text-muted-foreground">
          Native HTML attributes belong here too — a key under
          <code class="rounded bg-muted px-1">props</code> always falls through to the underlying
          input, even one the component doesn't declare as a prop (for example a
          <code class="rounded bg-muted px-1">type</code> on a text input). A native attribute
          placed at the top level of the element definition is only passed when the component
          declares it as a prop, and is otherwise dropped (the dev build logs a warning when this
          happens).
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="propsSchema" />
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(propsSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="propsCode" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Reactivity</Heading>

        <p class="mt-2 text-muted-foreground">
          To make the schema reactive to prop changes, pass it as a function:
        </p>
      </div>

      <CodeBlock :code="reactivityCode" />
    </section>
  </div>
</template>
