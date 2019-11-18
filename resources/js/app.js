require('./bootstrap');

window.Vue = require('vue');


//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//VueX
import Vuex from 'vuex'
Vue.use(Vuex);

//V-Tooltips
import VTooltip from 'v-tooltip'
Vue.use(VTooltip);

//Components
import Home from './components/Home.vue'
import CreateEvent from './components/Create/CreateEvent'
import  {store} from './store'


const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Router
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'createEvent',
            component: CreateEvent,
            beforeEnter:(to, from, next) => {
                store.commit('form/SET_PARTICIPANTS_FORM', [
                    {
                        name: '',
                        email: ''
                    },
                    {
                        name: '',
                        email: ''
                    },
                    {
                        name: '',
                        email: '',
                    }
                ]);
                next()
            }
        },
        { path: '*', redirect: '/' }
    ]
});

const app = new Vue({
    el: '#app',
    router,
    store
});
