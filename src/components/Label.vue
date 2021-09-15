<template>
    <label :for="labelName">{{ label }}</label>
</template>

<script>
export default {
    name : 'Label',
    props: {
        label: String,
        labelName: String
    }
}
</script>

<style lang="scss" scoped>
    label {
        font-size: 14px;
        letter-spacing: 0.04px;
        display: block;
    }
</style>