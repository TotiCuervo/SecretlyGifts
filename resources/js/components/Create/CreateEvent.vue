<template>
    <div class="w-screen h-screen p-5 text-white">
        <LogoNav></LogoNav>
        <StepNav></StepNav>

        <div class="container mx-auto">
            <div class="w-full md:w-4/6 mx-auto">
                <AddParticipantIndex v-if="page === 'AddParticipantIndex'"></AddParticipantIndex>
                <ExclusionsPage v-if="page === 'ExclusionsPage'"></ExclusionsPage>
                <GameDetailPage v-if="page === 'GameDetailPage'"></GameDetailPage>
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
            ...mapGetters('form', ['page']),
            currentPage: {
                get() {
                    return this.page;
                },
                set(value) {
                    return this.$store.commit('form/SET_PAGE', value)
                }
            }
        }
    }
</script>

<style scoped>

</style>
