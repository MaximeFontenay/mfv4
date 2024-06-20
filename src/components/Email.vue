<script setup>
import { ref } from 'vue'

const email = ref()
const tooltip = ref()

const copyEmail = () => {
  if (email.value) {
    navigator.clipboard.writeText(email.value.innerText)
    if (tooltip.value) {
      tooltip.value.style.opacity = '1';
      setTimeout(() => {
        tooltip.value.style.opacity = '0'
      }, 1500)
    }
  }
}

</script>

<template>
  <div class="relative cursor-pointer inline-flex items-center focus" @click="copyEmail" @keyup.space="copyEmail"
    @keyup.enter="copyEmail" tabindex="0" aria-label="Copy Maxime's email address">
    <span class="text-accent" ref="email">
      maximefontenay1@gmail.com</span>
    <svg class="text-accent inline ml-2" width="22" height="25" viewBox="0 0 22 25" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 11.459C5.5 8.5127 5.5 7.03957 6.30546 6.12428C7.11091 5.20898 8.40727 5.20898 11 5.20898H13.75C16.3427 5.20898 17.639 5.20898 18.4445 6.12428C19.25 7.03957 19.25 8.5127 19.25 11.459V16.6673C19.25 19.6136 19.25 21.0867 18.4445 22.002C17.639 22.9173 16.3427 22.9173 13.75 22.9173H11C8.40727 22.9173 7.11091 22.9173 6.30546 22.002C5.5 21.0867 5.5 19.6136 5.5 16.6673V11.459Z"
        stroke="currentColor" stroke-width="1.375" />
      <path
        d="M5.5 19.7923C3.98122 19.7923 2.75 18.3933 2.75 16.6673V10.4173C2.75 6.48894 2.75 4.52477 3.82394 3.30437C4.89789 2.08398 6.62636 2.08398 10.0833 2.08398H13.75C15.2688 2.08398 16.5 3.4831 16.5 5.20898"
        stroke="currentColor" stroke-width="1.375" />
    </svg>
    <p ref="tooltip"
      class="pointer-events-none top-0 absolute left-1/2 z-10 w-fit -translate-x-1/2 rounded-md bg-dark/80 px-2 py-2 text-center text-xs leading-none text-white opacity-0 backdrop-blur-md duration-200">
      copié !
    </p>

  </div>
</template>
