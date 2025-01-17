<template>
  <header class="bg-[#121212] text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo Section -->
      <div class="text-2xl font-bold text-[#008899] cursor-pointer">AnimeSite</div>

      <!-- Navigation Section for Desktop -->
      <nav class="hidden md:flex space-x-8">
        <router-link to="/" class="text-sm hover:text-[#008899] transition duration-200"
          >Home</router-link
        >
        <router-link
          to="/top"
          class="text-sm hover:text-[#008899] transition duration-200"
          >Top Anime</router-link
        >
        <router-link
          to="/categories"
          class="text-sm hover:text-[#008899] transition duration-200"
          >Categories</router-link
        >
        <router-link
          to="/favorites"
          class="text-sm hover:text-[#008899] transition duration-200"
          >Most Favorite</router-link
        >
      </nav>

      <!-- Mobile Menu Icon (Hamburger) -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-3xl">
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden absolute left-0 top-16 w-full bg-[#121212] text-white py-4 px-6 space-y-4"
    >
      <router-link to="/" class="block text-sm hover:text-[#008899]">Home</router-link>
      <router-link to="/top" class="block text-sm hover:text-[#008899]"
        >Top Anime</router-link
      >
      <router-link to="/categories" class="block text-sm hover:text-[#008899]"
        >Categories</router-link
      >
      <router-link to="/favorites" class="block text-sm hover:text-[#008899]"
        >Most Favorite</router-link
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
