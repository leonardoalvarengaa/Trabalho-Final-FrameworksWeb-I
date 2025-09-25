// src/config.js  -> lê exatamente os nomes do seu .env
const TMDB = {
  BASE_URL: "https://api.themoviedb.org/3",
  IMG_BASE:
    (typeof process !== "undefined" && process.env?.REACT_APP_TMDB_IMG_BASE) ||
    "https://image.tmdb.org/t/p",
  LANG:
    (typeof process !== "undefined" && process.env?.REACT_APP_TMDB_LANG) ||
    "pt-BR",

  // v4 bearer (o seu .env usa este nome)
  TOKEN:
    (typeof process !== "undefined" && process.env?.REACT_APP_TMDB_V4_TOKEN) ||
    "",

  // v3 api_key (fallback)
  API_KEY:
    (typeof process !== "undefined" && process.env?.REACT_APP_TMDB_API_KEY) ||
    "",
};

if (!TMDB.TOKEN && !TMDB.API_KEY) {
  console.warn(
    "Sem credenciais TMDB. Defina REACT_APP_TMDB_V4_TOKEN (v4) ou REACT_APP_TMDB_API_KEY (v3) no .env e reinicie."
  );
} else {
  console.log("Auth TMDB via", TMDB.TOKEN ? "Bearer v4" : "api_key v3");
}

export default TMDB;
