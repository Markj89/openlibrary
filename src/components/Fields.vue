<template>
    <input :type="type" class="rounded focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" name="q" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur" @input="handleInput" :value="value" v-model="field" autocomplete="off" aria-label="Search phrases" />
</template>

<script>
export default {
    name: 'Fields',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        label: String,
        value: [Number, String],
    },
    computed: {
        field: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                this.$emit('update', newValue);
            }
        }
    },
    methods: {
        handleFocus() {
            this.$el.setAttribute('focus', true);
            this.$emit('focus', this);
        },
        handleBlur(event) {
            event.preventDefault();
            this.$el.removeAttribute('focus');
            this.$emit('blur', this);
        },
        handleInput(event) {
            this.$emit('input', event.target.value.length == 0 ? null : event.target.value);
        }
    }
}
</script>
<style lang="scss">
    input {
        box-sizing: border-box;
        line-height: normal;
        font-style: normal;
        font-weight: normal;
        margin-bottom: 10px;
        padding-left: 10px;
        display: block;
        text-align: left;
        padding: 5px 15px;
        -webkit-appearance: none;
        -moz-appearance: none;
        box-shadow: none;
    }
    input, .prefix, .sufix {
        font-size: 1.2em;
        font-weight: bold;
    }
</style>