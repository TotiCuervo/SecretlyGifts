<template>
    <div>
        <div class="w-full text-center text-5xl text-indigo-700">
            <div class="font-baloo font-extrabold">
                Secretly
            </div>
        </div>
        <div class="w-full pt-5">
            <p class="font-bold text-xl">Hinata,</p>
        </div>
        <!--Message-->
        <div class="w-full pt-5">
            <p class="">{{this.form.message}}</p>
        </div>
        <!--Drawn Name-->
        <div class="w-full text-center pt-8">
            <div class="block text-black text-xl text-indigo-700 font-baloo">
                Your Drawn Name:
            </div>
            <div class="block font-baloo text-xl text-indigo-700">
                Naruto
            </div>
        </div>

        <div v-if="form.giftLimit || form.date" class="flex flex-wrap text-black pt-8 items-center">
            <div class="w-full font-bold text-center">
                A few details about your gift exchange:
            </div>
            <div v-if="form.giftLimit" class="w-1/2 flex-1 pt-5 text-center">
                <div class="block font-bold">
                    Gift Limit:
                </div>
                <div class="block">
                    {{form.currency}}{{form.giftLimit}}
                </div>
            </div>
            <div v-if="form.date" class="w-1/2 flex-1 pt-5 text-center">
                <div class="block font-bold">
                    Date of Event:
                </div>
                <div class="block">
                    {{ form.date | moment("dddd, MMMM Do, YYYY") }}
                </div>
            </div>
        </div>

        <div class="w-full text-center pt-10 text-sm">
            Want to start your own Secretly Gift Exchange? <a class="font-bold text-indigo-700 hover:text-indigo-800 text-decoration-none active:bounce-md trans-fast" href="http://secretly.test/#/">Let's get started!</a>
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

        },
        computed: {
            ...mapGetters('event', ['form']),
        }
    }
</script>

<style scoped>

</style>
