import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import {
  BookOutline,
  DiamondOutline,
  FlashlightOutline,
  BrushOutline,
  CodeSlashOutline,
} from '@vicons/ionicons5';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/tool' },
  {
    path: '/tool',
    component: () => import('../pages/Tool.vue'),
    meta: {
      label: '常用工具',
      key: 'tool',
      icon: FlashlightOutline,
    },
  },
  {
    path: '/blog',
    component: () => import('../pages/Blog.vue'),
    meta: {
      label: '大佬博客',
      key: 'blog',
      icon: BookOutline,
    },
  },
  {
    path: '/design',
    component: () => import('../pages/Design.vue'),
    meta: {
      label: '设计资源',
      key: 'design',
      icon: DiamondOutline,
    },
  },
  {
    path: '/draw',
    component: () => import('../pages/Draw.vue'),
    meta: {
      label: '绘画资源',
      key: 'draw',
      icon: BrushOutline,
    },
  },
  {
    path: '/code',
    component: () => import('../pages/Code.vue'),
    meta: {
      label: '常用代码',
      key: 'code',
      icon: CodeSlashOutline,
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
