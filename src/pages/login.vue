<template>
  <div class="w-full mt-16 flex flex-col items-center">
    <form class="w-full max-w-350px flex flex-col p-6 bg-dark-200 rounded-lg">
      <h2 class="text-2xl font-bold">Login</h2>

      <div class="flex flex-col mt-4">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="form.email" />
      </div>
      <div class="flex flex-col mt-4">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password" />
      </div>

      <button class="w-max mt-8 px-4 py-2 bg-blue-50 text-dark-900 text-sm font-medium rounded-md">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const form = ref({
  email: "",
  password: "",
})
</script>

<style>
label {
  @apply text-sm font-medium py-2 w-max;
}
input {
  @apply bg-dark-50 rounded-md px-3 py-1.5 text-sm ring ring-transparent transition focus:outline-none focus:ring-blue-300;
}
</style>
