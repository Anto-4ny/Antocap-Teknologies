import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
// ...import the rest

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project', name: 'Project', component: () => import('../views/Projects.vue') },
  { path: '/blog', name: 'Blog', component: () => import('../views/Blog.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/Services.vue') },
  { path: '/testimonials', name: 'Testimonials', component: () => import('../views/Testimonials.vue') },
  // ...
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
