<template lang="pug">
header(class="wrapper")
  .container.header-container
    nuxt-link(to="/")
      img(src="/icons/logo.svg" alt="logo")
</template>

<style lang="scss">
.header-container {
  padding: 28px 0 25px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    font-size: 0;
  }
}
</style>
