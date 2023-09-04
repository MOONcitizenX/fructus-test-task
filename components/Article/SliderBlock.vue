<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";

defineProps(["data"]);
const modules = [Navigation, Pagination, A11y, EffectFade];
</script>

<template lang="pug">
swiper.swiper(:modules="modules" :slides-per-view="1" :pagination="{type: 'fraction',}" navigation loop effect="fade")
  swiper-slide(v-for="(slide, idx) in data" :key="idx")
    img.swiper__image(:src="slide")
</template>

<style lang="scss">
.swiper {
  overflow: inherit;
  margin: 4rem 0;

  &__image {
    width: 100%;
    padding: 0 7rem;
  }
  &-button-next,
  &-button-prev {
    background-color: $main-black !important;
    width: 60px;
    height: 60px;
    &::after {
      color: $main-white;
      font-size: 16px !important;
    }
  }
}
</style>
