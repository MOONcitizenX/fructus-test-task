<script setup>
const icons = ref([
  { slug: "fb", link: "#" },
  { slug: "vk", link: "#" },
  { slug: "ig", link: "#" },
  { slug: "tg", link: "#" },
]);
</script>

<template lang="pug">
footer.wrapper.footer-wrapper
  .container.footer-container
    section.footer-top
      .footer-description
        nuxt-link(to="/")
          img(src="/icons/logo.svg" alt="logo")
        p.footer-description-text.
          Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      .footer-contacts
        .footer-contacts__email
          p.footer-contacts__email-text email
          p.footer-contacts__email-address testblogsupport@gmail.com
        .footer-contacts__socials
          a.footer-contacts__socials-link(v-for="icon in icons" :href="icon.link" target="_blank")
            img(:src="`/icons/${icon.slug}.svg`" :alt="icon.slug")
    section.footer-form
      the-subscribe-form

</template>

<style lang="scss">
.footer-wrapper {
  border-top: 1px solid $main-gray;
}

.footer-top {
  padding: 50px 80px 70px 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @include md {
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 30px 0 50px;
  }
}

.footer-description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  & a {
    font-size: 0;
  }
  &-text {
    max-width: 426px;

    font-size: 14px;
    font-weight: 400;

    color: $main-gray;

    @include md {
      font-size: 12px;
      line-height: 16px;
    }
  }
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include md {
    width: 100%;
  }
  &__email {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2px;

    &-text {
      font-size: 14px;
      font-weight: 400;

      color: $main-gray;
    }

    &-address {
      font-size: 18px;
      font-weight: 400;

      color: $main-black;

      @include md {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  &__socials {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    &-link {
      font-size: 0;
    }
  }
}
</style>
