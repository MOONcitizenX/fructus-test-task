<script setup>
defineProps(["data"]);
</script>

<template lang="pug">
section.section.image-section
  img.image-section__image(:src="data.src" :alt="data.caption")
  span.image-section__caption(v-if="data.caption") {{ data.caption }}
</template>

<style lang="scss">
.image-section {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &__caption {
    text-align: right;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    color: $main-gray;
  }
}
</style>
