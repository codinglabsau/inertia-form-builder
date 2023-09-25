<script setup>
import { Text } from '@codinglabsau/ui';
import { FormBuilder, useSchema, Grid, Section } from '../src/index';

const simpleSchema = useSchema({
  firstname: Text,
  surname: {
    component: Text,
    label: 'Last name',
  },
});

const sectionSchema = useSchema({
  physical_attributes: {
    component: Section,
    heading: 'Physical Attributes',
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
</script>

# The Basics
This is how you can define the most basic form. Simply importing the components from our UI library and simply attach that to an attribute. If you
have a complex form name which isn't user-friendly, you simply define your attribute as an object, set the `component` and define the `label`

```vue
<script setup>
import { Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const simpleSchema = useSchema({
  firstname: Text,
  surname: {
    component: Text,
    label: 'Last name',
  },
})
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="simpleSchema" />
  </form>
</template>
```

<FormBuilder :schema="simpleSchema" />

## Form in real-time
As you can see, we still reference 'Last Name' as surname.
<pre class="border bg-gray-200 p-4">{{ simpleSchema.form.data() }}</pre>

## Using Section
This is a very handy feature to help break up long nasty forms and help the user identify which sections are related.

```vue
<script setup>
import { Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema, Section, Grid } from '@codinglabsau/inertia-form-builder'

const sectionSchema = useSchema({
  physical_attributes: {
    component: Section,
    heading: 'Physical Attributes',
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
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="sectionSchema" />
  </form>
</template>
```

<FormBuilder :schema="sectionSchema" />
