/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import App from './components/App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueToast);
//Vue.$toast.open({/* options */});
let instance = Vue.$toast.open('You did it!');

// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth){
//         if (!localStorage.hasOwnProperty("isLogged")) {
//             next({name: 'login'})
//         } else {
//             if (localStorage.getItem('isLogged') !== 'True') {
//                 next({name: 'login'})
//             } else {
//                 next()
//                 // console.log('has loged')
//             }
//         }
//         //need to login
        
//     } else {
//         next()
//     }
// })
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
