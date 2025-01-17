import { defineStore } from 'pinia';

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    animeList: [] as any[],
  }),
  actions: {
    async fetchAnimeList() {
      const response = await fetch('https://api.jikan.moe/v4/anime');
      const data = await response.json();
      this.animeList = data.data;
    },
  },
});
