<script setup lang="ts">
// @ts-expect-error - gooey types use unresolved path aliases
import { Button, Checkbox, Heading, Input, Select } from '@codinglabsau/gooey'
import { FormBuilder, useSchema, Grid, CheckboxGroup, Section } from '../src/index'
import type { Fieldset } from '../src/composables/useSchema'
import SimpleCustomComponent from './components/SimpleCustomComponent.vue'
import MultipleFieldsetCustomComponent from './components/MultipleFieldsetCustomComponent.vue'

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
    label: 'Change to limited to show the limit input',
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
  <div class="container mx-auto px-4 py-8">
    <Heading>Basic Form</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="simpleSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ simpleSchema.form.data() }}</pre>
    </div>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="simpleSchemaWithCustomId" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ simpleSchemaWithCustomId.form.data() }}</pre>
    </div>

    <Heading>Pre-filled Form with Grid</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="gridSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ gridSchema.form.data() }}</pre>
    </div>

    <Heading>Select and Checkboxes</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="selectAndCheckboxSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ selectAndCheckboxSchema.form.data() }}</pre>
    </div>

    <Heading>Conditionally Render Form Elements</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="visibleSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ visibleSchema.form.data() }}</pre>
    </div>

    <Heading>Empty Schema</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="emptySchema"> This is the default slot </FormBuilder>
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ emptySchema.form.data() }}</pre>
    </div>

    <Heading>Custom Form Actions</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="actionsSchema">
            <template #actions="{ form }">
              <div class="space-x-2">
                <Button type="submit" :loading="form.processing"> Save </Button>

                <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
              </div>
            </template>
          </FormBuilder>
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ actionsSchema.form.data() }}</pre>
    </div>

    <Heading>Custom Form Actions Wrapper</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="actionsWrapperSchema">
            <template #actions-wrapper="{ form }">
              <div class="space-x-2">
                <Button type="submit" :loading="form.processing"> Save </Button>

                <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
              </div>
            </template>
          </FormBuilder>
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ actionsSchema.form.data() }}</pre>
    </div>

    <Heading>Input States</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="inputStatesSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ inputStatesSchema.form.data() }}</pre>
    </div>

    <Heading>Custom Component</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="customComponentSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ customComponentSchema.form.data() }}</pre>
    </div>

    <Heading>Custom Component with Fieldset</Heading>

    <div class="mt-4 grid md:grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="customComponentWithFieldsetSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ customComponentWithFieldsetSchema.form.data() }}</pre>
    </div>

    <Heading>Custom Component with Mapped Fieldset</Heading>

    <div class="mt-4 grid md:grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="customComponentWithMappedFieldsetSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">
        {{ customComponentWithMappedFieldsetSchema.form.data() }}
      </pre>
    </div>

    <Heading>Break up form into sections</Heading>

    <div class="mt-4 grid md:grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="sectionSchema" />
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">
        {{ sectionSchema.form.data() }}
      </pre>
    </div>
  </div>
</template>
