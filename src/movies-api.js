import axios from "axios";

axios.defaults.baseURL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTkzMWY0NTc3ZjRhODEwZWIwODExZmMyNDhiNjg2ZiIsInN1YiI6IjY2M2M3YjI5OWQ3ZTBjZjhjNjBlNTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bj0B_b2TiLqOfWC_oH4PJadRTMjd-gWgmI9h2-rXJko",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/movies", { options });
  return response.data;
};

//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// export const getPayments = async () => {
//   const response = await axios.get("/payments");
//   return response.data;
// };

// export const getPaymentById = async (paymentId) => {
//   const response = await axios.get(`/payments/${paymentId}`);
//   return response.data;
// };
