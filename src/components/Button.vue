<script setup>
    defineProps({
        additionalClass: {
            type: String,
            required: false
        },
        href: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <a :class="['btn', additionalClass]" :href="href">
        <slot></slot>
    </a>
</template>

<style scoped lang="scss">
    .btn {
        border: 1px solid white;
        padding: 10px 50px;
        color: white;
        display: block;
        font-family: var(--font-myriad-light);
        max-width: 250px;
        font-size: 1.8rem;

        &__join {
            margin: 0 auto;
        }
    }
</style>
