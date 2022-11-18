<script setup>
import Nav from "@/components/menu/Nav.vue";
</script>

<template>
  <nav class="navigation">
    <Nav :showLogo="true" />
  </nav>
</template>

<style lang="scss">
.navigation {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-family: var(--font-metalsmith);

  ul {
    list-style: none;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;

    @include respond-to("tablet-large") {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    li {
      padding: 1rem;
      display: none;
      text-align: center;

      &.site-logo {
        display: block;
      }

      @include respond-to("tablet-large") {
        display: block;
      }
    }

    a {
      color: #fff;
    }
  }
}

.site-logo {
  padding: 0 30px;

  &__svg {
    width: 220px;
    /*height: 220px;*/
  }
}
</style>
