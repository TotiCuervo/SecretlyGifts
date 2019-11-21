<template>
    <div ref="border" class="border-b-2 focus:border-teal-500" @click="changeBorder()">
        <label class="block uppercase tracking-wide text-white text-xs font-bold">Gift limit<span class="font-normal lowercase"> - Optional</span></label>
        <div class="relative inline-block">
            <select class="appearance-none w-full bg-transparent border-none text-white py-2 px-4 pr-8 rounded-none leading-tight focus:outline-none disabled:opacity-50 transition-fast" id="grid-state">
                <option>$</option>
                <option>B</option>
                <option>C</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white disabled:opacity-50 transition-fast">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <input maxlength="4" ref="year" class="w-16 appearance-none bg-transparent border-none py-1 px-2 leading-tight focus:outline-none" type="numbers" placeholder="20" aria-label="Full name">
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
