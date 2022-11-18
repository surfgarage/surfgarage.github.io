<script setup>
import Hero from '../components/sections/Hero.vue'
import Contact from '../components/sections/Contact.vue'
import Services from '../components/sections/Services.vue'
import Pricing from '../components/sections/Pricing.vue'
import Tiles from '../components/sections/Tiles.vue'
import HamburgerMenu from '../components/menu/HamburgerMenu.vue';
</script>
<template>
  <HamburgerMenu/>
  <main id="page-wrap">
    <Hero/>
    <Tiles />
    <Services />
    <Pricing />
    <Contact />
  </main>
</template>
