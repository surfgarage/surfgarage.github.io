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
        border: 2px solid white;
        padding: 12px 50px;
        color: white;
        display: block;
        font-family: var(--font-myriad-semibold);
        text-transform: uppercase;
        max-width: 250px;
        font-size: 1.8rem;

        &__join {
            margin: 30px auto 0;
        }
    }
</style>
