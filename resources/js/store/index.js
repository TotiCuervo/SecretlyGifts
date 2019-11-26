import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Modules
import participant from './modules/participant.js'
import event from './modules/event.js'
import page from './modules/page.js'

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
    modules: {
        participant,
        event,
        page
    },
    strict: debug
});
