<script setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<template>
  <LanguageSwitcher/>
  <router-view></router-view>
</template>

<style lang="scss">
@import './styles/base.scss';
    #app {
        // Hack to show the margin below the last section
        overflow: auto;
    }
</style>
