function initialState() {
    return {
        loading: false,
        form: {
            name: '',
            currency:'',
            giftLimit: '',
            date: '',
            message: ''
        }
    }
}

const getters = {
    form(state) {
        return state.form;
    },
    loading(state){
        return state.loading;
    },
};

const actions = {

    checkForm({ commit, state }) {


    },
    setUpBasicEventFormTemplate({commit, state}) {
        commit('SET_FORM_NAME', 'Secret Gift Exchange');
        commit('SET_FORM_CURRENCY', '$');
        commit('SET_FORM_MESSAGE', 'I have arranged a secret gift exchange using Secretly! Below is the person that you have drawn!');
    }

};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    SET_FORM(state, form) {
        state.form = form;
    },
    SET_FORM_NAME(state, name) {
        state.form.name = name;
    },
    SET_FORM_GIFT_LIMIT(state, limit) {
        state.form.giftLimit = limit;
    },
    SET_FORM_CURRENCY(state, currency) {
      state.form.currency = currency;
    },
    SET_FORM_DATE(state, date) {
        state.form.date = date;
    },
    SET_FORM_MESSAGE(state, message) {
        state.form.message = message;
    }

};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
