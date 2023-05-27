<template>
  <section id="pricing" class="section pricing">
    <h2 class="pricing__section-title section__title">
      {{ $t("pricing.title") }}
    </h2>
    <ul class="section__content pricing__content">
      <li class="pricing__content-item">
        <h3 class="pricing__title">{{ $t("pricing.monthly.title") }}</h3>
        <h4 class="pricing__perMonth">{{ $t("pricing.monthly.price") }}</h4>
      </li>
      <li class="pricing__content-item">
        <h3 class="pricing__title">{{ $t("pricing.3months.title") }}</h3>
        <h4 class="pricing__perMonth">
          {{ $t("pricing.3months.perMonth") }}
        </h4>
        <div class="pricing__price">({{ $t("pricing.3months.price") }})</div>
      </li>
      <li class="pricing__content-item">
        <h3 class="pricing__title">{{ $t("pricing.6months.title") }}</h3>
        <h4 class="pricing__perMonth">
          {{ $t("pricing.6months.perMonth") }}
        </h4>
        <div class="pricing__price">({{ $t("pricing.6months.price") }})</div>
      </li>
      <li class="pricing__content-item">
        <h3 class="pricing__title">{{ $t("pricing.1year.title") }}</h3>
        <h4 class="pricing__perMonth">
          {{ $t("pricing.1year.perMonth") }}
        </h4>
        <div class="pricing__price">({{ $t("pricing.1year.price") }})</div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.pricing {
  background-color: var(--c-wave-blue);
  text-align: center;

  &__section-title {
    padding-top: 5rem;
    color: #fff;
  }

  &__content.section__content {
    padding-top: 5rem;
    @include respond-to("tablet-large") {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 4rem;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }

  &__content-item {
    padding: 2rem;
    text-align: center;
    background-color: #fff;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    @include respond-to("tablet-large") {
      outline: 2px solid #fff;
      outline-offset: 1rem;
      margin-bottom: 0;
      padding: 5rem;
    }
  }

  &__title {
    margin-bottom: 1rem;
  }
  &__perMonth {
    font-size: 1.8rem;
  }
  &__price {
    margin-top: 0.6rem;
    font-size: 1.8rem;
  }
}
</style>
