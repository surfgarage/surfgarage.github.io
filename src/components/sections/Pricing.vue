<template>
<section id="pricing" class="section pricing">
    <h2 class="pricing__title">Pricing</h2>
    <ul class="section__container pricing__content">
        <li class="pricing__content-item">
            <h3 class="pricing__month">1 month</h3>
            <h4 class="pricing__price">€ 35/month</h4>
        </li>
        <li class="pricing__content-item">
            <h3 class="pricing__month">3 months</h3>
            <h4 class="pricing__price">€ 30/month</h4>
        </li>
    </ul>
</section>
</template>

<style lang="scss">
    .pricing {
        background-color: var(--c-wave-blue);
        text-align: center;

        &__title {
            padding-top: 5rem;
            color: #fff;
        }

        &__content.section__container {
            padding-top: 10rem;
            padding-bottom: 10rem;
            @include respond-to("tablet-large") {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 100px;
            }
        }

        &__content-item {
            padding: 100px;
            text-align: center;
            background-color: #fff;
            outline: 2px solid #fff;
            outline-offset: 20px;
        }
        &__month {
            margin-bottom: 20px;
        }

    }
</style>