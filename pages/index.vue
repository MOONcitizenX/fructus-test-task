<script setup>
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;

const { data } = await useFetch(apiBaseUrl, {
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
.container.cards-container
  article-card(v-for="article in data.body[0].data.articles" :key="article.link" :image="article.image" :title="article.title" :link="article.link")
</template>

<style lang="scss">
.cards-container {
  width: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;

  margin-bottom: 200px;

  @include lg {
    grid-template-columns: repeat(2, 1fr);
  }
  @include responsive(960) {
    grid-template-columns: 1fr;
  }
}
</style>
