import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTkzMWY0NTc3ZjRhODEwZWIwODExZmMyNDhiNjg2ZiIsInN1YiI6IjY2M2M3YjI5OWQ3ZTBjZjhjNjBlNTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bj0B_b2TiLqOfWC_oH4PJadRTMjd-gWgmI9h2-rXJko",
  },
  language: "en-US",
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  // const response = await axios.get("/trending/tv/day", options);
  return response.data.results;
};

// export const fetchGenresList = async () => {
//   const response = await axios.get("/genre/movie/list", options);
//   return response.data;
// };

export const fetchTopRatedMovies = async () => {
  const response = await axios.get("/movie/top_rated", options);
  return response.data.results;
};

export const fetchUpcomingMovies = async () => {
  const response = await axios.get("/movie/upcoming", options);
  return response.data.results;
};

export const fetchMoviesByName = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const fetchCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchReview = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};
