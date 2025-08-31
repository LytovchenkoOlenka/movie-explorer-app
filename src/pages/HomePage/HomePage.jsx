import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";

import { fetchTrendingMovies, fetchUpcomingMovies } from "../../movies-api";
import { useState, useEffect } from "react";

import css from "./HomePage.module.css";
import MovieSlider from "../../components/MovieSlider/MovieSlider";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(upcomingMovies);

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

  useEffect(() => {
    async function getUpcomingMovies() {
      try {
        setLoading(true);
        const data = await fetchUpcomingMovies();
        // console.log(data);
        setUpcomingMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getUpcomingMovies();
  }, []);

  return (
    <div className={css.homePageContainer}>
      {loading && <Loader />}
      {error && <b>Error</b>}

      <div>
        <h2 className={css.title}>Upcoming Movies</h2>
        <div className={css.sliderWrapper}>
          {upcomingMovies.length > 0 && <MovieSlider movies={upcomingMovies} />}
        </div>
      </div>

      <div>
        <h2 className={css.title}>Trending now</h2>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
    </div>
  );
}
