<template>
  <div class="star-rating">
    <span v-for="n in max">&star;</span>
    <div class="star-rating__current" :style="{ width: getRating + '%' }">
      <span v-for="n in max">&starf;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const p = defineProps({
  max: {
    type: Number,
    default: 5,
  },
  current: {
    type: Number,
    required: true,
  },
})
const getRating = computed(() => (p.current / p.max) * 100)
</script>
