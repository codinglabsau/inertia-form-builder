import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'inertia-form-builder',
      fileName: 'inertia-form-builder',
    },
    rollupOptions: {
      external: ['vue', '@inertiajs/vue3', '@codinglabsau/gooey'],
    },
    emptyOutDir: false,
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
