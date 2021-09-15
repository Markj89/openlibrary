<template>
    <form :method="method" class="relative" autocomplete="off">
        <slot></slot>
    </form>    
</template>

<script>
export default {
    name: 'Form',
    props: {
        method: String,
    }
}
</script>
<style lang="scss">
    form {
        display: block;
        margin: 0 auto;
        align-content: space-between;
        align-items: self-start;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        @media screen and (min-width: 600px) {
            width: 400px;
        }
    }
</style>