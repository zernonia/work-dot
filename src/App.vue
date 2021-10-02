<template>
  <div class="min-w-screen min-h-screen flex flex-col w-full">
    <div class="flex justify-center border-b border-dark-100">
      <h1 class="text-3xl font-bold py-3">Work .</h1>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  @apply bg-dark-400 text-white;
}
</style>
