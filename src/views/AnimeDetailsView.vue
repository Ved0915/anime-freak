<template>
  <div class="anime-details">
    <h1>{{ anime.title }}</h1>
    <img :src="anime.image_url" alt="anime.title" />
    <p>{{ anime.synopsis }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Anime {
  title: string;
  image_url: string;
  synopsis: string;
}

const anime = ref<Anime>({ title: "", image_url: "", synopsis: "" });
const route = useRoute();

onMounted(async () => {
  const animeId = route.params.id; // Get the anime ID from the route
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
  const data = await response.json();
  anime.value = data.data;
});
</script>
