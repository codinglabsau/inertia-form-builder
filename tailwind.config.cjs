/** @type {import('tailwindcss').Config} */
module.exports = {
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
  ],
}
