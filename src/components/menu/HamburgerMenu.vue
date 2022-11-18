<script setup>
import { Push } from "vue3-burger-menu";
import Nav from "@/components/menu/Nav.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>

<template>
  <div class="hamburger-menu">
    <Push :closeOnNavigation="true" left>
      <Nav :showLogo="false" />
      <LanguageSwitcher class="hero__language-switcher" />
    </Push>
  </div>
</template>

<style lang="scss">
.hamburger-menu {
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
    ul a {
      color: var(--c-white);
    }

    .bm-item-list > * {
      display: block;
    }

    .site-logo {
      display: none;
    }
  }
}
</style>
