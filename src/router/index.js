import Vue from 'vue'
import Router, { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

// Vue.use(Router)

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },

  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});
