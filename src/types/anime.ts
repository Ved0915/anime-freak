export interface Anime {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  synopsis: string;
  rating: string | null;  // Rating of the anime
  genres: { name: string }[];  // Genres as an array of objects
  score: number | null;  // User rating score (e.g., 8.5)
  type: string;  // Type of anime (e.g., TV, Movie)
  episodes: number | null;  // Number of episodes
  status: string;  // Status (e.g., Finished Airing)
  aired: { from: string; to: string; string: string };  // Aired date range
  studios: string[];  // Studios involved in production
  source: string;  // Original source (e.g., Manga, Light Novel)
  duration: string;  // Average episode duration
  season: string | null;  // Season of airing (e.g., Summer 2020)
  rank: number | null;  // Ranking of the anime
  popularity: number | null;  // Popularity score
  favorites: number | null;  // Number of users who favorited
  broadcast: { day: string; time: string; timezone: string; string: string };  // Broadcast info
}
