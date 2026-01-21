# Contribution Guide

## Local Development
Spin up the vite dev server with:
```bash
npm run dev
```
The local server contains a demo of all the components and documentation.

## Publishing Builds
1. Increment the version in `package.json`
2. Run `npm update` to update the lock file
3. Ensure all components are registered in `src/index.ts`
4. Run `npm run build`; this will format, lint, type check and do a vite build
5. Push to GitHub; the GitHub Action will publish the new build to GitHub Packages

## Updating Documentation
The documentation is part of the demo application. Anytime changes are made to the package and to the exposed API, the docs pages in `app/pages/` should be updated accordingly.
