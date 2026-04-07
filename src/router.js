import { createRouter, createWebHashHistory } from 'vue-router';
import Error404 from '@/views/Error404';

const routes = [
   {
      path: '/',
      name: 'default',
      component: () => import('@/App.vue'),
   },

   {
      path: '/:catchAll(.*)',
      component: Error404,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes
});

export default router;
