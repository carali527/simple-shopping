import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/components/AllCategories.vue"),
    alias: '/home',
    meta: {
      title: 'home'
    }
  },
  {
    path: '/bages',
    name: 'bages',
    component: () => import("@/components/Items.vue"),
    meta: {
      title: 'bages'
    }
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import("@/components/Items.vue"),
    meta: {
      title: 'shoes'
    }
  },
  {
    path: '/belts',
    name: 'belts',
    component: () => import("@/components/Items.vue"),
    meta: {
      title: 'belts'
    }
  },
  {
    path: '/rings',
    name: 'rings',
    component: () => import("@/components/Items.vue"),
    meta: {
      title: 'rings'
    }
  },
  {
    path: '/:categories/:order',
    name: 'ItemsDetails',
    component: () => import("@/components/ItemsDetails.vue"),
    meta: {
      title: 'ItemsDetails'
    }
  },
  { 
    path: '/:path(.*)',
    name: 'notFound',
    component: () => import("@/components/NotFound.vue"),
    meta: {
      title: 'NotFound'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;