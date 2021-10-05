<template>
  <div>
    <nav
      class="
        sticky
        top-0
        py-4
        px-4
        flex
        space-x-4
        items-center
        justify-end
        bg-gray-100 bg-opacity-50
        backdrop-filter backdrop-blur-md
      "
    >
      <button
        class="
          px-4
          py-2
          bg-dark-900
          rounded-lg
          text-white
          min-w-26
          transition
          hover:shadow-lg
          focus:outline-none focus:ring-transparent
        "
      >
        Edit
      </button>
      <button
        class="
          px-4
          py-2
          bg-dark-900
          rounded-lg
          text-white
          min-w-26
          transition
          hover:shadow-lg
          focus:outline-none focus:ring-transparent
        "
      >
        Publish
      </button>
    </nav>
    <div class="w-auto mt-16 flex flex-col items-center">
      <div v-if="data.appStore" class="flex flex-col items-center">
        <app-header-style-3 :data="data"></app-header-style-3>

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

        <div class="my-24 w-full max-w-screen-lg grid grid-flow-col place-items-center" style="grid-auto-columns: 1fr">
          <div v-if="data.playStore.scoreText" class="flex flex-col items-center">
            <h1 class="text-6xl font-bold">
              {{ data.playStore.scoreText }}
            </h1>
            <Stars :current="+data.playStore.scoreText"></Stars>
          </div>
          <div v-if="data.playStore.ratings" class="flex flex-col items-center">
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

        <div class="my-8">
          <a v-if="data.playStore.privacyPolicy" :href="data.playStore.privacyPolicy" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import Style1 from "@/components/AppHeader/Style1.vue"

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

const isEditing = ref(false)
const computedComponent = (name: string, style: number) => {
  return name + style
}
const builderConfig = ref([
  {
    name: "app-header-style-",
    style: 1,
  },
])
</script>
