<template>
  <div class="w-full mt-16 flex flex-col items-center">
    <div class="max-w-screen-sm w-full">
      <form class="w-full flex flex-col p-6 bg-dark-200 rounded-lg">
        <h2 class="text-2xl font-bold">Search</h2>

        <div class="flex flex-col mt-4">
          <label for="url_app_store">Apps Store URL</label>
          <input type="url" name="url_app_store" id="url_app_store" v-model="url.app_store" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="url_play_store">Play Store URL</label>
          <input type="url" name="url_play_store" id="url_play_store" v-model="url.play_store" />
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
          Search
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const url = ref({
  app_store: "https://apps.apple.com/us/app/spot-videos/id1564675926?utm_source=github&utm_campaign=static",
  play_store: "https://play.google.com/store/apps/details?id=app.spotvideo",
})

const submit = async () => {
  // https://apps.apple.com/us/app/spot-videos/id1564675926?
  // https://play.google.com/store/apps/details?id=app.spotvideo
  const parse_playstore = () => {
    let url_string = new URL(url.value.play_store)
    let id = url_string.searchParams.get("id")
    if (id) {
      return id
    } else {
      return ""
    }
  }
  const params = {
    appstore_id: url.value.app_store ? url.value.app_store.split("/id")[1].split("?")[0] : "",
    playstore_id: url.value.play_store ? parse_playstore() : "",
  }
  router.push({ name: "demo", query: params })
}
</script>
