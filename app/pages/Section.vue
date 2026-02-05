<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, Section as SectionLayout, Grid } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const sectionSchema = useSchema({
  physical_attributes: {
    component: SectionLayout,
    heading: 'Physical Attributes',
    description: 'Your privacy matters! \n Your password will be displayed to all visitors.',
    schema: {
      attributes: {
        component: Grid,
        schema: {
          height: {
            component: Input,
          },
          weight: {
            component: Input,
          },
        },
      },
    },
  },
  contact_details: {
    component: SectionLayout,
    heading: 'Contact Details',
    schema: {
      email: {
        component: Input,
      },
      phone: {
        component: Input,
      },
    },
  },
})

const sectionCode = `import { FormBuilder, useSchema, Section, Grid } from '@codinglabsau/inertia-form-builder'

const sectionSchema = useSchema({
  physical_attributes: {
    component: Section,
    heading: 'Physical Attributes',
    description: 'Your privacy matters!',
    schema: {
      attributes: {
        component: Grid,
        schema: {
          height: { component: Input },
          weight: { component: Input },
        },
      },
    },
  },
  contact_details: {
    component: Section,
    heading: 'Contact Details',
    schema: {
      email: { component: Input },
      phone: { component: Input },
    },
  },
})`

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-6 py-8">
    <Heading>Form Sections</Heading>

    <p class="text-muted-foreground">
      Group related fields into sections with headings and descriptions.
    </p>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardContent class="pt-6">
          <form @submit.prevent="submit">
            <FormBuilder :schema="sectionSchema" />
          </form>
        </CardContent>
      </Card>

      <CodeBlock
        :code="JSON.stringify(sectionSchema.form.data(), null, 2)"
        lang="json"
        :copyable="false"
      />
    </div>

    <CodeBlock :code="sectionCode" />
  </div>
</template>
