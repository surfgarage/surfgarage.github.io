<script setup>
import {toRefs} from "vue";

const props = defineProps({
  additionalClass: {
    type: String,
    required: false
  },
  to: {
    type: String,
    required: true
  },
})
const {to} = toRefs(props);

const scrollIntoView = (e) => {
  document.getElementById(to.value).scrollIntoView({behavior: "smooth"})
  e.preventDefault()
}
</script>
<template>
  <a :class="['btn', additionalClass]" :href="`#${to}`" @click="scrollIntoView">
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
  min-width: 20rem;
  max-width: 25rem;
  font-size: 1.8rem;

  &__join {
    margin: 30px auto 0;
  }
}
</style>
