<template>
  <section id="pricing" class="section pricing">
    <h2 class="pricing__title section__title">{{ $t("pricing.title") }}</h2>
    <ul class="section__content pricing__content">
      <li class="pricing__content-item">
        <h3 class="pricing__month">{{ $t("pricing.monthly.title") }}</h3>
        <h4 class="pricing__price">{{ $t("pricing.monthly.price") }}</h4>
      </li>
      <li class="pricing__content-item">
        <h3 class="pricing__month">{{ $t("pricing.3months.title") }}</h3>
        <h4 class="pricing__price">{{ $t("pricing.3months.price") }}</h4>
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

  &__content.section__content {
    padding-top: 5rem;
    @include respond-to("tablet-large") {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10rem;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }

  &__content-item {
    padding: 10rem;
    text-align: center;
    background-color: #fff;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    @include respond-to("tablet-large") {
      outline: 2px solid #fff;
      outline-offset: 2rem;
      margin-bottom: 0;
    }
  }

  &__month {
    margin-bottom: 2rem;
  }
}
</style>
