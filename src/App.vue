<script setup lang="ts">
import { ref } from 'vue'
import {
  Container,
  Heading,
  Date,
  Email,
  Hidden,
  Image,
  Select,
  Text,
  Number,
  Checkbox,
  PrimaryButton,
  SecondaryButton,
} from '@codinglabsau/ui'
import { FormBuilder, useSchema, Grid, CheckboxGroup, Section } from './index'
import type { Fieldset } from './composables/useSchema'
import SimpleCustomComponent from './demo/SimpleCustomComponent.vue'
import MultipleFieldsetCustomComponent from './demo/MultipleFieldsetCustomComponent.vue'

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
  secret: {
    component: Hidden,
    value: 'security by obscurity 😈',
  },
})

const simpleSchemaWithCustomId = useSchema({
  firstname: {
    component: Text,
    label: 'Firstname with custom ID',
    props: {
      id: 'custom_firstname',
    },
  },
})

const gridSchema = useSchema({
  avatar: {
    component: Image,
    props: {
      currentImage: 'https://avatars.githubusercontent.com/u/1127412?v=4',
    },
  },
  name: {
    component: Grid,
    schema: {
      firstname: {
        component: Text,
        value: 'Harry',
      },
      surname: {
        component: Text,
        value: 'Highpants',
      },
    },
  },
  email: {
    component: Email,
    value: 'harry@highpants.com',
  },
})

const selectAndCheckboxSchema = useSchema({
  position_id: {
    component: Select,
    value: 2,
    props: {
      options: [
        { id: 1, name: 'Developer' },
        { id: 2, name: 'Designer' },
        { id: 3, name: 'Manager' },
      ],
    },
  },
  full_time: {
    component: Checkbox,
    showLabel: false,
    value: true,
    props: {
      label: 'Full Time',
      modelValue: true,
    },
  },
  starts_at: {
    component: Date,
    value: '2022-04-10',
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
        { id: 1, name: 'None' },
        { id: 2, name: 'Limited' },
        { id: 3, name: 'Unlimited' },
      ],
    },
    label: 'Change to limited to show the limit input',
  },
  limit: {
    component: Number,
    visible: (form) => {
      return form.limit_type === 2
    },
  },
})

const actionsSchema = useSchema({
  address: Text,
  suburb: Text,
  country: Text,
})

const actionsWrapperSchema = useSchema({
  address: Text,
  suburb: Text,
  country: Text,
})

const inputStatesSchema = useSchema({
  error: {
    component: Text,
    value: 'bad value',
  },
  read_only: {
    component: Text,
    value: 'read only',
    props: {
      readonly: true,
    },
  },
  disabled: {
    component: Text,
    value: 'disabled',
    props: {
      disabled: true,
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
  proxy_manufacturer: 'The proxy manufacturer field is too proxy.',
}

const sectionSchema = useSchema({
  physical_attributes: {
    component: Section,
    heading: 'Physical Attributes',
    description:
      'Your privacy matters! \n Your attributes will be displayed to all visitors, but only administrators can view your full details.',
    schema: {
      attributes: {
        component: Grid,
        schema: {
          height: {
            component: Text,
          },
          weight: {
            component: Text,
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
        component: Text,
      },
      phone: {
        component: Text,
      },
    },
  },
})

const submit = () => alert('submitted')
</script>

<template>
  <Container>
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

    <Heading>Custom Form Actions</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="actionsSchema">
            <template #actions="{ form }">
              <div class="space-x-2">
                <PrimaryButton as="button" type="submit" :loading="form.processing">
                  Save
                </PrimaryButton>

                <SecondaryButton as="button" type="button" @click="form.reset()">
                  Reset
                </SecondaryButton>
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
                <PrimaryButton as="button" type="submit" :loading="form.processing">
                  Save
                </PrimaryButton>

                <SecondaryButton as="button" type="button" @click="form.reset()">
                  Reset
                </SecondaryButton>
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
  </Container>
</template>
