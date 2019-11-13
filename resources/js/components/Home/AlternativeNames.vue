<template>
    <div class="w-full h-12 p-3 text-white">
        <div class="flex flex-row">
            <div>
                <p class="text-base font-semibold">Alternatives:</p>
            </div>
            <div class="pl-6 fa-1x">
                <span v-tooltip.auto="'Secret Santa'"><i class="fas fa-sleigh cursor-pointer"></i></span>
            </div>
            <div class="pl-8 fa-1x">
                <span v-tooltip.auto="'White Elephant'"><i class="fas fa-paw cursor-pointer"></i></span>
            </div>
            <div class="pl-8 fa-1x">
                <span v-tooltip.auto="'Secret Cupid'"><i class="fas fa-heart cursor-pointer"></i></span>
            </div>
            <div class="pl-8 fa-1x">
                <span v-tooltip.right="'Create Your Own'"><i class="fas fa-otter cursor-pointer"></i></span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AlternativeNames"
    }
</script>

<style scoped>

</style>
