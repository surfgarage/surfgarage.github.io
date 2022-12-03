<template>
  <section id="pricing" class="section pricing bg-blue text-center">
    <h2 class="section__title pt-5 text-white pt-5">{{ $t("pricing.title") }}</h2>
    <ul class="section__content pt-5 lg:(grid grid-cols-2 gap-10 pt-10 pb-10)">
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
  &__content-item {
    @apply p-5 text-center bg-white mb-2 lg:(mb-0 p-8);

    &:last-child {
      margin-bottom: 0;
    }

    @include respond-to("tablet-large") {
      outline: 2px solid #fff;
      outline-offset: 2rem;
    }
  }

  &__month {
    margin-bottom: 2rem;
  }
}
</style>
