import axios from "axios";

// export const fetchWithCredentials = axios.create({
//
//   baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
// });

// export const fetchWithoutCredentials = axios.create({
export const customFetch = axios.create({
  // baseURL: "https://ecommerce-api-9t8b.onrender.com/api/v1",
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
});

customFetch.defaults.withCredentials = true;
