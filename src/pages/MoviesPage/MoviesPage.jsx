import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { fetchMoviesByName } from "../../movies-api";
import { useState, useEffect } from "react";
// useMemo
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
// import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesByName(query);

        if (data.length === 0) {
          toast.error("No movies!");
        } else {
          setMovies((prevArticles) => {
            return [...prevArticles, ...data];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <b>Error</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
