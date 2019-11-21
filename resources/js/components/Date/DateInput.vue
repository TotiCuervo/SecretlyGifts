<template>
    <div class="inline pl-6">
        <label class="block uppercase tracking-wide text-white text-xs font-bold">Date <span class="font-normal lowercase"> - Optional</span></label>
        <div class="flex items-center pt-2 text-white">

            <input v-model="year" maxlength="4" ref="year" class="uppercase appearance-none bg-transparent border-b-2 focus:border-teal-500 py-1 px-2 leading-tight focus:outline-none transition-fast" type="date" aria-label="Full name">

        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                month: '',
                day: '',
                year: '',
            }
        },
        methods: {

        },
        computed: {
            // month: {
            //
            // },
            // day: {
            //
            // },
            // year: {
            //
            // }
        }
    }
</script>

<style scoped>

</style>
