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
    <div>
      {loading && <Loader />}
      {error && <b>Error</b>}
      {cast && (
        <div className={css.container}>
          <ul className={css.list}>
            {cast.map((actor) => (
              <li className={css.item} key={actor.id}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt=""
                />
                <p className={css.actor}>{actor.name}</p>
                <p>Haracter: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
