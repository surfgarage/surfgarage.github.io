<script setup>
import whatsapp from '@/assets/icons/whatsapp.svg'
import insta from '@/assets/icons/insta.svg'
import maps from '@/assets/icons/map.svg'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <section id="contact" class="section contact">
    <h2 class="contact__title section__title">
      <span>{{  $t('contact.title') }}</span>
    </h2>
    <div class="section__content contact__content full-width">
      <div class="contact__grid-item contact__links">
        <a class="contact__link contact__link--maps" href="https://goo.gl/maps/8qRXWmk34xwfq5Hz7" target="_blank">
          <maps class="contact__maps-icon"/>
          <span>Calle Castillejos 54 Bajo, LPA</span>
        </a>
        <a class="contact__link contact__link--whatsapp" href="https://wa.link/9ihwiv" target="_blank">
          <whatsapp class="contact__whatsapp-icon"/>
          <span>+34631356939</span>
        </a>
        <a class="contact__link contact__link--insta" href="https://www.instagram.com/surfgaragelpa/" target="_blank">
          <insta class="contact__insta-icon"/>
          <span>@surfgaragelpa</span>
        </a>
      </div>
      <div class="contact__grid-item contact__form">
        <ContactForm/>
      </div>
      <div class="contact__grid-item contact__insta-widget">
        <!-- SnapWidget -->
        <iframe class="contact__insta-iframe snapwidget-widget"
                src="https://snapwidget.com/embed/1014556"
                allowtransparency="true"
                frameborder="0"
                scrolling="no">
        </iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact {
  background-color: var(--c-black);
  max-width: 100%;
  @include bg-repeat('@/assets/images/surf-bg.jpg');

  &__title {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;

    span {
      background: var(--c-lighter-yellow);
      color: var(--c-black);
      padding: 0.5rem 1rem;
    }
  }

  &__content {
    @include respond-to('tablet-large') {
      display: grid;
    }
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5rem;
    justify-items: center;
    font-family: var(--font-metalsmith);
    text-transform: lowercase;
  }

  &__grid-item {
    margin-bottom: 4rem;

    @include respond-to('tablet-large') {
      margin-bottom: 0;
    }
  }

  &__form {
    width: 100%;
  }

  &__address {
    color: var(--c-lighter-yellow);;
  }

  &__link {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
      background: var(--c-lighter-yellow);
      padding: 0 1rem;
      margin-left: 1rem;
    }

    span {
      color: var(--c-black);
    }
  }

  &__insta {
    &-widget {
      background: var(--c-black);
      width: 100%;
      margin: 0 auto;
      padding-bottom: 66.667%; // For now only show two lines
      position: relative;

      @include respond-to('tablet-large') {
        order: -1;
      }
    }

    &-iframe {
      border: none;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

}
</style>