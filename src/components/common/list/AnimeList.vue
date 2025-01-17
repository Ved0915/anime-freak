<script setup lang="ts">
import { defineProps } from "vue";
import type { Anime } from "@/types/anime";
import AnimeCard from "@/components/common/list/AnimeCard.vue";

defineProps<{
  animeList: Anime[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <!-- Loop through anime list and pass each anime object to AnimeCard -->
    <AnimeCard v-for="anime in animeList" :key="anime.mal_id" :anime="anime" />
  </div>
</template>
