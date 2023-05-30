import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from './router';
import 'ant-design-vue/dist/antd.css';
import { Input, Pagination } from 'ant-design-vue'
import { store } from './store'
export const evenBus = new Vue();



Vue.use(VueRouter);
Vue.use(Input);
Vue.use(Pagination)

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })