<script setup lang="ts">
import {
  Container,
  Heading,
  Date,
  Email,
  Image,
  Select,
  Text,
  Checkbox,
  PrimaryButton,
  SecondaryButton,
} from '@codinglabsau/ui'
import { FormBuilder, useSchema } from './index'
import Grid from './components/elements/Grid.vue'
import CheckboxGroup from './components/elements/CheckboxGroup.vue'

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
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
    showLabel: false,
    component: Checkbox,
    value: true,
    props: {
      label: 'Full Time',
      value: null,
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

const actionsSchema = useSchema({
  Address: Text,
  Suburb: Text,
  Country: Text,
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

    <Heading>Custom Form Actions</Heading>

    <div class="mt-4 grid grid-cols-2">
      <div>
        <form @submit.prevent="submit">
          <FormBuilder :schema="actionsSchema">
            <template #actions="{ form }">
              <div class="space-x-2">
                <PrimaryButton :loading="form.processing" type="submit"> Save</PrimaryButton>

                <SecondaryButton type="button" @click="form.reset()">Reset</SecondaryButton>
              </div>
            </template>
          </FormBuilder>
        </form>
      </div>

      <pre class="border bg-gray-200 p-4">{{ actionsSchema.form.data() }}</pre>
    </div>
  </Container>
</template>
