<template>
  <div class="relative w-full">
    <!-- Swiper container -->
    <swiper
      :slides-per-view="3"
      :space-between="20"
      loop
      autoplay
      pagination
      navigation
      class="swiper-container"
      ref="multipleSwiper"
    >
      <swiper-slide v-for="(anime, index) in featuredAnimes" :key="anime.mal_id">
        <div class="relative w-full h-48 md:h-64">
          <img
            :src="anime.images.jpg.large_image_url"
            :alt="anime.title"
            class="object-cover w-full h-full"
          />
          <div class="absolute bottom-4 left-4 text-white font-bold text-xl md:text-2xl">
            {{ anime.title }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { Anime } from "@/types/anime";

const featuredAnimes = ref<Anime[]>([]);

onMounted(async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
  const data = await response.json();
  featuredAnimes.value = data.data
});
</script>
