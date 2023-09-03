<script setup>
const baseUrl = "http://devtwit8.ru/api/v1/page";
const { article: slug } = useRoute().params;

const { data } = await useFetch(baseUrl, {
  query: {
    path: `/${slug}`,
  },
});

if (!data.value) {
  console.log("NO DATA");
  createError({
    statusCode: 404,
    statusMessage: "Упс, такой статьи не существует :(",
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

<template lang="pug"></template>
~/utils/getArticlePage
