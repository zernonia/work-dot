<template>
  <div class="w-auto mt-16 flex flex-col items-center">
    <div v-if="data.appStore" class="flex flex-col items-center">
      <img class="w-48 h-48 rounded-5xl shadow-xl" :src="data.appStore.icon" alt="" />
      <h1 class="text-6xl font-bold mt-16">{{ data.appStore.title }}</h1>
      <h3 class="mt-6 text-xl text-gray-500">by {{ data.appStore.developer }}</h3>

      <div class="mt-6 grid grid-cols-2 place-items-center">
        <a class="w-max" :href="data.appStore.url" target="_blank">
          <ElementAppleBlack class="w-auto h-14"> </ElementAppleBlack>
        </a>
        <a v-if="data.playStore.url" :href="data.playStore.url" target="_blank">
          <ElementPlayStore class="w-auto h-14"> </ElementPlayStore>
        </a>
      </div>

      <div class="my-24 flex items-center space-x-8">
        <div class="max-w-72" v-for="img in data.appStore.screenshots">
          <img class="max-w-full h-auto rounded-3xl border border-gray-300" :src="img" alt="" />
        </div>
      </div>

      <div class="my-24 max-w-screen-md">
        <p
          v-html="data.appStore.description"
          class="whitespace-pre-wrap text-xl text-gray-500 font-light leading-8"
        ></p>
      </div>

      <div class="my-24 w-full max-w-screen-lg grid grid-cols-2">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-bold">
            {{ data.playStore.scoreText }}
          </h1>
          <Stars :current="+data.playStore.scoreText"></Stars>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-bold">
            {{ data.playStore.ratings }}
          </h1>
          <p class="text-xl mt-2">Ratings</p>
        </div>
      </div>

      <div class="my-24 flex flex-col items-center">
        <h1 class="text-6xl font-bold mt-16">Get {{ data.appStore.title }}</h1>

        <div class="my-8 grid grid-cols-2 place-items-center">
          <a class="w-max" :href="data.appStore.url" target="_blank">
            <ElementAppleBlack class="w-auto h-14"> </ElementAppleBlack>
          </a>
          <a v-if="data.playStore.url" :href="data.playStore.url" target="_blank">
            <ElementPlayStore class="w-auto h-14"> </ElementPlayStore>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const data = ref<any>({})

const fetchParams = async () => {
  try {
    const response = await fetch("../api/scrap" + window.location.search).then((res) => res.json())
    if (response.data) data.value = response.data
    console.log(response.data)
  } catch (err) {
    console.log(err)
  }
}

fetchParams()
</script>
