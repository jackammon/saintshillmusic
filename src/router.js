// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Music from './views/Music.vue'
import Event from './views/Event.vue'
import Merch from './views/Merch.vue'
import Linktree from './views/Linktree.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
    alias: ['/discography']
  },
  {
    path: '/merch',
    name: 'merch',
    component: Merch
  },
  {
    path: '/events',
    name: 'events',
    component: Event
  },
  {
    path: '/links',
    name: 'links',
    component: Linktree,
    alias: ['/link', '/qr', '/updates', '/update', '/linktree', '/news', '/family']
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
