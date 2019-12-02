<template>
    <div class="p-5 text-white">
        <LogoNav></LogoNav>
        <StepNav v-if="page !== 'SubmitPage'"></StepNav>

        <div class="container mx-auto">
            <div class="w-full md:w-4/6 mx-auto">
                <AddParticipantIndex v-if="page === 'AddParticipantIndex'"></AddParticipantIndex>
                <ExclusionsPage v-if="page === 'ExclusionsPage'"></ExclusionsPage>
                <EventDetailPage v-if="page === 'EventDetailPage'"></EventDetailPage>
                <SubmitPage v-if="page === 'SubmitPage'"></SubmitPage>
            </div>
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
        mounted() {
            this.currentPage = 'AddParticipantIndex';
        },
        computed: {
            ...mapGetters('page', ['page']),
            currentPage: {
                get() {
                    return this.page;
                },
                set(value) {
                    return this.$store.commit('page/SET_PAGE', value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
