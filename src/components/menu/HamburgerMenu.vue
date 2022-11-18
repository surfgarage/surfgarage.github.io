<script setup>
import { Push } from 'vue3-burger-menu'
import Nav from '@/components/menu/Nav.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<template>
  <Push :closeOnNavigation="true" left>
    <Nav :showLogo="false"/>
    <LanguageSwitcher class="hero__language-switcher"/>
  </Push>
</template>

<style lang="scss">
.bm-burger-button {
  z-index: 999;
  position: fixed;
}
.bm-burger-bars {
  background-color: white;
}

.bm-menu {
  background-color: var(--c-black);
  line-height: 2;
  a {
    color: var(--c-white);
  }

  .bm-item-list>* {
    display: block;
  }

  .site-logo {
    display: none;
  }
}
</style>
