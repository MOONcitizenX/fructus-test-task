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
  .footer-container.container
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
  }
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
