import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { fetchMoviesByName } from "../../movies-api";
import { useState, useEffect } from "react";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
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
      <SearchBar onSubmit={handleSearch} />
      {loading && <b>Loading payments...</b>}
      {error && <b>Error</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
