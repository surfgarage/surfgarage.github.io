<script setup>
import { Push } from "vue3-burger-menu";
import ScrollTo from "@/components/ScrollTo.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>

<template>
  <div class="hamburger-menu">
    <Push :closeOnNavigation="true" left>
      <ul>
        <li>
          <ScrollTo to="about">{{ $t("nav.about") }}</ScrollTo>
        </li>
        <li>
          <ScrollTo to="tiles">{{ $t("nav.services") }}</ScrollTo>
        </li>
        <li>
          <ScrollTo to="storage">{{ $t("nav.storage") }}</ScrollTo>
        </li>
        <li>
          <ScrollTo to="security">{{ $t("nav.security") }}</ScrollTo>
        </li>
        <li>
          <ScrollTo to="pricing">{{ $t("nav.pricing") }}</ScrollTo>
        </li>
        <li>
          <ScrollTo to="contact">{{ $t("nav.contact") }}</ScrollTo>
        </li>
      </ul>
      <LanguageSwitcher class="hero__language-switcher" />
    </Push>
  </div>
</template>

<style lang="scss">
.hamburger-menu {
  .bm-burger-button {
    z-index: 999;
    position: fixed;
    background: url("@/assets/icons/hamburger.svg") no-repeat;

    @include respond-to(not-desktop) {
      width: 40px;
      height: 40px;
      left: 20px;
      top: 20px;
    }
  }

  .bm-burger-bars {
    display: none;
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
