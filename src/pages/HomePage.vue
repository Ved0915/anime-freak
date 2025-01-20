<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Anime } from "@/types/anime";
import Header from "@/components/common/Header.vue";
import Slider from "@/components/common/Slider.vue";

// Anime data arrays for both categories
const topAiring = ref<Anime[]>([]);
const mostPopular = ref<Anime[]>([]);

onMounted(async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
  const data = await response.json();

  // Assigning the data for both categories
  topAiring.value = data.data; // Top airing anime
  mostPopular.value = data.data; // Most popular anime
});
</script>

<template>
  <Header />
  <div class="flew justify-center align-center">
    <div class="grid grid-cols-12 gap-6">
      <!-- Single Slide View for Top Airing -->
      <div class="col-span-12">
        <Slider :featuredAnimes="topAiring" :slidesPerView="1" />
      </div>

      <!-- Multiple Slide View for Most Popular -->
      <div class="col-span-12">
        <Slider :featuredAnimes="mostPopular" :slidesPerView="6" />
      </div>
    </div>
  </div>
</template>
