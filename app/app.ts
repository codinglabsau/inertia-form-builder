import { createApp } from 'vue'
import '@codinglabsau/gooey/dist/presets/slate.css'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
