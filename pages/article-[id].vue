<script setup>
import { useFetch } from "nuxt/app";

const { id } = useRoute().params;

const { data } = await useFetch(API_URL, {
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
div {{ data.meta.title }}

</template>
