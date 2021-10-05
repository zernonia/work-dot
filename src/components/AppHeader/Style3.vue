<template>
  <div class="flex my-24 items-center space-x-12">
    <img class="w-48 h-48 rounded-5xl shadow-xl" :src="data.appStore.icon" alt="" />
    <div>
      <h1 class="text-6xl font-bold">{{ data.appStore.title }}</h1>
      <h3 class="mt-4 text-xl text-gray-500">by {{ data.appStore.developer }}</h3>

      <div class="mt-4 grid grid-flow-col" style="grid-auto-columns: 1fr">
        <a class="" :href="data.appStore.url" target="_blank">
          <ElementAppleBlack class="w-auto h-14"> </ElementAppleBlack>
        </a>
        <a v-if="data.playStore.url" :href="data.playStore.url" target="_blank">
          <ElementPlayStore class="w-auto h-14"> </ElementPlayStore>
        </a>
      </div>
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
