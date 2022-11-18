<script setup>
    import DesktopMenu from '../menu/DesktopMenu.vue'
    import bg from '@/assets/images/lpa1.jpg'
    import arrowDown from '@/assets/icons/chevron-down.svg'
    import ScrollTo from '@/components/ScrollTo.vue'
    import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<template>
    <section id="hero" class="section hero">
        <DesktopMenu/>
        <LanguageSwitcher class="hero__language-switcher"/>
        <div class="hero__foreground">
            <h1 class="hero__title">{{ $t('hero.title') }}</h1>
            <ScrollTo additionalClass="btn__join" to="contact">{{ $t('hero.join-now') }}</ScrollTo>
        </div>
      <a href="#tiles" class="hero__arrow">
        <arrowDown class="hero__arrow-icon"/>
      </a>
        <!--        <div class="hero__video-bg">-->
        <!--        <iframe src="https://www.youtube.com/embed/Vqq3NEuJGps?modestbranding=1&controls=0&autoplay=1&mute=1&loop=1"-->
        <!--                title="YouTube video player"-->
        <!--                frameborder="0"-->
        <!--                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">-->
        <!--        </iframe>-->
        <!--            <img :src="bg" alt="Surf Garage"/>-->
        <!--        </div>-->
    </section>
</template>

<style scoped lang="scss">
.hero {
    width: calc(100vw - 2 * var(--section-margin-mobile));
    height: calc(100vh - 2 * var(--section-margin-mobile));
    overflow: hidden;
    @include bg-fixed('@/assets/images/lpa1.jpg');

    @include respond-to("tablet-large") {
        height: calc(70vh - var(--section-margin));
        width: calc(100vw - 2 * var(--section-margin));
        position: relative;
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

            @media (min-aspect-ratio: 16/9) {
                /* height = 100 * (9 / 16) = 56.25 */
                height: 56.25vw;
            }

            @media (max-aspect-ratio: 16/9) {
                /* width = 100 / (9 / 16) = 177.777777 */
                width: 177.78vh;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

        //@include respond-to("tablet-large") {
        //    top: 60%;
        //}
    }

    &__title {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-family: var(--font-metalsmith);
      text-transform: lowercase;
    }

    &__subtitle {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        font-family: var(--font-myriad-condensed);
        text-transform: uppercase;
    }

  &__language-switcher {
    position: absolute;
    right: 0;
    top: 0;
  }

  &__arrow {
    width: 6rem;
    padding: 1rem;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);

    @include respond-to(tablet-large) {
      display: none;
    }
  }

  &__arrow-icon {
    width: 100%;
    fill: var(--c-white);
  }
}
</style>
