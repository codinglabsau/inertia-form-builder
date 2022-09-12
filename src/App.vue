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

      <pre class="border bg-gray-200 p-4">{{
        selectAndCheckboxSchema.form.data()
      }}</pre>
    </div>
  </Container>
</template>

<script setup>
import { ref } from "vue";
import {
  Container,
  Heading,
  Date,
  Email,
  Image,
  Select,
  Text,
} from "@codinglabsau/ui";
import { FormBuilder, useSchema } from "./index.ts";

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
});

const gridSchema = useSchema({
  avatar: {
    type: Image,
    currentImage: "https://avatars.githubusercontent.com/u/1127412?v=4",
  },
  name: {
    type: "grid",
    schema: {
      firstname: {
        type: Text,
        value: "Harry",
      },
      surname: {
        type: Text,
        value: "Highpants",
      },
    },
  },
  email: {
    type: Email,
    value: "harry@highpants.com",
  },
});

const selectAndCheckboxSchema = useSchema({
  position_id: {
    type: Select,
    value: 2,
    options: [
      { id: 1, name: "Developer" },
      { id: 2, name: "Designer" },
      { id: 3, name: "Manager" },
    ],
    disabled: false,
  },
  starts_at: {
    type: Date,
    value: "2022-04-10",
  },
  days: {
    type: "checkboxes",
    label: "Available Days",
    items: [
      { label: "Monday", value: 1 },
      { label: "Tuesday", value: 2 },
      { label: "Wednesday", value: 3 },
      { label: "Thursday", value: 4 },
      { label: "Friday", value: 5 },
    ],
    checked: [2, 3, 5],
  },
});

const submitted = ref(false);
const submit = () => alert("submitted");
</script>
