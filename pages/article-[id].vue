<script setup>
import { useFetch } from "nuxt/app";
const { id } = useRoute().params;

const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;

const { data } = await useFetch(apiBaseUrl, {
  params: {
    path: "/article-" + id,
  },
});

if (!data.value) {
  createError({
    statusCode: 404,
    fatal: true,
  });
}

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
.container.article-container
  component(:is="getArticleBlock(block.type)" v-for="block in data.body" :key="block.id" :data="block.data")
</template>

<style lang="scss">
.article-container {
  margin-bottom: 200px;
  @include md {
    margin-bottom: 80px;
  }
}
</style>
