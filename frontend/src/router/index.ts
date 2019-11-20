import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';


Vue.use(VueRouter);

/*
 RouteConfig needs: {
   path: string;
   name: string;
   component: Vue Component;
 }

 example:
  import Bar from '@/components/bar.vue';

  const routes = [
   {
     path: '/foo',
     name: 'foo-route',
     component: Bar,
   }
 ]
*/
const routes: RouteConfig[] = [];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
