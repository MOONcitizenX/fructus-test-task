<script setup>
const nameInput = ref("");
const phoneInput = ref("");
const emailInput = ref("");

const handleNameInput = (e) => (nameInput.value = e.target.value);
const handlePhoneInput = (e) => (phoneInput.value = e.target.value);
const handleEmailInput = (e) => (emailInput.value = e.target.value);

const handleSubmit = () => {
  const formData = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };

  console.log(formData);
};
</script>

<template lang="pug">
section.section.form-section
  img.form-section__image(src="/form-image.png" width="595" height="326")
  form.form-block(@submit.prevent)
    h2.form-block__title Стань участником проекта
    common-input(type="text" placeholder="Имя" :input-value="nameInput" @input="handleNameInput" :required="true")
    common-input(type="tel" placeholder="Телефон" :input-value="phoneInput" @input="handlePhoneInput" :required="true")
    common-input(type="email" placeholder="Email" :input-value="emailInput" @input="handleEmailInput" :required="true")
    common-button(text="Присоединиться" type="submit" :onClick="handleSubmit")
</template>

<style lang="scss">
.form-section {
  padding: 60px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 30px;

  background-color: $main-black;

  @include responsive(960) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @include md {
    padding: 35px 30px;
  }

  &__image {
    width: 100%;
    max-width: 595px;
    height: 100%;
    max-height: 326px;

    object-fit: cover;
  }
}

.form-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &__title {
    margin-bottom: 40px;

    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: $main-white;
    @include md {
      font-size: 24px;
      line-height: 30px;
    }
  }

  & input:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
