<script setup>
defineProps(["data"]);
</script>

<template lang="pug">
section.section.intro-section
  img.intro-section__image(:src="data.image", alt="data.title" width="541" height="580")
  .intro-section__text
    h1.intro-section__text-title {{ data.title}}
    .intro-section__text-info-block
      .text-block
        img(src='/icons/clock.svg')
        span.text-info {{ data.reading_time }} мин время чтения
      .text-block
        img(src='/icons/eye.svg')
        span.text-info {{ data.views_count }} прочитали статью
    p.intro-section__text-description {{ data.short_description }}
</template>

<style lang="scss">
.intro-section {
  display: flex;
  gap: 30px;
  align-items: center;

  @include responsive(1060) {
    flex-direction: column-reverse;
  }

  &__image {
    width: 100%;
    height: auto;
    border-top-right-radius: 20%;
    object-fit: cover;
    font-size: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &-title {
      font-size: 56px;
      font-weight: 800;
      line-height: 66px;
      color: $main-black;

      margin-bottom: 30px;
      @include md {
        font-size: 24px;
        line-height: 30px;
      }
    }

    &-info-block {
      display: flex;
      flex-direction: column;
      gap: 4px;

      margin-bottom: 50px;

      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: $main-gray;

      @include md {
        font-size: 12px;
        line-height: 16px;
      }

      & .text-block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
      }
    }

    &-description {
      font-size: 18px;
      font-weight: 400;
      line-height: 26px;
      color: $main-black;
      @include md {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>
