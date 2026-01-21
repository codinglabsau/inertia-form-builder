<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Button, Checkbox, Heading, Input, Select, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, Grid, CheckboxGroup, Section } from '../../src/index'
import type { Fieldset } from '../../src/composables/useSchema'
import SimpleCustomComponent from '../components/SimpleCustomComponent.vue'
import MultipleFieldsetCustomComponent from '../components/MultipleFieldsetCustomComponent.vue'

const simpleSchema = useSchema({
  firstname: Input,
  surname: Input,
  secret: {
    component: Input,
    value: 'security by obscurity',
    props: {
      type: 'hidden',
    },
    showLabel: false,
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
    props: {
      type: 'email',
    },
  },
})

const selectAndCheckboxSchema = useSchema({
  position_id: {
    component: Select,
    value: 2,
    props: {
      options: [
        { value: 1, label: 'Developer' },
        { value: 2, label: 'Designer' },
        { value: 3, label: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    showLabel: false,
    value: true,
    label: 'Full Time',
  },
  starts_at: {
    component: Input,
    value: '2022-04-10',
    props: {
      type: 'date',
    },
  },
  days: {
    component: CheckboxGroup,
    label: 'Available Days',
    items: [
      { label: 'Monday', value: 1 },
      { label: 'Tuesday', value: 2 },
      { label: 'Wednesday', value: 3 },
      { label: 'Thursday', value: 4 },
      { label: 'Friday', value: 5 },
    ],
    checked: [2, 3, 5],
  },
})

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

const emptySchema = useSchema()

const actionsSchema = useSchema({
  address: Input,
  suburb: Input,
  country: Input,
})

const actionsWrapperSchema = useSchema({
  address: Input,
  suburb: Input,
  country: Input,
})

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

const sectionSchema = useSchema({
  physical_attributes: {
    component: Section,
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
    component: Section,
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

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <!-- Basic Form -->
    <section id="basic-form">
      <Heading>Basic Form</Heading>

      <p class="mt-2 text-muted-foreground">
        Simple form with text inputs. The schema automatically generates form fields.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="simpleSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          simpleSchema.form.data()
        }}</pre>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="simpleSchemaWithCustomId" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          simpleSchemaWithCustomId.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Grid Layout -->
    <section id="grid-layout">
      <Heading>Grid Layout</Heading>

      <p class="mt-2 text-muted-foreground">Use the Grid component to arrange fields in columns.</p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="gridSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          gridSchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Select and Checkboxes -->
    <section id="select-checkboxes">
      <Heading>Select & Checkboxes</Heading>

      <p class="mt-2 text-muted-foreground">
        Various input types including select dropdowns and checkbox groups.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="selectAndCheckboxSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          selectAndCheckboxSchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Conditional Fields -->
    <section id="conditional-fields">
      <Heading>Conditional Fields</Heading>

      <p class="mt-2 text-muted-foreground">
        Fields can be conditionally shown based on other field values.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="visibleSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          visibleSchema.form.data()
        }}</pre>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="emptySchema"> This is the default slot </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          emptySchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Custom Actions -->
    <section id="custom-actions">
      <Heading>Custom Actions</Heading>

      <p class="mt-2 text-muted-foreground">
        Override the default submit button with custom actions using slots.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="actionsSchema">
                <template #actions="{ form }">
                  <div class="flex gap-2">
                    <Button type="submit" :loading="form.processing"> Save </Button>

                    <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
                  </div>
                </template>
              </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          actionsSchema.form.data()
        }}</pre>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="actionsWrapperSchema">
                <template #actions-wrapper="{ form }">
                  <div class="flex gap-2">
                    <Button type="submit" :loading="form.processing"> Save </Button>

                    <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
                  </div>
                </template>
              </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          actionsWrapperSchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Input States -->
    <section id="input-states">
      <Heading>Input States</Heading>

      <p class="mt-2 text-muted-foreground">
        Demonstrate error states, readonly, disabled, and alert messages.
      </p>

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
    </section>

    <!-- Custom Components -->
    <section id="custom-components">
      <Heading>Custom Components</Heading>

      <p class="mt-2 text-muted-foreground">Use your own Vue components within the form schema.</p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          customComponentSchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Fieldsets -->
    <section id="fieldsets">
      <Heading>Fieldsets</Heading>

      <p class="mt-2 text-muted-foreground">
        Components that manage multiple form fields using fieldsets.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentWithFieldsetSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          customComponentWithFieldsetSchema.form.data()
        }}</pre>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="customComponentWithMappedFieldsetSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          customComponentWithMappedFieldsetSchema.form.data()
        }}</pre>
      </div>
    </section>

    <!-- Sections -->
    <section id="sections">
      <Heading>Form Sections</Heading>

      <p class="mt-2 text-muted-foreground">
        Group related fields into sections with headings and descriptions.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="sectionSchema" />
            </form>
          </CardContent>
        </Card>

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          sectionSchema.form.data()
        }}</pre>
      </div>
    </section>
  </div>
</template>
