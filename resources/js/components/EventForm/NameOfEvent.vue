<template>
    <div>
        <label class="block uppercase tracking-wide text-white text-xs font-bold">Name of Event<span class="font-normal lowercase"> - Will also be the subject of the emails</span></label>
        <div class="flex flex-wrap items-center py-2 w-full">
            <input v-model="name" v-bind:class="{'focus:border-green-500': nameCheck, 'border-red-600': !nameCheck}" class="text-2xl appearance-none bg-transparent border-b-1.5 w-full text-white mr-3 py-2 px-2 leading-tight focus:outline-none transition-fast" type="text" placeholder="Secretly Gift Exchange" aria-label="Full name">
        </div>
        <p v-if="!nameCheck" class="text-red-600 font-extrabold text-sm w-full">There must be a name for this event</p>
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
            name: {
                get() {
                    return this.form.name;
                },
                set (value) {
                    return this.$store.commit('event/SET_FORM_NAME', value);
                }
            },
            nameCheck() {
                return this.name.length > 0;
            }
        }
    }
</script>

<style scoped>

</style>
