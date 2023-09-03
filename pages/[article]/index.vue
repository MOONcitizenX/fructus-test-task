<script setup>
const { article: slug } = useRoute().params;

if (!data.value) {
  console.log("NO DATA");
  console.log(slug);
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

<template lang="pug"></template>
~/utils/getArticlePage
