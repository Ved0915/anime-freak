<template>
  <div
    class="relative group bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <!-- Image Section -->
    <img
      :src="anime.images.jpg.image_url"
      :alt="anime.title"
      class="w-full h-48 object-cover"
    />

    <!-- Content Section -->
    <div class="p-4">
      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-800 truncate">{{ anime.title }}</h3>

      <!-- Rating, Viewership, and Episodes Section -->
      <div class="text-sm text-gray-600 mt-2 space-y-1">
        <p><strong>Rating:</strong> {{ anime.rating }}</p>
        <p><strong>Viewers:</strong> {{ anime.favorites }}</p>
        <p><strong>Episodes:</strong> {{ anime.episodes }}</p>
      </div>

      <!-- View Details Button -->
      <button
        class="mt-3 w-full py-2 px-4 bg-[#008899] text-white font-semibold rounded-md hover:bg-[#007788] transition duration-300"
        @click="goToDetails"
      >
        View Details
      </button>
    </div>

    <!-- Hover Popup with Details -->
    <div
      class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"
    >
      <div
        class="bg-white p-4 rounded-lg shadow-xl space-y-2 text-center max-w-xs w-full"
      >
        <p class="text-lg font-semibold text-gray-800">{{ anime.title }}</p>
        <p class="text-sm text-gray-600">Rating: {{ anime.rating }}</p>
        <p class="text-sm text-gray-600">Episodes: {{ anime.episodes }}</p>
        <button
          class="py-1 px-3 bg-[#008899] text-white rounded-lg hover:bg-[#007788] transition duration-300 text-sm"
          @click="goToDetails"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Anime } from "@/types/anime";

// Define anime prop
const { anime } = defineProps<{ anime: Anime }>();

// Method to navigate to the detail page
const goToDetails = () => {
  // Navigate to the details page (you can use vue-router here instead of window.location.href)
  window.location.href = `/anime/${anime.mal_id}`;
};
</script>
