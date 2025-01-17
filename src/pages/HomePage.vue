<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Anime } from "@/types/anime";
import Header from "@/components/common/Header.vue";
import SingleSlider from "@/components/common/slider/Single.vue";
import MultipleSlider from "@/components/common/slider/Multiple.vue";

const topAiring = ref<Anime[]>([]);
const mostPopular = ref<Anime[]>([]);

onMounted(async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
  const data = await response.json();
  topAiring.value = data.data.slice(0, 4); // Top 4 Airing
  mostPopular.value = data.data.slice(4, 8); // Most Popular
});
</script>
<template>
  <Header />
  <div class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12">
        <SingleSlider :featuredAnimes="topAiring" />
      </div>
      <div class="col-span-12">
        <MultipleSlider :featuredAnimes="mostPopular" />
      </div>
    </div>
  </div>
</template>
