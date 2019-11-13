<template>
    <div class="container mx-auto">
        <div class="w-full md:w-1/2 mx-auto">
            <!--Header-->
            <h1 class="text-2xl font-bold font-baloo">Step 1: Add People</h1>
            <!--Form-->
            <div class="pt-10">
                <!--Person header-->
                <h1 class="text-2xl font-bold font-baloo mb-4">Person 1</h1>
                <!--Form components-->
                <form class="flex flex-wrap">
                    <!--Name-->
                    <div class="w-full sm:w-2/4 p-2">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold">
                            Name
                        </label>
                        <div class="flex items-center border-b border-b-2 border-white py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Naruto Uzamaki" aria-label="Full name">
                        </div>
                    </div>
                    <!--email-->
                    <div class="w-full sm:w-2/4 p-2">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold">
                            email
                        </label>
                        <div class="flex items-center border-b border-b-2 border-white py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="RamenLover3000@hokage.com" aria-label="Full name">
                        </div>
                    </div>
                </form>
            </div>
            <!--Next Button-->
            <div class="pt-10">
                <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AddParticipantIndex"
    }
</script>

<style scoped>

</style>
