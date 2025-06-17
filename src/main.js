// main.js
import { createApp, nextTick } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createMetaManager } from 'vue-meta'
import 'vuetify/styles'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createHead } from '@vueuse/head'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(vuetify)
app.use(createMetaManager())
app.use(router)

// Register components properly
app.component('Carousel', Carousel)
app.component('Slide', Slide)

app.mount('#app')

// Initialize AOS after mount
nextTick(() => {
  AOS.init({
    once: false,
    mirror: true,
    duration: 1000,
    easing: 'ease-in-out'
  })
})
