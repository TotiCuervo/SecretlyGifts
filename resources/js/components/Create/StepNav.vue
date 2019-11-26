<template>
    <div class="w-full md:w-3/4 mx-auto py-10">
        <div class="flex flex-row font-baloo">
            <p v-bind:class="{'text-gray-500': page !== 'AddParticipantIndex','font-black text-white': page === 'AddParticipantIndex' }" class="transition-fast mx-auto">Participants</p>
            <p v-bind:class="{'text-gray-500': page !== 'ExclusionsPage','font-black text-white': page === 'ExclusionsPage' }" class="transition-fast mx-auto">Exclusions</p>
            <p v-bind:class="{'text-gray-500': page !== 'EventDetailPage','font-black text-white': page === 'EventDetailPage' }" class="transition-fast mx-auto">Event Details</p>
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
        computed: {
            ...mapGetters('page', ['page']),

        }
    }
</script>

<style scoped>

</style>
