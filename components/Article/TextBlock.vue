<script setup>
defineProps(["data"]);
</script>

<template lang="pug">
section.section.text-section(v-html="data")
</template>

<style lang="scss">
.text-section {
  width: 66%;
  margin: 0 auto;
  @include md {
    width: 100%;
  }

  h2 {
    margin-bottom: 50px;
    @include md {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
  }

  p {
    &:not(:last-of-type) {
      margin: 0 0 15px;
    }

    &:last-of-type {
      margin: 20px 0 0;
    }
    @include md {
      font-size: 14px;
      line-height: 18px;
    }
  }

  ul {
    padding-left: 115px;

    @include lg {
      padding-left: 30px;
    }
    @include md {
      padding-left: 10px;
    }
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
      content: url("/icons/quotes.svg");
      position: absolute;
      top: 0;
      left: 0;
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
      @include md {
        font-size: 10px;
        line-height: 14px;
      }
    }
  }
}
</style>
