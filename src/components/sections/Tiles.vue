<script setup>
import content from '@/content/tiles.json'

const tiles = content.map(tile => ({
  title: tile.title,
  bg: new URL(`../../assets/tiles/${tile.bg}.jpg?url`, import.meta.url),
}))
</script>

<template>
  <section id="tiles" class="section tiles">
    <div class="tiles__content">
      <article
          class="tile"
          v-for="(tile, index) in tiles"
          :key="index"
          :style="{
               '--bg': `url(${tile.bg})`
           }"
      >
        <h2 class="tile__title">
          {{ tile.title }}
        </h2>
      </article>
    </div>
  </section>
</template>


<style lang="scss">
.tiles {
  @include respond-to("tablet-large") {
    height: calc(30vh - 2 * var(--section-margin));
  }

  &__content {
    padding: 0;
    z-index: 1;
    height: 100%;
    display: grid;
    grid-column-gap: var(--section-margin-mobile);
    grid-row-gap: var(--section-margin-mobile);
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);

    @include respond-to("tablet-large") {
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: var(--section-margin);
      grid-row-gap: var(--section-margin);
    }
  }
}

.tile {
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5rem 1rem;
  line-height: 1.5;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
  ),
  var(--bg);
  background-size: cover;

  &__title {
    color: #fff;
    text-align: center;
    z-index: 999;
    width: 100%;
    font-size: 2.5rem;
  }

  &__desc {
    height: 85px;
    padding: 20px 30px;
    text-align: center;
    background-color: #fff;
    color: var(--c-board-red);
    display: flex;
    justify-content: center;
  }
}
</style>