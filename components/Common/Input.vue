<script setup>
defineProps(["inputValue", "handleInput", "placeholder"]);
</script>

<template lang="pug">
input.input(:value="inputValue" @input="handleInput" :placeholder="placeholder ?? ''")
</template>

<style lang="scss">
.input {
  all: unset;

  width: 100%;
  max-width: 353px;

  cursor: text;

  background: transparent;
  border-bottom: 1px solid $main-gray;

  font-size: 18px;
  font-weight: 400;
  color: $main-gray;
  text-indent: 6px;

  transition: border-bottom $transition;

  @include md {
    font-size: 14px;
    line-height: 20px;
  }

  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: $main-gray;

    @include md {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &:focus,
  :active {
    border-bottom: 1px solid $main-blue;
    color: $main-white;
  }
}
</style>
