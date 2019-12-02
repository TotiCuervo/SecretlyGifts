<template>
    <div>
        <!--Header-->
        <h1 class="text-2xl font-bold font-baloo pb-12">Step 3: Event Details</h1>
        <!--Name of event-->
        <div class="w-full md:w-3/6">
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
                <span v-show="!loading">Submit</span>
                <span v-show="loading">Submitting...</span>
            </button>
            <button @click="$refs.modal.show()" class="float-right mr-4 bg-transparent hover:bg-green-500 border border-green-500 text-green-500 hover:text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm transition-fast">
                Preview
            </button>
        </div>
        <!--Modal-->
        <div>
            <t-modal
                headerClass="px-6 py-3 text-xl border-b text-black"
                width="800"
                footerClass="bg-indigo-700 p-3 flex justify-end"
                body-class="p-6 flex-grow text-black"
                closeIconClass="fill-current h-6 w-6 absolute right-0 top-0 m-6 text-black"
                wrapperClass="bg-white rounded shadow-lg border-transparent flex flex-col overflow-hidden"
                ref="modal">

                <template v-slot:header>
                    Preview Email
                </template>

                <PreviewEmail></PreviewEmail>

                <template v-slot:footer>
                    <button @click="$refs.modal.hide()" class="float-right bg-green-400 hover:bg-green-500 text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm disabled:opacity-50 transition-fast">
                        Close
                    </button>
                </template>

            </t-modal>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                loading: false
            }
        },
        methods: {
            backButton() {
                this.$store.commit('page/SET_PAGE', 'ExclusionsPage');
            },
            submitForm() {
                this.loading = true;
                //creates events
                axios.post('/api/event/store', this.form)
                    .then(response => {

                        //create event
                        let $event = response.data;

                        //creates participants
                        axios.post('/api/participant/massStore', {
                            participants: this.participantsForm,
                            event_id: $event.id
                        }).then(response => {
                            console.log($event);
                            //pairs participants
                            axios.post('/api/event/'+$event.id+'/drawNames')
                                .then(response => {
                                    this.loading = false;
                                    this.$store.commit('page/SET_PAGE', 'SubmitPage');
                                })

                        })
                    });
            }
        },
        computed: {
            ...mapGetters('event', ['form']),
            ...mapGetters('participant', ['participantsForm']),

        }
    }
</script>

<style scoped>

</style>
