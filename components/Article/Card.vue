<script setup>
defineProps(["image", "title", "link"]);
</script>

<template lang="pug">
.card-component
  img.card-component__image(:src="image" width="427" height="320")
  h3.card-component__title {{ title }}
  common-button(variant="black" text="Читать" :onClick="() => navigateTo({path: link})")
</template>

<style lang="scss">
.card-component {
  width: 100%;
  max-width: 427px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  &__image {
    width: 100%;
    object-fit: cover;
  }
  &__title {
    margin-bottom: 10px;

    font-size: 22px;
    font-weight: 800;
    line-height: 30px;
    color: $main-black;

    @include md {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
