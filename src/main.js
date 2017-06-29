// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './routers/index.js';
Vue.use(VueRouter);
Vue.config.productionTip = false;

// 实例化router对象
const router = new VueRouter({
  mode: 'history',
  routes: routers
});

// 实例化vue对象 绑定到id=app
new Vue({
  router
}).$mount('#app');
