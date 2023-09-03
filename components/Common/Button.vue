<script setup>
defineProps(["variant", "text", "onClick"]);
</script>

<template lang="pug">
button.button(@click="onClick" :class="{'button--black': variant === 'black', 'button--blue': variant === 'blue' | !variant}") {{ text }}
</template>

<style lang="scss">
.button {
  all: unset;

  padding: 10px 50px;

  cursor: pointer;

  font-size: 18px;
  font-weight: 400;
  color: $main-white;
  text-align: center;

  outline: 1px solid transparent;
  border-radius: 2px;

  transition: all $transition;
  &--blue {
    background-color: $main-blue;
    &:hover,
    :active {
      background-color: transparent;
      outline: 1px solid $main-blue;
    }
  }

  &--black {
    background-color: $main-black;
    &:hover,
    :active {
      background-color: $main-blue;
    }
  }
}
</style>
