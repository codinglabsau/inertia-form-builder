# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Inertia Form Builder is a Vue 3 component library for building complex Inertia.js-compatible forms without boilerplate. It provides a schema-based approach where you define form fields declaratively, and the library handles model binding, validation, error display, and form state.

## Commands

```bash
# Development server (runs demo app showcasing all components)
npm run dev

# Build library (runs format + lint + type-check first)
npm run build

# Individual checks
npm run format       # Prettier formatting
npm run lint         # ESLint
npm run type-check   # Vue TypeScript checking

# Tests
npm run test         # Vitest watch mode
npm run test:run     # Vitest single run
npm run test:e2e     # Playwright E2E tests
```

## Architecture

### Core Concepts

**Schema-based Forms**: Forms are defined using `useSchema()` which takes an element map (static object, function, or ref) and returns a schema object containing:
- `elements`: Mapped element definitions (reactive computed)
- `form`: Inertia/Precognition form instance with auto-generated `_prefix` for unique IDs
- `options`: Schema configuration (precognition settings)

**Reactive Schemas**: Pass a function or ref to `useSchema()` for dynamic fields that react to prop/state changes. The form automatically syncs — new fields are added, removed fields are deleted.

**Element Definition**: Each element in the schema can be either:
1. A component directly (e.g., `{ field: Input }`)
2. A config object with `component`, `value`, `label`, `props`, `visible`, `alert`, `fieldset`, `schema` (for nesting), `showLabel`, `precognitive`, `precognitiveEvent`

### Key Files

- `src/composables/useSchema.ts` - Core composable that creates form schemas, handles field flattening, and manages Inertia/Precognition form instances
- `src/components/FormBuilder.vue` - Main wrapper component that renders elements and provides slots for actions
- `src/components/Element.vue` - Renders individual elements with dynamic model binding, visibility control, labels, errors, and alerts
- `src/helpers/elements.ts` - Element helper functions: `defineElement()` (type-safe factory), `hidden()` (hidden input), `when()` (conditional visibility)

### Component Types

**Layout Components** (for nesting):
- `Grid` - Renders nested schema elements in a responsive grid
- `Section` - Groups elements with a heading and description

**Special Components**:
- `CheckboxGroup` - Renders multiple checkboxes bound to an array value

### Fieldsets

For components that need multiple form fields (e.g., a custom address component), use `fieldset` to map multiple models:
```ts
{
  component: MyComponent,
  fieldset: {
    street: 'initial value',
    city: { model: 'city_id', value: 5 }  // maps to different form key
  }
}
```

### Precognition Support

Enable Laravel Precognition for real-time validation:
```ts
useSchema(elements, {
  precognition: true,
  method: 'post',
  url: '/endpoint',
  optInPrecognition: true  // require per-field opt-in
})
```

## Dependencies

- Requires `@codinglabsau/gooey` component library for form inputs
- Peer deps: `@inertiajs/vue3 ^2.2.0`, `vue ^3.2`
- Optional peer dep: `laravel-precognition-vue-inertia` (only needed when using precognition)

## Code Style

- Vue components use `<script setup lang="ts">` with script-first tag order
- Type-based props/emits declarations (`defineProps<{...}>()`)
- Prettier: 100 char width, no semicolons, single quotes
- Path alias: `@/*` maps to `src/*`
