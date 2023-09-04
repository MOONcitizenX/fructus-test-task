<script setup>
const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<template lang="pug">
.error
  .error-block
    h2 Упс, кажется, такой страницы нет :(
    common-button( text="На главную" :onClick="() => navigateTo({path: '/'})")
</template>

<style lang="scss">
.error {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  &-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    & h2 {
      color: red;
    }
  }
}
</style>
