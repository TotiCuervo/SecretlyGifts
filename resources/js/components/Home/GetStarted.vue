<template>
    <div class="w-full h-auto flex">
        <router-link :to="{name: 'createEvent'}" tag="button" class="w-1/6 mx-auto rounded-full font-semibold py-2 px-4 border border-white rounded text-indigo-700 bg-white hover:shadow-lg focus:bounce-sm hover:translate-t-2px transition-fast focus:outline-none">
            Get Started
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "GetStarted"
    }
</script>

<style scoped>

</style>
