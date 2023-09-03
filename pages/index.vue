<script setup>
const baseUrl = "http://devtwit8.ru/api/v1/page";
const { data } = await useFetch(baseUrl, {
  query: {
    path: `/`,
  },
});

useHead({
  title: data.value.meta.title,
  meta: [
    {
      name: "description",
      content: data.value.meta.description,
    },
  ],
});
</script>

<template lang="pug">
div
  h1 {{ data.meta.title }}
</template>

<style lang="scss">
h1 {
  color: $main-black;
}
</style>
~/utils/getHomePage
