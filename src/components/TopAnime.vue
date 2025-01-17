<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Anime } from "@/types/anime.ts";
import AnimeList from "@/components/List/AnimeList.vue";

const topAnimeList = ref<Anime[]>([]);

onMounted(async () => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=12");
    const { data } = await response.json();
    topAnimeList.value = data;
  } catch (error) {
    console.error("Error fetching top anime:", error);
  }
});
</script>

<template>
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-gray-800 mb-6">Top Anime</h2>
    <AnimeList :animeList="topAnimeList" />
  </div>
</template>
