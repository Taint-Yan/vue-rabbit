import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/Category/:id',
          name: 'Category',
          component: () => import('@/views/Category/index.vue')
        }, {
          path: 'SubCategory/:id',
          name: 'SubCategory',
          component: () => import('@/views/SubCategory/index.vue')
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
