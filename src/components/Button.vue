<template>
    <button @submit.prevent="handleClick">{{ title }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String, 
        handleClick: Function 
    },
    methods: {}
}
</script>

<style lang="scss">
    button {
        box-sizing: border-box;
        border-radius: 2px;
        padding: 5px 15px;
        border: 1px solid #111;
        display: block;
        text-decoration:none;
        cursor: pointer;
        white-space: nowrap;
        &:focus {
            outline: none;
        } 
    }
</style>