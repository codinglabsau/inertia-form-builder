import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ui',
      fileName: 'ui'
    },
    rollupOptions: {
      external: ['vue', '@inertiajs/inertia-vue3'],
      output: {
        globals: {
          vue: 'Vue',
          '@inertiajs/inertia-vue3': 'inertiaVue3'
        }
      }
    }
  },
  plugins: [vue()],
})
