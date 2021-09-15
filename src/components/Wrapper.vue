<template>
    <section class="wrapper min-h-screen">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'Wrapper'
}
</script>

<style lang="scss">
    .wrapper {
        padding-left: 15px;
        padding-right: 15px;
        margin: 0 auto;
        display: block;
        position: relative;
        @media screen and (max-width: 600px) {
            width: 100%;
            display: block;
        }
        @media screen and (min-width: 600px) {
            width: 400px;
        }
    }

</style>