import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Modules
import form from './modules/form.js'


const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
    modules: {
        form
    },
    strict: debug
});
