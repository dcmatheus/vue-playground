import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/serviços',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/usuario/:id',
    name: 'users-edit',
    component: () => import('../views/UserEditView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
