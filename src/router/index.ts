import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('../pages/Home.vue') },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
