<template>
    <div>
        <!--Header-->
        <h1 class="text-2xl font-bold font-baloo">Step 1: Add People</h1>
        <!--Forms-->
        <ParticipantForm v-for="(person, index) in this.participantsForm" :key="index" v-bind:index='index'></ParticipantForm>
        <!--Add Participant and Next Button-->
        <div class="pt-4">
            <button class="float-right bg-green-400 hover:bg-green-500 text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm" @click="backButton()">
                Back
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        methods: {
            backButton() {
                this.$store.commit('form/SET_PAGE', 'AddParticipantIndex')
            }
        },
        computed: {
            ...mapGetters('form', ['participantsForm', 'errors', 'errorFlag'])

        }
    }
</script>

<style scoped>

</style>
