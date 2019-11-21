<template>
    <div class="flex flex-wrap items-center py-2 w-full">
        <input v-model="name" maxlength="30" v-bind:class="{'border-white': !error, 'border-red-600': error}" class="text-2xl appearance-none bg-transparent border-b-1.5 focus:border-green-500 w-full text-white mr-3 py-2 px-2 leading-tight focus:outline-none" type="text" placeholder="Naruto Uzamaki" aria-label="Full name">
        <p class="text-white text-xs w-full">{{30 - this.name.length}}</p>
        <p v-if="error" class="text-red-600 font-extrabold text-sm w-full">{{message}}</p>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        props: {
            'index': {
                default: 0
            }
        },
        computed: {
            ...mapGetters('form', ['participantsForm', 'errors']),
            name: {
                get() {
                    return this.participantsForm[this.index].name;
                },
                set(value) {

                    let payload = {
                        index: this.index,
                        name: value,
                    };

                    if(this.error) {
                        this.error = false;
                    }

                    return this.$store.commit('form/UPDATE_PARTICIPANT_FORM_NAME', payload);

                }
            },
            error: {
                get() {
                    return this.errors[this.index].name_error;
                },
                set(value) {
                    let payload = {
                        index: this.index,
                        value: value,
                    };
                    return this.$store.commit('form/UPDATE_NAME_ERROR',payload);
                }
            },
            message: {
                get() {
                    return this.errors[this.index].name_message;
                },
                set(value) {

                }
            }
        }
    }
</script>

<style scoped>

</style>
