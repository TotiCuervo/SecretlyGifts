<template>
    <div>
        <!--Header-->
        <h1 class="text-2xl font-bold font-baloo pb-12">Step 3: Event Details</h1>
        <!--Name of event-->
        <div class="w-3/6">
            <label class="block uppercase tracking-wide text-white text-xs font-bold">Name of Event <span class="font-normal lowercase"> - Optional</span></label>
            <div class="flex flex-wrap items-center py-2 w-full">
                <input class="text-2xl appearance-none bg-transparent border-b-1.5 focus:border-green-500 w-full text-white mr-3 py-2 px-2 leading-tight focus:outline-none transition-fast" type="text" placeholder="Secretly Gift Exchange" aria-label="Full name">
            </div>
        </div>
        <!--Date and Budget-->
        <div class="flex flex-wrap pt-10">
            <GiftLimit></GiftLimit>
            <DateInput></DateInput>
        </div>
        <div class="pt-10">
            <label class="block uppercase tracking-wide text-white text-xs font-bold">Notes <span class="font-normal lowercase"> - Optional</span></label>
            <textarea class="w-5/6 h-auto border-2 bg-transparent focus:border-green-500 rounded p-4 appearance-none focus:outline-none transition-fast"></textarea>
        </div>
        <div class="pt-10">
            <button class="float-left bg-transparent hover:bg-green-500 border border-green-500 text-green-500 hover:text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm transition-fast" >
                Back
            </button>
            <button class="float-right bg-green-400 hover:bg-green-500 text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none active:bounce-sm disabled:opacity-50 transition-fast">
                Submit
            </button>
        </div>
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
