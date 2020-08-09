import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import AppLayout from '@/components/layouts/AppLayout.vue';
import LoginLayout from '@/components/layouts/LoginLayout.vue';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: HelloWorld,
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/',
    component: LoginLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
