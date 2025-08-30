import { fetchCast } from "../../movies-api";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <b>Error</b>}

      {cast && (
        <div className={css.castContainer}>
          <ul className={css.castList}>
            {cast.map((actor) => (
              <li className={css.item} key={actor.id}>
                {actor.profile_path ? (
                  <img
                    className={css.img}
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <div className={css.imgPlaceholder}>👤</div>
                )}
                <div className={css.info}>
                  <p className={css.actor}>{actor.name}</p>
                  <p className={css.character}>Character: {actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
