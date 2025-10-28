import axios from "axios";

const fetchWithCredentials = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
});

fetchWithCredentials.defaults.withCredentials = true;

export default fetchWithCredentials;
