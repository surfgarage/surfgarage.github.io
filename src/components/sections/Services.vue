<script setup>
import { defineAsyncComponent } from "vue";
const storageTiles = ["boards", "wetsuits", "shower", "lockers", "access"];
const securityTiles = ["camera", "smart-lock", "board-lock", "security-alarm"];
</script>

<template>
  <section id="storage" class="section about-storage">
    <div class="section__content">
      <div class="about-storage__info about-info">
        <h2 class="about-info__title">{{ $t("storage.title") }}</h2>
        <div class="about-info__subtitle">{{ $t("storage.subtitle") }}</div>
      </div>
      <div class="about-storage__tiles about-tiles">
        <article
          v-for="(tile, index) in storageTiles"
          :key="index"
          class="about-tile"
        >
          <div :class="['about-tile__icon', `about-tile__icon--${tile}`]">
            <component
              :is="
                defineAsyncComponent(() =>
                  import(`../../assets/icons/${tile}.svg`)
                )
              "
            />
          </div>
          <h3 class="about-tile__title">{{ $t(`storage.tiles.${tile}`) }}</h3>
        </article>
      </div>
    </div>
  </section>

  <section id="security" class="section about-security section--bg">
    <div class="section__content">
      <div class="about-security__info about-info">
        <h2 class="about-info__title">{{ $t("security.title") }}</h2>
        <div class="about-info__subtitle">{{ $t("security.subtitle") }}</div>
      </div>
      <div class="about-security__tiles about-tiles">
        <article
          v-for="(tile, index) in securityTiles"
          :key="index"
          class="about-tile"
        >
          <div :class="['about-tile__icon', `about-tile__icon--${tile}`]">
            <component
              :is="
                defineAsyncComponent(() =>
                  import(`../../assets/icons/${tile}.svg`)
                )
              "
            />
          </div>
          <h3 class="about-tile__title">{{ $t(`security.tiles.${tile}`) }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-info {
  grid-column-gap: 2rem;
  margin-bottom: 3rem;
  margin-top: 3rem;

  @include respond-to("tablet-large") {
    display: grid;
    margin-top: 0;
  }

  &__title {
    font-size: 4rem;
    font-weight: normal;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 2rem;

    @include respond-to("tablet-large") {
      font-size: 5rem;
      text-align: left;
    }
  }

  &__subtitle {
    font-size: 2rem;
    line-height: 1.4;
    padding-top: 1rem;
    text-align: justify;
  }
}

.about-tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
  justify-content: center;
  align-items: start;

  @include respond-to("tablet-large") {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-column-gap: 2rem;
  }
}

.about-tile {
  width: 16rem;

  &__title {
    text-transform: lowercase;
    text-align: center;
  }

  &__icon {
    margin: 0 auto;
    text-align: center;

    @include respond-to("tablet-large") {
      margon-bottom: 1rem;
    }

    svg {
      width: 12rem;
      height: 12rem;
      color: var(--c-white);
      fill: var(--c-white);
    }

    // default icon
    &--surfer {
      width: 9rem;
      height: 9rem;
      padding: 1.5rem;
      border: 3.5px solid var(--c-white);
      border-radius: 50%;
      margin: 1.2rem auto 3rem;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.about-storage {
  background: url("@/assets/images/surf-pattern.svg") repeat,
    var(--c-amber-yellow);
  background-size: 200px;
  background-attachment: fixed;
  color: var(--c-white);
  //margin-bottom: 10rem;

  &__info {
    grid-template-columns: 1fr 3fr;
  }
}

.about-security {
  @include bg-fixed("@/assets/images/board-lock.jpg");
  position: relative;
  color: var(--c-white);

  &__info {
    grid-template-columns: 4fr 1fr;
  }

  @include respond-to("tablet-large") {
    .about-info__title {
      order: 2;
      text-align: right;
    }
    .about-info__subtitle {
      order: 1;
    }
  }
}
</style>
