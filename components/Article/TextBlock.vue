<script setup>
defineProps(["data"]);
</script>

<template lang="pug">
section.section.text-section(v-html="data")
</template>

<style lang="scss">
.text-section {
  width: 66%;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin: 0 0 50px;
  }

  p {
    &:not(:last-of-type) {
      margin: 0 0 15px;
    }

    &:last-of-type {
      margin: 20px 0 0;
    }
  }

  ul {
    padding: 0 0 0 115px;
    li {
      display: flex;
      position: relative;
      padding: 0 0 0 20px;

      &::before {
      }
    }
  }

  blockquote {
    margin: 40px 0 0;
    padding: 0 0 0 116px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 55px;
      background: url("/icons/quotes.svg") no-repeat;
    }

    p,
    p:last-of-type {
      margin: 0;
      font-weight: 300;
      font-style: italic;
    }

    footer {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: $main-gray;
      margin: 20px 0 0;
    }
  }
}
</style>
