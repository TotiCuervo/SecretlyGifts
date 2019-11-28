function initialState() {
    return {
        loading: false,
        errorFlag: false,
        page: '',
        participantsForm: [
            {
                name: '',
                email: '',
                exclusions: [],
            },
            {
                name: '',
                email: '',
                exclusions: [],
            },
            {
                name: '',
                email: '',
                exclusions: [],
            },
        ],
        errors: [
            {
                name_error: false,
                name_message: '',
                email_error: false,
                email_message: '',
            },
            {
                name_error: false,
                name_message: '',
                email_error: false,
                email_message: '',
            },
            {
                name_error: false,
                name_message: '',
                email_error: false,
                email_message: '',
            },
        ]
    }
}

const getters = {
    page(state) {
        return state.page;
    },
    participantsForm(state) {
        return state.participantsForm;
    },
    errors(state) {
        return state.errors;
    },
    loading(state){
        return state.loading;
    },
    errorFlag(state) {
        return state.errorFlag;
    }
};

const actions = {

    checkForm({ commit, state }) {

        commit('setLoading', true);

        commit('SET_ERROR_FLAG', false);

        commit('CLEAR_ALL_ERRORS');

        //email format checker
        let emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //checks each participant in form
        for (let $i=0; $i < state.participantsForm.length; $i++) {

            //If name length is 0
            if (state.participantsForm[$i].name.length === 0) {
                // console.log('Person '+ ($i+1) + ' name must be filled');
                commit('UPDATE_NAME_ERROR', {index: $i, value:true});
                commit('UPDATE_NAME_MESSAGE', {index: $i, message: 'Name Required'});
                commit('SET_ERROR_FLAG', true);
            }
            //checks for duplicate names
            else if (state.participantsForm.filter(person => person.name.toUpperCase() === state.participantsForm[$i].name.toUpperCase()).length > 1) {
                commit('UPDATE_NAME_ERROR', {index: $i, value:true});
                commit('UPDATE_NAME_MESSAGE', {index: $i, message: 'Cannot have duplicate names'});
                commit('SET_ERROR_FLAG', true);
            }


            //If email length is 0
            if (state.participantsForm[$i].email.length === 0) {
                // console.log('Person '+ ($i+1) + ' email must be filled');
                commit('UPDATE_EMAIL_ERROR', {index: $i, value:true});
                commit('UPDATE_EMAIL_MESSAGE', {index: $i, message: 'Email Required'});
                commit('SET_ERROR_FLAG', true);
            }
            //check email format
            else if (!emailChecker.test(state.participantsForm[$i].email)) {
                commit('UPDATE_EMAIL_ERROR', {index: $i, value:true});
                commit('UPDATE_EMAIL_MESSAGE', {index: $i, message: 'Valid Email Required'});
                commit('SET_ERROR_FLAG', true);
            }
            //check for duplicate mail
            else if (state.participantsForm.filter(person => person.email.toUpperCase() === state.participantsForm[$i].email.toUpperCase()).length > 1) {
                commit('UPDATE_EMAIL_ERROR', {index: $i, value:true});
                commit('UPDATE_EMAIL_MESSAGE', {index: $i, message: 'Cannot have duplicate mail'});
                commit('SET_ERROR_FLAG', true);
            }


        }

        commit('setLoading', false);

        return true;

    },
    deleteSpecificParticipantFromAllExclusions({ commit, state }, participant) {

        //loop through the list
        for (let $i = 0; $i < state.participantsForm.length; $i++) {

            //sets for simplicity
            let exclusionList = state.participantsForm[$i].exclusions;

            //loop through this users exclusion list
            for (let $b = 0; $b < exclusionList.length; $b++) {

                //if the names match delete from that list
                if (exclusionList[$b] === participant) {

                    commit('DELETE_PARTICIPANT_FROM_SPECIFIC_EXCLUSIONS_LIST', {
                        participantIndex: $i,
                        nameIndex: $b
                    });

                }
            }
        }

    }

};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    SET_ERROR_FLAG(state, value) {
        state.errorFlag = value;
    },
    SET_PAGE(state, page) {
        state.page = page;
    },
    SET_PARTICIPANTS_FORM(state, form) {
        state.participantsForm = form;
    },
    UPDATE_PARTICIPANT_FORM_NAME(state, payload) {
        state.participantsForm[payload.index].name = payload.name;
    },
    UPDATE_PARTICIPANT_FORM_EMAIL(state, payload) {
        state.participantsForm[payload.index].email = payload.email;
    },
    ADD_PARTICIPANT_FORM_EXCLUSION(state, payload) {
        state.participantsForm[payload.index].exclusions.push(payload.name);
    },
    ADD_PARTICIPANT_TO_FORM(state) {
        state.participantsForm.push({
            name: '',
            email: '',
            exclusions: []
        });
    },
    ADD_ERROR(state) {
        state.errors.push({
            name_error: false,
            name_message: '',
            email_error: false,
            email_message: '',
        })
    },
    UPDATE_NAME_ERROR(state, payload) {
        state.errors[payload.index].name_error = payload.value;
    },
    UPDATE_EMAIL_ERROR(state, payload) {
        state.errors[payload.index].email_error = payload.value;
    },
    UPDATE_NAME_MESSAGE(state, payload) {
        state.errors[payload.index].name_message = payload.message;
    },
    UPDATE_EMAIL_MESSAGE(state, payload) {
        state.errors[payload.index].email_message = payload.message;
    },
    DELETE_PARTICIPANT_FROM_FORM(state, index) {
        let $newForm = [];

        for (let $i = 0; $i < state.participantsForm.length; $i++) {

            if ($i !== index) {
                $newForm.push(state.participantsForm[$i]);
            }
        }

        state.participantsForm = $newForm;

    },
    DELETE_PARTICIPANT_FROM_SPECIFIC_EXCLUSIONS_LIST(state, payload) {
        let $newForm = [];

        for (let $i = 0; $i < state.participantsForm[payload.participantIndex].exclusions.length; $i++) {

            if ($i !== payload.nameIndex) {
                $newForm.push(state.participantsForm[payload.participantIndex].exclusions[$i]);
            }
        }

        state.participantsForm[payload.participantIndex].exclusions = $newForm;
    },
    DELETE_ERROR(state, index) {

        let $newErrors = [];

        for (let $i = 0; $i < state.errors.length; $i++) {

            if ($i !== index) {
                $newErrors.push(state.errors[$i]);
            }
        }

        state.errors = $newErrors;

    },
    CLEAR_ALL_EXCLUSIONS_FROM_PARTICIPANT(state, index) {
        state.participantsForm[index].exclusions = [];
    },
    CLEAR_ALL_ERRORS(state) {
        let errorList = [];

        for (let $i=0; $i < state.errors.length; $i++) {
            errorList.push({
                name_error: false,
                name_message: '',
                email_error: false,
                email_message: '',
            });
        }

        state.errors = errorList;
    },
    CLEAR_PARTICIPANTS_FORM(state){
        // state.participantsForm = [
        //     {
        //         name: 'Toti',
        //         email: 'cuervo@gmail.com',
        //         exclusions: [],
        //     },
        //     {
        //         name: '',
        //         email: '',
        //         exclusions: [],
        //     },
        //     {
        //         name: '',
        //         email: '',
        //         exclusions: [],
        //     },
        // ];
        state.participantsForm = [
            {
                name: 'Toti',
                email: 'cuervo@gmail.com',
                exclusions: [],
            },
            {
                name: 'Bre',
                email: 'bre@gmail.com',
                exclusions: [],
            },
            {
                name: 'Jake',
                email: 'jake@gmail.com',
                exclusions: [],
            },
        ];
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
