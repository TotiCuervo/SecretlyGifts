<template>
    <div v-bind:class="{'border-teal-500': focusLine}" class="border-b-2 transition-fast">
        <label class="block uppercase tracking-wide text-white text-xs font-bold">Gift limit<span class="font-normal lowercase"> - Optional</span></label>
        <div class="relative inline-block">
            <select v-model="currency" @focus="focusLine = true" @focusout="focusLine = false"  class="appearance-none w-full bg-transparent border-none text-white py-2 px-4 pr-8 rounded-none leading-tight focus:outline-none disabled:opacity-50 transition-fast" id="grid-state">
                <option value="dollar">$</option>
                <option value="euro">€</option>
                <option value="pound">£</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white disabled:opacity-50 transition-fast">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <input v-model="giftLimit" v-on:input="inputIfNumber()" @focus="focusLine = true" @focusout="focusLine = false" maxlength="4" class="w-16 appearance-none bg-transparent border-none py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="20" aria-label="Full name">
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                focusLine: false,
            }
        },
        methods: {
            inputIfNumber() {
                console.log('made it');
                if (this.giftLimit.length > 0) {

                    if (this.giftLimit.length === 1 && isNaN(parseFloat(this.giftLimit))) {
                        this.$store.commit('event/SET_FORM_GIFT_LIMIT', '');
                    } else {
                        this.$store.commit('event/SET_FORM_GIFT_LIMIT', this.giftLimit.match(/\d+/g)[0]);
                    }
                }
            }
        },
        computed: {
            ...mapGetters('event', ['form']),
            giftLimit: {
                get() {
                    return this.form.giftLimit;
                },
                set(value) {
                    return this.$store.commit('event/SET_FORM_GIFT_LIMIT', value);
                }
            },
            currency: {
                get() {
                    return this.form.currency;
                },
                set(value) {
                    return this.$store.commit('event/SET_FORM_CURRENCY', value);
                }
            },
        }
    }
</script>

<style scoped>

</style>
