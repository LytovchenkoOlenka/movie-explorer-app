import css from "./MovieMainInfo.module.css";

export default function MovieMainInfo({ movie }) {
  return (
    <>
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
    </>
  );
}
