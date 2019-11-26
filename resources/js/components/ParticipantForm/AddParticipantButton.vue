<template>
    <button class="fa-1x text-green-400 hover:text-green-500 cursor-pointer active:bounce-sm bg-transparent focus:outline-none transition-fast" @click="addPerson()">
        <i class="fas fa-plus-circle"></i>
        <span class="text-white font-baloo">Add Person</span>
    </button>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            addPerson() {
                this.$store.commit('participant/ADD_PARTICIPANT_TO_FORM');
                this.$store.commit('participant/ADD_ERROR')
            }
        }
    }
</script>

<style scoped>

</style>
