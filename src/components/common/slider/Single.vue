<template>
  <div class="relative w-full">
    <!-- Swiper container with Pagination -->
    <swiper
      :pagination="paginationOptions"
      :modules="swiperModules"
      class="swiper-container"
      :slides-per-view="1"
      loop
      autoplay
    >
      <swiper-slide v-for="(anime, index) in featuredAnimeList" :key="anime.mal_id">
        <div class="relative w-full h-64 md:h-80">
          <img
            :src="anime.images.jpg.large_image_url"
            :alt="anime.title"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
          <div class="absolute bottom-4 left-4 text-white font-bold text-xl md:text-2xl">
            {{ anime.title }}
          </div>
          <div class="absolute bottom-12 left-4 text-white text-sm md:text-base">
            Rating: {{ anime.rating }} | Genres:
            {{ anime.genres.map((g) => g.name).join(", ") }}
          </div>
          <div class="absolute bottom-20 left-4 text-white text-sm md:text-base">
            {{ anime.synopsis }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules"; // Import the pagination module from swiper
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import type { Anime } from "@/types/anime";

const featuredAnimeList = ref<Anime[]>([]);

onMounted(async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
  const data = await response.json();
  featuredAnimeList.value = data.data.slice(0, 5); // Fetch top 5 for the featured slider
});

const paginationOptions = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return `<span class="${className}">${index + 1}</span>`;
  },
};

const swiperModules = [Pagination]; // Ensure Pagination is in the modules array
</script>
