import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";

import { fetchTrendingMovies } from "../../movies-api";
import { useState, useEffect } from "react";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div className={css.homePageContainer}>
      <h2 className={css.title}>Trending now</h2>
      {loading && <Loader />}
      {error && <b>Error</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
