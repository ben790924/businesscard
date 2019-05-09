import Vue from 'vue';
import VueRouter from "vue-router";
import Home from './views/Home.vue';
import MakeWeb from './views/MakeWeb.vue';
import Done from './views/Done.vue';
Vue.use(VueRouter);


export default new VueRouter({
    
    routes: [
      { 
        path: '/',
        name: 'home',
        component: Home,
      },
      { 
        path: '/makeweb',
        name: 'makeweb',
        component: MakeWeb,
      },
      { 
        path: '/done',
        name: 'done',
        component: Done,
        props: true,
      },
    ],
})