import { fetchReview } from "../../movies-api";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReview() {
      try {
        setLoading(true);
        const data = await fetchReview(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReview();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <b>Error</b>}

      {reviews && (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li className={css.reviewItem} key={review.id}>
              <p className={css.author}>Author: {review.author}</p>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
