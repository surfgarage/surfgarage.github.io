<script setup>
import { useI18n } from 'vue-i18n'
import i18n from '../i18n.js'
const { locale, t } = useI18n({
  inheritLocale: true
})
</script>

<template>
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="i18n.global.locale.value">
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
  </form>
  <router-view></router-view>
</template>

<style lang="scss">
@import './styles/base.scss';
    #app {
        // Hack to show the margin below the last section
        overflow: auto;
    }
</style>
