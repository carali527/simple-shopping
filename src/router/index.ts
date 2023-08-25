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
    path: '/:categories',
    name: 'categories',
    component: () => import("@/components/Items.vue"),
    meta: {
      title: 'categories'
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
    path: '/404',
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