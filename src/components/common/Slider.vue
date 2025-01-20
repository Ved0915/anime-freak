<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import type { Anime } from "@/types/anime";

const props = defineProps({
  featuredAnimes: {
    type: Array as () => Anime[],
    required: true,
  },
  slidesPerView: {
    type: Number,
    default: 1,
  },
});

const swiperInstance = ref(null);
const autoplayOptions =
  props.slidesPerView === 1 ? { delay: 3000, disableOnInteraction: false } : false;

const swiperModules = [Autoplay, Navigation];

onMounted(() => {
  if (swiperInstance.value) {
    console.log("Swiper instance initialized!");
  }
});
</script>
<template>
  <div class="relative w-full">
    <!-- Swiper container with built-in navigation buttons -->
    <swiper
      :modules="swiperModules"
      class="swiper-container"
      :slides-per-view="slidesPerView"
      loop
      :autoplay="autoplayOptions"
      navigation
      ref="swiperInstance"
    >
      <swiper-slide v-for="(anime, index) in featuredAnimes" :key="anime.mal_id">
        <div class="relative w-full" :class="{ 'h-screen md:h-[60vh]': slidesPerView === 1, 'h-[40vh]': slidesPerView !== 1 }">
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
