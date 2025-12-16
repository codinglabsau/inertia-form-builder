# Contribution Guide

## Local Development
Spin up the vite dev server with:
```bash
vite
```
The local server contains a demo of all the components.

## Publishing Builds
1. Increment the version in `package.json`
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub; the GitHub Action will publish the new build to GitHub Packages

## Publishing Docs
The documentation is gitignored, so it must be built locally. To do so, run:

```bash
npm run docs:build
cd docs/.vitepress/dist && herd link inertia-form-builder-docs
```

The docs will now be available at [http://inertia-form-builder-docs.test](http://inertia-form-builder-docs.test).

Anytime changes are made to the package and to the exposed API, the docs must be updated accordingly.

After updating the docs, or pulling in changes to the docs, you'll want to update your local docs using:
```bash
npm run docs:build
```
