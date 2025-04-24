// main.js
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createMetaManager } from 'vue-meta'
import 'vuetify/styles'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(vuetify)
app.use(createMetaManager())
app.use(router)

app.mount('#app')

// Initialize AOS after mount
AOS.init({
    once: false,
    mirror: true,
    duration: 1000,
    easing: 'ease-in-out'
  })
