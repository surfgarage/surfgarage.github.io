<script setup>
import DesktopMenu from "../menu/DesktopMenu.vue";
import arrowDown from "@/assets/icons/chevron-down.svg";
import ScrollTo from "@/components/ScrollTo.vue";
import ContactLinks from "@/components/ContactLinks.vue";
</script>

<template>
  <section id="about" class="section hero">
    <DesktopMenu />
    <ContactLinks class="hero__contact-links" :onlyIcons="true" />
    <div class="hero__foreground">
      <h1 class="hero__title">{{ $t("hero.title") }}</h1>
      <h2 class="hero__subtitle">{{ $t("hero.subtitle") }}</h2>
      <ScrollTo class="button__join" linkType="button" to="contact">{{
        $t("hero.join-now")
      }}</ScrollTo>
    </div>
    <ScrollTo to="tiles" class="hero__arrow">
      <arrowDown class="hero__arrow-icon" />
    </ScrollTo>
    <div class="hero__video-bg">
      <div class="hero__dark-bg"></div>
      <iframe
        src="https://www.youtube.com/embed/9uWhmMznrDw?autoplay=1&loop=1&&playlist=9uWhmMznrDw&mute=1&controls=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fsurfgarage.es"
        title="Surf Garage Video PLayer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  width: calc(100vw - 2 * var(--section-margin-mobile));
  height: calc(100vh - 2 * var(--section-margin-mobile));
  overflow: hidden;
  position: relative;
  @include bg-fixed("@/assets/images/lpa1.jpg");

  @include respond-to("tablet-large") {
    height: calc(70vh - var(--section-margin));
    width: calc(100vw - 2 * var(--section-margin));
    position: relative;
  }

  &__dark-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &__video-bg {
    width: 100vw;
    height: 100vh;
    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vh;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 1;

      @media (min-aspect-ratio: 16/9) {
        /* height = 100 * (9 / 16) = 56.25 */
        height: 56.25vw;
      }

      @media (max-aspect-ratio: 16/9) {
        /* width = 100 / (9 / 16) = 177.777777 */
        width: 177.78vh;
      }
    }

    @include respond-to(not-desktop) {
      display: none;
    }
  }

  &__foreground {
    position: absolute;
    top: 400px;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -60%);
    text-align: center;
    width: 80%;
    z-index: 3;

    @include respond-to(not-desktop) {
      top: 68%;
    }
  }

  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--font-metalsmith);
    text-transform: lowercase;
  }

  &__subtitle {
    font-size: 2.28rem;
    margin-bottom: 1rem;
    font-family: var(--font-avenir);
    text-transform: uppercase;
  }

  &__contact-links {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
  }

  &__arrow {
    width: 6rem;
    padding: 1rem;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;

    @include respond-to(tablet-large) {
      display: none;
    }
  }

  &__arrow-icon {
    width: 100%;
    fill: var(--c-white);
  }
}

.button__join {
  margin: 2rem auto 0;
}
</style>
