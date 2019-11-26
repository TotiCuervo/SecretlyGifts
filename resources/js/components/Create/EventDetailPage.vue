<template>
    <div>
        <!--Header-->
        <h1 class="text-2xl font-bold font-baloo pb-12">Step 3: Event Details</h1>
        <!--Name of event-->
        <div class="w-3/6">
            <NameOfEvent></NameOfEvent>
        </div>
        <!--Date and Budget-->
        <div class="flex flex-wrap pt-10">
            <GiftLimit></GiftLimit>
            <DateInput></DateInput>
        </div>
        <!--Inivtation Message-->
        <div class="pt-10">
            <InvitationMessage></InvitationMessage>
        </div>
        <!--Buttons-->
        <div class="pt-10">
            <button @click="backButton" class="float-left bg-transparent hover:bg-green-500 border border-green-500 text-green-500 hover:text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm transition-fast" >
                Back
            </button>
            <button @click="submitForm" class="float-right bg-green-400 hover:bg-green-500 text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm disabled:opacity-50 transition-fast">
                Submit
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
                this.$store.commit('form/SET_PAGE', 'ExclusionsPage');
            },
            submitForm() {
                axios.post('/api/event/create', this.form)
                    .then(response => {
                        console.log(response);
                    });
            }
        },
        computed: {
            ...mapGetters('event', ['form'])

        }
    }
</script>

<style scoped>

</style>
