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

//vue-tailwind
import VueTailwind from 'vue-tailwind'
Vue.use(VueTailwind);

//vue-moment
Vue.use(require('vue-moment'));

//Components
import Home from './components/Home.vue'
import CreateEvent from './components/Create/CreateEvent'
import  {store} from './store'

Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;


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
                store.commit('participant/CLEAR_PARTICIPANTS_FORM');
                store.dispatch('event/setUpBasicEventFormTemplate');
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
