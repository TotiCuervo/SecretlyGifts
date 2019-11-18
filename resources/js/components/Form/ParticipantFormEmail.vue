<template>
    <div class="flex flex-wrap items-center py-2 w-full">
        <input v-model="email" v-bind:class="{'border-white': !error, 'border-red-600': error}" class="w-full appearance-none bg-transparent border-b-1.5 focus:border-green-500 w-full text-white mr-3 py-2 px-2 leading-tight focus:outline-none" type="text" placeholder="RamenLover3000@hokage.com" aria-label="Full name">
        <p v-if="error" class="text-red-600 font-extrabold text-sm w-full pt-2">{{message}}</p>
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
            email: {
                get() {
                    return this.participantsForm[this.index].email;
                },
                set(value) {
                    let payload = {
                        index: this.index,
                        email: value,
                    };

                    if(this.error) {
                        this.error = false;
                    }
                    
                    return this.$store.commit('form/UPDATE_PARTICIPANT_FORM_EMAIL', payload);
                }
            },
            error: {
                get() {
                    return this.errors[this.index].email_error;
                },
                set(value) {
                    let payload = {
                        index: this.index,
                        value: value,
                    };
                    return this.$store.commit('form/UPDATE_EMAIL_ERROR',payload);
                }
            },
            message: {
                get() {
                    return this.errors[this.index].email_message;
                },
                set(value) {

                }
            }
        }
    }
</script>

<style scoped>

</style>
