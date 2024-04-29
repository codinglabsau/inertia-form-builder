# Coding Labs Inertia Form Builder
A private library to build complex Inertia compatible forms without the boilerplate.

## Documentation
The documentation is self-hosted; if you set it up already [it is probably here](http://inertia-form-builder-docs.test).

> [!NOTE]
> Local documentation should be rebuilt whenever the upstream changes.

If you haven't set up the documentation locally, follow these steps:

```bash
npm run docs:build
cd docs/.vitepress/dist && herd link inertia-form-builder
```

To preview or update the documentation, run `npm run docs:dev` instead.

## Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo of all the components.

To publish a new build:
1. Increment the version in `package.json`
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub; the GitHub Action will publish the new build to GitHub Packages

## Changelog
See [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Security
If you discover any security related issues, create an issue on GitHub.

## Credits
- [Steve Thomas](https://github.com/stevethomas)
- [All Contributors](../../contributors)

## License
Proprietary. Not for public release.

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au/open-source).
