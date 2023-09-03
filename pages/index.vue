<script setup>
const store = useHomePageStore();

onMounted(() => {
  store.fetchData();
});

useHead({
  title: store.meta.title,
  meta: [
    {
      name: "description",
      content: store.meta.description,
    },
  ],
});
</script>

<template lang="pug">
.cards-container.container
  article-card(v-for="article in store.articles" :key="article.link" :image="article.image" :title="article.title" :link="article.link")
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
