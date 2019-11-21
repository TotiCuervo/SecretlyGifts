<template>
    <div v-bind:class="{'pt-10': index === 0, 'pt-20': index !== 0}">
        <!--Person header and dropdown-->
        <div class="w-full h-auto items-center flex flex-wrap">
            <!--Person name-->
            <span class="pr-4 text-3xl font-bold font-baloo">{{participant.name}} can't have:</span>
            <!--Exclusion dropdown-->
            <ExclusionDropdown :index="this.index" :disabled="hasReachedMax"></ExclusionDropdown>
            <span v-if="hasReachedMax" class="pl-2 text-lg text-red-500 font-baloo">Max</span>
        </div>
        <!--Exclusion List-->
        <div class="pt-3">
            <ExclusionNameIndex :index="this.index"></ExclusionNameIndex>
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
        methods: {},
        props: {
            'index': {
                default: 0
            }
        },
        computed: {
            ...mapGetters('form', ['participantsForm']),
            participant: {
                get() {
                    return this.participantsForm[this.index];
                }
            },
            hasReachedMax() {
                return this.participantsForm.filter((x, valIndex) => valIndex!== this.index).length - this.participantsForm[this.index].exclusions.length === 2;
            }

        }
    }
</script>

<style scoped>

</style>
