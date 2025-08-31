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
import clsx from "clsx";
import Loader from "../../components/Loader/Loader";
import MovieMainInfo from "../../components/MovieMainInfo/MovieMainInfo";

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <b>Error fetching movie details. Please try again.</b>;
  }

  return (
    movie && (
      <div className={css.detailPageContainer}>
        {loading && <Loader />}
        {error && <b>Error</b>}

        <Link className={css.backBtn} to={backLinkURLRef.current}>
          Go back
        </Link>

        <MovieMainInfo movie={movie} />

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
          <div className={css.outletContainer}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    )
  );
}
