<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Reactive variables
const sidebarVisible = ref(false);
const searchBarVisible = ref(false);
const headerScrolled = ref(false);

// Methods
function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

function toggleSearchBar() {
  searchBarVisible.value = !searchBarVisible.value;
}

function handleScroll() {
  headerScrolled.value = window.scrollY > 0;
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header>
    <!-- Main Header -->
    <div
      id="header"
      :class="[
        'bg-transparent text-white fixed top-0 left-0 right-0 z-50',
        headerScrolled ? 'backdrop-blur-lg bg-[rgba(32,31,49,.8)]' : '',
      ]"
    >
      <div class="container flex items-center p-4">
        <!-- Mobile Menu Icon (Always Visible) -->
        <div id="mobile_menu" class="cursor-pointer" @click="toggleSidebar">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-2xl" />
        </div>

        <!-- Logo -->
        <router-link to="/" id="logo" class="flex items-center">
          <div class="ml-2">
            <span class="font-semibold">Anime</span>
            <span class="font-medium text-2xl">Freak</span>
          </div>
        </router-link>

        <!-- Search Bar (Desktop) -->
        <div
          id="search"
          class="relative flex mx-4"
          :class="{
            block: searchBarVisible,
            hidden: !searchBarVisible,
            'lg:flex': !searchBarVisible,
          }"
        >
          <form action="/search" autocomplete="off" class="flex items-center">
            <input
              type="text"
              class="form-control search-input px-4 py-2 rounded-md border border-gray-600 text-black flex-1 bord"
              name="keyword"
              placeholder="Search anime..."
              required
            />
            <button
              type="submit"
              class="absolute top-1/2 transform -translate-y-1/2 right-3 text-black"
            >
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </form>
        </div>

        <!-- Header Group (Join now section) -->
        <div class="hidden lg:flex items-center space-x-4">
          <div class="zrg-title">
            <span class="text-lg font-semibold">Join now</span>
            <span class="block font-medium">HiAnime Group</span>
          </div>
          <div class="zrg-list flex items-center space-x-2">
            <a href="https://discord.gg/hianime" target="_blank" class="text-blue-500">
              <font-awesome-icon :icon="['fab', 'discord']" class="text-2xl" />
            </a>
            <a href="https://tinyurl.com/2y2yy3ba" target="_blank" class="text-blue-500">
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
            </a>
            <a
              href="https://new.reddit.com/r/HiAnimeZone/"
              target="_blank"
              class="text-blue-500"
            >
              <font-awesome-icon :icon="['fab', 'reddit-alien']" class="text-2xl" />
            </a>
          </div>
        </div>

        <!-- Header Settings -->
        <div class="flex items-center space-x-4">
          <router-link
            to="/watch2gether"
            class="flex items-center space-x-2 text-white"
            data-toggle="tooltip"
            title="Watch with friends"
          >
            <font-awesome-icon :icon="['fas', 'user']" class="text-xl" />
            <div class="name text-sm">Watch2gether</div>
          </router-link>
          <router-link
            to="/random"
            class="flex items-center space-x-2 text-white"
            data-toggle="tooltip"
            title="Watch random anime"
          >
            <font-awesome-icon :icon="['fas', 'shuffle']" />
            <div class="name text-sm">Random</div>
          </router-link>
          <div
            class="flex items-center space-x-2 text-white"
            data-toggle="tooltip"
            title="Select language of anime name to display."
          >
            <div class="select-anime-name">
              <span class="en">EN</span><span class="jp">JP</span>
            </div>
            <div class="name text-sm">Anime Name</div>
          </div>
          <router-link
            to="/community/board"
            class="flex items-center space-x-2 text-white"
            data-toggle="tooltip"
            title="HiAnime Connect"
          >
            <font-awesome-icon :icon="['far', 'comments']" class="text-xl" />
            <div class="name text-sm">Community</div>
          </router-link>
        </div>

        <!-- User Avatar and Notifications -->
        <div class="flex items-center space-x-4">
          <div class="relative">
            <div class="hr-notifications cursor-pointer">
              <span
                class="number total-notify bg-red-600 text-white px-2 py-1 rounded-full absolute top-0 right-0"
                >9+</span
              >
              <font-awesome-icon :icon="['fas', 'bell']" class="text-xl" />
            </div>
          </div>

          <!-- User Menu -->
          <div id="user-slot" class="relative">
            <div class="dropdown">
              <div
                class="btn-user-avatar cursor-pointer"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-controls="user_menu"
              >
                <div class="profile-avatar w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-08.jpeg"
                    alt="MonkeyDLuffy"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div
                id="user_menu"
                class="dropdown-menu dropdown-menu-right hidden absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg"
              >
                <div class="dropdown-item user-detail">
                  <div class="name"><strong>MonkeyDLuffy</strong></div>
                  <div class="mail">4iiijm@neko2.net</div>
                </div>
                <router-link
                  to="/user/profile"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="user" class="mr-2" />Profile</router-link
                >
                <router-link
                  to="/user/continue-watching"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="history" class="mr-2" />Continue
                  Watching</router-link
                >
                <router-link
                  to="/user/watch-list"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="heart" class="mr-2" />Watch List</router-link
                >
                <router-link
                  to="/user/notification"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="bell" class="mr-2" />Notification</router-link
                >
                <router-link
                  to="/user/mal"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="file-import" class="mr-2" />MAL Import /
                  Export</router-link
                >
                <router-link
                  to="/user/settings"
                  class="dropdown-item text-gray-600 hover:bg-gray-200"
                  ><font-awesome-icon icon="cog" class="mr-2" />Settings</router-link
                >
                <router-link
                  to="/user/logout"
                  class="dropdown-item text-gray-600 hover:bg-gray-200 text-right"
                  ><font-awesome-icon
                    icon="sign-out-alt"
                    class="ml-2 mr-1"
                  />Logout</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar Menu (Visible on all devices) -->
    <div
      id="sidebar"
      class="relative inset-0 bg-[rgba(32,31,49,.8)] backdrop-blur-[10px] z-50 transition-opacity duration-300"
      v-show="sidebarVisible"
      @click="toggleSidebar"
    >
      <div
        class="absolute inset-0 min-h-full w-72 bg-[rgba(255,255,255,.1)] bg-opacity-50"
      >
        <div class="flex p-6">
          <button class="text-white text-sm font-semibold">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            <span class="ml-2">Close Menu</span>
          </button>
        </div>
        <ul
          class="list-none w-full flex flex-col items-start min-h-full space-y-4 font-bold"
        >
          <li class="border-b border-gray-600 w-full p-3">
            <router-link to="/home" class="text-white py-2 hover:underline">
              Home
            </router-link>
          </li>
          <li class="border-b border-gray-600 w-full p-3">
            <router-link to="/movie" class="text-white py-2 hover:underline">
              Movies
            </router-link>
          </li>
          <li class="border-b border-gray-600 w-full p-3">
            <router-link to="/tv" class="text-white py-2 hover:underline">
              TV Series
            </router-link>
          </li>
          <li class="border-b border-gray-600 w-full p-3">
            <router-link to="/most-popular" class="text-white py-2 hover:underline">
              Most Popular
            </router-link>
          </li>
          <li class="border-b border-gray-600 w-full p-3">
            <router-link to="/community/board" class="text-white py-2 hover:underline">
              Community
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Full-screen backdrop with blur */
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
