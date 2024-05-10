import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { fetchMoviesByName } from "../../movies-api";
import { useState, useEffect, useMemo } from "react";
//
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const userParam = searchParams.get("query") ?? "";

  const changeFilter = (newFilter) => {
    searchParams.set("query", newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (userParam === "") {
      return;
    }

    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesByName(userParam);

        if (data.length === 0) {
          toast.error("No movies!");
        } else {
          setMovies(data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [userParam]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(userParam.toLowerCase())
    );
  }, [userParam, movies]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={changeFilter} />
      {loading && <Loader />}
      {error && <b>Error</b>}
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
