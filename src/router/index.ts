import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页',
      },
    },
    // 预留子页面：在后续需求中按需引入对应视图即可
    // { path: '/post/:id', name: 'post-detail', component: () => import('@/views/PostDetailView.vue') },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.afterEach((to) => {
  const base = 'Field Notes';
  const name = typeof to.name === 'string' ? to.name : '';
  const piece = to.meta.title as string | undefined;
  if (piece && name !== 'home') {
    document.title = `${piece} · ${base}`;
  } else {
    document.title = `${base} · 个人博客`;
  }
});

export default router;
