<script setup>
defineProps(["image", "title", "slug"]);
</script>

<template lang="pug">
.card-component
  nuxt-image.card-component__image(:src="image")
  h3.card-component__title {{ title }}
  common-button(text="Читать" :onClick="() => navigateTo({path: slug})")
</template>
