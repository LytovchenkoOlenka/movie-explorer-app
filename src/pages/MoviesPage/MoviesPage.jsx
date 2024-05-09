import { fetchTrendingMovies } from "../../movies-api";
import { useState, useEffect } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <p>
        <b>MoviesPage</b>
      </p>
      {loading && <b>Loading payments...</b>}
    </div>
  );
}

// <OwnerFilter value={ownerParam} onFilter={changeOwnerFilter} />;
// {
//   loading && <b>Loading payments...</b>;
// }
// {
//   payments.length > 0 && <PaymentList payments={filteredPayments} />;
// }
