function initialState() {
    return {
        page: '',
    }
}

const getters = {
    page(state) {
        return state.page;
    },
};

const actions = {

};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    SET_PAGE(state, page) {
        state.page = page;
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
