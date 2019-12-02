<template>
    <div class="p-20">
        <div class="w-full text-center">
            <MediumLogo></MediumLogo>
        </div>
        <div class="w-full text-center pt-5 text-xl">
            <p class="block">Congratulations! Your <span class="font-bold">{{form.name}}</span> has been made!</p>
            <p class="block pt-3">Everyone should get their emails real soon.</p>
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
            ...mapGetters('event', ['form']),

        }
    }
</script>

<style scoped>

</style>
