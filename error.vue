<script setup>
const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<template lang="pug">
.error
  .error-block
    p
</template>

<style lang="scss">
.error {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    color: red;
  }
}
</style>
