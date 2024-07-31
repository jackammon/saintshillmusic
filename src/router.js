// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    // Redirect any unmatched paths to root
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
