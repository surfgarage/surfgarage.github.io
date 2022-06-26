<script setup>
  import content from '@/content/services.json'
    const services = content.map(service => ({
        title: service.title,
        bg: new URL(`../../assets/images/${service.bg}.jpg?url`, import.meta.url),
    }))
</script>

<template>
<section id="services" class="section services">
    <div class="services__content">
        <article class="service"
                 v-for="service in services">
            <h2 class="service__title">
                {{service.title}}
            </h2>
            <div class="service__image">
                <img :src="service.bg">
            </div>
        </article>
    </div>
</section>
</template>


<style lang="scss">
    .services {
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
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: var(--section-margin);
                grid-row-gap: var(--section-margin);

            }
        }
    }

    .service {
        z-index: 1;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        padding: 5rem 0;

        &__image {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(var(--c-board-red),0.4);
            }
        }

        &__title {
            color: #fff;
            text-align: center;
            z-index: 999;
            width: 100%;
            font-size: 2rem;
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