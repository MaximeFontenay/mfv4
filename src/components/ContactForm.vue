<template>
  <form v-if="!submittedForm" @submit.prevent="submitForm"
    class="w-full max-w-[500px] mx-auto flex flex-col gap-8 text-2xs lg:text-base">
    <div class="flex gap-4">
      <input type="text" name="name" placeholder="Nom*" required v-model="name" />
      <input type="email" name="email" placeholder="E-mail*" required v-model="email" />
    </div>
    <textarea name="message" class="min-h-[70px] !border-2 !border-primary" placeholder="Votre message ...*" required
      v-model="message"></textarea>
    <button type="submit"
      class="focus group relative border-2 hover:font-medium rounded border-primary py-2 mt-4 text-dark font-semibold hover:text-primary hover:bg-transparent focus-visible:text-primary focus-visible:bg-transparent bg-primary duration-300">
      <p class="text-center px-2 text-xs lg:text-lg mx-auto">Envoyer</p>
    </button>
  </form>

  <div v-else class="w-full max-w-[500px] mx-auto rounded-lg text-center ">
    <p>Merci beaucoup pour votre message! Je vous répondrai dans les prochains jours. 🚀</p>
  </div>
</template>

<style lang="scss" scoped>
input,
textarea {
  width: 100%;
  padding: 4px 8px;
  outline: none !important;
  box-shadow: none !important;
  border-style: solid;
  border-width: 2px;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: #C6B5A0 !important;
  background-color: transparent;

  &:focus-visible {
    border-top-color: #C6B5A0 !important;
    border-left-color: #C6B5A0 !important;
    border-right-color: #C6B5A0 !important;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px #C6B5A0 inset !important;
  outline: none !important;
  border: 2px solid #C6B5A0 !important;
}
</style>

<script setup>
import { ref } from "vue";

const submittedForm = ref(false);

const WEB3FORMS_ACCESS_KEY = "a2aee534-584d-4faa-92d4-bbc115070869";
const name = ref("")
const email = ref("")
const message = ref("")
const result = ref("");
const status = ref("");


const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Maxime Fontenay - Nouveau message",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset 
    name.value = "";
    email.value = "";
    message.value = "";
    submittedForm.value = true;

    // Clear result and status after 3 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 3000);
  }
};
</script>