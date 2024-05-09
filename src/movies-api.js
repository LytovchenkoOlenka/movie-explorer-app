import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTkzMWY0NTc3ZjRhODEwZWIwODExZmMyNDhiNjg2ZiIsInN1YiI6IjY2M2M3YjI5OWQ3ZTBjZjhjNjBlNTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bj0B_b2TiLqOfWC_oH4PJadRTMjd-gWgmI9h2-rXJko",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchMoviesByName = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  console.log(movieId);
  const response = await axios.get(`/search/movie/${movieId}`, options);
  return response.data;
};
