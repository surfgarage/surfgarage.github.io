<script setup>
import Logo from '@/assets/images/logo.svg'
defineProps({
  showLogo: {
    type: Boolean,
    required: true
  },
})
</script>

<template>
  <ul>
    <li><a href="#about">{{ $t('nav.about') }}</a></li>
    <li><a href="#about">{{ $t('nav.services') }}</a></li>
    <li v-if="showLogo" class="site-logo">
      <Logo class="site-logo__svg"/>
    </li>
    <li><a href="#pricing">{{ $t('nav.pricing') }}</a></li>
    <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
  </ul>
</template>
