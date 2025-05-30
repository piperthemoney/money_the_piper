import axios from "axios";
const BASE_URL = import.meta.env.VITE_PIPER_API;

// Create an Axios instance
axios.defaults.baseURL = "/api";
// const token = localStorage.getItem("piper-token");
const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.withCredentials = true;

export { setAuthToken };
export default axios;
