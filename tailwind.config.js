import { theme } from '@codinglabsau/ui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@codinglabsau/ui/src/**/*.{js,vue}',
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    theme()
  ],
}
