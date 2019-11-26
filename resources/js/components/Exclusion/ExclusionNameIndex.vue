<template>
    <div class="w-full">
        <ExclusionName v-for="(name, nameIndex) in this.participant.exclusions" :key="nameIndex" :nameIndex="nameIndex" :participantIndex="index"></ExclusionName>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        methods: {},
        props: {
            'index': {
                default: 0
            }
        },
        computed: {
            ...mapGetters('participant', ['participantsForm']),
            participant: {
                get() {
                    return this.participantsForm[this.index];
                }
            }
        }
    }
</script>

<style scoped>

</style>
