import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../../movies-api";
import { useState, useEffect } from "react";
import css from "./HomePage.module.css"


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
    <div>
      <p className={css.title}>Trending now</p>
      {loading && <b>Loading payments...</b>}
      {error && <b>Error</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
