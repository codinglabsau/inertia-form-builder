<p align="center">
  <img src="https://codinglabsau.github.io/inertia-form-builder/assets/logo-CWuGQBXm.png" alt="Inertia Form Builder" height="100">
</p>

<h1 align="center">Inertia Form Builder</h1>

<p align="center">
  A Vue 3 component library for building complex Inertia.js forms without the boilerplate.
</p>

## Documentation

Full documentation, installation guide, and examples are available at:

**[codinglabsau.github.io/inertia-form-builder](https://codinglabsau.github.io/inertia-form-builder/)**

## Installation

```bash
npm install @codinglabsau/inertia-form-builder
```

Requires `@codinglabsau/gooey` for UI components. See the [installation guide](https://codinglabsau.github.io/inertia-form-builder/installation) for full setup instructions.

## Features

- Schema-based form definitions
- Automatic model binding and validation
- Built-in error display
- Nested schemas with Grid and Section components
- Laravel Precognition support for real-time validation
- Conditional field visibility

## Native HTML attributes

Put native HTML attributes (`type`, `placeholder`, `autocomplete`, `min`, etc.) under
`props` — not at the top level of the element definition. Keys under `props` are always
forwarded and fall through to the underlying input, whereas a top-level key is only passed
when the component explicitly declares it as a prop and is otherwise dropped:

```ts
const schema = useSchema({
  dob: {
    component: Input,
    props: { type: 'date' }, // ✅ falls through to the <input>
  },
  // dob: { component: Input, type: 'date' } // ❌ dropped (dev build warns)
})
```

In development a warning is logged when a top-level key is neither a recognised config key
(`component`, `props`, `value`, `label`, `visible`, `alert`, `fieldset`, `schema`, `events`,
`checked`, `items`) nor a declared prop of the component, so silent drops are easy to catch.

## Development

```bash
# Install dependencies
npm install

# Run development server with component demos
npm run dev

# Build library
npm run build

# Run tests
npm run test
```

## Changelog

See [CHANGELOG](CHANGELOG.md) for release history.

## Security

If you discover any security related issues, create an issue on GitHub.

## Credits

- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License

MIT

## About Coding Labs

Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
