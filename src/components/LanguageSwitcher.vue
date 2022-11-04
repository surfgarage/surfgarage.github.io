<script setup>
import i18n from '../../i18n.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const onChange = (e) => {
  const locale = e.target.value
  if (locale) {
    console.log('Selected language', locale)
    router.push({
      path: `/${locale}`
    })
  }
}
</script>
<template>
  <form>
    <select @change="onChange" v-model="i18n.global.locale.value">
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
  </form>
</template>