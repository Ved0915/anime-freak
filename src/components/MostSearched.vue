<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800">Most Searched</h2>
    <AnimeList :animeList="searchedAnime" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AnimeList from './List/AnimeList.vue';

const searchedAnime = ref([]);

onMounted(async () => {
  // Fetch Most Searched Anime (sorted by trending)
  const searchedResponse = await fetch('https://api.jikan.moe/v4/anime?sort=trending');
  const searchedData = await searchedResponse.json();
  searchedAnime.value = searchedData.data.slice(0, 5); // Get most searched
});
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
