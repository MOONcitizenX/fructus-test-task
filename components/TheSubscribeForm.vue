<script setup>
const inputValue = ref("");

const handleInput = (e) => (inputValue.value = e.target.value);

const handleSubmit = () => {
  // TODO submit action
  console.log(inputValue.value);
};
</script>

<template lang="pug">
form.section.subscribe-form(@submit.prevent)
  h3.subscribe-form__title Подпишись на рассылку
  .subscribe-form__input-block
    common-input(type="email" placeholder="Email" :inputValue="inputValue" @input="handleInput" :required="true")
    common-button(text="Подписаться" type="submit" :onClick="handleSubmit")

</template>

<style lang="scss">
.subscribe-form {
  padding: 35px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: $main-black;

  &__title {
    font-size: 22px;
    font-weight: 800;
    line-height: 30px;
    color: $main-white;
  }

  &__input-block {
    display: flex;
    gap: 37px;
  }
}
</style>
