import css from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useState, useRef } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.detailPageContainer}>
      {loading && <Loader />}
      {error && <b>Error</b>}

      <Link className={css.backBtn} to={backLinkURLRef.current}>
        Go back
      </Link>

      {movie && (
        <div className={css.movieInfoContainer}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className={css.containerInfo}>
            <h1 className={css.title}>{movie.title}</h1>

            <p className={css.userScore}>
              User score: {(movie.vote_average * 10).toFixed() + "%"}
            </p>
            <h2 className={css.infoTitle}>Release date</h2>
            <p className={css.release}>
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <h2 className={css.infoTitle}>Overview</h2>
            <p className={css.info}>{movie.overview}</p>

            <h2 className={css.infoTitle}>Genres</h2>
            <ul className={css.list}>
              {movie.genres.map((genre) => (
                <li className={css.info} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className={css.addInfo}>
        <h2 className={css.infoTitle}>Additional information</h2>

        <div className={css.navLink}>
          <NavLink className={getNavLinkClass} to="cast">
            Cast
          </NavLink>
          <NavLink className={getNavLinkClass} to="reviews">
            Review
          </NavLink>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
