<template>
    <div class="pt-4 w-full">
        <!--Person header-->
        <span class="text-2xl font-bold font-baloo">
            Person {{index+1}}
            <button v-if="index > 2" @click="deleteParticipant" class="text-xl font-bold font-baloo text-red-600 hover:text-red-700 active:bounce-sm cursor-pointer focus:outline-none bg-transparent">&nbsp Delete</button>
        </span>
        <!--Form components-->
        <form class="flex flex-wrap w-full">
            <!--Name input-->
            <div class="w-full sm:w-2/4 p-2">
                <!--label-->
                <label class="block uppercase tracking-wide text-white text-xs font-bold">Name</label>
                <!--Name-->
                <ParticipantFormName :index="index"></ParticipantFormName>
            </div>
            <!--email input-->
            <div class="w-full sm:w-2/4 p-2">
                <!--label-->
                <label class="block uppercase tracking-wide text-white text-xs font-bold">email</label>
                <!--Email-->
                <ParticipantFormEmail :index="index"></ParticipantFormEmail>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            ...mapActions('form', ['deleteSpecificParticipantFromAllExclusions']),
            deleteParticipant() {
                this.deleteSpecificParticipantFromAllExclusions(this.name);
                this.$store.commit('form/DELETE_PARTICIPANT_FROM_FORM', this.index);
                this.$store.commit('form/DELETE_ERROR', this.index);
            }
        },
        props: ['index'],
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
                    return this.$store.commit('form/UPDATE_PARTICIPANT_FORM_NAME', payload);
                }
            },
            email: {
                get() {
                    return this.participantsForm[this.index].email;
                },
                set(value) {
                    let payload = {
                        index: this.index,
                        email: value,
                    };
                    return this.$store.commit('form/UPDATE_PARTICIPANT_FORM_EMAIL', payload);
                }
            }
        }
    }
</script>

<style scoped>

</style>
