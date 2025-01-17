<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800">Most Favorited Anime</h2>
    <AnimeList :animes="mostFavoritedAnimes" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AnimeList from './List/AnimeList.vue'
import type { Anime } from '~/types'

const mostFavoritedAnimes = ref<Anime[]>([])

onMounted(async () => {
  const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=favorite&limit=12')
  const data = await response.json()
  mostFavoritedAnimes.value = data.data
})
</script>

