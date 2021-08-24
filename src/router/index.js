import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',  name: 'Home',  component: () => import('../views/Home.vue') },
  { path: '/chat', name: 'Chat', component: () => import( '../views/Chat.vue') },
  { path: '/auth', name: 'Auth', component: () => import( '../views/Auth.vue') },
  { path: '/chat_mobile/:id', name: 'Chat_mobile',  component: () => import( '../views/Chat_mobile.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
