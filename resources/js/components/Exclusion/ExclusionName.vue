<template>
    <span class="pr-4 text-2xl w-full">
        {{name}}
        <span @click="deleteFromExclusionList()">
            <i class="fas fa-minus-circle hover:text-red-600 cursor-pointer active:bounce-md transition-fast text-xl"></i>
        </span>
    </span>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        methods: {
            deleteFromExclusionList() {
                this.$store.commit('participant/DELETE_PARTICIPANT_FROM_SPECIFIC_EXCLUSIONS_LIST', {
                    participantIndex: this.participantIndex,
                    nameIndex: this.nameIndex
                });
            }
        },
        props: {
            'nameIndex': {
                default: 0
            },
            'participantIndex': {
                default:0
            }
        },
        computed: {
            ...mapGetters('participant', ['participantsForm']),
            name: {
                get() {
                    return this.participantsForm[this.participantIndex].exclusions[this.nameIndex];
                }
            }

        }
    }
</script>

<style scoped>

</style>
