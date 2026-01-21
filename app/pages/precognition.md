# Precognition

Precognition allows you to validate form inputs in real-time — as the user types or interacts — without requiring full
form submission. This package supports precognition out of the box using
Laravel's [Precognition](https://laravel.com/docs/11.x/precognition#using-vue) features.

---

## 1. Basic Usage

Precognition support is opt-in and designed to be as seamless as possible.

The only required options are `precognition`, `method`, and `url`. Once enabled, the form instance behaves almost
identically to a regular Inertia form, but will also perform background validation requests based on field interaction.

The main difference is that `schema.form` is now a **precognition-aware form instance**, and all interaction with it —
including submission — should be done through `schema.form.submit()`.

```vue
<script setup>
import { Text } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '@codinglabsau/inertia-form-builder'

const schema = useSchema(
  {
    name: {
      component: Text,
      value: '',
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/users',
  }
)

const submit = () => {
  schema.form.submit({
    onSuccess() {
      schema.form.reset()
    },
  })
}
</script>

<template>
  <form @submit.prevent="submit">
    <FormBuilder :schema="schema" />
  </form>
</template>
```

> **Note:** You should read
> the [Laravel Precognition Documentation](https://laravel.com/docs/11.x/precognition#using-vue) to familiarise yourself
> with how precognition works and how to interact with the form instance as it differs slightly from inertia's form
> helper.

---

## 2. Advanced Usage

### 2.1 `optInPrecognition`

By default, all fields are precognitive unless configured otherwise. The `optInPrecognition` option allows
you to **invert** this behavior — making precognition _opt-in_ rather than _opt-out_.

This is useful for large forms where only a few fields should trigger real-time validation.

```js
const schema = useSchema(
  {
    email: {
      component: Text,
      value: '',
      precognitive: true, // Explicitly opt-in to precognition for this field
    },
    notes: {
      component: Textarea,
      value: '', // No precognitive config needed — will be excluded by default
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/contacts',
    optInPrecognition: true, // Only fields marked precognitive: true will be reactive
  }
)
```

### 2.2 Per-field `precognitive` flag

You can also selectively disable precognition per field without changing the global default:

```js
const schema = useSchema(
  {
    description: {
      component: Textarea,
      value: '',
      precognitive: false, // Opt out this specific field
    },
  },
  {
    precognition: true,
    method: 'post',
    url: '/projects',
  }
)
```

### 2.3 `precognitiveEvent`: Control When Validation Triggers

By default, a precognitive field will trigger validation when the `change` event fires — this is the native DOM change event. However, you can override this behavior using the `precognitiveEvent` option.

```js
const schema = useSchema({
  title: {
    component: Text,
    value: '',
    precognitiveEvent: 'blur', // Validate only when the field loses focus
  },
  email: {
    component: Text,
    value: '',
    precognitiveEvent: 'change', // Validate when the field value changes (on change event)
  },
  description: {
    component: Textarea,
    value: '',
    precognitiveEvent: 'focus', // Validate when the field gains focus
  },
  summary: {
    component: Text,
    value: '',
    precognitiveEvent: 'update', // Validate on v-model update (update:modelValue)
  },
})
```

> **Important:** When using precognition, it's crucial to understand the difference between event types:
>
> - **DOM Events** (`change`, `blur`, `focus`): These are native browser events that come directly from HTML elements.
> - **Vue Model Event** (`update`): This is the `update:modelValue` event emitted when a v-model value changes.
>
> If you're using a custom component, it must emit the specified event for precognition to be triggered.

#### Supported Events

| Event    | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| `change` | Default. Triggers when the value is committed (native DOM `change` event).   |
| `update` | Triggers when the `v-model` value is updated (`update:modelValue`).          |
| `blur`   | Triggers when the input loses focus (native DOM event).                      |
| `focus`  | Triggers when the input gains focus (native DOM event).                      |

If you're using `precognitiveEvent: 'blur'` but your component doesn't emit a `blur` event, validation will **not** run.
You must ensure your custom components propagate those events for this feature to work.

```vue
<!-- Example: emitting a blur event in a custom input -->
<script setup>
const emit = defineEmits(['blur', 'update:modelValue'])

const handleBlur = (e) => {
  emit('blur', e)
}
</script>

<input @blur="handleBlur" ... />
```

### 2.4 Debounce delay

You can customize the debounce timeout globally:

```js
schema.form.setValidationTimeout(1000) // 1 second delay before triggering validation
```

---

## 3. Precognition Options Reference

### Schema-level options

| Option                | Type      | Default | Description                                                                                                             |
| --------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `precognition`        | `boolean` | `false` | Enables precognition support for the form.                                                                              |
| `method`              | `string`  | `null`  | The HTTP method used when sending precognitive requests (`'get'`, `'post'`, `'patch'`, `'put'`, `'delete'`).            |
| `url`                 | `string`  | `null`  | The endpoint the form should be validated against.                                                                      |
| `optInPrecognition` | `boolean` | `false`  | When set to `true`, fields are NOT precognitive by default. You must manually opt-in fields via their schema config. |

### Element-level options

| Option              | Type      | Default    | Description                                                                                                |
| ------------------- | --------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| `precognitive`      | `boolean` | `true`     | Enables/disables precognition for a specific field. Overrides the global `optInPrecognition` setting. |
| `precognitiveEvent` | `string`  | `'change'` | The event that triggers validation. Accepts `'change'`, `'update'`, `'blur'`, `'focus'`.                   |

---

## Notes

- Any example or behavior shown in the Laravel [Precognition docs](https://laravel.com/docs/11.x/precognition#using-vue)
  is fully compatible via `schema.form` as long as precognition is enabled.
