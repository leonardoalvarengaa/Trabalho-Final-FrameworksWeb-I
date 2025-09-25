import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: import.meta.env.VITE_TMDB_LANG || "pt-BR",
  },
});

export default api;
