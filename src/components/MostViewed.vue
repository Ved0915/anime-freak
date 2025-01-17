<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800">Most Viewed</h2>
    <AnimeList :animeList="viewedAnime" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AnimeList from './List/AnimeList.vue';

const viewedAnime = ref([]);

onMounted(async () => {
  // Fetch Most Viewed Anime (sorted by popularity)
  const viewedResponse = await fetch('https://api.jikan.moe/v4/anime?sort=popularity');
  const viewedData = await viewedResponse.json();
  viewedAnime.value = viewedData.data.slice(0, 5); // Get most viewed
});
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
