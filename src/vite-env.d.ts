/// <reference types="vite/client" />

// Minimal typing for the dev-only warning guard. `process.env.NODE_ENV` is replaced
// by the consumer's bundler at build time (Vite/webpack/Rollup), so no runtime `process`
// dependency is introduced — we only need the type, not @types/node.
declare const process: { env: { NODE_ENV?: string } }
