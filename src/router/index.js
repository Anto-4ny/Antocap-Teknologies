import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project', name: 'Project', component: () => import('../views/Projects.vue') },
  { path: '/blog', name: 'Blog', component: () => import('../views/Blog.vue') },
  { path: '/pricing', name: 'Pricing', component: () => import('../views/Pricing.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/Services.vue') },

  // ✅ Dynamic route for services
  { 
    path: '/services/:slug', 
    name: 'ServiceDetail', 
    component: () => import('../views/[slug].vue'), 
    props: true 
  },

  { path: '/testimonials', name: 'Testimonials', component: () => import('../views/Testimonials.vue') },

  // Catch all 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
