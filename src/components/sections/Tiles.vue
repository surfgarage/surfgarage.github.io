<script setup>
import ScrollTo from "../ScrollTo.vue";

const tiles = [
  {
    name: "storage",
    link: "storage",
    bg: new URL(`../../assets/tiles/storage.jpg`, import.meta.url),
    type: "ScrollTo",
  },
  {
    name: "lockers",
    link: "storage",
    bg: new URL(`../../assets/tiles/lockers.jpg`, import.meta.url),
    type: "ScrollTo",
  },
  {
    name: "second-hand",
    link: "https://es.wallapop.com/app/user/samg-150019658-p8j31neyqy69/published",
    bg: new URL(`../../assets/tiles/second-hand.jpg`, import.meta.url),
    type: "Link",
  },
  {
    name: "board-repair",
    link: "storage",
    bg: new URL(`../../assets/tiles/board-repair.jpg`, import.meta.url),
    type: "ScrollTo",
  },
  {
    name: "surf-art",
    link: "storage",
    bg: new URL(`../../assets/tiles/surf-art.jpg`, import.meta.url),
    type: "ScrollTo",
  },
];
const oddTiles = Math.abs(tiles.length % 2) === 1;
</script>

<template>
  <section id="tiles" class="section tiles" :class="oddTiles && 'tiles--odd'">
    <div class="tiles__content">
      <template v-for="(tile, index) in tiles" :key="index">
        <ScrollTo
          v-if="tile.type === 'ScrollTo'"
            class="tile"
            :to="tile.link"
            :style="{'--bg': `url(${tile.bg})`}"
        >
          <h2 class="tile__title">
            {{ $t(`tiles.${tile.name}`) }}
          </h2>
        </ScrollTo>
        <a v-else
           class="tile"
           :style="{'--bg': `url(${tile.bg})`}"
           :href="tile.link"
           target="_blank">
          <h2 class="tile__title">
            {{ $t(`tiles.${tile.name}`) }}
          </h2>
        </a>
      </template>
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

  // If there are 5 tiles, make last one full width on mobile
  &--odd {
    @include respond-to("not-desktop") {
      .tile:last-child {
        grid-column: 1/3;
      }
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
