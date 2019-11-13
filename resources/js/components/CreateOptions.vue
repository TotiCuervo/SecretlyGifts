<template>
    <div class="w-full h-auto flex">
        <router-link :to="{name: 'createEvent'}" tag="button" class="w-1/6 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Get Started
        </router-link>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
