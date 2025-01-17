<template>
  <div class="flex justify-center items-center mt-8">
    <button
      @click="prevPage"
      :disabled="currentPage <= 1"
      class="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
    >
      Prev
    </button>
    <span class="mx-4 text-lg">Page {{ currentPage }}</span>
    <button
      @click="nextPage"
      :disabled="currentPage >= totalPages"
      class="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const currentPage = ref(1);
const totalPages = ref(10); // Example total pages, update based on API data

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
