import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import '@/assets/Css/main.css'
import { reveal } from '@/directives/reveal.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('reveal', reveal)

app.mount('#app')
