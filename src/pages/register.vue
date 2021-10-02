<template>
  <div class="w-full mt-16 flex flex-col items-center">
    <div class="max-w-350px w-full">
      <form class="w-full flex flex-col p-6 bg-dark-200 rounded-lg">
        <h2 class="text-2xl font-bold">Register</h2>

        <div class="flex flex-col mt-4">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="form.email" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="form.password" />
        </div>
        <button
          @click.prevent="submit"
          class="
            w-max
            mt-8
            px-4
            py-2
            bg-blue-50
            text-dark-900 text-sm
            font-medium
            rounded-md
            transition
            ring ring-transparent
            hover:ring-blue-400
            focus:outline-none focus:ring-blue-400
          "
        >
          Register
        </button>
      </form>
      <div class="ml-6 mt-4 text-sm">
        <router-link class="hover:underline" to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { userState } from "../store"
import { supabase } from "../supabase"

const router = useRouter()
const form = ref({
  email: "",
  password: "",
})

const submit = async () => {
  if (form.value.email && form.value.password) {
    const { user, error } = await supabase.auth.signUp({ ...form.value })
    userState.user = user
    if (user?.id) router.push("/dashboard")
  } else {
    return
  }
}
</script>

<style>
label {
  @apply text-sm font-medium py-2 w-max;
}
input {
  @apply bg-dark-50 rounded-md px-3 py-2 text-sm ring ring-transparent transition focus:outline-none focus:ring-blue-300;
}
</style>
