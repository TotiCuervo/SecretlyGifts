<template>
    <div class="relative">
        <select @click="addToExclusion()" :disabled="this.disabled" v-model="selected" @change="addToExclusion()" class="block appearance-none w-full bg-transparent border border-white text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none disabled:opacity-50 transition-fast" id="grid-state">
            <option value="31WordCharacterForCounterChecker">Choose Name</option>
            <option v-for="person in this.participantsForm.filter((x, valIndex) => valIndex!== this.index)" v-bind:value="person.name">{{person.name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white mb-1 disabled:opacity-50 transition-fast">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                selected: "31WordCharacterForCounterChecker",
            }
        },
        methods: {
            addToExclusion() {
                if (this.selected !=='31WordCharacterForCounterChecker' && !this.participantsForm[this.index].exclusions.find(x => x === this.selected)) {

                    this.$store.commit('participant/ADD_PARTICIPANT_FORM_EXCLUSION', {
                        index: this.index,
                        name: this.selected
                    });

                    this.selected = "31WordCharacterForCounterChecker";
                }
            }
        },
        props: {
            'index': {
                default: 0
            },
            'disabled': {
                default: false
            }
        },
        computed: {
            ...mapGetters('participant', ['participantsForm']),

        }
    }
</script>

<style scoped>

</style>
