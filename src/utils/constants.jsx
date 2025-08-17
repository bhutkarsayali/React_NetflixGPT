import logo from "./../assets/logo7.png";
import wallpaper from "./../assets/bg-wallpaper.jpg";
import user from "./../assets/user-icon.png";
import avatar from "./../assets/avatar.jpg";

export const BACKGROUND_IMAGE_URL = wallpaper;

export const NETFLIX_LOGO_URL = logo;
export const NETFLIX_USER_ICON = user;

export const USER_PHOTO_URL = avatar;

// TMDB
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhmY2RiMDAzOGU3YjY2Njg1Y2FiOGY3MzFmYzVlZiIsIm5iZiI6MTc1NTI4MDcwMi4wNSwic3ViIjoiNjg5Zjc1M2VlMjUyOTk1ZDhjNzU3OTQzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EYZEyNMuwq8CIwLyd8M_cR_vR8kxavRw39sVp4XR7g0",
  },
};

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const TOPRATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

// For Multilinguals
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en-US",
    name: "English",
  },
  {
    identifier: "hi-IN",
    name: "हिन्दी",
  },
  {
    identifier: "es-ES",
    name: "Español",
  },
];

// GPT API-- DO NOT EXPOSE THIS KEY EVER
export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
