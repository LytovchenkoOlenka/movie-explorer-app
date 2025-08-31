import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import css from "./MovieSlider.module.css";

export default function MovieSlider({ movies, prevEl, nextEl }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      navigation={{
        prevEl: prevEl,
        nextEl: nextEl,
      }}
      className={css.mySwiper}
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className={css.swiperSlide}>
          <Link className={css.linkMovie} to={`/movies/${movie.id}`}>
            {movie.backdrop_path ? (
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className={css.posterPlaceholder}>🎬</div>
            )}
            <div className={css.titleWrapper}>
              <p className={css.title}>{movie.title}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// {/* <ul className={css.sliderContainer}>
//   {movies.map((movie) => (
//     <li className={css.sliderItem} key={movie.id}>
//       <Link to={`/movies/${movie.id}`}>
//         {/* Тут буде картка фільму, можливо, варто створити
//             окремий компонент MovieCard, щоб перевикористовувати його
//             і в MovieList, і в MovieSlider */}
//         {movie.backdrop_path ? (
//           <img
//             className={css.img}
//             src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//             alt={movie.title}
//           />
//         ) : (
//           <div className={css.posterPlaceholder}>🎬</div>
//         )}
//         <p>{movie.title}</p>
//       </Link>
//     </li>
//   ))}
// </ul> */}
