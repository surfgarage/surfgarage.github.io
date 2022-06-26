<script setup>
    import Nav from './Nav.vue'
    import bg from '@/assets/images/lpa1.jpg'
    import Logo from '@/assets/images/logo.svg'
    import Button from '@/components/Button.vue'
    const comingSoon = new URL('../../assets/images/coming-soon.png', import.meta.url)
</script>

<template>
    <section id="hero" class="section hero">
        <Nav/>
        <img class="hero__coming-soon" :src="comingSoon" alt="Coming Soon!">
        <div class="hero__foreground">
            <h1 class="hero__title">a premium social club for surfers</h1>
            <Button additionalClass="btn__join" href="#contact">Join Now</Button>
        </div>
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
    @include bg('@/assets/images/lpa1.jpg');

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
        top: 60%;
        left: 50%;
        color: #fff;
        transform: translate(-50%, -60%);
        text-align: center;
    }

    &__title {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-family: var(--font-metalsmith);
    }

    &__subtitle {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        font-family: var(--font-myriad-condensed);
        text-transform: uppercase;
    }

    &__coming-soon {
        position: absolute;
        bottom: 10px;
        right: 10px;
        height: 150px;
    }
}
</style>