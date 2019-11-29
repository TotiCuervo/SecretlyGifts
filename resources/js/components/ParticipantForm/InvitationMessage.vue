<template>
    <div>
        <label class="block uppercase tracking-wide text-white text-xs font-bold">Invitation Message <span class="font-normal lowercase"> - Good place to add location and other details</span></label>
        <textarea v-model="message" rows="3" maxlength="600" v-bind:class="{'focus:border-green-500': messageCheck, 'border-red-600': !messageCheck}" class="w-full md:w-5/6 h-auto border-2 bg-transparent rounded p-4 appearance-none focus:outline-none transition-fast">
        </textarea>
        <label class="block uppercase tracking-wide text-white text-xs font-bold">{{600 - message.length}}</label>
        <p v-if="!messageCheck" class="text-red-600 font-extrabold text-sm w-full">There must be an invitation for this event</p>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('event', ['form']),
            message: {
                get() {
                    return this.form.message;
                },
                set(value) {
                    return this.$store.commit('event/SET_FORM_MESSAGE', value);
                }
            },
            messageCheck() {
                return this.message.length > 0;
            }
        }

    }
</script>

<style scoped>

</style>
