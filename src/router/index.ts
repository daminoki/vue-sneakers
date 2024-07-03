import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      name: 'Favorites',
      path: '/favorites',
      component: () => import('@/views/FavoritesPage.vue'),
    },
  ],
});

export default router;
