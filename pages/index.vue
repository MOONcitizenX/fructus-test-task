<script setup>
import { useFetch } from "nuxt/app";

const { data } = await useFetch(API_URL, {
  params: {
    path: "/",
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
.cards-container.container
  article-card(v-for="article in data.body[0].data.articles" :key="article.link" :image="article.image" :title="article.title" :link="article.link")
</template>

<style lang="scss">
.cards-container {
  width: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  margin-bottom: 200px;
}
</style>
