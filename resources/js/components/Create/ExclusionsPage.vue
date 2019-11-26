<template>
    <div>
        <!--Header-->
        <h1 class="text-2xl font-bold font-baloo">Step 2: Set Exclusions</h1>
        <!--if a player has been selected as too many exclusions-->
        <p v-if="!everyoneCanBePicked" class="w-full text-2xl text-center text-red-500 font-baloo pt-5">You have someone in your group that can't be selected</p>
        <!--Can exclude-->
        <ParticipantExclusionForm v-if="canExcludePeople" v-for="(person, index) in this.participantsForm" :key="index" v-bind:index='index'></ParticipantExclusionForm>
        <!--Cannot exclude-->
        <p v-if="!canExcludePeople" class="w-full text-2xl text-center py-5 font-baloo text-red-500">Your group is too small to for exclusions</p>
        <!--Back and Next Button-->
        <div class="py-10">
            <!--back-->
            <button class="float-left bg-transparent hover:bg-green-500 border border-green-500 text-green-500 hover:text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm transition-fast" @click="backButton()">
                Back
            </button>
            <!--back-->
            <button :disabled="!everyoneCanBePicked" class="float-right bg-green-400 hover:bg-green-500 text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm disabled:opacity-50 transition-fast" @click="nextButton()">
                Next
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
                this.$store.commit('page/SET_PAGE', 'AddParticipantIndex')
            },
            nextButton() {
                if (this.everyoneCanBePicked) {
                    this.$store.commit('page/SET_PAGE', 'EventDetailPage')
                }
            }
        },
        computed: {
            ...mapGetters('participant', ['participantsForm']),
            canExcludePeople(){
                // return this.participantsForm.length !== 3;
                if (this.participantsForm.length === 3) {
                    this.$store.commit('participant/CLEAR_ALL_EXCLUSIONS_FROM_PARTICIPANT', 0);
                    this.$store.commit('participant/CLEAR_ALL_EXCLUSIONS_FROM_PARTICIPANT', 1);
                    this.$store.commit('participant/CLEAR_ALL_EXCLUSIONS_FROM_PARTICIPANT', 2);

                    return false
                } else {
                    return true
                }

            },
            everyoneCanBePicked() {

                for (let $i = 0; $i < this.participantsForm.length; $i++) {

                    //set up the counter
                    let $counter = 0;

                    //iterate through entire list
                    for (let $b = 0; $b < this.participantsForm.length; $b++) {

                        //if the participants exclusion contains the name, add to counter
                        if (this.participantsForm[$b].exclusions.find(x => x === this.participantsForm[$i].name)) {
                            $counter++;
                        }

                    }

                    if ($counter === this.participantsForm.length - 1) {
                        return false;
                    }

                }

                return true;
            },

        }
    }
</script>

<style scoped>

</style>
