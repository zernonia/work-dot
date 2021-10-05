<template>
  <div class="w-screen-lg w-full flex flex-col items-center p-12 rounded-5xl shadow-lg shadow-gray-500 bg-white">
    <img class="w-48 h-48 rounded-5xl shadow-xl" :src="data.appStore.icon" alt="" />
    <h1 class="text-6xl font-bold mt-16">{{ data.appStore.title }}</h1>
    <h3 class="mt-6 text-xl text-gray-500">by {{ data.appStore.developer }}</h3>

    <div class="mt-6 grid grid-flow-col place-items-center" style="grid-auto-columns: 1fr">
      <a class="" :href="data.appStore.url" target="_blank">
        <ElementAppleBlack class="w-auto h-14"> </ElementAppleBlack>
      </a>
      <a v-if="data.playStore.url" :href="data.playStore.url" target="_blank">
        <ElementPlayStore class="w-auto h-14"> </ElementPlayStore>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
