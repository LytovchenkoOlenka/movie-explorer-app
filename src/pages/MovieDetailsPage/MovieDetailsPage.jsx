import css from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log("error");
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      <img src="https://image.tmdb.org/t/p/w500/{imgId}" alt="" />
      <div className={css.containerInfo}>
        <h1>{movie.title}</h1>
        <p></p>
        <h2>
          Overview
          <p>
            {movie.overview} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Magnam ipsam quas modi tempora explicabo alias laborum aliquid
            officia recusandae, accusantium corporis tenetur quod dolores fugit
            mollitia dicta natus. Incidunt, architecto?
          </p>
        </h2>
        <h2>
          Genres
          <p>{movie.genre_ids}Lorem ipsum dolor sit</p>
        </h2>
      </div>
    </div>
  );
}
