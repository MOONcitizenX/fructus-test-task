<script setup>
defineProps(["data"]);
</script>

<template lang="pug">
section.section.list-section
  h3.list-section__title {{data.title}}
  .list-section__block
    article-card(v-for="article in data.articles" :key="article.link" :image="article.image" :title="article.title" :link="article.link")
</template>

<style lang="scss">
.list-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;

  &__title {
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: $main-black;

    @include md {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-items: center;
    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }
    @include responsive(960) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
