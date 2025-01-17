<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-md mb-6 space-y-4">
    <div>
      <label for="genre" class="block text-gray-700 font-medium">Select Genre</label>
      <select
        id="genre"
        v-model="selectedGenre"
        @change="applyFilter"
        class="w-full p-2 mt-2 border rounded-md"
      >
        <option value="">All</option>
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>
    </div>

    <RatingSlider v-model="selectedRating" @change="applyFilter" />

    <div>
      <label for="status" class="block text-gray-700 font-medium">Select Status</label>
      <select
        id="status"
        v-model="selectedStatus"
        @change="applyFilter"
        class="w-full p-2 mt-2 border rounded-md"
      >
        <option value="">All</option>
        <option value="airing">Airing</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import RatingSlider from "./RatingSlider.vue";

const emit = defineEmits();
const selectedGenre = ref("");
const selectedRating = ref(0);
const selectedStatus = ref("");
const genres = ref(["Action", "Adventure", "Fantasy", "Romance", "Comedy", "Drama"]);

const applyFilter = () => {
  emit("filter", {
    genre: selectedGenre.value,
    rating: selectedRating.value,
    status: selectedStatus.value,
  });
};
</script>
